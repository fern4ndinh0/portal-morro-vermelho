/* ==========================================================================
   REVELAÇÕES

   Substitui a faixa de estatísticas inventadas da v1 ("300+ anos, 500
   fotografias, 120 documentos, 18 patrimônios" — nenhum número real).
   Aqui: três fatos específicos e verificáveis, cada um com a sua fonte
   declarada ao lado. Especificidade emociona; adjetivo não.

   Editar o conteúdo é editar REVELACOES em src/dados/home.js.
   ========================================================================== */

import { REVELACOES } from '../../dados/home.js';
import { Revelar } from '../../ganchos/Revelar.jsx';
import { Html } from '../Texto.jsx';

const CASCATA = 110;   /* ms entre um cartão e o seguinte */

export function Revelacoes() {
  return (
    <section className="secao" id="revelacoes" data-superficie="papel" aria-labelledby="revelacoes-titulo">
      <div className="envelope">
        <Revelar as="header" style={{ maxWidth: '52rem', marginBottom: 'var(--e-8)' }}>
          <p className="olho">Comece por aqui</p>
          <h2 className="titulo-secao" id="revelacoes-titulo">
            Três coisas que você provavelmente não sabe sobre este distrito
          </h2>
          <p className="linha-fina">
            Nenhuma delas cabe num folheto de turismo. Todas são checáveis, e é por
            isso que aparecem com a fonte ao lado.
          </p>
        </Revelar>

        <div className="revelacoes">
          {REVELACOES.map((r, i) => (
            <Revelar as="article" className="revelacao" key={r.num} atraso={i * CASCATA}>
              <span className="revelacao__num">{r.num}</span>
              <h3 className="revelacao__titulo">{r.titulo}</h3>
              <Html className="revelacao__texto" texto={r.texto} />
              <cite className="revelacao__fonte">{r.fonte}</cite>
            </Revelar>
          ))}
        </div>
      </div>
    </section>
  );
}
