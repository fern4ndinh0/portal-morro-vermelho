/* ==========================================================================
   PÁGINA INICIAL

   O miolo é só a montagem: cada seção mora no seu próprio arquivo em
   src/componentes/home/, e o conteúdo delas em src/dados/home.js. No projeto
   original tudo isto era uma única string de 870 linhas de HTML dentro de
   home.mjs — o que fazia com que trocar uma frase e reordenar uma seção
   fossem a mesma operação de risco.
   ========================================================================== */

import { MARCA, SITE } from '../dados/navegacao.js';
import { Chassi } from '../componentes/Chassi.jsx';
import { Hero } from '../componentes/home/Hero.jsx';
import { Descobrir } from '../componentes/home/Descobrir.jsx';
import { Historia } from '../componentes/home/Historia.jsx';
import { Idealizadores } from '../componentes/home/Idealizadores.jsx';
import { Visite } from '../componentes/home/Visite.jsx';
import { Loader } from '../componentes/home/Loader.jsx';

export const META_HOME = {
  slug: 'index',
  titulo: `${MARCA.nome}, amor à liberdade | Distrito de Caeté, Minas Gerais`,
  tituloOg: `${MARCA.nome}, amor à liberdade`,
  /* A descrição é a dos próprios autores, no release de lançamento
     (originais/word/Release.docx). */
  descricao: 'O portal de Morro Vermelho, distrito de Caeté, na região metropolitana de '
           + 'Belo Horizonte, é resultado de mais de 40 anos de pesquisas e coleta de '
           + 'informações sobre o povoado. Conta toda a sua história de resistência.',

  /* TODO gerar uma versão 1200×630 a partir de uma fotografia REAL do
     distrito. Enquanto não houver, uso a foto real em formato retrato: as
     redes recortam pelo centro, o que funciona, mas rende menos. */
  ogImagem: 'midia/morro-vermelho.jpeg',
  ogImagemAlt: 'Morro Vermelho ao entardecer: a rocha vermelha exposta no alto do morro, '
             + 'encimada por uma cruz, e a Igreja Matriz de duas torres no vale, cercada '
             + 'pelo casario e pela mata.',

  /* Dados estruturados. ATENÇÃO: latitude, longitude e datas de festa
     continuam ausentes de propósito — não há fonte conferida para elas, e
     dado inventado em schema.org é pior que dado ausente. */
  jsonLd: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE}/#site`,
        name: `Portal ${MARCA.nome}`,
        alternateName: `${MARCA.nome}, amor à liberdade`,
        url: `${SITE}/`,
        inLanguage: 'pt-BR',
        description: 'Resultado de mais de 40 anos de pesquisas e coleta de informações '
                   + 'sobre o distrito de Morro Vermelho, em Caeté, Minas Gerais.',
      },
      {
        '@type': ['TouristDestination', 'Place'],
        '@id': `${SITE}/#lugar`,
        name: MARCA.nome,
        description: 'Distrito histórico do município de Caeté, na região metropolitana '
                   + 'de Belo Horizonte, Minas Gerais.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: MARCA.nome,
          addressRegion: 'MG',
          addressCountry: 'BR',
        },
        containedInPlace: {
          '@type': 'City',
          name: 'Caeté',
          addressRegion: 'MG',
          addressCountry: 'BR',
        },
      },
    ],
  },
};

export function Home() {
  return (
    <Chassi slug="index">
      <main id="conteudo">
        <Hero />
        <Descobrir />
        <Historia />
        <Idealizadores />
        <Visite />
      </main>
      <Loader />
    </Chassi>
  );
}
