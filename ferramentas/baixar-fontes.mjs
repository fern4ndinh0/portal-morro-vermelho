/* ==========================================================================
   BAIXAR FONTES — roda UMA vez, ou quando os pesos mudarem.

       node ferramentas/baixar-fontes.mjs

   Pega em Google Fonts exatamente os pesos que o portal já usava, salva os
   .woff2 em midia/fontes/ e escreve src/estilo/fontes.css com @font-face
   locais. Depois disso o portal não tem mais nenhuma dependência de rede:
   abre igual com ou sem internet.

   POR QUE ISTO EXISTE
   Enquanto as fontes vinham por <link> do Google, o portal tinha um ponto de
   falha fora do nosso controle e — o que mais importa aqui — perdia a
   tipografia ao ser aberto offline, que é o caso de quem recebe o projeto em
   pendrive ou o arquiva. Um portal de memória precisa sobreviver à internet.

   O ACHADO QUE VALE LEMBRAR
   O Google entrega Cormorant Garamond e Inter como FONTES VARIÁVEIS: os
   nove pesos pedidos são, no disco, o mesmo arquivo repetido. Este script
   detecta isso pelo conteúdo e guarda um arquivo por família/subset, com
   font-weight declarado em faixa (300 700). São ~200 KB em vez de ~870 KB.
   ========================================================================== */

import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const DESTINO_FONTES = join(RAIZ, 'midia', 'fontes');
const DESTINO_CSS = join(RAIZ, 'src', 'estilo', 'fontes.css');

/* Os mesmos pesos que o <link> do Google pedia antes da migração. Nada a
   mais, nada a menos — a tipografia tem de sair exatamente como saía.

   ITÁLICO não é pedido porque o <link> original também não pedia: os trechos
   em itálico (lema do hero, resumo do artigo, citações) já eram sintetizados
   pelo navegador. Para itálico de verdade, troque por `ital,wght@0,300..700;1,300..700`
   e rode de novo — mas confira o resultado, porque o desenho muda. */
const URL_CSS = 'https://fonts.googleapis.com/css2'
  + '?family=Cormorant+Garamond:wght@300;400;500;600;700'
  + '&family=Inter:wght@400;500;600;700'
  + '&display=swap';

/* pt-BR precisa destes dois. Os demais subsets que o Google oferece
   (cirílico, grego, vietnamita) seriam peso morto. */
const SUBSETS = new Set(['latin', 'latin-ext']);

/* User-Agent moderno: é o que faz o Google devolver woff2 em vez de ttf. */
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 '
         + '(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

async function buscar(url, binario = false) {
  const r = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!r.ok) throw new Error(`${r.status} ao buscar ${url}`);
  return binario ? Buffer.from(await r.arrayBuffer()) : r.text();
}

console.log('\nBaixando as fontes do portal…\n');

const css = await buscar(URL_CSS);

/* O CSS do Google vem como blocos "/* subset *\/ @font-face { … }" */
const blocos = [...css.matchAll(/\/\*\s*([a-z-]+)\s*\*\/\s*(@font-face\s*\{[\s\S]*?\})/g)];
if (!blocos.length) throw new Error('Nenhum @font-face veio do Google. A URL mudou?');

const campo = (bloco, nome) => (bloco.match(new RegExp(nome + ':\\s*([^;]+);')) || [])[1]?.trim();

/* Agrupa por família + estilo + subset. Como os pesos compartilham arquivo
   (fonte variável), cada grupo vira UM @font-face com faixa de peso. */
const grupos = new Map();

for (const [, subset, bloco] of blocos) {
  if (!SUBSETS.has(subset)) continue;

  const familia = campo(bloco, 'font-family').replace(/['"]/g, '');
  const estilo = campo(bloco, 'font-style');
  const peso = Number(campo(bloco, 'font-weight'));
  const rango = campo(bloco, 'unicode-range');
  const url = bloco.match(/url\((https:\/\/[^)]+\.woff2)\)/)[1];

  const chave = `${familia}|${estilo}|${subset}`;
  if (!grupos.has(chave)) {
    grupos.set(chave, { familia, estilo, subset, rango, pesos: [], urls: new Set() });
  }
  const g = grupos.get(chave);
  g.pesos.push(peso);
  g.urls.add(url);
}

mkdirSync(DESTINO_FONTES, { recursive: true });

const regras = [];
let bytes = 0;

for (const g of grupos.values()) {
  /* Baixa cada URL distinta do grupo e confere pelo conteúdo se são mesmo
     o mesmo arquivo. Se um dia o Google parar de servir variável, esta
     verificação falha alto em vez de gerar um CSS silenciosamente errado. */
  const conteudos = new Map();
  for (const url of g.urls) {
    const dados = await buscar(url, true);
    conteudos.set(createHash('md5').update(dados).digest('hex'), dados);
  }

  if (conteudos.size > 1) {
    throw new Error(
      `${g.familia} (${g.subset}) veio em ${conteudos.size} arquivos diferentes — `
      + 'não é mais fonte variável. Este script precisa ser ajustado para salvar '
      + 'um arquivo por peso.'
    );
  }

  const dados = [...conteudos.values()][0];
  const slug = g.familia.toLowerCase().replace(/\s+/g, '-');
  const nome = `${slug}-${g.subset}.woff2`;

  writeFileSync(join(DESTINO_FONTES, nome), dados);
  bytes += dados.length;

  const min = Math.min(...g.pesos);
  const max = Math.max(...g.pesos);
  const faixa = min === max ? String(min) : `${min} ${max}`;

  console.log(`  ${nome.padEnd(38)} ${(dados.length / 1024).toFixed(1).padStart(6)} KB   pesos ${faixa}`);

  regras.push(
`@font-face {
  font-family: '${g.familia}';
  font-style: ${g.estilo};
  font-weight: ${faixa};
  font-display: swap;
  src: url('midia/fontes/${nome}') format('woff2');
  unicode-range: ${g.rango};
}`);
}

const CABECALHO = `/* ==========================================================================
   FONTES PRÓPRIAS — a última dependência externa que o portal tinha.

   GERADO por ferramentas/baixar-fontes.mjs. Não edite à mão: rode a
   ferramenta de novo.

   São os MESMOS pesos que o <link> do Google pedia antes da migração —
   Cormorant Garamond 300–700 e Inter 400–700, subsets latin e latin-ext.
   Nada foi acrescentado nem tirado, para a tipografia sair como saía.

   Ambas são fontes VARIÁVEIS: um arquivo por família/subset cobre toda a
   faixa de peso. É por isso que há quatro arquivos e não dezoito.

   Os caminhos são '../midia/fontes/…' porque url() no CSS resolve a partir
   da folha de estilo, não da página: este arquivo acaba dentro de
   publicar/estilo/portal.css, um nível abaixo de publicar/midia/.

   Se estes arquivos sumirem, nada quebra: a pilha de fallback declarada em
   --fonte-serif e --fonte-sans (Palatino, Georgia, Segoe UI…) assume.
   ========================================================================== */

`;

writeFileSync(DESTINO_CSS, CABECALHO + regras.join('\n\n') + '\n', 'utf8');

console.log(`\n  ${grupos.size} arquivos, ${(bytes / 1024).toFixed(1)} KB no total`);
console.log(`  escrito src/estilo/fontes.css (${regras.length} regras @font-face)`);
console.log('\n  Agora rode: node gerar.mjs\n');
