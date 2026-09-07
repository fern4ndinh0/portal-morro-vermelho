/* ==========================================================================
   COMO CITAR — a referência ABNT da própria página

   Pesquisador e professor precisam disto, e nenhum portal genérico tem.

   DIFERENÇA EM RELAÇÃO AO ORIGINAL: lá a referência era montada em tempo de
   execução a partir de location.href, então quem estivesse sem JavaScript
   via uma caixa vazia. Aqui ela já sai escrita no HTML publicado, com a URL
   canônica — só a data de acesso é corrigida na hidratação, porque é a única
   parte que depende de quando a pessoa está lendo.
   ========================================================================== */

import { useEffect, useState } from 'react';
import { Icone } from '../../dados/icones.jsx';
import { MARCA } from '../../dados/navegacao.js';

const MESES = ['jan.', 'fev.', 'mar.', 'abr.', 'maio', 'jun.',
               'jul.', 'ago.', 'set.', 'out.', 'nov.', 'dez.'];

function porExtenso(d) {
  return `${d.getDate()} ${MESES[d.getMonth()]} ${d.getFullYear()}`;
}

/* global __ANO_DE_GERACAO__ */

export function ComoCitar({ titulo, url }) {
  const [acesso, setAcesso] = useState(`${__ANO_DE_GERACAO__}`);
  const [copiado, setCopiado] = useState(false);
  const [podeCopiar, setPodeCopiar] = useState(false);

  useEffect(() => {
    setAcesso(porExtenso(new Date()));
    setPodeCopiar(Boolean(navigator.clipboard));
  }, []);

  const referencia = `PORTAL ${MARCA.nome.toUpperCase()}. ${titulo.trim()}. `
    + `Morro Vermelho, Caeté, MG. Disponível em: ${url}. `
    + `Acesso em: ${acesso}.`;

  function copiar() {
    navigator.clipboard.writeText(referencia).then(() => {
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    });
  }

  return (
    <div className="como-citar">
      <p className="aparato__titulo">Como citar esta página</p>
      <p className="como-citar__texto">{referencia}</p>
      {podeCopiar && (
        <button
          type="button"
          className="como-citar__botao"
          data-ok={copiado ? 'sim' : undefined}
          onClick={copiar}
        >
          {copiado ? 'Copiado' : <><Icone nome="copiar" /> Copiar referência</>}
        </button>
      )}
    </div>
  );
}
