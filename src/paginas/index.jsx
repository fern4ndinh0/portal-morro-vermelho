/* ==========================================================================
   AS SETE PÁGINAS

   Ponto único que responde "que slug é este e o que ele renderiza". O
   gerador percorre PAGINAS para publicar; o modo de desenvolvimento usa
   resolverPagina() para decidir o que mostrar a partir do endereço.

   Os dois consultam a MESMA função — é o que garante que o que se vê em
   'npm run dev' é exatamente o que vai ao ar.

   RECEITA
   Que CSS e que JS cada tipo de página recebe. tokens e base são a fundação;
   chassi é navbar/rodapé/botões; home e artigo só entram onde são usados.
   Uma página de documento não carrega as linhas de hero, cartões e
   acervo que nunca usa.
   ========================================================================== */

import { DOCUMENTOS, vizinhos } from '../dados/documentos/index.js';
import { Home, META_HOME } from './Home.jsx';
import { Artigo, metaArtigo } from './Artigo.jsx';
import { Erro404, META_404 } from './Erro404.jsx';

export const PAGINAS = [
  { slug: 'index', receita: 'home' },
  ...DOCUMENTOS.map((d) => ({ slug: d.slug, receita: 'artigo' })),
  { slug: '404', receita: 'nu' },
];

export function resolverPagina(slug) {
  if (slug === 'index') {
    return { meta: META_HOME, receita: 'home', elemento: <Home /> };
  }

  if (slug === '404') {
    return { meta: META_404, receita: 'nu', elemento: <Erro404 /> };
  }

  const { doc, anterior, proximo } = vizinhos(slug);
  if (!doc) return null;

  return {
    meta: metaArtigo(doc),
    receita: 'artigo',
    elemento: <Artigo doc={doc} anterior={anterior} proximo={proximo} />,
  };
}

/* --------------------------------------------------------------------------
   Do endereço para o slug.

   Serve ao modo de desenvolvimento, onde o portal roda num servidor e os
   links continuam sendo os mesmos do site publicado ('estrada-real.html').
   Endereço desconhecido cai no 404 — o mesmo que acontece no site no ar.
   -------------------------------------------------------------------------- */

export function slugDoCaminho(caminho) {
  const arquivo = (caminho || '/').split('?')[0].split('#')[0].split('/').pop();
  if (!arquivo || arquivo === 'index.html') return 'index';
  const slug = arquivo.replace(/\.html$/, '');
  return PAGINAS.some((p) => p.slug === slug) ? slug : '404';
}
