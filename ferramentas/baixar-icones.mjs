/* ==========================================================================
   BAIXAR ÍCONES — vendoriza os ícones do Lucide.

       node ferramentas/baixar-icones.mjs

   Pega os SVG oficiais do pacote lucide-static e escreve
   src/dados/icones.jsx. Roda quando um ícone for acrescentado, trocado,
   ou quando você quiser subir a versão do Lucide.

   POR QUE VENDORIZADO, E NÃO PELO CDN OU POR lucide.createIcons()
   As duas formas de uso mais comuns do Lucide custariam caro justo neste
   projeto:

     · pelo CDN, o portal passa a exigir internet — e abrir do disco, offline,
       é requisito declarado aqui (pendrive de escola, arquivo de pesquisador);
     · por lucide.createIcons(), os ícones só existem depois que o JavaScript
       roda, o que quebra a primeira regra do projeto: conteúdo primeiro,
       JavaScript só aprimora.

   Vendorizando, os ícones são os mesmos, a customização é a mesma (é tudo
   currentColor + stroke-width em CSS), e o portal continua abrindo sozinho,
   sem rede e sem JS. A biblioteca é resolvida em tempo de geração em vez de
   em tempo de visita.

   COMO CUSTOMIZAR
   Espessura, tamanho e cor NÃO estão nos símbolos: o baixador remove os
   atributos de apresentação de propósito. Tudo é controlado por CSS, na
   classe .icone (src/estilo/chassi.css). Um ícone maior ou mais fino é uma
   linha de CSS, não uma edição de SVG.
   ========================================================================== */

import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const DESTINO = join(RAIZ, 'src', 'dados', 'simbolos.js');

/* --------------------------------------------------------------------------
   ÍCONES DO LUCIDE
   À esquerda o nome usado no portal; à direita o nome no Lucide.
   Para trocar um ícone, mude o nome do Lucide aqui e rode de novo — nenhum
   modelo precisa ser tocado.
   -------------------------------------------------------------------------- */

const DO_LUCIDE = {
  'seta-dir':   'arrow-right',
  'seta-esq':   'arrow-left',
  'seta-cima':  'arrow-up',
  'chevron':    'chevron-down',
  'lupa':       'search',
  'movimento':  'activity',
  'pin':        'map-pin',
  'doc':        'file-text',
  'camera':     'camera',
  'som':        'volume-2',
  'calendario': 'calendar',
  'igreja':     'church',
  'garfo':      'utensils',
  'retrato':    'user-round',
  'bandeira':   'flag',
  'mais':       'plus',
  'comparar':   'chevrons-left-right',
  'envelope':   'mail',
  'relogio':    'clock',
  'alerta':     'triangle-alert',
  'check':      'check',
  'copiar':     'copy',
};

/* --------------------------------------------------------------------------
   ÍCONES PRÓPRIOS — os que o Lucide não tem.

   O Lucide retirou os ícones de marca a partir da v1 (não há mais instagram,
   facebook nem youtube) e nunca teve whatsapp. E o 'selo' é a marca do
   portal, não um ícone de interface: logotipo não se tira de biblioteca.

   Estes cinco continuam desenhados aqui, no mesmo formato dos outros, e
   respondem ao mesmo CSS.
   -------------------------------------------------------------------------- */

const PROPRIOS = {
  'selo': '<path d="M2 20 8.5 9l3.5 5.2L15 9.8 22 20Z" fill="currentColor" fill-opacity=".18"/><circle cx="17.5" cy="5.5" r="2.2"/>',
  'whatsapp': '<path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.5L3.5 20.5l1.5-4.3A8.5 8.5 0 1 1 20.5 11.6Z"/><path d="M8.9 8.3c.3-.1.6 0 .8.3l.8 1.3c.1.3.1.6-.1.8l-.5.5a5.6 5.6 0 0 0 2.9 2.9l.5-.5c.2-.2.5-.3.8-.1l1.3.8c.3.2.4.5.3.8-.3.9-1.2 1.5-2.1 1.3a8.6 8.6 0 0 1-6.1-6.1c-.2-.9.4-1.8 1.4-2Z"/>',
  'instagram': '<rect x="3.5" y="3.5" width="17" height="17" rx="4.6"/><circle cx="12" cy="12" r="3.7"/><circle cx="17" cy="7" r=".9" fill="currentColor"/>',
  'facebook': '<path d="M14.5 8.5H17V4.6h-2.6A3.9 3.9 0 0 0 10.5 8.5V11H8.2v3.9h2.3V21h4v-6.1h2.6l.6-3.9h-3.2V9.4a.9.9 0 0 1 .9-.9Z"/>',
  'youtube': '<rect x="2.5" y="5.5" width="19" height="13" rx="3.6"/><path d="M10.5 9.4l4.6 2.6-4.6 2.6z"/>',
};

