/* ==========================================================================
   RODAPÉ

   Deliberadamente simples: a marca, a frase de identidade do projeto, o
   Instagram e o crédito de rodapé. O mapa completo do site (MENU_RODAPE)
   continua existindo e alimentando o drawer mobile (ver Drawer.jsx) — só
   não é mais repetido aqui embaixo.
   ========================================================================== */

import { useEffect, useState } from 'react';
import { Icone } from '../dados/icones.jsx';
import { MARCA } from '../dados/navegacao.js';
import { usePagina } from './contexto.js';
import { Marca } from './Marca.jsx';

const INSTAGRAM = 'https://www.instagram.com/morrovermelhomg?stkn=NXZpeXhyOW1kZXN1';

/* Injetado pelo Vite em tempo de build (ver define em vite.config.js). */
/* global __ANO_DE_GERACAO__ */

function AnoCorrente() {
  const [ano, setAno] = useState(__ANO_DE_GERACAO__);
  useEffect(() => setAno(new Date().getFullYear()), []);
  return <span data-ano="">{ano}</span>;
}

export function Rodape() {
  const { slug } = usePagina();

  return (
    <footer className="rodape" data-superficie="escura">
      <div className="envelope">

        <div className="rodape__topo">
          <div className="rodape__sobre">
            <Marca slug={slug} comoLink={false} />
            <p>{MARCA.sobre}</p>

            <div className="redes">
              <a
                className="rede"
                href={INSTAGRAM}
                target="_blank"
                rel="noopener"
                aria-label={`Instagram do ${MARCA.nome}`}
              >
                <Icone nome="instagram" />
              </a>
            </div>
          </div>
        </div>

        <div className="rodape__base">
          <p>© <AnoCorrente /> Portal {MARCA.nome} · Distrito de Caeté, Minas Gerais</p>
          <nav aria-label="Links legais">
            <span style={{ opacity: 0.55 }}>Acessibilidade (em breve)</span>
            <span style={{ opacity: 0.55 }}>Privacidade (em breve)</span>
            <a href="https://www.techdias.com" target="_blank" rel="noopener">Desenvolvido por Fernando Dias</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
