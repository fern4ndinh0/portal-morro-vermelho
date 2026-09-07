/* ==========================================================================
   RODAPÉ

   Mapa do site completo + prestação de contas editorial. É a faixa de
   prestação que separa portal institucional de site bonito: quem faz, com
   que licença, e como pedir a retirada de um item.

   As três linhas do <dl> são placeholders declarados como placeholders, de
   propósito. Preencher antes de publicar (ver README).
   ========================================================================== */

import { useEffect, useState } from 'react';
import { Icone } from '../dados/icones.jsx';
import { MARCA, MENU_RODAPE } from '../dados/navegacao.js';
import { usePagina } from './contexto.js';
import { LinkDeMenu } from './LinkDeMenu.jsx';
import { Marca } from './Marca.jsx';

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

            {/* Perfis reais entram aqui. Enquanto não existirem, não há ícone
                linkando para "#": era um dos 25 becos sem saída da v1. */}
            <div className="redes">
              {['instagram', 'facebook', 'youtube'].map((n) => (
                <span key={n} className="rede" aria-hidden="true" style={{ opacity: 0.4 }}>
                  <Icone nome={n} />
                </span>
              ))}
            </div>
            <p style={{ fontSize: 'var(--t-xs)', opacity: 0.6, marginTop: 'var(--e-3)' }}>Perfis a criar.</p>
          </div>

          <nav className="rodape__mapa" aria-label="Mapa do site">
            {MENU_RODAPE.map((grupo) => (
              <div key={grupo.titulo}>
                <h2 className="rodape__coluna-titulo">{grupo.titulo}</h2>
                <ul className="rodape__lista">
                  {grupo.itens.map((item) => (
                    <li key={item.nome}>
                      <LinkDeMenu item={item} classeBreve="breve" />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <dl className="rodape__prestacao">
          <div>
            <dt>Quem faz</dt>
            <dd>Equipe e parceiros institucionais a declarar nesta linha antes da publicação.
                Um portal de memória precisa dizer quem fala.</dd>
          </div>
          <div>
            <dt>Licença do conteúdo</dt>
            <dd>Definir por item. Sugestão: CC BY-NC 4.0 para textos do portal, licença
                individual para cada peça de acervo doada.</dd>
          </div>
          <div>
            <dt>Direitos de imagem</dt>
            <dd>Canal de contato para titular de direitos solicitar crédito, correção ou
                retirada de qualquer item. A criar.</dd>
          </div>
        </dl>

        <div className="rodape__base">
          <p>© <AnoCorrente /> Portal {MARCA.nome} · Distrito de Caeté, Minas Gerais</p>
          <nav aria-label="Links legais">
            <span style={{ opacity: 0.55 }}>Acessibilidade (em breve)</span>
            <span style={{ opacity: 0.55 }}>Privacidade (em breve)</span>
            <span style={{ opacity: 0.55 }}>Licenças (em breve)</span>
          </nav>
        </div>
      </div>
    </footer>
  );
}
