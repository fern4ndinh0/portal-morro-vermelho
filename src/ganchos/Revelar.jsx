/* ==========================================================================
   REVELAÇÃO AO ROLAR

   REGRA QUE GOVERNA ESTE ARQUIVO — e é a primeira das três regras do
   projeto: o conteúdo já está visível no HTML. Só DEPOIS que este código
   confirma que está vivo é que o <html> ganha data-revelar-ativo e o CSS
   passa a esconder para animar.

   JavaScript bloqueado, lento ou quebrado = portal íntegro e legível. Foi
   exatamente o que a v1 errava ao usar AOS, que escondia primeiro e revelava
   depois. Numa página pré-renderizada como esta, o erro seria ainda mais
   grave: o HTML sairia perfeito do gerador e o navegador o esconderia.

   Movimento reduzido: o mecanismo nem liga. Nada some, nada anima.
   ========================================================================== */

import { forwardRef, useEffect, useRef, useState } from 'react';
import { useMovimento } from './movimento.jsx';

/* --------------------------------------------------------------------------
   Liga o modo de revelação para a página inteira. Chamado uma única vez, no
   Chassi. Enquanto este efeito não roda, nada está escondido.
   -------------------------------------------------------------------------- */

export function useRevelarAtivo() {
  const { reduzido, prontoNoCliente } = useMovimento();

  useEffect(() => {
    if (!prontoNoCliente) return;
    const html = document.documentElement;

    if (reduzido || !('IntersectionObserver' in window)) {
      html.removeAttribute('data-revelar-ativo');
      return;
    }
    html.setAttribute('data-revelar-ativo', '');
    return () => html.removeAttribute('data-revelar-ativo');
  }, [reduzido, prontoNoCliente]);
}

/* --------------------------------------------------------------------------
   <Revelar> — um elemento que aparece ao entrar na tela.

   as       a tag a renderizar (div por padrão)
   modo     '' | 'esquerda' | 'direita' | 'escala' | 'cortina'  (ver base.css)
   atraso   milissegundos de atraso. Numa lista, passe indice * passo — era
            o que o data-cascata do projeto original calculava em JavaScript,
            e que aqui já se sabe no render porque o conteúdo é uma lista.

   Anima UMA vez e larga o observador, como no original.

   Encaminha ref: alguns componentes (o comparador, por exemplo) precisam do
   mesmo elemento tanto para revelar quanto para medir.
   -------------------------------------------------------------------------- */

export const Revelar = forwardRef(function Revelar({
  as: Tag = 'div',
  modo = '',
  atraso = 0,
  className = '',
  style,
  children,
  ...resto
}, refExterno) {
  const ref = useRef(null);
  const [visivel, setVisivel] = useState(false);
  const { reduzido, prontoNoCliente } = useMovimento();

  useEffect(() => {
    if (!prontoNoCliente || visivel) return;

    const el = ref.current;
    if (!el) return;

    if (reduzido || !('IntersectionObserver' in window)) { setVisivel(true); return; }

    const obs = new IntersectionObserver(
      (entradas) => {
        if (entradas.some((e) => e.isIntersecting)) {
          setVisivel(true);
          obs.disconnect();               /* anima uma vez e libera */
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    );
    obs.observe(el);

    /* Rede de segurança: o que já estiver na tela aparece mesmo que o
       observador não dispare por algum motivo. Estava no original e vale
       manter — é a diferença entre um bug de animação e conteúdo invisível. */
    const rede = setTimeout(() => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) setVisivel(true);
    }, 1200);

    return () => { obs.disconnect(); clearTimeout(rede); };
  }, [reduzido, prontoNoCliente, visivel]);

  const guardarRef = (el) => {
    ref.current = el;
    if (typeof refExterno === 'function') refExterno(el);
    else if (refExterno) refExterno.current = el;
  };

  return (
    <Tag
      ref={guardarRef}
      data-revelar={modo || ''}
      className={visivel ? (className ? className + ' visivel' : 'visivel') : className}
      style={atraso ? { ...style, '--atraso': atraso + 'ms' } : style}
      {...resto}
    >
      {children}
    </Tag>
  );
});
