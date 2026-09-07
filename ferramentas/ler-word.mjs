/* ==========================================================================
   LER-WORD — extrai o texto de arquivos .docx para Markdown

   Por que escrever isto em vez de instalar mammoth ou docx-parser: um .docx
   é um zip contendo XML. Ler zip e ler XML são coisas que o Node já faz. Uma
   dependência a mais no package.json de um projeto que precisa durar décadas
   custa mais do que estas duzentas linhas.

   O que este script NÃO faz, de propósito: virar verbete sozinho. Ele produz
   Markdown fiel ao documento, com as notas de rodapé e os links preservados.
   Transformar isso em src/dados/documentos/*.js é trabalho editorial —
   separar o que está documentado do que ainda precisa de fonte — e disso
   nenhum script salva ninguém.

   Uso:
     npm run word                              (lê tudo em originais/word/)
     node ferramentas/ler-word.mjs arq.docx    (lê um só, imprime na tela)

   Saída: originais/word/<mesmo-nome>.md
   ========================================================================== */

import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'node:fs';
import { inflateRawSync } from 'node:zlib';
import { basename, extname, join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const ENTRADA = join(RAIZ, 'originais', 'word');

/* --- Zip -----------------------------------------------------------------
   Lê o diretório central no fim do arquivo, que é a única parte do zip em
   que se pode confiar: os cabeçalhos locais podem mentir sobre o tamanho
   quando o arquivo foi escrito em fluxo, e o Word escreve em fluxo. */
function abrirZip(buffer) {
  /* Assinatura do fim do diretório central (PK\5\6). Procurada de trás para
     frente porque pode haver comentário depois dela. */
  let fim = -1;
  for (let i = buffer.length - 22; i >= 0 && i >= buffer.length - 22 - 65535; i--) {
    if (buffer.readUInt32LE(i) === 0x06054b50) { fim = i; break; }
  }
  if (fim < 0) throw new Error('não parece um .docx (fim do diretório central não encontrado)');

  const quantos = buffer.readUInt16LE(fim + 10);
  let p = buffer.readUInt32LE(fim + 16);
  const arquivos = new Map();

  for (let n = 0; n < quantos; n++) {
    if (buffer.readUInt32LE(p) !== 0x02014b50) throw new Error('diretório central corrompido');
    const metodo   = buffer.readUInt16LE(p + 10);
    const compri   = buffer.readUInt32LE(p + 20);
    const nomeLen  = buffer.readUInt16LE(p + 28);
    const extraLen = buffer.readUInt16LE(p + 30);
    const comeLen  = buffer.readUInt16LE(p + 32);
    const offset   = buffer.readUInt32LE(p + 42);
    /* A norma do zip manda separar com barra normal, e o Word obedece. Mas
       um documento reempacotado por outra ferramenta (Compress-Archive do
       Windows, por exemplo) chega com contrabarra, e aí nada é encontrado. */
    const nome = buffer.toString('utf8', p + 46, p + 46 + nomeLen).replace(/\\/g, '/');

    /* O cabeçalho local tem tamanhos próprios de nome e extra, que podem
       diferir dos do diretório central. Só eles dizem onde o dado começa. */
    const nomeLocal  = buffer.readUInt16LE(offset + 26);
    const extraLocal = buffer.readUInt16LE(offset + 28);
    const inicio = offset + 30 + nomeLocal + extraLocal;
    const bruto = buffer.subarray(inicio, inicio + compri);

    arquivos.set(nome, metodo === 0 ? bruto : inflateRawSync(bruto));
    p += 46 + nomeLen + extraLen + comeLen;
  }
  return arquivos;
}

/* --- XML -----------------------------------------------------------------
   Um leitor de eventos minúsculo. Não monta árvore: o document.xml do Word
   é raso e sequencial, e percorrer os eventos em ordem basta. */
function* eventos(xml) {
  /* Instruções de processamento, comentários e DOCTYPE saem antes: o casador
     de tags abaixo não os reconhece, e o que ele não reconhece vira texto —
     foi assim que a declaração <?xml ...?> apareceu como primeiro parágrafo
     do documento na primeira versão deste script. */
  xml = xml.replace(/<\?[\s\S]*?\?>/g, '').replace(/<!--[\s\S]*?-->/g, '').replace(/<![\s\S]*?>/g, '');

  const re = /<(\/?)([\w:.-]+)((?:\s+[\w:.-]+\s*=\s*"[^"]*")*)\s*(\/?)>|([^<]+)/g;
  let m;
  while ((m = re.exec(xml))) {
    if (m[5] !== undefined) { yield { tipo: 'texto', valor: destextualizar(m[5]) }; continue; }
    const atributos = {};
    if (m[3]) for (const a of m[3].matchAll(/([\w:.-]+)\s*=\s*"([^"]*)"/g)) atributos[a[1]] = destextualizar(a[2]);
    if (m[4]) { yield { tipo: 'abre', nome: m[2], atributos }; yield { tipo: 'fecha', nome: m[2] }; }
    else yield { tipo: m[1] ? 'fecha' : 'abre', nome: m[2], atributos };
  }
}

const destextualizar = (s) => s
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"').replace(/&apos;/g, "'")
  .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d))
  .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
  .replace(/&amp;/g, '&');

