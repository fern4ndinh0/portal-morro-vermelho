/* ==========================================================================
   AMPLIADOR — a fotografia em tela cheia, com um clique

   No texto, toda foto mora num quadro de proporção fixa (ver .figura__quadro
   em artigo.css): a página fica uniforme, e nenhuma foto em pé estica a
   coluna nem some de tão pequena. O quadro, porém, mostra a foto reduzida.
   Este componente é o outro lado do acordo: um clique abre a foto inteira,
   no maior tamanho que a tela comporta, com a legenda e o crédito.

   SEM JAVASCRIPT CONTINUA FUNCIONANDO
   Cada foto é um <a href="midia/…"> de verdade. Sem script, o clique abre o
   arquivo da imagem, que é o "ampliar" mais honesto que existe. Com script,
   este componente intercepta o clique e abre o <dialog> no lugar. Um clique
   com Ctrl, Cmd ou botão do meio continua abrindo em aba nova, como qualquer
   link.

   Por que <dialog> nativo e não uma div com z-index: showModal() já dá, de
   graça, a captura de foco, o Esc, o fundo inerte para leitor de tela e a
   camada acima de tudo. Reescrever isso à mão é onde lightbox costuma errar.

   Um só por página, e ele não precisa saber quais fotos existem: lê do DOM,
   na hora do clique, todo a[data-ampliar] — e é essa lista que as setas
   percorrem, na ordem em que as fotos aparecem no texto.
   ========================================================================== */

import { useCallback, useEffect, useRef, useState } from 'react';
import { Icone } from '../dados/icones.jsx';

/* Uma peça da lista: o que o dialog precisa para desenhar a foto. A legenda
   vem do <figcaption> já renderizado — é conteúdo nosso, escrito em
   src/dados/documentos/, e pode ter <em> e <strong>. */
function lerPeca(a) {
  const img = a.querySelector('img');
  const legenda = a.closest('figure')?.querySelector('figcaption');
  return {
    src: a.getAttribute('href'),
    alt: img?.getAttribute('alt') || '',
    legenda: legenda && legenda.textContent.trim() ? legenda.innerHTML : '',
  };
}

export function Ampliador() {
  const dialogo = useRef(null);
  const origem = useRef(null);
  const toque = useRef(null);
  const [pecas, setPecas] = useState([]);
  const [atual, setAtual] = useState(-1);

  const peca = pecas[atual];
  const varias = pecas.length > 1;

  const ir = useCallback((passo) => {
    setAtual((i) => (i < 0 ? i : (i + passo + pecas.length) % pecas.length));
  }, [pecas.length]);

  const fechar = useCallback(() => dialogo.current?.close(), []);

  /* O clique em qualquer foto do texto, por delegação: uma escuta só, que
     vale também para fotos acrescentadas depois. */
  useEffect(() => {
    const aoClicar = (ev) => {
      const a = ev.target.closest?.('a[data-ampliar]');
      if (!a) return;
      if (ev.button !== 0 || ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.altKey) return;
      if (!dialogo.current?.showModal) return;   /* navegador antigo: segue o link */

      ev.preventDefault();
      const todos = [...document.querySelectorAll('a[data-ampliar]')];
      origem.current = a;
      setPecas(todos.map(lerPeca));
      setAtual(todos.indexOf(a));
      dialogo.current.showModal();
    };
    document.addEventListener('click', aoClicar);
    return () => document.removeEventListener('click', aoClicar);
  }, []);

  /* Setas do teclado enquanto aberto. Esc é do próprio <dialog>. */
  useEffect(() => {
    if (atual < 0 || !varias) return undefined;
    const aoTeclar = (ev) => {
      if (ev.key === 'ArrowRight') { ev.preventDefault(); ir(1); }
      if (ev.key === 'ArrowLeft') { ev.preventDefault(); ir(-1); }
    };
    document.addEventListener('keydown', aoTeclar);
    return () => document.removeEventListener('keydown', aoTeclar);
  }, [atual, varias, ir]);

  /* Fechou (Esc, botão, clique fora): o foco volta para a foto de onde se
     partiu, e não para o topo da página. */
  const aoFechar = () => {
    setAtual(-1);
    origem.current?.focus({ preventScroll: true });
  };

  /* Clique no escuro em volta da foto fecha. O alvo é o próprio <dialog> ou
     o palco — nunca a imagem, a legenda ou um botão. */
  const aoClicarNoFundo = (ev) => {
    if (ev.target === dialogo.current || ev.target.classList.contains('ampliador__palco')) fechar();
  };

  /* Deslizar o dedo troca de foto no celular. */
  const aoTocar = (ev) => { toque.current = ev.changedTouches[0].clientX; };
  const aoSoltar = (ev) => {
    if (toque.current === null || !varias) return;
    const dx = ev.changedTouches[0].clientX - toque.current;
    toque.current = null;
    if (Math.abs(dx) > 50) ir(dx < 0 ? 1 : -1);
  };

  return (
    <dialog
      ref={dialogo}
      className="ampliador"
      aria-label="Fotografia ampliada"
      onClose={aoFechar}
      onClick={aoClicarNoFundo}
      onTouchStart={aoTocar}
      onTouchEnd={aoSoltar}
    >
      <div className="ampliador__palco">
        {peca && <img key={peca.src} className="ampliador__img" src={peca.src} alt={peca.alt} />}
      </div>

      <div className="ampliador__rodape">
        {peca?.legenda
          ? <div className="ampliador__legenda" dangerouslySetInnerHTML={{ __html: peca.legenda }} />
          : <div className="ampliador__legenda" />}
        {varias && (
          <p className="ampliador__contador" aria-live="polite">
            {atual + 1} de {pecas.length}
          </p>
        )}
      </div>

      <button type="button" className="ampliador__botao ampliador__fechar" aria-label="Fechar" onClick={fechar}>
        <Icone nome="fechar" />
      </button>

      {/* As setas saem sempre no HTML, só escondidas: o sprite de ícones é
          podado pelo que a página renderiza, e um ícone que só aparecesse
          depois da hidratação ficaria sem desenho. */}
      <button
        type="button" className="ampliador__botao ampliador__anterior"
        aria-label="Foto anterior" hidden={!varias} onClick={() => ir(-1)}
      >
        <Icone nome="seta-esq" />
      </button>
      <button
        type="button" className="ampliador__botao ampliador__proxima"
        aria-label="Próxima foto" hidden={!varias} onClick={() => ir(1)}
      >
        <Icone nome="seta-dir" />
      </button>
    </dialog>
  );
}
