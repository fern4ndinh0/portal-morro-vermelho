/* ==========================================================================
   TRILHOS HORIZONTAIS (linha do tempo e acervo)

   As setas da v1 eram decorativas — desenhadas, sem função. Estas funcionam,
   desabilitam nas pontas e não roubam o teclado de ninguém: as setas do
   teclado só movem o trilho quando ELE tem o foco.

   O gancho devolve tudo que o componente precisa; nenhum querySelector
   atravessa a árvore para achar o botão do trilho ao lado, que era como o
   projeto original ligava um ao outro (data-trilho-anterior="acervo").
   ========================================================================== */

import { useCallback, useEffect, useRef, useState } from 'react';
import { useComportamentoDeRolagem } from './movimento.jsx';

export function useTrilho() {
  const ref = useRef(null);
  const [noInicio, setNoInicio] = useState(true);
  const [noFim, setNoFim] = useState(false);
  const comportamento = useComportamentoDeRolagem();

  const sincronizar = useCallback(() => {
    const t = ref.current;
    if (!t) return;
    const fim = t.scrollWidth - t.clientWidth - 2;
    setNoInicio(t.scrollLeft <= 2);
    setNoFim(t.scrollLeft >= fim);
  }, []);

  /* Um passo = a largura de um item, ou 60% do trilho — o que for maior.
     Assim o gesto nunca é menor que "avançar um card". */
  const passo = useCallback(() => {
    const t = ref.current;
    if (!t) return 300;
    const primeiro = t.firstElementChild;
    const largura = primeiro ? primeiro.getBoundingClientRect().width : 300;
    return Math.max(largura + 24, t.clientWidth * 0.6);
  }, []);

  const mover = useCallback((sinal, comportamentoForcado) => {
    const t = ref.current;
    if (!t) return;
    t.scrollBy({ left: sinal * passo(), behavior: comportamentoForcado || comportamento });
  }, [passo, comportamento]);

  const anterior = useCallback(() => mover(-1), [mover]);
  const proximo  = useCallback(() => mover(1),  [mover]);

  const aoTeclado = useCallback((ev) => {
    if (ev.key === 'ArrowRight') { ev.preventDefault(); mover(1, 'smooth'); }
    if (ev.key === 'ArrowLeft')  { ev.preventDefault(); mover(-1, 'smooth'); }
  }, [mover]);

  useEffect(() => {
    const t = ref.current;
    if (!t) return;

    let agendado = false;
    const disparar = () => {
      if (agendado) return;
      agendado = true;
      requestAnimationFrame(() => { agendado = false; sincronizar(); });
    };

    t.addEventListener('scroll', disparar, { passive: true });
    window.addEventListener('resize', disparar);
    sincronizar();

    return () => {
      t.removeEventListener('scroll', disparar);
      window.removeEventListener('resize', disparar);
    };
  }, [sincronizar]);

  return { ref, noInicio, noFim, anterior, proximo, aoTeclado };
}
