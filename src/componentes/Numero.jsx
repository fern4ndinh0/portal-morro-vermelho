/* ==========================================================================
   NÚMERO CONTADO

   A segunda regra do projeto: NENHUM número é digitado à mão. O valor vem
   sempre de uma lista de dados (ACERVO.length, e não "4"), então acrescentar
   40 peças faz os números subirem sozinhos — foi exatamente o problema dos
   "500 fotografias / 120 documentos" inventados da v1.

   O valor VERDADEIRO já sai escrito no HTML pré-renderizado. A animação é
   por cima: se ela não rodar — movimento reduzido, sem IntersectionObserver,
   JavaScript desligado — o número certo já está lá. Nunca o contrário.

   Duração fixa para todos os números. Na v1 a duração variava com o alvo, e
   a fileira inteira nunca chegava junto.
   ========================================================================== */

import { useEffect, useRef, useState } from 'react';
import { useMovimentoReduzido } from '../ganchos/movimento.jsx';

const DURACAO = 1100;
const fmt = new Intl.NumberFormat('pt-BR');

export function Numero({ valor, className, ...resto }) {
  const ref = useRef(null);
  const [mostrado, setMostrado] = useState(valor);
  const reduzido = useMovimentoReduzido();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduzido || valor === 0 || !('IntersectionObserver' in window)) return;

    let quadro = 0;
    const obs = new IntersectionObserver((entradas) => {
      if (!entradas.some((e) => e.isIntersecting)) return;
      obs.disconnect();

      let inicio = null;
      const passo = (t) => {
        if (inicio === null) inicio = t;
        const p = Math.min((t - inicio) / DURACAO, 1);
        const suave = 1 - Math.pow(1 - p, 3);          /* ease-out cubic */
        setMostrado(Math.round(valor * suave));
        if (p < 1) quadro = requestAnimationFrame(passo);
        else setMostrado(valor);                        /* fecha exato */
      };
      quadro = requestAnimationFrame(passo);
    }, { threshold: 0.6 });

    obs.observe(el);
    return () => { obs.disconnect(); cancelAnimationFrame(quadro); };
  }, [valor, reduzido]);

  return (
    <span ref={ref} className={className} data-valor={valor} {...resto}>
      {fmt.format(mostrado)}
    </span>
  );
}
