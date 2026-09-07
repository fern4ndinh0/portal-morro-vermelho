/* ==========================================================================
   ROLAGEM

   Tudo que reage ao scroll do portal passa por aqui, por um motivo só: um
   único listener por comportamento, sempre passivo e sempre estrangulado por
   requestAnimationFrame. Era assim no projeto original e continua sendo — a
   alternativa (cada componente pendurando o seu próprio listener não
   estrangulado) é o caminho mais curto para uma página que engasga ao rolar
   num celular modesto.
   ========================================================================== */

import { useEffect, useRef, useState } from 'react';

/* --------------------------------------------------------------------------
   Base: chama 'aoRolar' no máximo uma vez por quadro, e uma vez ao montar.
   -------------------------------------------------------------------------- */

export function useAoRolar(aoRolar, deps = []) {
  const fn = useRef(aoRolar);
  fn.current = aoRolar;

  useEffect(() => {
    let agendado = false;

    const avaliar = () => { agendado = false; fn.current(); };
    const disparar = () => {
      if (!agendado) { agendado = true; requestAnimationFrame(avaliar); }
    };

    window.addEventListener('scroll', disparar, { passive: true });
    window.addEventListener('resize', disparar);
    avaliar();

    return () => {
      window.removeEventListener('scroll', disparar);
      window.removeEventListener('resize', disparar);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

/* --------------------------------------------------------------------------
   NAVBAR — ganha corpo ao sair do topo, some ao descer, volta ao subir.

   Nunca se esconde com o menu aberto, com foco dentro dela, nem perto do
   topo da página: esconder a navegação debaixo do dedo de quem está tabulando
   por ela é o tipo de "detalhe de rolagem" que quebra acessibilidade.
   -------------------------------------------------------------------------- */

const LIMIAR_SOLIDO  = 40;    /* px para a barra ganhar corpo   */
const LIMIAR_OCULTAR = 320;   /* px antes de poder se esconder  */

export function useNavbarAoRolar(refNavbar, menuAberto) {
  const [rolado, setRolado] = useState(false);
  const [oculto, setOculto] = useState(false);
  const ultimoY = useRef(0);
  const aberto = useRef(menuAberto);
  aberto.current = menuAberto;

  useAoRolar(() => {
    const y = window.scrollY;
    setRolado(y > LIMIAR_SOLIDO);

    const descendo = y > ultimoY.current + 4;
    const subindo  = y < ultimoY.current - 4;
    const podeOcultar =
      y > LIMIAR_OCULTAR &&
      !aberto.current &&
      !(refNavbar.current && refNavbar.current.contains(document.activeElement));

    if (descendo && podeOcultar) setOculto(true);
    else if (subindo || y <= LIMIAR_OCULTAR) setOculto(false);

    ultimoY.current = y;
  });

  return { rolado, oculto };
}

/* --------------------------------------------------------------------------
   Passou de uma tela de altura? (botão de voltar ao topo)
   -------------------------------------------------------------------------- */

export function usePassouUmaTela() {
  const [passou, setPassou] = useState(false);
  useAoRolar(() => setPassou(window.scrollY > window.innerHeight));
  return passou;
}

/* --------------------------------------------------------------------------
   SEÇÃO ATIVA — o aria-current do menu que acompanha a rolagem.

   Devolve o id da seção em foco. Os links comparam o próprio data-secao com
   ele; nenhum componente precisa escrever atributo em nó alheio, que era o
   que o projeto original fazia por querySelectorAll.
   -------------------------------------------------------------------------- */

export function useSecaoAtiva(ids, rootMargin = '-45% 0px -50% 0px') {
  const [ativa, setAtiva] = useState(null);
  const chave = ids.join('|');

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;

    const alvos = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!alvos.length) return;

    const obs = new IntersectionObserver(
      (entradas) => {
        const dentro = entradas.filter((e) => e.isIntersecting);
        if (dentro.length) setAtiva(dentro[dentro.length - 1].target.id);
      },
      { rootMargin },
    );
    alvos.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chave, rootMargin]);

  return ativa;
}

/* --------------------------------------------------------------------------
   BARRA DE PROGRESSO DE LEITURA (páginas de documento)
   -------------------------------------------------------------------------- */

export function useProgressoDeLeitura(refArtigo) {
  const [progresso, setProgresso] = useState(0);

  useAoRolar(() => {
    const el = refArtigo.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const altura = r.height - window.innerHeight;
    const lido = altura > 0 ? (-r.top) / altura : 1;
    setProgresso(Math.max(0, Math.min(1, lido)));
  });

  return progresso;
}
