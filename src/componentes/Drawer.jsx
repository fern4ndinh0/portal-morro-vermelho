/* ==========================================================================
   MENU MOBILE

   O que faltava por completo na v1 e continua sendo o pedaço mais delicado
   do portal: aria-expanded, Esc, foco preso dentro do painel, scroll travado
   SEM perder a posição da página, e foco devolvido a quem abriu ao fechar.

   O conteúdo deriva do mapa do site (MENU_RODAPE): um item novo no rodapé
   aparece aqui sozinho, e não há uma segunda lista para manter em dia.
   ========================================================================== */

import { useCallback, useEffect, useRef, useState } from 'react';
import { Icone } from '../dados/icones.jsx';
import { MENU_RODAPE, alvo } from '../dados/navegacao.js';
import { useMovimento } from '../ganchos/movimento.jsx';
import { usePagina } from './contexto.js';
import { LinkDeMenu } from './LinkDeMenu.jsx';
import { Marca } from './Marca.jsx';

const FOCAVEIS = 'a[href], button:not(:disabled), input, select, textarea, [tabindex]:not([tabindex="-1"])';

/* --------------------------------------------------------------------------
   Trava o scroll do corpo sem "pular" para o topo — o truque é guardar a
   posição, aplicar top negativo e devolvê-la ao destravar. position:fixed
   sozinho leva a página para o topo e é a causa do bug clássico de "abri o
   menu, fechei, e perdi onde estava lendo".
   -------------------------------------------------------------------------- */

function useScrollTravado(travado) {
  const yGuardado = useRef(0);

  useEffect(() => {
    if (!travado) return;

    yGuardado.current = window.scrollY;
    const corpo = document.body;

    corpo.style.top = -yGuardado.current + 'px';
    corpo.style.position = 'fixed';
    corpo.style.width = '100%';
    corpo.setAttribute('data-scroll-travado', '');

    return () => {
      corpo.removeAttribute('data-scroll-travado');
      corpo.style.position = '';
      corpo.style.top = '';
      corpo.style.width = '';
      window.scrollTo(0, yGuardado.current);
    };
  }, [travado]);
}

export function Drawer({ aberto, fechar }) {
  const { slug } = usePagina();
  const ref = useRef(null);
  const focoAnterior = useRef(null);
  const { reduzido, alternar } = useMovimento();

  /* aria-hidden só volta DEPOIS da transição de saída: tirá-lo no mesmo
     quadro faz o leitor de tela perder o anúncio no meio do caminho. */
  const [ariaOculto, setAriaOculto] = useState(true);

  useScrollTravado(aberto);

  const focaveis = useCallback(() => {
    if (!ref.current) return [];
    return Array.from(ref.current.querySelectorAll(FOCAVEIS))
      .filter((el) => el.offsetParent !== null);
  }, []);

  useEffect(() => {
    if (aberto) {
      setAriaOculto(false);
      focoAnterior.current = document.activeElement;

      /* O drawer entra com transição de opacity E de visibility. Enquanto a
         visibility ainda for 'hidden', focus() é simplesmente ignorado pelo
         navegador — sem erro e sem efeito. Um único requestAnimationFrame
         não basta: dependendo do quadro em que a transição pega, o foco cai
         no <body> e quem navega por teclado abre o menu e continua tabulando
         a página atrás dele.

         Por isso a tentativa se repete, quadro a quadro, até o foco de fato
         aterrissar — ou até ~30 quadros, para nunca virar laço infinito. */
      let cancelado = false;
      let tentativas = 0;

      const tentar = () => {
        if (cancelado) return;
        const alvo = focaveis()[0];
        if (alvo) {
          alvo.focus();
          if (document.activeElement === alvo) return;
        }
        if (++tentativas < 30) requestAnimationFrame(tentar);
      };

      requestAnimationFrame(tentar);
      return () => { cancelado = true; };
    }

    const t = setTimeout(() => setAriaOculto(true), 420);
    if (focoAnterior.current?.focus) focoAnterior.current.focus();
    return () => clearTimeout(t);
  }, [aberto, focaveis]);

  /* Passou para desktop com o menu aberto: fecha, senão o scroll fica preso
     numa largura em que o drawer nem aparece mais. */
  useEffect(() => {
    if (!aberto) return;
    const mq = window.matchMedia('(min-width: 62rem)');
    const aoMudar = (e) => { if (e.matches) fechar(); };
    mq.addEventListener('change', aoMudar);
    return () => mq.removeEventListener('change', aoMudar);
  }, [aberto, fechar]);

  const aoTeclar = (ev) => {
    if (ev.key === 'Escape') { ev.preventDefault(); fechar(); return; }
    if (ev.key !== 'Tab') return;

    const lista = focaveis();
    if (!lista.length) return;
    const primeiro = lista[0];
    const ultimo = lista[lista.length - 1];

    if (ev.shiftKey && document.activeElement === primeiro) {
      ev.preventDefault(); ultimo.focus();
    } else if (!ev.shiftKey && document.activeElement === ultimo) {
      ev.preventDefault(); primeiro.focus();
    }
  };

  /* Cascata de entrada dos links, do topo para baixo. */
  let contador = 0;
  const atrasoDoLink = () => {
    const i = contador++;
    if (!aberto || reduzido) return undefined;
    return { transitionDelay: (60 + i * 32) + 'ms' };
  };

  return (
    <div
      ref={ref}
      className="drawer"
      id="menu-mobile"
      data-aberto={aberto ? 'sim' : 'nao'}
      aria-hidden={ariaOculto ? 'true' : undefined}
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navegação"
      onKeyDown={aoTeclar}
    >
      <div className="drawer__topo">
        <Marca slug={slug} comoLink={false} />
        <button type="button" className="acao" data-acao="fechar-menu" aria-label="Fechar menu" onClick={fechar}>
          <span className="hamburguer" aria-hidden="true">
            <span style={{ transform: 'translateY(0.375rem) rotate(45deg)' }} />
            <span style={{ transform: 'translateY(-0.375rem) rotate(-45deg)' }} />
          </span>
        </button>
      </div>

      <div className="drawer__corpo">
        {MENU_RODAPE.map((grupo) => (
          <div className="drawer__grupo" key={grupo.titulo}>
            <h2 className="drawer__grupo-titulo">{grupo.titulo}</h2>
            {grupo.itens.map((item) => (
              <LinkDeMenu
                key={item.nome}
                item={item}
                classe="drawer__link"
                classeBreve="drawer__link breve"
                style={atrasoDoLink()}
                depois={item.href ? <> <Icone nome="seta-dir" /></> : null}
                /* Ir para uma âncora da PRÓPRIA página deve fechar o menu —
                   senão o painel fica por cima do destino. Repare que o teste
                   é sobre o href já resolvido: 'index.html#historia' só vira
                   '#historia' quando se está na home. */
                onClick={alvo(item.href, slug)?.startsWith('#') ? fechar : undefined}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="drawer__pe">
        <span style={{ fontSize: 'var(--t-xs)', letterSpacing: '.1em', textTransform: 'uppercase', opacity: 0.6 }}>
          Preferências
        </span>
        <button
          type="button"
          className="acao"
          data-acao="movimento"
          aria-pressed={reduzido ? 'true' : 'false'}
          aria-label={reduzido ? 'Ativar animações' : 'Reduzir animações'}
          onClick={alternar}
        >
          <Icone nome="movimento" />
        </button>
      </div>
    </div>
  );
}
