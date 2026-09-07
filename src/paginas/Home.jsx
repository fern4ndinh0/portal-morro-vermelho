/* ==========================================================================
   PÁGINA INICIAL

   O miolo é só a montagem: cada seção mora no seu próprio arquivo em
   src/componentes/home/, e o conteúdo delas em src/dados/home.js. No projeto
   original tudo isto era uma única string de 870 linhas de HTML dentro de
   home.mjs — o que fazia com que trocar uma frase e reordenar uma seção
   fossem a mesma operação de risco.
   ========================================================================== */

import { MARCA, SITE } from '../dados/navegacao.js';
import { MOSTRAR_CAVALHADAS } from '../dados/home.js';
import { Chassi } from '../componentes/Chassi.jsx';
import { Hero } from '../componentes/home/Hero.jsx';
import { Revelacoes } from '../componentes/home/Revelacoes.jsx';
import { Cavalhadas } from '../componentes/home/Cavalhadas.jsx';
import { Descobrir } from '../componentes/home/Descobrir.jsx';
import { Historia } from '../componentes/home/Historia.jsx';
import { Idealizadores } from '../componentes/home/Idealizadores.jsx';
import { Acervo } from '../componentes/home/Acervo.jsx';
import { AntesDepois } from '../componentes/home/AntesDepois.jsx';
import { Visite } from '../componentes/home/Visite.jsx';
import { Colabore } from '../componentes/home/Colabore.jsx';
import { Loader } from '../componentes/home/Loader.jsx';

export const META_HOME = {
  slug: 'index',
  titulo: `${MARCA.nome} | Portal Cultural e Museu Digital, Distrito de Caeté, Minas Gerais`,
  tituloOg: `${MARCA.nome} | Portal Cultural e Museu Digital`,
  descricao: 'Portal cultural e museu digital de Morro Vermelho, distrito de Caeté, '
           + 'Minas Gerais. Acervo histórico, memória oral, patrimônio, Cavalhadas, '
           + 'gastronomia e informações para visitar o distrito.',

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
        alternateName: `Museu Digital de ${MARCA.nome}`,
        url: `${SITE}/`,
        inLanguage: 'pt-BR',
        description: 'Portal cultural e museu digital dedicado à preservação da memória '
                   + 'e ao turismo do distrito de Morro Vermelho, Caeté, Minas Gerais.',
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
        <Revelacoes />
        {MOSTRAR_CAVALHADAS && <Cavalhadas />}
        <Descobrir />
        <Historia />
        <Idealizadores />
        <Acervo />
        <AntesDepois />
        <Visite />
        <Colabore />
      </main>
      <Loader />
    </Chassi>
  );
}
