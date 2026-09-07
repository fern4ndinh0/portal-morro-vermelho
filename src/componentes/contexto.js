/* ==========================================================================
   CONTEXTO DA PÁGINA

   Duas informações que praticamente todo componente de navegação precisa e
   que ninguém deveria ter de receber por prop atravessando cinco níveis:

     slug        qual página está aberta ('index', 'estrada-real', '404'…).
                 É o que decide se 'index.html#acervo' vira '#acervo', e o
                 que liga o aria-current="page" no item do menu.

     secaoAtiva  qual seção da home está em foco na rolagem. Só a home
                 preenche; nas outras páginas é null e os links simplesmente
                 não se marcam.
   ========================================================================== */

import { createContext, useContext } from 'react';

export const PaginaContexto = createContext({ slug: 'index', secaoAtiva: null });

export function usePagina() {
  return useContext(PaginaContexto);
}
