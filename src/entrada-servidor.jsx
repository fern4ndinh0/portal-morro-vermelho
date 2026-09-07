/* ==========================================================================
   ENTRADA DO SERVIDOR — usada só pelo gerador, nunca pelo navegador.

   Renderiza uma página em HTML de verdade, com todo o conteúdo dentro. É
   isto que faz a versão React continuar cumprindo a promessa do projeto: o
   arquivo publicado abre sozinho, mostra o portal inteiro e é indexável,
   mesmo que o JavaScript nunca rode.

   Devolve também o SPRITE já podado: os símbolos são contados sobre o HTML
   JÁ renderizado, então cada página recebe só os ícones que de fato usa — o
   404 fica com 2, a home com 22. O sprite vai para FORA da raiz do React, e
   por isso a hidratação nunca encosta nele.
   ========================================================================== */

import { renderToString } from 'react-dom/server';
import { ProvedorDeMovimento } from './ganchos/movimento.jsx';
import { sprite } from './dados/icones.jsx';
import { PAGINAS, resolverPagina } from './paginas/index.jsx';

export { PAGINAS };

export function renderizar(slug) {
  const pagina = resolverPagina(slug);
  if (!pagina) throw new Error(`Slug desconhecido: '${slug}'.`);

  const corpo = renderToString(
    <ProvedorDeMovimento>{pagina.elemento}</ProvedorDeMovimento>,
  );

  return {
    corpo,
    sprite: sprite(corpo),
    meta: pagina.meta,
    receita: pagina.receita,
  };
}
