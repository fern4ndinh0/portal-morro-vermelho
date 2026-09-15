/* ==========================================================================
   DESCOBRIR — grade editorial assimétrica

   A v1 tinha quatro cards 3/4 idênticos, com gradiente e título que sobe no
   hover: o card padrão de qualquer template. Aqui a grade tem ritmo, os
   cartões têm índice, e o gesto P&B → cor (que na v1 estava sozinho em um
   card) virou princípio: o passado ganha cor ao ser tocado.

   Para colocar a fotografia de um cartão, acrescente 'img' ao item em
   CAMINHOS (src/dados/home.js). Enquanto não houver arquivo, o cartão usa a
   cor de 'tom' — e continua inteiro, sem retângulo quebrado.
   ========================================================================== */

import { Icone } from '../../dados/icones.jsx';
import { CAMINHOS } from '../../dados/home.js';
import { Revelar } from '../../ganchos/Revelar.jsx';
import { Midia, useMidia } from '../CaixaDeMidia.jsx';

const CASCATA = 90;

/* O cartão é, ao mesmo tempo, o elemento que revela ao rolar E a caixa que
   precisa de data-tem-midia. Por isso ele usa o gancho de mídia direto, em
   vez de <CaixaDeMidia>: aninhar os dois criaria um elemento a mais no meio
   da grade, e a grade é assimétrica de propósito. */
function Cartao({ caminho, atraso }) {
  const c = caminho;
  const midia = useMidia(c.img?.src);
  const classe = c.grande ? 'card card--grande' : 'card';

  return (
    <Revelar
      as="a"
      href={c.href}
      className={classe}
      atraso={atraso}
      {...(c.img ? midia.propsDaCaixa : {})}
    >
      {c.img && (
        <Midia
          midia={midia}
          className="card__img"
          src={c.img.src}
          largura={c.img.largura}
          altura={c.img.altura}
          alt=""
        />
      )}
      <span className="card__vazio" style={{ '--tom': c.tom }} aria-hidden="true" />
      <span className="card__veu" aria-hidden="true" />
      <span className="card__indice" aria-hidden="true">{c.indice}</span>
      <h3 className="card__titulo">{c.titulo}</h3>
      <p className="card__desc">{c.desc}</p>
      <span className="card__meta">{c.acao} <Icone nome={c.icone} /></span>
    </Revelar>
  );
}

export function Descobrir() {
  return (
    <section className="secao" id="descobrir" data-superficie="papel" aria-labelledby="descobrir-titulo">
      <div className="envelope">
        <Revelar
          as="header"
          style={{
            display: 'flex', flexWrap: 'wrap', alignItems: 'end',
            justifyContent: 'space-between', gap: 'var(--e-5)', marginBottom: 'var(--e-7)',
          }}
        >
          <div style={{ maxWidth: '40rem' }}>
            <p className="olho">Capítulos</p>
            <h2 className="titulo-secao" id="descobrir-titulo">Por onde começar</h2>
          </div>
          <hr className="filete" style={{ flex: 1, minWidth: '6rem', marginBottom: 'var(--e-4)' }} />
        </Revelar>

        <div className="descobrir">
          {CAMINHOS.map((c, i) => (
            <Cartao key={c.indice} caminho={c} atraso={i * CASCATA} />
          ))}
        </div>
      </div>
    </section>
  );
}
