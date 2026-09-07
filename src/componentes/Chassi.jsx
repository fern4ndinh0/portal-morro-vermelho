/* ==========================================================================
   CHASSI — o que é idêntico em TODA página do portal.

   Skip link, navbar, mega menu, drawer, rodapé e botão de voltar ao topo
   moram aqui, e só aqui. No projeto original eles estavam copiados em sete
   arquivos .html; mudar um item de menu significava sete edições e sete
   chances de errar.

   O QUE ESTE COMPONENTE ACRESCENTA À VERSÃO ANTERIOR
   O estado que era global e implícito (variáveis dentro do IIFE do
   comum.js, atributos escritos em nós alheios por querySelector) passa a ser
   estado de componente, descendo por contexto. Em especial 'secaoAtiva': o
   original varria o documento atrás de todo a[data-secao] para escrever
   aria-current neles; aqui cada link compara o próprio data-secao com o
   valor do contexto e decide sozinho.
   ========================================================================== */

import { useMemo, useState } from 'react';
import { MENU, MENU_RODAPE } from '../dados/navegacao.js';
import { SpriteCompleto } from '../dados/icones.jsx';
import { useRevelarAtivo } from '../ganchos/Revelar.jsx';
import { useSecaoAtiva } from '../ganchos/rolagem.js';
import { PaginaContexto } from './contexto.js';
import { Navbar } from './Navbar.jsx';
import { Drawer } from './Drawer.jsx';
import { Rodape } from './Rodape.jsx';
import { VoltarTopo } from './VoltarTopo.jsx';

/* Toda seção que algum item de menu observa. Deriva da navegação, para que
   acrescentar { secao: 'festas' } a um item já ligue o aria-current dele. */
function secoesObservadas() {
  const ids = new Set();
  MENU.forEach((m) => {
    if (m.secao) ids.add(m.secao);
    m.colunas?.forEach((c) => c.itens.forEach((i) => i.secao && ids.add(i.secao)));
  });
  MENU_RODAPE.forEach((g) => g.itens.forEach((i) => i.secao && ids.add(i.secao)));
  return [...ids];
}

export function Chassi({ slug, comMenu = true, children }) {
  const [menuAberto, setMenuAberto] = useState(false);

  const ids = useMemo(() => (slug === 'index' ? secoesObservadas() : []), [slug]);
  const secaoAtiva = useSecaoAtiva(ids);

  useRevelarAtivo();

  return (
    <PaginaContexto.Provider value={{ slug, secaoAtiva }}>
      <a className="pular" href="#conteudo">Pular para o conteúdo</a>

      {/* Em desenvolvimento não há etapa de poda, então vai o sprite inteiro.
          No site publicado o gerador injeta, fora da raiz do React, apenas os
          símbolos que a página realmente usa. */}
      {import.meta.env.DEV && <SpriteCompleto />}

      {comMenu && (
        <>
          <Navbar menuAberto={menuAberto} abrirMenu={() => setMenuAberto((v) => !v)} />
          <Drawer aberto={menuAberto} fechar={() => setMenuAberto(false)} />
        </>
      )}

      {children}

      {comMenu && (
        <>
          <Rodape />
          <VoltarTopo />
        </>
      )}
    </PaginaContexto.Provider>
  );
}
