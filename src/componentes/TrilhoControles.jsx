/* ==========================================================================
   CONTROLES DE TRILHO

   As setas da v1 eram desenhadas e não faziam nada. Estas movem o trilho e
   se desabilitam nas pontas — 'disabled' de verdade, não opacidade fingida,
   para que o leitor de tela também saiba que chegou ao fim.
   ========================================================================== */

import { Icone } from '../dados/icones.jsx';

export function TrilhoControles({ trilho, rotuloAnterior, rotuloProximo }) {
  return (
    <div className="trilho-controles">
      <button
        type="button"
        className="btn-icone"
        aria-label={rotuloAnterior}
        disabled={trilho.noInicio}
        onClick={trilho.anterior}
      >
        <Icone nome="seta-esq" />
      </button>
      <button
        type="button"
        className="btn-icone"
        aria-label={rotuloProximo}
        disabled={trilho.noFim}
        onClick={trilho.proximo}
      >
        <Icone nome="seta-dir" />
      </button>
    </div>
  );
}
