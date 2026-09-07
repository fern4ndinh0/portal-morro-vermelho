/* ==========================================================================
   ESTRADA REAL
   Nossa História · Capítulo IV
   --------------------------------------------------------------------------
   REGRA EDITORIAL QUE GOVERNA ESTE ARQUIVO — e ela é o ponto mais importante
   do projeto: NENHUM fato sobre Morro Vermelho foi inventado.

   Cada verbete separa explicitamente duas coisas:
     (a) CONTEXTO REGIONAL — o que é documentado sobre Minas Gerais e vale
         como pano de fundo. Verdadeiro, porém genérico.
     (b) O QUE FALTA SABER — as perguntas específicas sobre Morro Vermelho,
         dentro de caixas "Lacuna documental", mais a lista de fontes a
         consultar ao final.

   Assim a página já nasce com dupla utilidade: introdução para o leitor
   comum e roteiro de pesquisa para quem for escrever a versão definitiva.

   BLOCOS DISPONÍVEIS dentro de cada seção (ver fonte/modelos/artigo.mjs):
     'texto'                        parágrafo
     { abertura: '…' }              parágrafo com capitular
     { sub: '…' }                   subtítulo <h3>
     { lista: ['…', '…'] }          lista com marcador de filete
     { citacao: '…', autoria: '…' } citação em papel envelhecido
     { lacuna: '…' }                caixa tracejada "Lacuna documental"
     { nota: '…', titulo: '…' }     caixa de nota editorial
     { figura: '…', arquivo: '…', legenda: '…' }   espaço de imagem

   Sumário, tempo de leitura, barra de progresso, "como citar" e navegação
   entre capítulos são derivados do conteúdo — nada disso se digita.
   ========================================================================== */

export default {
  slug: 'estrada-real',
  titulo: 'Estrada Real',
  numero: '08',
  olho: 'Nossa História · 08',
  tom: 'var(--terra-700)',
  estado: 'Rascunho estruturado',
  resumo: 'A Estrada Real não era uma estrada. Era um sistema de caminhos controlados pela Coroa, e o que passava por eles era fiscalizado.',
  resumoSeo: 'A Estrada Real e Morro Vermelho, distrito de Caeté (MG): o sistema de caminhos coloniais, o que se sabe e o que falta documentar.',
  secoes: [
    {
      id: 'o-que-era', titulo: 'O que a Estrada Real era de fato',
      blocos: [
        { abertura: 'O nome no singular engana. A Estrada Real foi um <strong>conjunto de caminhos oficiais</strong> que a Coroa portuguesa autorizou e, mais importante, os únicos por onde era permitido transitar entre as minas e o litoral.' },
        'A lógica era fiscal, não logística. Concentrando o trânsito em rotas conhecidas, a Coroa podia instalar registros e postos de cobrança e garantir a arrecadação do quinto: um quinto de todo o ouro extraído. Abrir picada por fora era crime.',
        { lista: [
          '<strong>Caminho Velho:</strong> ligava a região mineradora ao porto de Paraty, no Rio de Janeiro. O mais antigo.',
          '<strong>Caminho Novo:</strong> aberto depois, encurtava o percurso até o Rio de Janeiro e tornou-se a rota principal.',
          '<strong>Caminho dos Diamantes:</strong> seguia para o norte, em direção ao Serro e a Diamantina.',
          '<strong>Caminho do Sabarabuçu:</strong> trecho ligado à região de Sabará e Caeté, historicamente associado à lenda da serra reluzente de prata.',
        ] },
      ],
    },
    {
      id: 'e-aqui', titulo: 'E o trecho daqui',
      blocos: [
        'Caeté ocupa posição relevante nessa geografia colonial: a antiga Vila Nova da Rainha, junto à Serra da Piedade, esteve na rede de caminhos da região do Sabarabuçu.',
        { lacuna: 'A pergunta específica desta página é: <strong>por onde exatamente passava o caminho no território de Morro Vermelho, e o que dele ainda existe?</strong> Trechos de calçamento, pontes, muros de arrimo, marcos e ranchos de tropa são o tipo de vestígio que sobrevive, e que ninguém procura até alguém decidir procurar.' },
        { nota: 'Um trecho identificado e sinalizado de caminho colonial é, ao mesmo tempo, patrimônio, conteúdo educativo e atrativo turístico concreto. É o item desta lista com maior retorno prático para o distrito.', titulo: 'Por que este levantamento vale a pena' },
      ],
    },
    {
      id: 'o-que-passava', titulo: 'O que passava por ali',
      blocos: [
        'Caminho colonial não transportava só ouro. Descia metal e pedra; subia sal, ferramenta, tecido, vinho, azeite, papel, imagem sacra, e gente, em ambos os sentidos, incluindo pessoas escravizadas levadas do litoral para as lavras.',
        'Era também por onde circulavam notícia, ordem régia, carta de família e doença. Uma estrada é sempre um vetor: das duas coisas que este distrito registra em sua própria memória (a busca do ouro e a epidemia da bexiga), as duas chegaram por caminho.',
        { figura: 'Trecho de calçamento antigo, ponte, marco ou vestígio de caminho no território do distrito.', arquivo: 'figura-estrada-real.jpg', legenda: '<strong>Trecho de caminho de terra no distrito.</strong> Falta o que daria a esta imagem valor documental pleno: a coordenada de GPS, a escala visível e a data, e a confirmação de que este traçado coincide com o da Estrada Real.', alt: 'Caminho de terra estreito descendo entre barrancos e vegetação densa, com luz do sol ao fundo.', credito: 'Acervo de pesquisa Geraldo Lopes e Viviane Pinheiro · autoria a confirmar' },
      ],
    },
  ],
  fontes: [
    'Instituto Estrada Real: mapeamento oficial dos traçados e trechos reconhecidos.',
    'IEPHA-MG e IPHAN: inventários de caminhos coloniais e bens tombados na região.',
    'Arquivo Público Mineiro: mapas coloniais e registros de postos de cobrança.',
    'Levantamento de campo com GPS: identificar e georreferenciar vestígios no distrito.',
    'Memória oral: tropeiros, moradores antigos e proprietários rurais sabem onde estão os trechos velhos.',
    'Prefeitura de Caeté: planos de turismo e patrimônio que já mencionem o traçado.',
  ],
  relacionadas: [
    { nome: 'A Busca do Ouro', href: 'a-busca-do-ouro.html', txt: 'O que descia por estes caminhos.', olho: '03' },
    { nome: 'Como chegar', href: 'index.html#visite', txt: 'As estradas de hoje até o distrito.', olho: 'Visitar' },
    { nome: 'Epidemia da Bexiga', href: 'epidemia-da-bexiga.html', txt: 'O que também viajava pelos caminhos.', olho: '11' },
  ],
};
