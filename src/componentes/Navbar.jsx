/* ==========================================================================
   NAVBAR + MEGA MENU

   Clique e teclado são a fonte de verdade; o hover é só conveniência — com
   um pequeno atraso ao sair, para o ponteiro conseguir atravessar o vão
   entre o gatilho e o painel sem que ele feche na cara de quem o usa.

   Estado por atributo data-*, nunca por troca de classe utilitária: é a
   quarta regra do projeto, e continua valendo aqui porque é o CSS de
   chassi.css que lê data-rolado, data-oculto e data-aberto.
   ========================================================================== */

import { useEffect, useRef, useState } from 'react';
import { Icone } from '../dados/icones.jsx';
import { MENU, MENU_NOSCRIPT, alvo } from '../dados/navegacao.js';
import { useNavbarAoRolar } from '../ganchos/rolagem.js';
import { useMovimento } from '../ganchos/movimento.jsx';
import { usePagina } from './contexto.js';
import { LinkDeMenu, atributosDeItem } from './LinkDeMenu.jsx';
import { Marca } from './Marca.jsx';

const DESKTOP_COM_PONTEIRO = '(hover: hover) and (min-width: 62rem)';

/* --------------------------------------------------------------------------
   Um item de topo que abre painel.
   -------------------------------------------------------------------------- */

function ItemMega({ menu, aberto, abrir, fechar }) {
  const ref = useRef(null);
  const gatilho = useRef(null);
  const timer = useRef(null);

  const noPonteiro = () => window.matchMedia(DESKTOP_COM_PONTEIRO).matches;

  useEffect(() => () => clearTimeout(timer.current), []);

  return (
    <div
      ref={ref}
      className="nav-principal__item"
      data-mega=""
      data-aberto={aberto ? 'sim' : 'nao'}
      onMouseEnter={() => { if (noPonteiro()) { clearTimeout(timer.current); abrir(); } }}
      onMouseLeave={() => { if (noPonteiro()) timer.current = setTimeout(fechar, 220); }}
      /* Tab saindo do painel fecha o menu. */
      onBlur={(ev) => { if (!ref.current?.contains(ev.relatedTarget)) fechar(); }}
    >
      <button
        ref={gatilho}
        type="button"
        className="nav-gatilho"
        aria-expanded={aberto ? 'true' : 'false'}
        aria-haspopup="true"
        onClick={() => (aberto ? fechar() : abrir())}
        onKeyDown={(ev) => {
          if (ev.key === 'Escape' && aberto) { fechar(); gatilho.current?.focus(); }
        }}
      >
        {menu.rotulo}
        <Icone nome="chevron" classe="nav-gatilho__seta" />
      </button>

      {/* --colunas conta as colunas de verdade e o CSS usa esse número no
          grid-template-columns. Sem ele, `repeat(auto-fit, …)` dentro de um
          painel de largura `max-content` colapsa para UMA coluna — o painel
          ficava com 1287 px de altura numa janela de 820 e transbordava. */}
      <div className="mega" style={{ '--colunas': menu.colunas.length }}>
        <div className="mega__grade">
          {menu.colunas.map((coluna) => (
            <div key={coluna.titulo}>
              <h2 className="mega__coluna-titulo">{coluna.titulo}</h2>
              <ul className="mega__lista">
                {coluna.itens.map((item) => (
                  <li key={item.nome}>
                    <LinkDeMenu item={item} classe="mega__link" classeBreve="mega__link mega__link--breve">
                      {item.nome}
                      {item.href && item.desc ? <span>{item.desc}</span> : null}
                    </LinkDeMenu>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* --------------------------------------------------------------------------
   O menu do <noscript>: sem JavaScript o drawer não abre, então um menu
   curto aparece sempre, no topo. Vai por dangerouslySetInnerHTML de
   propósito — o navegador com script ligado trata o conteúdo de <noscript>
   como texto, e o React não consegue hidratar elementos lá dentro.
   -------------------------------------------------------------------------- */

function menuSemScript(slug) {
  const itens = MENU_NOSCRIPT
    .filter((i) => i.href)
    .map((i) => `<li><a href="${alvo(i.href, slug)}">${i.nome}</a></li>`)
    .join('');
  return `<div class="menu-noscript"><ul>${itens}</ul></div>`;
}

/* --------------------------------------------------------------------------
   A navbar.
   -------------------------------------------------------------------------- */

export function Navbar({ menuAberto, abrirMenu }) {
  const { slug, secaoAtiva } = usePagina();
  const ref = useRef(null);
  const [abertoAgora, setAberto] = useState(null);
  const { rolado, oculto } = useNavbarAoRolar(ref, menuAberto);
  const { reduzido, alternar } = useMovimento();

  /* Esc e clique fora fecham o painel aberto, venha o evento de onde vier. */
  useEffect(() => {
    if (abertoAgora === null) return;

    const aoTeclar = (ev) => { if (ev.key === 'Escape') setAberto(null); };
    const aoClicar = (ev) => { if (!ref.current?.contains(ev.target)) setAberto(null); };

    document.addEventListener('keydown', aoTeclar);
    document.addEventListener('click', aoClicar);
    return () => {
      document.removeEventListener('keydown', aoTeclar);
      document.removeEventListener('click', aoClicar);
    };
  }, [abertoAgora]);

  return (
    <header
      ref={ref}
      className="navbar"
      data-rolado={rolado ? 'sim' : 'nao'}
      data-oculto={oculto ? 'sim' : 'nao'}
      data-menu-aberto={menuAberto ? 'sim' : undefined}
    >
      <div className="envelope navbar__grade">
        <Marca slug={slug} />

        <nav className="nav-principal" aria-label="Navegação principal">
          {MENU.map((menu, i) => {
            if (!menu.colunas) {
              if (!menu.href) {
                return <span key={menu.rotulo} className="nav-gatilho nav-gatilho--breve">{menu.rotulo}</span>;
              }
              return (
                <a key={menu.rotulo} className="nav-gatilho" {...atributosDeItem(menu, slug, secaoAtiva)}>
                  {menu.rotulo}
                </a>
              );
            }
            return (
              <ItemMega
                key={menu.rotulo}
                menu={menu}
                aberto={abertoAgora === i}
                abrir={() => setAberto(i)}
                fechar={() => setAberto((atual) => (atual === i ? null : atual))}
              />
            );
          })}
        </nav>

        <div className="navbar__acoes">
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

          <button
            type="button"
            className="acao acao--menu"
            data-acao="abrir-menu"
            aria-expanded={menuAberto ? 'true' : 'false'}
            aria-controls="menu-mobile"
            aria-label="Abrir menu de navegação"
            onClick={abrirMenu}
          >
            <span className="hamburguer" aria-hidden="true"><span /><span /></span>
          </button>
        </div>
      </div>

      <noscript dangerouslySetInnerHTML={{ __html: menuSemScript(slug) }} />
    </header>
  );
}
