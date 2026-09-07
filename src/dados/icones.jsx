/* ==========================================================================
   ÍCONES — sprite SVG inline.

   A geometria vem de src/dados/simbolos.js, que é GERADO por
   ferramentas/baixar-icones.mjs. Este arquivo é escrito à mão e a ferramenta
   não o toca: o que se edita aqui é como o ícone vira componente, não o
   desenho dele.

   Os símbolos guardam SÓ a geometria. Cor, espessura de traço, tamanho e
   junção são CSS, na classe .icone (src/estilo/chassi.css) — trocar a
   espessura de todos os ícones do portal é uma linha lá.

   Inline, e não por CDN nem por lucide-react, porque o portal precisa abrir
   do disco, sem rede, e mostrar os ícones mesmo sem JavaScript. Um pacote de
   ícones em React só desenharia depois da hidratação — numa página cujo
   conteúdo tem de estar íntegro sem JS, isso é regressão.

   PODA: cada página publicada recebe apenas os símbolos que de fato usa. O
   gerador varre o HTML já renderizado e monta o sprite com o que sobrou
   (ver sprite() adiante). Acrescentar um ícone à lista não engorda nenhuma
   página que não o use.
   ========================================================================== */

import { SIMBOLOS } from './simbolos.js';

export const NOMES_DE_ICONE = Object.keys(SIMBOLOS);

/* --------------------------------------------------------------------------
   <Icone> — uma tag <svg> apontando para um símbolo do sprite.

   classe: 'icone' é o tamanho padrão; a marca usa 'marca__selo'.

   Nome inexistente derruba a geração em vez de virar um espaço vazio no
   site. Era o comportamento da função ico() original e vale a pena manter:
   um erro de digitação num ícone é silencioso demais para ser tolerado.
   -------------------------------------------------------------------------- */

export function Icone({ nome, classe = 'icone', style }) {
  if (!SIMBOLOS[nome]) {
    throw new Error(`Ícone '${nome}' não existe. Veja src/dados/icones.jsx.`);
  }
  return (
    <svg className={classe} style={style} aria-hidden="true" focusable="false">
      <use href={`#ic-${nome}`} />
    </svg>
  );
}

/* --------------------------------------------------------------------------
   O sprite, em duas formas.

   sprite(html)     usado pelo GERADOR: varre o HTML já renderizado e devolve
                    só os símbolos citados, como string. Vai para fora da
                    raiz do React, então a hidratação nunca o toca.

   <SpriteCompleto> usado só em DESENVOLVIMENTO, onde não há etapa de poda:
                    devolve o mapa inteiro.
   -------------------------------------------------------------------------- */

export function sprite(html) {
  const usados = new Set();
  for (const m of html.matchAll(/href="#ic-([a-z0-9-]+)"/g)) usados.add(m[1]);

  const faltando = [...usados].filter((n) => !SIMBOLOS[n]);
  if (faltando.length) {
    throw new Error('Ícone usado mas não definido: ' + faltando.join(', '));
  }
  if (!usados.size) return '';

  const corpo = [...usados].sort()
    .map((n) => `  <symbol id="ic-${n}" viewBox="0 0 24 24">${SIMBOLOS[n]}</symbol>`)
    .join('\n');

  return `<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false">\n${corpo}\n</svg>`;
}

export function SpriteCompleto() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
      {NOMES_DE_ICONE.map((n) => (
        <symbol key={n} id={`ic-${n}`} viewBox="0 0 24 24"
                dangerouslySetInnerHTML={{ __html: SIMBOLOS[n] }} />
      ))}
    </svg>
  );
}
