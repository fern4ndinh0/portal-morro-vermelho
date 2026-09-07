/* ==========================================================================
   ANTES E DEPOIS

   O recurso mais emocionalmente potente que existe em patrimônio digital,
   ausente por completo na v1. Custa duas fotografias do mesmo ângulo.

   O CONTROLE REAL É UM <input type="range">. Isso não é detalhe: teclado,
   leitor de tela e toque funcionam de graça, sem uma linha de código de
   acessibilidade. O arraste é só um atalho por cima — quem implementa
   comparador com <div> e mousemove precisa reescrever tudo isso à mão, e
   normalmente não reescreve.
   ========================================================================== */

import { useCallback, useRef, useState } from 'react';
import { Icone } from '../../dados/icones.jsx';
import { COMPARADOR } from '../../dados/home.js';
import { Revelar } from '../../ganchos/Revelar.jsx';
import { CaixaDeMidia } from '../CaixaDeMidia.jsx';

export function AntesDepois() {
  const comp = useRef(null);
  const [pos, setPos] = useState(50);
  const arrastando = useRef(false);

  const doEvento = useCallback((ev) => {
    const caixa = comp.current;
    if (!caixa) return;
    const r = caixa.getBoundingClientRect();
    const x = ev.clientX - r.left;
    setPos(Math.max(0, Math.min(100, (x / r.width) * 100)));
  }, []);

  return (
    <section className="secao" id="antes-depois" data-superficie="elevada" aria-labelledby="ad-titulo">
      <div className="envelope">
        <Revelar as="header" style={{ maxWidth: '46rem', marginBottom: 'var(--e-7)' }}>
          <p className="olho">A mesma esquina</p>
          <h2 className="titulo-secao" id="ad-titulo">Antes e depois</h2>
          <p className="linha-fina">
            Arraste. Duas fotografias do mesmo ponto, separadas por décadas, dizem
            mais sobre um lugar do que qualquer texto que possamos escrever.
          </p>
        </Revelar>

        <Revelar
          modo="escala"
          className="comparador"
          ref={comp}
          style={{ '--pos': pos + '%' }}
          onPointerDown={(ev) => {
            if (ev.target.classList.contains('comparador__range')) return;  /* o range cuida de si */
            arrastando.current = true;
            comp.current?.setPointerCapture?.(ev.pointerId);
            doEvento(ev);
          }}
          onPointerMove={(ev) => { if (arrastando.current) doEvento(ev); }}
          onPointerUp={() => { arrastando.current = false; }}
          onPointerCancel={() => { arrastando.current = false; }}
        >
          <CaixaDeMidia
            className="comparador__face comparador__face--depois"
            src={COMPARADOR.depois.src}
            alt={COMPARADOR.depois.alt}
            largura={COMPARADOR.depois.largura}
            altura={COMPARADOR.depois.altura}
          >
            <div className="comparador__ausente">
              <Icone nome="camera" style={{ width: '1.8rem', height: '1.8rem', marginInline: 'auto', opacity: 0.5 }} />
              <p>
                <strong>Falta esta</strong><br />
                A Matriz hoje, do mesmo ângulo da foto antiga<br />
                <span style={{ opacity: 0.7, fontSize: 'var(--t-xs)' }}>
                  salvar como <code>comparador-depois.jpg</code>
                </span>
              </p>
            </div>
          </CaixaDeMidia>

          {/* Primeira fotografia real do acervo no ar. O alt descreve a peça:
              num acervo digital, o alt É o documento para quem não enxerga. */}
          <CaixaDeMidia
            className="comparador__face comparador__face--antes"
            src={COMPARADOR.antes.src}
            alt={COMPARADOR.antes.alt}
            largura={COMPARADOR.antes.largura}
            altura={COMPARADOR.antes.altura}
          >
            <div className="comparador__ausente">
              <Icone nome="doc" style={{ width: '1.8rem', height: '1.8rem', marginInline: 'auto', opacity: 0.5 }} />
              <p><strong>Antes</strong><br />Fotografia histórica do acervo</p>
            </div>
          </CaixaDeMidia>

          <span className="comparador__rotulo comparador__rotulo--esq">Antes</span>
          <span className="comparador__rotulo comparador__rotulo--dir">Hoje</span>

          <span className="comparador__alca" aria-hidden="true">
            <Icone nome="comparar" />
          </span>

          {/* O controle acessível. Fica por cima para receber toque e arraste. */}
          <input
            className="comparador__range"
            type="range" min="0" max="100" step="1"
            value={Math.round(pos)}
            onChange={(ev) => setPos(Number(ev.target.value))}
            aria-label="Comparar fotografia histórica e atual"
            aria-valuetext={`Mostrando ${Math.round(pos)}% da imagem histórica`}
          />
        </Revelar>

        <p style={{ marginTop: 'var(--e-4)', fontSize: 'var(--t-xs)', color: 'var(--texto-tenue)' }}>
          O comparador já funciona — arraste ou use as setas do teclado. Falta só o
          par de fotografias. Se você tem uma foto antiga de qualquer ponto do
          distrito, <a href="#colabore">é isto que precisamos</a>.
        </p>
      </div>
    </section>
  );
}
