/* ==========================================================================
   MARCA — o selo + nome que aparece na navbar, no drawer, no rodapé e no 404.

   comoLink=false onde já se está na página de destino ou onde um link seria
   um beco (dentro do drawer, no rodapé): a marca vira <span> e não finge
   ser clicável.
   ========================================================================== */

import { Icone } from '../dados/icones.jsx';
import { MARCA, alvo } from '../dados/navegacao.js';

export function Marca({ slug, comoLink = true, local = MARCA.local, style, estiloLocal }) {
  const miolo = (
    <>
      <Icone nome="selo" classe="marca__selo" />
      <span>
        <span className="marca__texto">{MARCA.nome}</span>
        <span className="marca__local" style={estiloLocal}>{local}</span>
      </span>
    </>
  );

  if (!comoLink) return <span className="marca" style={style}>{miolo}</span>;

  return (
    <a
      className="marca"
      style={style}
      href={alvo('index.html', slug)}
      aria-label={`Portal ${MARCA.nome}, página inicial`}
    >
      {miolo}
    </a>
  );
}
