/* ==========================================================================
   A ORDEM DOS VERBETES

   Esta lista é a espinha do portal. Ela define:
     · a ordem em que as páginas são geradas;
     · o "capítulo anterior / próximo" no pé de cada verbete;
     · a numeração canônica (02 a 29) que aparece no mapa do site.

   A ordem segue o índice do projeto, e não a cronologia nem o alfabeto. É
   uma escolha editorial: o índice organiza a história do distrito do modo
   como quem a conhece a organiza — formação, poder, revolta, gente, e depois
   o que se pode ver e viver hoje.

   PARA ACRESCENTAR UM VERBETE
     1. Crie src/dados/documentos/<slug>.js (copie um existente como molde).
     2. Importe-o aqui e ponha-o na lista, na posição certa.
     3. Acrescente o item ao MENU e ao MENU_RODAPE em src/dados/navegacao.js.
     4. npm run gerar.

   O gerador confere que o slug declarado dentro do arquivo bate com o nome
   do arquivo. Não bate = a geração para, em vez de publicar uma página com
   endereço errado.
   ========================================================================== */

/* --- Nossa História: a formação ------------------------------------------ */
import historiaDeResistencia from './historia-de-resistencia.js';          /* 02 */
import aBuscaDoOuro from './a-busca-do-ouro.js';                           /* 03 */
import arraialDeViracopos from './arraial-de-viracopos.js';                /* 04 */
import fazendaDoCutao from './fazenda-do-cutao.js';                        /* 05 */
import retiroDosCapetas from './retiro-dos-capetas.js';                    /* 06 */
import osDragoesReais from './os-dragoes-reais.js';                        /* 07 */
import estradaReal from './estrada-real.js';                               /* 08 */

/* --- Nossa História: poder, revolta e gente ------------------------------ */
import guerraDosEmboabas from './guerra-dos-emboabas.js';                  /* 09 */
import levanteDasBateias from './levante-das-bateias.js';                  /* 10 */
import epidemiaDaBexiga from './epidemia-da-bexiga.js';                    /* 11 */
import familiaDePadres from './familia-de-padres.js';                      /* 12 */
import diretasJa from './diretas-ja.js';                                   /* 13 */

/* --- Atrações e natureza ------------------------------------------------- */
import atracoes from './atracoes.js';                                      /* 14 */
import parqueDoGandarela from './parque-do-gandarela.js';                  /* 15 */
import cachoeirasECascatas from './cachoeiras-e-cascatas.js';              /* 16 */

/* --- Festas, tradições e saberes ----------------------------------------- */
import festasETradicoes from './festas-e-tradicoes.js';                    /* 17 */
import cavalhadaDeNazareth from './cavalhada-de-nazareth.js';              /* 18 */
import artesanatoGastronomiaMusica from './artesanato-gastronomia-musica.js'; /* 19 */
import sociedadeMusicalSantaCecilia from './sociedade-musical-santa-cecilia.js';
import trilhasEcologicas from './trilhas-ecologicas.js';                   /* 20 */

/* --- Cultura, patrimônio e o distrito hoje ------------------------------- */
import culturaPopular from './cultura-popular.js';                         /* 21 */
import bensHistoricos from './bens-historicos.js';                         /* 22 */
import noticiasDaTerra from './noticias-da-terra.js';                      /* 23 */
import midiaERedes from './midia-e-redes.js';                              /* 24 */
import estoriasCasosELendas from './estorias-casos-e-lendas.js';           /* 25 */
import servicos from './servicos.js';                                      /* 26 */
import nossaGente from './nossa-gente.js';                                 /* 27 */
import outrasCoisas from './outras-coisas.js';                             /* 28 */
import galeriaDeFotos from './galeria-de-fotos.js';                        /* 29 */

/* --- A procedência do acervo ---------------------------------------------
   Numerada 00 e posicionada NO FIM, não no começo: ela fecha o portal em vez
   de atrasar quem chegou para ler história. O "próximo capítulo" a partir da
   Galeria leva a ela, que é um fim de leitura razoável. */
import sobreOPortal from './sobre-o-portal.js';                            /* 00 */

export const DOCUMENTOS = [
  historiaDeResistencia,
  aBuscaDoOuro,
  arraialDeViracopos,
  fazendaDoCutao,
  retiroDosCapetas,
  osDragoesReais,
  estradaReal,
  guerraDosEmboabas,
  levanteDasBateias,
  epidemiaDaBexiga,
  familiaDePadres,
  diretasJa,
  atracoes,
  parqueDoGandarela,
  cachoeirasECascatas,
  festasETradicoes,
  cavalhadaDeNazareth,
  artesanatoGastronomiaMusica,
  /* A banda entra aqui, logo depois do verbete de saberes: é a instituição
     musical do distrito, e "próximo capítulo" a partir de Música faz sentido
     de leitura. Não recebe número próprio no índice do projeto. */
  sociedadeMusicalSantaCecilia,
  trilhasEcologicas,
  culturaPopular,
  bensHistoricos,
  noticiasDaTerra,
  midiaERedes,
  estoriasCasosELendas,
  servicos,
  nossaGente,
  outrasCoisas,
  galeriaDeFotos,
  sobreOPortal,
];

/* Vizinhança de um verbete, pelo slug. Usada tanto pelo gerador quanto pelo
   modo de desenvolvimento — os dois precisam da mesma resposta. */
export function vizinhos(slug) {
  const i = DOCUMENTOS.findIndex((d) => d.slug === slug);
  if (i === -1) return { doc: null, anterior: null, proximo: null };
  return {
    doc: DOCUMENTOS[i],
    anterior: DOCUMENTOS[i - 1] || null,
    proximo: DOCUMENTOS[i + 1] || null,
  };
}

/* Busca por slug, para quem só tem o endereço. */
export function porSlug(slug) {
  return DOCUMENTOS.find((d) => d.slug === slug) || null;
}

/* ==========================================================================
   TEMPO DE LEITURA

   No projeto original isto era calculado no navegador, varrendo o
   textContent do artigo já renderizado. Aqui é calculado sobre o CONTEÚDO,
   na pré-renderização: o número já sai escrito no HTML publicado, aparece
   sem JavaScript, e não muda de valor entre o primeiro paint e a hidratação.
   ========================================================================== */

function textoDoBloco(b) {
  if (typeof b === 'string') return b;
  if (b.abertura) return b.abertura;
  if (b.sub) return b.sub;
  if (b.lista) return b.lista.join(' ');
  if (b.citacao) return b.citacao + ' ' + (b.autoria || '');
  if (b.lacuna) return b.lacuna;
  if (b.nota) return (b.titulo || '') + ' ' + b.nota;
  if (b.figura) return (b.figura || '') + ' ' + (b.legenda || '');
  return '';
}

export function contarPalavras(doc) {
  const texto = doc.secoes
    .flatMap((s) => [s.titulo, ...s.blocos.map(textoDoBloco)])
    .join(' ')
    .replace(/<[^>]+>/g, ' ');           /* as tags não são leitura */
  return texto.trim().split(/\s+/).filter(Boolean).length;
}

export function tempoDeLeitura(doc) {
  return Math.max(1, Math.round(contarPalavras(doc) / 200));   /* 200 ppm, pt-BR */
}
