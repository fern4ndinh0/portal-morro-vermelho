/* ==========================================================================
   ENTRADA DO CLIENTE

   Compilada em formato IIFE — script clássico, arquivo único, React
   embutido, ZERO import em tempo de execução. É essa decisão que mantém o
   portal abrindo do disco: <script type="module"> é bloqueado em file://
   pela política de origem, e um portal cujo tema é preservação precisa
   continuar funcionando dentro de um pendrive entregue a uma escola.

   No site publicado ela HIDRATA um HTML que já está completo. Em
   desenvolvimento não há o que hidratar, então ela monta do zero — é a única
   diferença entre os dois modos, e está isolada nas cinco linhas abaixo.
   ========================================================================== */

import { createRoot, hydrateRoot } from 'react-dom/client';
import { ProvedorDeMovimento } from './ganchos/movimento.jsx';
import { REVISAO } from './dados/contato.js';
import { resolverPagina, slugDoCaminho } from './paginas/index.jsx';

/* O gerador escreve data-pagina no <html>. Em desenvolvimento ele não
   existe, e o slug vem do endereço. */
const slug = document.documentElement.dataset.pagina || slugDoCaminho(location.pathname);
const pagina = resolverPagina(slug) || resolverPagina('404');

const arvore = <ProvedorDeMovimento>{pagina.elemento}</ProvedorDeMovimento>;

if (import.meta.env.DEV) {
  /* Em desenvolvimento o <html> é o index.html estático do Vite, então as
     marcas que o gerador escreveria entram aqui. */
  document.documentElement.setAttribute('data-revisao', REVISAO ? 'on' : 'off');
  document.title = pagina.meta.titulo;

  const raiz = document.getElementById('raiz');
  raiz.innerHTML = '';
  createRoot(raiz).render(arvore);
} else {
  hydrateRoot(document.getElementById('raiz'), arvore);
}
