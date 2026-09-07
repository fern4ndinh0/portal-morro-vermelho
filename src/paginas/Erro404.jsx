/* ==========================================================================
   PÁGINA 404

   Um 404 não pode ser um beco sem saída. Este oferece saídas reais — e todas
   existem: nenhuma é "em breve".

   Sem navbar e sem drawer, de propósito: quem caiu aqui errou o endereço e
   precisa de poucas opções grandes, não do menu inteiro. É também por isso
   que ela recebe a receita 'nu' no gerador e carrega bem menos CSS e JS.
   ========================================================================== */

import { Icone } from '../dados/icones.jsx';
import { MARCA } from '../dados/navegacao.js';
import { Chassi } from '../componentes/Chassi.jsx';

const SAIDAS = [
  { nome: 'Página inicial', href: 'index.html' },
  { nome: 'Museu Digital', href: 'index.html#acervo' },
  { nome: 'História e linha do tempo', href: 'index.html#historia' },
  { nome: 'Como visitar o distrito', href: 'index.html#visite' },
  { nome: 'Doar acervo', href: 'index.html#colabore' },
];

export const META_404 = {
  slug: '404',
  titulo: `Página não encontrada | Portal ${MARCA.nome}`,
  descricao: 'A página procurada não existe neste portal. Veja os caminhos disponíveis.',
  robots: 'noindex, follow',
};

export function Erro404() {
  return (
    <Chassi slug="404" comMenu={false}>
      <main
        id="conteudo"
        style={{
          minHeight: '100svh', display: 'grid', placeContent: 'center',
          padding: 'var(--secao-y) var(--gutter)',
        }}
      >
        <div style={{ maxWidth: '36rem' }}>
          <a className="marca" href="index.html" style={{ color: 'var(--texto)', marginBottom: 'var(--e-8)' }}>
            <Icone nome="selo" classe="marca__selo" style={{ color: 'var(--marca)' }} />
            <span>
              <span className="marca__texto">{MARCA.nome}</span>
              <span className="marca__local" style={{ color: 'var(--texto-tenue)', opacity: 1 }}>
                Distrito de Caeté · Minas Gerais
              </span>
            </span>
          </a>

          <p className="olho" style={{ marginTop: 'var(--e-8)' }}>Erro 404</p>
          <h1 className="titulo-secao" style={{ fontSize: 'var(--t-3xl)' }}>Esta página não existe</h1>
          <p className="linha-fina">
            Pode ser um endereço antigo, um link digitado errado, ou uma parte do
            portal que ainda está sendo construída. Nenhuma dessas é culpa sua.
          </p>

          <nav
            aria-label="Caminhos disponíveis"
            style={{ marginTop: 'var(--e-7)', display: 'grid', gap: 'var(--e-1)' }}
          >
            {SAIDAS.map((s) => (
              <a
                key={s.href}
                href={s.href}
                className="rota"
                style={{ textDecoration: 'none', gridTemplateColumns: '1fr auto' }}
              >
                <span className="rota__de">{s.nome}</span>
                <Icone nome="seta-dir" style={{ color: 'var(--marca)' }} />
              </a>
            ))}
          </nav>

          <p style={{ marginTop: 'var(--e-7)', fontSize: 'var(--t-sm)', color: 'var(--texto-tenue)' }}>
            Se você chegou aqui procurando um documento do acervo, escreva para nós:
            o item pode existir e ainda não ter sido publicado.
          </p>
        </div>
      </main>
    </Chassi>
  );
}
