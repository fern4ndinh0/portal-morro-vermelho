/* ==========================================================================
   PÁGINA DE DOCUMENTO

   Recebe um verbete de src/dados/documentos/ e desenha a página inteira.

   O QUE MELHOROU AO SAIR DO GERADOR DE STRING
   Sumário e tempo de leitura eram derivados no NAVEGADOR, varrendo o DOM já
   renderizado — quem estivesse sem JavaScript não tinha nem um nem outro.
   Aqui os dois são derivados do CONTEÚDO, na pré-renderização: já saem
   escritos no HTML publicado. A barra de progresso e o destaque do item
   atual do sumário continuam sendo comportamento, e continuam no cliente.

   Continua valendo o princípio: nada disso se digita. Sumário
   dessincronizado do texto é impossível por construção.
   ========================================================================== */

import { Fragment, useRef } from 'react';
import { Icone } from '../dados/icones.jsx';
import { MARCA, SITE } from '../dados/navegacao.js';
import { linkZap, ZAP_CONFIGURADO } from '../dados/contato.js';
import { tempoDeLeitura } from '../dados/documentos/index.js';
import { useProgressoDeLeitura, useSecaoAtiva } from '../ganchos/rolagem.js';
import { Chassi } from '../componentes/Chassi.jsx';
import { Bloco } from '../componentes/artigo/Blocos.jsx';

export function metaArtigo(doc) {
  return {
    slug: doc.slug,
    titulo: `${doc.titulo} | ${MARCA.nome}, Caeté, MG`,
    tituloOg: `${doc.titulo} | ${MARCA.nome}`,
    descricao: doc.resumoSeo,
    ogTipo: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: doc.titulo,
      description: doc.resumoSeo,
      inLanguage: 'pt-BR',
      isPartOf: { '@type': 'WebSite', name: `Portal ${MARCA.nome}`, url: `${SITE}/` },
      about: {
        '@type': 'Place',
        name: MARCA.nome,
        address: {
          '@type': 'PostalAddress',
          addressLocality: MARCA.nome,
          addressRegion: 'MG',
          addressCountry: 'BR',
        },
      },
      publisher: { '@type': 'Organization', name: `Portal ${MARCA.nome}` },
      creativeWorkStatus: 'Draft',
    },
  };
}

/* --------------------------------------------------------------------------
   Sumário. Sai do HTML pronto; o JavaScript só acrescenta o aria-current que
   acompanha a rolagem. Menos de dois títulos = sem sumário.
   -------------------------------------------------------------------------- */

function Sumario({ secoes }) {
  const ativa = useSecaoAtiva(secoes.map((s) => s.id), '-15% 0px -70% 0px');

  if (secoes.length < 2) return null;

  return (
    <aside className="sumario" aria-label="Sumário desta página">
      <p className="sumario__titulo">Nesta página</p>
      <ol className="sumario__lista">
        {secoes.map((s) => (
          <li key={s.id}>
            <a
              className="sumario__link"
              href={`#${s.id}`}
              aria-current={ativa === s.id ? 'true' : undefined}
            >
              {s.titulo}
            </a>
          </li>
        ))}
      </ol>
    </aside>
  );
}

/* --------------------------------------------------------------------------
   Um artigo nunca termina em beco: aponta para o capítulo vizinho. Quando só
   existe o "próximo" (primeiro capítulo), o <span> vazio segura a coluna da
   esquerda e o CSS joga o botão para a direita.
   -------------------------------------------------------------------------- */

function Irmaos({ anterior, proximo }) {
  return (
    <nav className="irmaos" aria-label="Navegação entre capítulos">
      {anterior ? (
        <a className="irmao irmao--anterior" href={`${anterior.slug}.html`}>
          <span className="irmao__dir">← Capítulo anterior</span>
          <span className="irmao__nome">{anterior.titulo}</span>
        </a>
      ) : <span />}

      {proximo ? (
        <a className="irmao irmao--proximo" href={`${proximo.slug}.html`}>
          <span className="irmao__dir">Próximo capítulo →</span>
          <span className="irmao__nome">{proximo.titulo}</span>
        </a>
      ) : <span />}
    </nav>
  );
}