/* Escapa o que a sintaxe do Markdown roubaria do texto. Conservador de
   propósito: só o que marca ênfase e link. O texto histórico usa asterisco
   e sublinhado literais, e perdê-los seria alterar o documento. */
const escaparMd = (s) => s.replace(/([\\`*_[\]])/g, '\\$1');

/* --- Relações (destinos dos links) --------------------------------------- */
function lerRelacoes(zip, caminhoXml) {
  const mapa = new Map();
  const dados = zip.get(`word/_rels/${basename(caminhoXml)}.rels`);
  if (!dados) return mapa;
  for (const m of dados.toString('utf8').matchAll(/Id="([^"]+)"[^>]*?Target="([^"]+)"/g)) {
    mapa.set(m[1], destextualizar(m[2]));
  }
  return mapa;
}

/* --- Notas de rodapé -----------------------------------------------------
   Guardadas à parte e emitidas no fim, com âncora. Num projeto que cobra
   fonte de cada afirmação, a nota de rodapé costuma ser a parte mais valiosa
   do documento — perdê-la seria perder justamente o que importa. */
function lerNotas(zip) {
  const notas = new Map();
  const dados = zip.get('word/footnotes.xml');
  if (!dados) return notas;
  for (const m of dados.toString('utf8').matchAll(/<w:footnote\b[^>]*w:id="(-?\d+)"[^>]*>([\s\S]*?)<\/w:footnote>/g)) {
    if (+m[1] < 1) continue;                     /* -1 e 0 são os separadores */
    const texto = converter(m[2], new Map(), null).trim().replace(/\s*\n+\s*/g, ' ');
    if (texto) notas.set(m[1], texto);
  }
  return notas;
}

/* --- Conversão ----------------------------------------------------------- */
function converter(xml, relacoes, notasUsadas, imagensVistas = null, pastaDeImagens = 'imagens') {
  const saida = [];
  let linha = '';
  let estilo = null;          /* estilo do parágrafo corrente */
  let lista = false;
  let nivel = 0;
  let negrito = false, italico = false;
  let linkAtivo = null, textoDoLink = '';
  let emTexto = false;        /* estamos dentro de um <w:t>? */

  /* Tabelas. Pilha porque o Word aninha tabela em célula sem cerimônia. */
  const tabelas = [];
  let celula = null;          /* parágrafos da célula corrente */
  let linhaTab = null;        /* células da linha corrente */

  /* mc:AlternateContent guarda a MESMA caixa de texto duas vezes: em
     mc:Choice para quem entende o recurso novo, em mc:Fallback para quem
     não entende. Ler as duas é o que fazia cada título dos documentos
     diagramados aparecer em dobro. Ignoramos o Fallback. */
  let ignorando = 0;

  /* Dentro de um hyperlink o texto é acumulado à parte: o destino só é
     conhecido na abertura e o rótulo só termina no fechamento. */
  const emitir = (s) => {
    if (ignorando) return;
    if (linkAtivo !== null) textoDoLink += s; else linha += s;
  };

  const abrirEnfase = () => {
    if (linkAtivo !== null) return;
    if (negrito) linha += '**';
    if (italico) linha += '_';
  };
  const fecharEnfase = () => {
    if (linkAtivo !== null) return;
    if (italico) linha += '_';
    if (negrito) linha += '**';
  };

  const despejar = (t) => {
    if (celula) { celula.push(t); return; }
    const titulo = /^(?:Heading|T[íi]?tulo)\s*(\d)/i.exec(estilo || '');
    if (titulo)                                       saida.push('#'.repeat(Math.min(6, +titulo[1] + 1)) + ' ' + t);
    else if (/^(Quote|Cita|IntenseQuote)/i.test(estilo || '')) saida.push('> ' + t);
    else if (lista)                                   saida.push('  '.repeat(nivel) + '- ' + t);
    else                                              saida.push(t);
    saida.push('');
  };

  const fecharParagrafo = () => {
    /* Marcadores de ênfase pendurados no fim vêm de corrida formatada e
       vazia, que o Word emite a rodo. Removê-los aqui evita `**` órfão. */
    const t = ignorando ? '' : linha.replace(/(?:\*\*|_)+$/, '').trim();
    if (t) despejar(t);
    linha = ''; estilo = null; lista = false; nivel = 0;
  };

  for (const ev of eventos(xml)) {
    if (ev.tipo === 'abre') {
      switch (ev.nome) {
        case 'mc:Fallback': ignorando++; break;
        case 'w:pStyle': estilo = ev.atributos['w:val']; break;
        case 'w:numPr':  lista = true; break;
        case 'w:ilvl':   nivel = +(ev.atributos['w:val'] || 0); break;
        case 'w:r':      negrito = false; italico = false; break;
        case 'w:b':      if (ev.atributos['w:val'] !== '0' && ev.atributos['w:val'] !== 'false') negrito = true; break;
        case 'w:i':      if (ev.atributos['w:val'] !== '0' && ev.atributos['w:val'] !== 'false') italico = true; break;
        case 'w:br':     emitir(' ');  break;
        case 'w:tab':    emitir(' ');  break;
        case 'w:tbl':    tabelas.push({ primeira: true }); break;
        case 'w:tr':     linhaTab = []; break;
        case 'w:tc':     celula = []; break;
        case 'w:hyperlink':
          linkAtivo = relacoes.get(ev.atributos['r:id']) || '';
          textoDoLink = '';
          break;
        case 'w:footnoteReference': {
          const id = ev.atributos['w:id'];
          if (notasUsadas && id) { notasUsadas.add(id); emitir(`[^${id}]`); }
          break;
        }
        /* A fotografia em si não é extraída aqui, mas o LUGAR dela é. Sem
           esta marca, quinhentas fotos chegam soltas e a legenda que vem
           logo abaixo delas no documento deixa de ter dono. */
        case 'a:blip': {
          const alvo = relacoes.get(ev.atributos['r:embed']);
          if (alvo && imagensVistas && !ignorando) {
            const arquivo = basename(alvo);
            imagensVistas.push(arquivo);
            emitir(`\n\n![imagem ${imagensVistas.length}](${pastaDeImagens}/${arquivo})\n\n`);
          }
          break;
        }
        /* A ênfase abre em w:t, e não em w:b, porque só aqui se sabe que há
           texto de fato. Ficar dentro de w:t também é o que impede o espaço
           em branco ENTRE as tags de virar texto do documento. */
        case 'w:t': emTexto = true; abrirEnfase(); break;
      }
    } else if (ev.tipo === 'fecha') {
      switch (ev.nome) {
        case 'mc:Fallback': ignorando = Math.max(0, ignorando - 1); break;
        case 'w:t':  emTexto = false; fecharEnfase(); break;
        case 'w:p':  fecharParagrafo(); break;
        case 'w:tc':
          linhaTab?.push(celula.join(' ').replace(/\|/g, '\\|'));
          celula = null;
          break;
        case 'w:tr': {
          const tab = tabelas[tabelas.length - 1];
          if (linhaTab?.length) {
            saida.push('| ' + linhaTab.join(' | ') + ' |');
            /* O Markdown exige a linha de traços logo após a primeira, senão
               a tabela inteira é lida como parágrafo. O Word não marca qual
               linha é o cabeçalho, então a primeira assume o papel. */
            if (tab?.primeira) { saida.push('|' + ' --- |'.repeat(linhaTab.length)); tab.primeira = false; }
          }
          linhaTab = null;
          break;
        }
        case 'w:tbl': tabelas.pop(); saida.push(''); break;
        case 'w:hyperlink': {
          const t = textoDoLink.trim();
          if (t) linha += linkAtivo ? `[${t}](${linkAtivo})` : t;
          linkAtivo = null; textoDoLink = '';
          break;
        }
      }
    } else if (emTexto && ev.valor) {
      emitir(escaparMd(ev.valor));
    }
  }
  fecharParagrafo();

  /* `**a** **b**` vira `**a b**`, e `_tradi__ção_` vira `_tradição_`. O Word
     parte uma frase em várias corridas por qualquer motivo — uma correção
     ortográfica, uma marca de revisão — e sem esta costura o texto sai
     pontilhado de asteriscos no meio das palavras. A contrabarra na espreita
     protege os `\_` que vieram escapados do texto original. */
  return saida.join('\n')
    .replace(/(?<!\\)\*\*(\s*)\*\*/g, '$1')
    .replace(/(?<!\\)_(\s*)_/g, '$1')
    /* Itens de lista consecutivos ficam colados. Cada parágrafo sai daqui
       com uma linha em branco atrás, e uma lista espaçada assim vira uma
       sequência de listas de um item só em quase todo renderizador. */
    .replace(/^(\s*- .*)\n\n(?=\s*- )/gm, '$1\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/* --- Um arquivo ---------------------------------------------------------- */
export function lerDocx(caminho, pastaDeImagens = 'imagens') {
  const zip = abrirZip(readFileSync(caminho));
  const doc = zip.get('word/document.xml');
  if (!doc) throw new Error(`${basename(caminho)}: não contém word/document.xml. É .doc antigo? Salve como .docx.`);

  const usadas = new Set();
  const notas = lerNotas(zip);
  const naOrdem = [];
  let md = converter(
    doc.toString('utf8'), lerRelacoes(zip, 'word/document.xml'), usadas,
    naOrdem, pastaDeImagens,
  );

  if (usadas.size) {
    md += '\n\n---\n\n## Notas de rodapé do original\n\n';
    for (const id of [...usadas].sort((a, b) => +a - +b)) {
      md += `[^${id}]: ${notas.get(id) || '(vazia)'}\n`;
    }
  }

  return {
    md,
    /* Duas listas diferentes, e a diferença importa: `imagens` é o que o
       arquivo CONTÉM, `naOrdem` é o que ele USA, na sequência em que
       aparece. O Word guarda mídia que ninguém mais referencia. */
    imagens: [...zip.keys()].filter((k) => k.startsWith('word/media/')),
    naOrdem,
    zip,
  };
}

/* Grava a mídia embutida numa pasta própria, e devolve quantas gravou.
   Só o que o documento realmente usa, na ordem em que usa. */
export function extrairImagens(zip, naOrdem, destino) {
  mkdirSync(destino, { recursive: true });
  let gravadas = 0;
  for (const arquivo of new Set(naOrdem)) {
    const dados = zip.get(`word/media/${arquivo}`);
    if (!dados) continue;
    writeFileSync(join(destino, arquivo), dados);
    gravadas++;
  }
  return gravadas;
}

/* --- Linha de comando ----------------------------------------------------
   O bloco abaixo só roda quando ESTE arquivo é o que o Node executou. Sem
   esta guarda, um `import { lerDocx }` daqui reprocessava a pasta inteira
   como efeito colateral — que foi exatamente o que aconteceu na primeira
   vez que outro script tentou reaproveitar a função. */
const executadoDireto = process.argv[1]
  && resolve(process.argv[1]) === fileURLToPath(import.meta.url);

const argumentos = executadoDireto ? process.argv.slice(2) : [];
const comImagens = argumentos.includes('--imagens');
const alvoDireto = argumentos.find((a) => !a.startsWith('--'));

if (!executadoDireto) {
  /* nada a fazer: fomos importados */
} else if (alvoDireto) {
  process.stdout.write(lerDocx(resolve(alvoDireto)).md + '\n');
} else {
  if (!existsSync(ENTRADA)) mkdirSync(ENTRADA, { recursive: true });

  /* ~$ é o arquivo de bloqueio que o Word cria enquanto o documento está
     aberto. Ele é um .docx inválido e faria o script morrer sem motivo. */
  const docs = readdirSync(ENTRADA)
    .filter((f) => extname(f).toLowerCase() === '.docx' && !f.startsWith('~$'))
    .sort();

  if (!docs.length) {
    console.log('Nenhum .docx em originais/word/.');
    console.log('Coloque os arquivos lá e rode de novo:  npm run word');
    process.exit(0);
  }

  let totalPalavras = 0, totalFotos = 0, falhas = 0;
  const inventario = ['arquivo,ordem,imagem,pasta'];

  for (const f of docs) {
    const base = basename(f, extname(f));
    try {
      const { md, naOrdem, zip } = lerDocx(join(ENTRADA, f), `imagens/${base}`);
      writeFileSync(join(ENTRADA, base + '.md'), md, 'utf8');

      const palavras = md.split(/\s+/).filter(Boolean).length;
      totalPalavras += palavras;

      let nota = '';
      if (naOrdem.length) {
        if (comImagens) {
          const quantas = extrairImagens(zip, naOrdem, join(ENTRADA, 'imagens', base));
          totalFotos += quantas;
          nota = `, ${quantas} imagem(ns) → imagens/${base}/`;
        } else {
          nota = `, ${new Set(naOrdem).size} imagem(ns) — use --imagens para extrair`;
        }
        naOrdem.forEach((img, i) => inventario.push(`${f},${i + 1},${img},imagens/${base}`));
      }
      console.log(`${f}\n  → ${base}.md  (${palavras} palavras${nota})`);
    } catch (erro) {
      falhas++;
      console.error(`${f}\n  ✗ ${erro.message}`);
    }
  }

  /* O inventário é o que permite reencontrar uma foto depois: ele guarda de
     qual documento ela saiu e em que posição do texto aparecia. O nome
     `image31.jpg` sozinho não diz nada a ninguém. */
  if (comImagens) {
    writeFileSync(join(ENTRADA, 'imagens', 'inventario.csv'), inventario.join('\n') + '\n', 'utf8');
  }

  console.log(`\n${docs.length - falhas}/${docs.length} documentos, ${totalPalavras.toLocaleString('pt-BR')} palavras`
    + (comImagens ? `, ${totalFotos} imagens gravadas` : ''));
}
