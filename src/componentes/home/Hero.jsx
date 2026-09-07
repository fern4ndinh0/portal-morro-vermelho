/* ==========================================================================
   HERO CINEMATOGRÁFICO

   Decisão deliberada: ZERO fotografia de banco de imagem. A profundidade vem
   de camadas SVG da própria serra, com parallax por transform. Um portal de
   memória local ilustrado com stock photo afirma, na sua camada mais
   visível, que o lugar dele não tem imagem própria.

   MODO DE MÍDIA
   Quando existe fotografia real, ela vira o hero e as serras saem de cena —
   quem faz isso é o CSS, por :has(.hero__quadro[data-tem-midia="sim"]).
   A classe hero--retrato liga o layout para mídia VERTICAL (9:16, Reels):
   em desktop ela ganha moldura própria ao lado do texto, sem corte. Para
   mídia panorâmica (16:9), não use a classe: ela preenche o hero inteiro.

   AJUSTE FINO da fotografia, direto aqui, sem tocar no CSS:
     --foco     qual faixa aparece:  50% 30% sobe · 50% 70% desce
     --zoom     aproximação:         1.15 aproxima 15%
     --desfoque profundidade de campo (0 para fotografia grande e nítida)
   ========================================================================== */

import { useEffect, useRef } from 'react';
import { Icone } from '../../dados/icones.jsx';
import { ACERVO } from '../../dados/home.js';
import { useMovimento } from '../../ganchos/movimento.jsx';
import { useAoRolar } from '../../ganchos/rolagem.js';
import { CaixaDeMidia } from '../CaixaDeMidia.jsx';
import { AVerificar } from '../Texto.jsx';
import { Numero } from '../Numero.jsx';

/* Três planos de serra. O fator de parallax é diferente por plano: o plano
   de fundo se move MENOS, que é o que produz sensação de profundidade real. */
const SERRAS = [
  { classe: 'hero__serra--3', fator: 0.30, d: 'M0,320V180c120-30,200,10,320-20s200,10,320-20s200,10,320-20s200,10,320-5l160,15V320Z' },
  { classe: 'hero__serra--2', fator: 0.16, d: 'M0,320V215l110-50l90,40l100-65l110,55l110-75l120,65l120-50l120,65l110-50l130,55l120-50l110,50l90-35V320Z' },
  { classe: 'hero__serra--1', fator: 0.07, d: 'M0,320V252l90-36l90,40l110-56l100,46l110-56l120,60l110-46l120,50l110-40l120,46l120-40l120,36l100-30V320Z' },
];