function Relacionadas({ itens }) {
  return (
    <div className="relacionadas" style={{ marginTop: 'var(--e-6)' }}>
      {itens.map((r) => (
        r.href ? (
          <a className="relacionada" href={r.href} key={r.nome}>
            <span className="relacionada__olho">{r.olho || 'Leia também'}</span>
            <span className="relacionada__titulo">{r.nome}</span>
            <span className="relacionada__txt">{r.txt}</span>
            <Icone nome="seta-dir" />
          </a>
        ) : (
          <span className="relacionada" key={r.nome}>
            <span className="relacionada__olho">Em breve</span>
            <span className="relacionada__titulo">{r.nome}</span>
            <span className="relacionada__txt">{r.txt}</span>
          </span>
        )
      ))}
    </div>
  );
}

/* ========================================================================== */

export function Artigo({ doc, anterior, proximo }) {
  const artigo = useRef(null);
  const progresso = useProgressoDeLeitura(artigo);
  const minutos = tempoDeLeitura(doc);

  return (
    <Chassi slug={doc.slug}>
      <div
        className="progresso"
        aria-hidden="true"
        style={{ '--progresso': (progresso * 100).toFixed(2) + '%' }}
      />

      <main id="conteudo">

        <header className="artigo-capa" style={{ '--tom': doc.tom }}>
          <div className="envelope">
            <nav className="migalhas" aria-label="Você está aqui">
              <ol>
                <li><a href="index.html">Início</a></li>
                <li><a href="index.html#historia">Nossa História</a></li>
                <li><span aria-current="page">{doc.titulo}</span></li>
              </ol>
            </nav>

            <p className="olho" style={{ marginTop: 'var(--e-6)' }}>{doc.olho}</p>
            <h1 className="artigo-capa__titulo">{doc.titulo}</h1>
            <p className="artigo-capa__resumo">{doc.resumo}</p>

            <div className="artigo-ficha">
              <span className="artigo-ficha__item">
                <Icone nome="relogio" />
                <span>{minutos} min de leitura</span>
              </span>
              <span className="artigo-ficha__item">
                <Icone nome="doc" />Estado: <strong>{doc.estado}</strong>
              </span>
            </div>
          </div>
        </header>

        <div className="envelope">
          <div className="artigo-grade">

            <Sumario secoes={doc.secoes} />

            <article className="prosa" ref={artigo}>
              {/* Fragment, e não <section>: o CSS de .prosa usa combinador de
                  filho direto ('.prosa > * + *' e '.prosa > .abertura') — um
                  elemento a mais no meio, ainda que com display:contents,
                  quebraria o ritmo vertical e a capitular. */}
              {doc.secoes.map((s) => (
                <Fragment key={s.id}>
                  <h2 id={s.id}>{s.titulo}</h2>
                  {s.blocos.map((b, i) => <Bloco b={b} key={i} />)}
                </Fragment>
              ))}

              <div className="aparato">
                <div>
                  <p className="aparato__titulo">Contribua com este verbete</p>
                  <p style={{
                    fontSize: 'var(--t-sm)', color: 'var(--texto-suave)',
                    marginBottom: 'var(--e-4)',
                  }}>
                    Sabe algo sobre este assunto? Tem documento, fotografia ou lembrança
                    de família? É assim que esta página deixa de ser rascunho.
                  </p>
                  <a
                    className="btn btn--zap"
                    href={linkZap(`Olá! Sobre a página '${doc.titulo}' do portal de Morro Vermelho, `
                      + 'tenho a seguinte informação/material para contribuir:')}
                    target="_blank"
                    rel="noopener"
                    data-pendente={ZAP_CONFIGURADO ? undefined : 'sim'}
                  >
                    <Icone nome="whatsapp" /> Contribuir pelo WhatsApp
                  </a>
                </div>
              </div>

              <Irmaos anterior={anterior} proximo={proximo} />
            </article>

          </div>
        </div>

        <section className="secao" data-superficie="papel" aria-labelledby="rel-titulo">
          <div className="envelope">
            <p className="olho">Continue</p>
            <h2 className="titulo-secao" id="rel-titulo" style={{ fontSize: 'var(--t-xl)' }}>
              Páginas relacionadas
            </h2>
            <Relacionadas itens={doc.relacionadas} />
          </div>
        </section>

      </main>
    </Chassi>
  );
}