/* -------------------------------------------------------------------------- */

async function versaoLucide() {
  const r = await fetch('https://unpkg.com/lucide-static@latest/package.json');
  if (!r.ok) throw new Error('Não consegui descobrir a versão do lucide-static.');
  return (await r.json()).version;
}

/* Fica só a geometria.

   No Lucide, TODOS os atributos de apresentação (fill, stroke, stroke-width,
   linecap, linejoin) ficam na tag <svg> raiz; os filhos carregam apenas
   geometria. Então basta descartar a raiz: cor, espessura e junção passam a
   vir do CSS, e é isso que torna o conjunto customizável num lugar só.

   ATENÇÃO ao mexer aqui: não filtre atributos dos filhos. Em <rect>, width e
   height são geometria — removê-los apaga o ícone (foi o que aconteceu com
   calendario, copiar e envelope na primeira tentativa). */
function soGeometria(svg) {
  return svg
    .replace(/^[\s\S]*?<svg[^>]*>/, '')
    .replace(/<\/svg>\s*$/, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\s+/g, ' ')
    .replace(/>\s+</g, '><')
    .trim();
}

console.log('\nBaixando os ícones do Lucide…\n');

const versao = await versaoLucide();
console.log(`  lucide-static ${versao}\n`);

const simbolos = {};

for (const [nosso, deles] of Object.entries(DO_LUCIDE)) {
  const url = `https://unpkg.com/lucide-static@${versao}/icons/${deles}.svg`;
  const r = await fetch(url);
  if (!r.ok) {
    throw new Error(
      `O ícone '${deles}' não existe no lucide-static ${versao} (HTTP ${r.status}).\n`
      + `Confira o nome em https://lucide.dev/icons e ajuste DO_LUCIDE nesta ferramenta.`
    );
  }
  simbolos[nosso] = soGeometria(await r.text());
  console.log(`  ${nosso.padEnd(12)} ← lucide/${deles}`);
}

console.log('');
for (const [nome, corpo] of Object.entries(PROPRIOS)) {
  simbolos[nome] = corpo.replace(/\s+/g, ' ').trim();
  console.log(`  ${nome.padEnd(12)} ← próprio (o Lucide não tem)`);
}

const linhas = Object.keys(simbolos).sort()
  .map((n) => `  '${n}': '${simbolos[n].replace(/\\/g, '\\\\').replace(/'/g, "\\'")}',`)
  .join('\n');

const ARQUIVO = `/* ==========================================================================
   SÍMBOLOS DOS ÍCONES — geometria pura, e nada além disso.

   ARQUIVO GERADO por ferramentas/baixar-icones.mjs a partir do
   lucide-static ${versao}. NÃO EDITE À MÃO: rode \`npm run icones\` de novo.

   Só a geometria mora aqui. Cor, espessura de traço, tamanho e junção são
   CSS, na classe .icone (src/estilo/chassi.css) — trocar a espessura de
   todos os ícones do portal é uma linha lá, não uma edição aqui. É o que se
   ganha em relação ao sprite anterior, que carregava stroke-width fixo em
   cada símbolo.

   Quem transforma isto em componente é src/dados/icones.jsx, que é escrito à
   mão e não é tocado por esta ferramenta.
   ========================================================================== */

export const SIMBOLOS = {
${linhas}
};
`;

writeFileSync(DESTINO, ARQUIVO, 'utf8');

console.log(`\n  ${Object.keys(simbolos).length} ícones escritos em src/dados/simbolos.js`);
console.log('\n  Agora rode: npm run gerar\n');