export function Hero() {
  const hero = useRef(null);
  const serras = useRef([]);
  const naTela = useRef(true);
  const { reduzido, prontoNoCliente } = useMovimento();

  /* --- Entrada em máscara, linha por linha ------------------------------ */
  useEffect(() => {
    if (!prontoNoCliente || !hero.current) return;

    if (reduzido) { hero.current.setAttribute('data-entrou', 'sim'); return; }

    /* Dois quadros: o primeiro garante que o estado inicial foi pintado, o
       segundo dispara a transição. Um só não basta — o navegador pode
       coalescer as duas mudanças e a animação simplesmente não acontece. */
    const q1 = requestAnimationFrame(() => {
      requestAnimationFrame(() => hero.current?.setAttribute('data-entrou', 'sim'));
    });
    return () => cancelAnimationFrame(q1);
  }, [reduzido, prontoNoCliente]);

  /* --- Parallax --------------------------------------------------------- */
  useEffect(() => {
    if (!hero.current || !('IntersectionObserver' in window)) return;
    const obs = new IntersectionObserver((e) => { naTela.current = e[0].isIntersecting; });
    obs.observe(hero.current);
    return () => obs.disconnect();
  }, []);

  /* Escreve direto no style, sem passar por estado: um setState por quadro
     de rolagem re-renderizaria o hero inteiro 60 vezes por segundo. Este é o
     caso em que mexer no DOM na mão é a resposta certa em React, e não uma
     concessão. Jamais background-attachment: fixed, que trava em iOS. */
  useAoRolar(() => {
    if (reduzido || !naTela.current) return;
    const y = window.scrollY;
    serras.current.forEach((el, i) => {
      if (el) el.style.setProperty('--parallax', -(y * SERRAS[i].fator).toFixed(1) + 'px');
    });
  }, [reduzido]);

  return (
    <section ref={hero} className="hero" data-entrou="nao" aria-labelledby="hero-titulo">
      <div className="hero__ceu" aria-hidden="true" />

      <div className="hero__serras" aria-hidden="true">
        {SERRAS.map((s, i) => (
          <svg
            key={s.classe}
            ref={(el) => { serras.current[i] = el; }}
            className={`hero__serra ${s.classe}`}
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            focusable="false"
          >
            <path fill="currentColor" d={s.d} />
          </svg>
        ))}
      </div>

      <div className="hero__grao" aria-hidden="true" />
      <div className="hero__base" aria-hidden="true" />

      <div className="envelope hero__conteudo">
        <div className="hero__texto">
          <h1 className="hero__titulo" id="hero-titulo">
            <span className="hero__linha"><span style={{ '--atraso': '140ms' }}>Morro</span></span>
            <span className="hero__linha"><span style={{ '--atraso': '250ms' }}><em>Vermelho</em></span></span>
          </h1>

          <p className="hero__lema">Amor à Liberdade</p>

          <p className="hero__frase">
            O arquivo aberto de um distrito histórico de Minas: documentos,
            fotografias, vozes de moradores e a tradição que ainda para as ruas
            todos os anos.
          </p>

          <div className="hero__acoes">
            <a className="btn btn--primario" href="#acervo">
              Entrar no Museu Digital
              <Icone nome="seta-dir" />
            </a>
            <a className="btn btn--claro" href="#visite">
              <Icone nome="pin" />
              Como visitar
            </a>
          </div>
        </div>

        {/* Fotografia real da Matriz, em modo fundo. Trocar a foto é
            substituir o arquivo em midia/, sem tocar aqui. O master em
            resolução cheia fica em originais/, fora da publicação.
            width/height batem com o arquivo real (2400×1340): é o que reserva
            o espaço certo e evita o pulo de layout enquanto carrega.
            alt vazio + aria-hidden de propósito — aqui a foto é fundo, e o
            conteúdo é o título por cima. A mesma paisagem aparece descrita em
            detalhe no acervo, que é onde ela é peça e não cenário. */}
        <CaixaDeMidia
          className="hero__quadro"
          classeImg="hero__midia"
          estiloImg={{ '--foco': '50% 58%', '--zoom': 1.02, '--desfoque': 0 }}
          src="midia/hero-foto.jpg"
          largura={2400}
          altura={1340}
          alt=""
          ariaHidden
          prioridade
        />
      </div>

      <a className="hero__rolar" href="#revelacoes">
        Explorar
        <span className="hero__rolar-trilho" aria-hidden="true" />
      </a>

      {/* Barra do hero: informação útil, não enfeite. */}
      <div className="hero__barra">
        <span className="hero__barra-item">
          <Icone nome="pin" />
          A <strong>±35 km</strong>
          <AVerificar marca title="Distância a medir e confirmar">distância a confirmar</AVerificar>
          {' '}de Belo Horizonte
        </span>
        <span className="hero__barra-item">
          <Icone nome="calendario" />
          Próxima festa: <strong>Cavalhadas</strong>
          <AVerificar marca title="Data da próxima edição a confirmar">data a confirmar</AVerificar>
        </span>
        <span className="hero__barra-item">
          <Icone nome="doc" />
          <strong><Numero valor={ACERVO.length} /></strong> peças no acervo digital
        </span>
      </div>
    </section>
  );
}
