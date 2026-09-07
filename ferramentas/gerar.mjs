/* ==========================================================================
   GERADOR DO PORTAL MORRO VERMELHO

       npm run gerar                gera o site em publicar/
       npm run gerar -- --separado  CSS e JS em arquivos próprios, linkados
       npm run gerar -- --comentado mantém os comentários do CSS embutido

   O QUE ELE FAZ, EM UMA FRASE
   Roda o React no Node para transformar cada página em HTML de verdade, e
   embute nela o CSS que ela usa e o bundle que vai hidratá-la.

   AS TRÊS ETAPAS
     1. vite build (ALVO=servidor) → um bundle que roda no Node e sabe
        renderizar qualquer página em string.
     2. vite build (ALVO=cliente)  → um bundle IIFE, arquivo único, React
        embutido, sem nenhum import. Script clássico de propósito:
        <script type="module"> é bloqueado em file://.
     3. este arquivo               → para cada página: renderiza, monta o
        <head>, embute CSS e JS, escreve em publicar/.

   POR QUE O RESULTADO CONTINUA SENDO HTML ESTÁTICO
   Porque a promessa do projeto não mudou: um arquivo pode ser anexado a um
   e-mail, gravado num pendrive para uma escola, entregue a um pesquisador ou
   arquivado. Se este gerador sumir amanhã, publicar/ continua funcionando —
   ele não precisa dele. React aqui é a linguagem em que o portal é ESCRITO,
   não uma dependência de quem o LÊ.

   O QUE MUDA QUANDO O JAVASCRIPT NÃO RODA
   Nada de essencial. Texto, navegação, menu (via <noscript>), imagens,
   sumário, tempo de leitura, referência de citação e links de WhatsApp já
   saem escritos no HTML. Perdem-se apenas os comportamentos: parallax,
   revelação ao rolar, contadores animados, drawer, comparador e a barra de
   progresso. Foi assim que a v2 foi projetada e continua sendo o teste.
   ========================================================================== */

import { spawn } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { gzipSync } from 'node:zlib';

const RAIZ = dirname(dirname(fileURLToPath(import.meta.url)));
const ESTILO = join(RAIZ, 'src', 'estilo');
const CONSTRUCAO = join(RAIZ, 'construcao');
const SAIDA = join(RAIZ, 'publicar');

const COMENTADO = process.argv.includes('--comentado');
const SEPARADO = process.argv.includes('--separado');

/* ==========================================================================
   RECEITAS — que CSS cada tipo de página recebe.

   tokens e base são a fundação; chassi é navbar/rodapé/botões; home e artigo
   só entram onde são usados. Uma página de documento não carrega as ~1.200
   linhas de hero, comparador e acervo que nunca usa.
   ========================================================================== */

const BUNDLES = {
  'portal.css': ['fontes', 'tokens', 'base', 'chassi'],
  'home.css':   ['home'],
  'artigo.css': ['artigo'],
};

const RECEITAS = {
  home:   ['portal.css', 'home.css'],
  artigo: ['portal.css', 'artigo.css'],
  nu:     ['portal.css'],
};

/* ==========================================================================
   LIMPEZA DO CSS

   Os comentários do CSS são documentação para quem edita src/estilo/ — e são
   26% do arquivo. Não precisam viajar dentro de cada página publicada: quem
   for entender uma decisão vai ao arquivo de origem, não ao "view source".

   A remoção é deliberadamente conservadora: um pequeno varredor pula strings
   antes de cortar, para nunca decepar um /* que esteja dentro de aspas.
   ========================================================================== */

function limparCss(txt) {
  if (COMENTADO) return txt;

  let saida = '';
  let i = 0;
  while (i < txt.length) {
    const c = txt[i];

    if (c === '"' || c === "'") {                 /* string: copia inteira */
      const aspas = c;
      let j = i + 1;
      while (j < txt.length && txt[j] !== aspas) j += txt[j] === '\\' ? 2 : 1;
      saida += txt.slice(i, j + 1);
      i = j + 1;
      continue;
    }

    if (c === '/' && txt[i + 1] === '*') {        /* comentário: descarta */
      const fim = txt.indexOf('*/', i + 2);
      i = fim === -1 ? txt.length : fim + 2;
      continue;
    }

    saida += c;
    i++;
  }

  return saida.replace(/[ \t]+$/gm, '').replace(/\n{2,}/g, '\n').trim();
}

