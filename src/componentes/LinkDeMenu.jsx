/* ==========================================================================
   LINK DE MENU — a regra "nenhum link morto", num componente só.

   'href' ausente = a página ainda não existe = NÃO vira link. Vira um <span>
   com a etiqueta "em breve", visível e não clicável. Zero href="#", zero 404
   acidental. Como todo menu do portal (mega, drawer, rodapé, noscript) passa
   por aqui, a regra não tem como ser esquecida em um deles.

   Item com 'zap' vira link de WhatsApp já montado na pré-renderização —
   funciona com o JavaScript desligado, ao contrário do original, que
   dependia do main.js para escrever o href.
   ========================================================================== */

import { Icone } from '../dados/icones.jsx';
import { alvo, ehPaginaAtual } from '../dados/navegacao.js';
import { linkZap, ZAP_CONFIGURADO } from '../dados/contato.js';
import { usePagina } from './contexto.js';

/* Os atributos comuns a todo link de menu: destino, página atual e seção
   observada — o aria-current que acompanha a rolagem, na home. */
export function atributosDeItem(item, slug, secaoAtiva) {
  const props = { href: alvo(item.href, slug) };

  if (ehPaginaAtual(item.href, slug)) props['aria-current'] = 'page';

  if (item.secao && slug === 'index') {
    props['data-secao'] = item.secao;
    if (secaoAtiva === item.secao) props['aria-current'] = 'page';
  }
  return props;
}

/* --------------------------------------------------------------------------
   item          { nome, href?, desc?, secao?, zap? }
   classe        classe do <a>
   classeBreve   classe do <span> quando o item ainda não existe
   children      o miolo. Sem ele, usa item.nome
   -------------------------------------------------------------------------- */

export function LinkDeMenu({ item, classe, classeBreve, children, depois = null, ...resto }) {
  const { slug, secaoAtiva } = usePagina();
  const miolo = children ?? item.nome;

  if (item.zap) {
    return (
      <a
        className={classe}
        href={linkZap(item.zap)}
        target="_blank"
        rel="noopener"
        data-pendente={ZAP_CONFIGURADO ? undefined : 'sim'}
        title={ZAP_CONFIGURADO ? undefined
          : 'Número de WhatsApp ainda não configurado. Ver WHATSAPP em src/dados/contato.js'}
        {...resto}
      >
        {miolo} <Icone nome="whatsapp" />
      </a>
    );
  }

  if (!item.href) {
    return <span className={classeBreve || classe}>{miolo}</span>;
  }

  return (
    <a className={classe} {...atributosDeItem(item, slug, secaoAtiva)} {...resto}>
      {miolo}
      {depois}
    </a>
  );
}