/* fontes.css é gerado por ferramentas/baixar-fontes.mjs. Sem ele o portal
   não quebra: cai na pilha de fallback já declarada em --fonte-serif e
   --fonte-sans (Palatino, Georgia, Segoe UI…). */
const cacheCss = new Map();
function css(nome) {
  if (cacheCss.has(nome)) return cacheCss.get(nome);

  const caminho = join(ESTILO, nome + '.css');
  if (nome === 'fontes' && !existsSync(caminho)) {
    console.warn('  aviso    src/estilo/fontes.css não existe — o portal usará as fontes do sistema.');
    console.warn('           Rode: npm run fontes');
    cacheCss.set(nome, '/* Sem fontes próprias: a pilha de fallback de tokens.css assume. */');
    return cacheCss.get(nome);
  }

  cacheCss.set(nome, limparCss(readFileSync(caminho, 'utf8')));
  return cacheCss.get(nome);
}

/* No modo padrão o CSS é embutido no .html, então os url() de fontes.css
   ('midia/fontes/…') resolvem a partir da página e estão certos. No modo
   --separado a folha vai para publicar/estilo/, um nível abaixo de
   publicar/midia/ — e aí, e só aí, precisa do '../'. */
function folha(arquivo) {
  const texto = BUNDLES[arquivo].map(css).join('\n');
  return SEPARADO ? texto.replace(/url\('midia\//g, "url('../midia/") : texto;
}

/* ==========================================================================
   CONSTRUÇÃO DOS DOIS BUNDLES
   ========================================================================== */

function vite(alvo) {
  return new Promise((resolvido, rejeitado) => {
    const filho = spawn(
      process.execPath,
      [join(RAIZ, 'node_modules', 'vite', 'bin', 'vite.js'), 'build', '--logLevel', 'warn'],
      { cwd: RAIZ, env: { ...process.env, ALVO: alvo }, stdio: 'inherit' },
    );
    filho.on('error', rejeitado);
    filho.on('exit', (codigo) => (codigo === 0
      ? resolvido()
      : rejeitado(new Error(`vite build (ALVO=${alvo}) saiu com código ${codigo}`))));
  });
}

/* ==========================================================================
   O DOCUMENTO
   ========================================================================== */

const FAVICON =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%237a1e1e'/%3E%3Cpath d='M4 25 L11 12 L16 19 L20 13 L28 25 Z' fill='%23d2b48c'/%3E%3C/svg%3E";

/* Único script que precisa rodar ANTES do primeiro paint: quem reduziu
   animações não pode ver nada se mexer no caminho. Por isso ele não está no
   bundle do React — esperar a hidratação já seria tarde. */
const PRE_PAINT = `<script>
(function(){try{if(localStorage.getItem("mv-movimento")==="reduzido"){document.documentElement.setAttribute("data-movimento","reduzido")}}catch(e){}})();
</script>`;

function montarDocumento({ meta, corpo, sprite, receita, SITE, revisao, css: estilos, js }) {
  const {
    slug, titulo, tituloOg = titulo, descricao,
    robots = 'index, follow, max-image-preview:large',
    ogTipo = 'website', ogImagem = '', ogImagemAlt = '', jsonLd = null,
  } = meta;

  const url = slug === 'index' ? `${SITE}/` : `${SITE}/${slug}.html`;

  const og = [
    `<meta property="og:type" content="${ogTipo}">`,
    `<meta property="og:locale" content="pt_BR">`,
    `<meta property="og:site_name" content="Portal Morro Vermelho">`,
    `<meta property="og:title" content="${tituloOg}">`,
    `<meta property="og:description" content="${descricao}">`,
    `<meta property="og:url" content="${url}">`,
    ogImagem ? `<meta property="og:image" content="${SITE}/${ogImagem}">` : '',
    ogImagemAlt ? `<meta property="og:image:alt" content="${ogImagemAlt}">` : '',
    ogImagem ? `<meta name="twitter:card" content="summary_large_image">` : '',
  ].filter(Boolean).join('\n');

  const dados = jsonLd
    ? `\n<script type="application/ld+json">\n${JSON.stringify(jsonLd, null, 2)}\n</script>`
    : '';

  return `<!DOCTYPE html>
<html lang="pt-BR" data-pagina="${slug}" data-revisao="${revisao ? 'on' : 'off'}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${titulo}</title>
<meta name="description" content="${descricao}">
<meta name="author" content="Portal Morro Vermelho">
<meta name="robots" content="${robots}">
<link rel="canonical" href="${url}">
${og}
<meta name="theme-color" content="#7a1e1e">
<link rel="icon" href="${FAVICON}">
${estilos}
${PRE_PAINT}${dados}
</head>

<body id="topo">
${sprite}
<div id="raiz">${corpo}</div>
${js}
</body>
</html>
`;
}

/* ==========================================================================
   ESCRITA
   ========================================================================== */

const escritos = [];

function kb(n) { return (n / 1024).toFixed(1).padStart(7) + ' KB'; }

function escrever(nome, texto) {
  const destino = join(SAIDA, nome);
  mkdirSync(dirname(destino), { recursive: true });
  writeFileSync(destino, texto, 'utf8');

  const bruto = Buffer.byteLength(texto, 'utf8');
  const comprimido = gzipSync(texto).length;
  escritos.push({ nome, bruto, comprimido });

  console.log('  escrito  ' + nome.padEnd(36) + kb(bruto) + kb(comprimido) + ' gzip');
}

/* ==========================================================================
   COMEÇA AQUI

   publicar/ é apagado e refeito a cada execução. É de propósito: nada ali
   dentro deve ser editado à mão, e um arquivo órfão de uma geração anterior
   é justamente o tipo de coisa que sobe para o ar sem ninguém perceber.
   ========================================================================== */

console.log('\nGerando o portal…\n');

await vite('servidor');
await vite('cliente');

const servidor = await import(pathToFileURL(join(CONSTRUCAO, 'servidor', 'servidor.mjs')).href);
const { PAGINAS, renderizar } = servidor;

/* SITE e REVISAO vêm dos dados, não de uma segunda cópia aqui. */
const { SITE, DOMINIO, DOMINIO_CONFIGURADO } = await import(pathToFileURL(join(RAIZ, 'src', 'dados', 'navegacao.js')).href);
const { REVISAO } = await import(pathToFileURL(join(RAIZ, 'src', 'dados', 'contato.js')).href);

const bundleCliente = readFileSync(join(CONSTRUCAO, 'cliente', 'portal.js'), 'utf8');

/* No Windows, um antivírus varrendo a pasta, um Explorer aberto nela ou um
   navegador com uma das páginas carregada seguram o descritor por alguns
   segundos. Sem tolerância a isso, a geração falha com EPERM por um motivo
   que não tem nada a ver com o portal — e a mensagem do Node não ajuda em
   nada a descobrir isso. */
try {
  rmSync(SAIDA, { recursive: true, force: true, maxRetries: 30, retryDelay: 200 });
} catch (erro) {
  if (erro.code !== 'EPERM' && erro.code !== 'EBUSY') throw erro;
  console.error([
    '',
    '  Não foi possível apagar publicar/ — o Windows diz que alguém está usando.',
    '',
    '  Quase sempre é uma destas três coisas:',
    '    · uma aba do navegador com alguma página de publicar/ ainda aberta',
    '    · o Explorer com a pasta publicar/ em primeiro plano',
    '    · o antivírus terminando de varrer os arquivos recém-escritos',
    '',
    '  Feche o que estiver aberto e rode de novo. Nada se perdeu: publicar/ é',
    '  inteiramente gerado a partir de src/.',
    '',
  ].join('\n'));
  process.exit(1);
}
mkdirSync(SAIDA, { recursive: true });

/* Modo --separado: CSS e JS em arquivos próprios. Custa um segundo pedido de
   rede por recurso e paga em cache entre páginas — o navegador baixa
   portal.js uma vez e reusa nas outras seis. Vale quando o portal está num
   servidor e a navegação entre páginas é comum. O padrão é o oposto:
   autocontido, porque é o que sobrevive dentro de um pendrive. */
if (SEPARADO) {
  for (const arquivo of Object.keys(BUNDLES)) escrever('estilo/' + arquivo, folha(arquivo));
  escrever('script/portal.js', bundleCliente);
  console.log('');
}

for (const { slug, receita } of PAGINAS) {
  const { corpo, sprite, meta } = renderizar(slug);
  const arquivos = RECEITAS[receita];

  const estilos = SEPARADO
    ? arquivos.map((f) => `<link rel="stylesheet" href="estilo/${f}">`).join('\n')
    : `<style>\n${arquivos.map(folha).join('\n')}\n</style>`;

  const js = SEPARADO
    ? '<script src="script/portal.js" defer></script>'
    : `<script>\n${bundleCliente}\n</script>`;

  escrever(slug + '.html', montarDocumento({
    meta, corpo, sprite, receita, SITE, revisao: REVISAO, css: estilos, js,
  }));
}

/* --- Mídia ---------------------------------------------------------------
   Os .woff2 e as fotografias são o único recurso que NUNCA é embutido. Um
   binário de ~50 KB em base64 dentro das sete páginas viajaria sete vezes;
   em arquivo separado o navegador baixa uma vez e reusa, inclusive abrindo
   do disco. Se sumirem, nada quebra: a pilha de fallback de --fonte-serif
   assume e as imagens dão lugar aos espaços reservados.                    */

const midia = join(RAIZ, 'midia');
if (existsSync(midia)) {
  cpSync(midia, join(SAIDA, 'midia'), { recursive: true });
  console.log('\n  copiado  midia/');
} else {
  console.warn('\n  aviso    midia/ não existe na raiz — nenhuma imagem foi copiada.');
}

/* --- GitHub Pages --------------------------------------------------------
   Dois arquivos que só o GitHub Pages lê, e que não incomodam ninguém mais.

   .nojekyll desliga o Jekyll. Sem ele, o Pages processa a pasta antes de
   servir e ignora tudo que começa com sublinhado — hoje nada aqui começa
   assim, mas um dia vai começar, e o sintoma é um 404 inexplicável.

   CNAME diz ao Pages qual domínio próprio servir. Ele só é escrito quando
   o domínio está de fato configurado em src/dados/navegacao.js: um CNAME com
   valor de exemplo tira o site do ar em vez de apenas ficar errado.       */

/* O CNAME precisa terminar em quebra de linha, e numa \n — o Pages lê o
   arquivo como uma linha só de texto, e um \r\n do Windows entraria no nome
   do domínio. Por isso a constante, e não os.EOL. */
const EOL = '\n';

writeFileSync(join(SAIDA, '.nojekyll'), '');

if (DOMINIO_CONFIGURADO) {
  /* Só o host, sem esquema e sem barra — é o formato que o Pages aceita. */
  writeFileSync(join(SAIDA, 'CNAME'), DOMINIO.split('/')[0] + EOL);
  console.log(`  escrito  CNAME (${DOMINIO.split('/')[0]}) e .nojekyll`);
} else {
  console.log('  escrito  .nojekyll');
  console.log('  aviso    CNAME não escrito: DOMINIO ainda é o valor de exemplo.');
  console.log('           Edite DOMINIO em src/dados/navegacao.js antes de publicar.');
}

/* --- Prestação de contas ------------------------------------------------ */

const paginas = escritos.filter((e) => e.nome.endsWith('.html'));
const bruto = escritos.reduce((s, e) => s + e.bruto, 0);
const comprimido = escritos.reduce((s, e) => s + e.comprimido, 0);

console.log('\n' + '─'.repeat(64));
console.log(`  ${paginas.length} páginas` + kb(bruto).padStart(30) + kb(comprimido) + ' gzip');
console.log(SEPARADO
  ? '  modo --separado: CSS e JS linkados, compartilhados entre as páginas'
  : '  autocontido: cada .html traz o próprio CSS e o próprio bundle');
if (COMENTADO) console.log('  modo --comentado: CSS com os comentários preservados');
console.log('\n  publicar/ é o site inteiro: abre com duplo clique, sem');
console.log('  servidor e sem internet. É isso que se publica.\n');
