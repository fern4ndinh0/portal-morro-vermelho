/* ==========================================================================
   24 · REDES SOCIAIS

   FONTE: originais/word/24MV.docx — "Pesquisa, texto e fotos: Geraldo Lopes".
   É a lista de endereços que o autor reuniu, transcrita sem acréscimo.
   ========================================================================== */

/* O documento original traz os endereços nus, sem rótulo. É assim que eles
   saem aqui: o texto do link é o próprio endereço. */
const link = (url) =>
  `<a href="${url}" target="_blank" rel="noopener">${url}</a>`;

export default {
  slug: 'midia-e-redes',
  titulo: 'Redes Sociais',
  numero: '24',
  olho: 'Cultura e patrimônio · 24',
  tom: 'var(--serra-600)',
  resumo: 'Sites interessantes',
  resumoSeo: 'Endereços reunidos sobre Morro Vermelho, Caeté (MG): vídeos, reportagens, estudos, '
           + 'documentários, mapas e as entidades do distrito.',
  secoes: [
    {
      id: 'galeria-de-fotos', titulo: 'Galeria de fotos',
      blocos: [
        'Imagens antigas de Morro Vermelho / MG (Facebook)',
      ],
    },
    {
      id: 'morro-vermelho', titulo: 'Morro Vermelho',
      blocos: [
        'O caráter único de Morro Vermelho na Região Metropolitana de Belo Horizonte: '
      + link('http://quapa.fau.usp.br/wordpress/wp-content/uploads/2016/03/O-car%C3%A1ter-%C3%BAnico-de-Morro-Vermelho-na-RMBH.pdf'),
        { sub: 'Restauração' },
        link('http://www.grupooficinaderestauro.com.br/restauracoes/morro-vermelho.html'),
        { sub: 'Emboabas' },
        { lista: [
          link('http://www.historia.uff.br/impressoesrebeldes/wp-content/uploads/2017/02/Trezentos-anos-depois...pdf'),
          link('http://www.infoescola.com/historia-do-brasil/capao-da-traicao/'),
        ] },
        { sub: 'Mineração' },
        link('http://www.geologiadobrasil.com.br/1494_1803.html'),
      ],
    },
    {
      id: 'televisao-videos', titulo: 'Televisão e vídeos',
      blocos: [
        { lista: [
          link('https://www.youtube.com/watch?v=Nzg3PMOeA9c'),
          link('https://www.youtube.com/watch?v=i1_BOYHNKrA'),
          link('https://www.youtube.com/watch?v=OwDC8I9oAHU&sns=em'),
          link('https://www.youtube.com/watch?v=i1_BOYHNKrA&t=426s'),
          link('https://globoplay.globo.com/v/4911598/'),
        ] },
      ],
    },
    {
      id: 'musica', titulo: 'Música',
      blocos: [
        'Sociedade Musical Santa Cecília de Morro Vermelho (Facebook)',
        { lista: [
          link('https://www.youtube.com/watch?v=UeRALRkbL0Q'),
          link('https://www.youtube.com/watch?v=UeRALRkbL0Q&t=29s'),
          link('https://www.youtube.com/watch?v=4Kb1WU1VH_Y'),
        ] },
      ],
    },
    {
      id: 'senhor-dos-passos', titulo: 'Senhor dos Passos',
      blocos: [
        { lista: [
          link('https://www.youtube.com/watch?v=VqtuvuV-uvE&sns=em'),
          link('https://www.em.com.br/app/noticia/gerais/2012/02/23/interna_gerais,279497/homens-dao-banho-de-cachaca-em-imagem-de-cristo-em-caete.shtml'),
          link('https://www.em.com.br/app/noticia/gerais/2013/02/14/interna_gerais,350322/banho-com-cachaca-na-imagem-de-santo-e-documentado-para-entrar-para-historia.shtml'),
          link('https://www.em.com.br/app/noticia/gerais/2013/02/03/interna_gerais,348057/ritos-sagrados-ganham-protecao-em-minas-gerais.shtml'),
        ] },
      ],
    },
    {
      id: 'festa-de-nazareth', titulo: 'Festa de Nossa Senhora de Nazareth',
      blocos: [
        { lista: [
          link('https://www.youtube.com/watch?v=XX5OAw5hXHs'),
          link('https://www.youtube.com/watch?v=VgHC3B8Uz4E&t=12s'),
          link('https://www.youtube.com/watch?v=O-QagLma_sA'),
          link('https://www.youtube.com/watch?v=WYfGplv-Tg8'),
          link('https://www.youtube.com/watch?v=_GXniaI-FJg'),
          link('https://www.em.com.br/app/noticia/gerais/2011/09/06/interna_gerais,249246/minas-encena-cavalhada-de-300-anos-na-grande-bh.shtml'),
          link('https://www.youtube.com/watch?v=k7LU86BJPr0'),
        ] },
      ],
    },
    {
      id: 'senhora-do-morro-vermelho', titulo: 'Senhora do Morro Vermelho',
      blocos: [
        '(Documentário da Arquidiocese)',
        { lista: [
          link('https://www.youtube.com/watch?v=NT7_uMKPl24'),
          link('https://www.youtube.com/watch?v=oGAAMddXzJk'),
          link('https://www.youtube.com/watch?v=WYfGplv-Tg8'),
        ] },
      ],
    },
    {
      id: 'festa-do-rosario', titulo: 'Festa de Nossa Senhora do Rosário',
      blocos: [
        link('https://www.youtube.com/watch?v=Y1UTkJM7aVg'),
      ],
    },
    {
      id: 'cavalhada-mirim', titulo: 'Cavalhada Mirim',
      blocos: [
        { lista: [
          link('https://www.em.com.br/app/noticia/gerais/2011/12/25/interna_gerais,269151/manifestacoes-culturais-centenarias-sao-premiadas-na-europa.shtml'),
          link('https://www.em.com.br/app/noticia/gerais/2012/03/10/interna_gerais,282630/minas-e-premiada-na-espanha.shtml'),
        ] },
      ],
    },
    {
      id: 'festa-do-alua', titulo: 'Festa do Aluá',
      blocos: [
        { lista: [
          link('https://www.youtube.com/watch?v=PNYsgeVzlJo'),
          link('https://www.slowfoodbrasil.com/arca-do-gosto/produtos-do-brasil/1134-alua'),
          link('https://www.uai.com.br/app/noticia/saboresdeminas/receitas/2016/08/12/receita-saboresdeminas,4156/alua.shtml'),
        ] },
      ],
    },
    {
      id: 'meio-ambiente', titulo: 'Meio ambiente',
      blocos: [
        { lista: [
          link('http://cbhvelhas.org.br/noticias/visita-tecnica-e-realizada-na-bacia-do-ribeirao-gaia-nos-municipios-de-caete-e-sabara/'),
          link('http://cbhvelhas.org.br/wp-content/uploads/2017/10/Volume-6-Tomo-II-UTE-Caet%C3%A9-Sabar%C3%A1-Morro-Vermelho.pdf'),
        ] },
      ],
    },
    {
      id: 'cachoeira', titulo: 'Cachoeira',
      blocos: [
        { lista: [
          link('http://ligarapel.com.br/canion-do-meio-catas-altas-mg-2-2-2/'),
          link('https://www.youtube.com/watch?v=3Al2l_Mb8Dk'),
        ] },
      ],
    },
    {
      id: 'trilhas', titulo: 'Trilhas',
      blocos: [
        { lista: [
          link('http://pt.wikiloc.com/trilhas/outdoor/brazil/minas-gerais/morro-vermelho'),
          link('https://aventure-se.com/2014/09/04/trilha-em-caete/'),
        ] },
      ],
    },
    {
      id: 'serra-do-gandarela', titulo: 'Serra do Gandarela',
      blocos: [
        { lista: [
          link('http://www.icmbio.gov.br/portal/images/stories/o-que-fazemos/folder_consultas_PNGandarela_2.pdf'),
          link('http://www.icmbio.gov.br/portal/images/stories/o-que-fazemos/PARQUE_GANDARELA_proposta_ICMBio.pdf'),
        ] },
      ],
    },
    {
      id: 'outros-enderecos', titulo: 'Outros endereços',
      blocos: [
        { sub: 'Escola Municipal Anézia Maria Pinheiro' },
        link('http://emaneziamariapinheiro.blogspot.com.br/'),
        { sub: 'Pousada das Bandeiras' },
        link('http://www.pousadadabandeira.com.br/'),
        { sub: 'Restaurante Alpenrose' },
        link('https://www.facebook.com/RestauranteAlpenrose'),
        { sub: 'Jeep Clube de Morro Vermelho' },
        { lista: [
          link('https://www.facebook.com/1JCMV/'),
          link('https://www.youtube.com/watch?v=uc5B2SxR8Cw'),
        ] },
        { sub: 'Queijão de Morro Vermelho' },
        link('https://www.slowfoodbrasil.com/arca-do-gosto/produtos-do-brasil/1125-queijao-de-morro-vermelho'),
      ],
    },
    {
      id: 'mapas', titulo: 'Mapas do Morro Vermelho',
      blocos: [
        { sub: 'Google — atual' },
        link('http://mapasamerica.dices.net/brasil/portugues/mapa.php?nombre=Morro-Vermelho&id=15931'),
        { sub: 'Biblioteca Nacional — 1700' },
        link('http://www.wdl.org/pt/item/954/'),
      ],
    },
    {
      id: 'entidades', titulo: 'Entidades de Morro Vermelho',
      blocos: [
        { sub: 'Cavalhada Nossa Senhora de Nazareth' },
        'Praça da Matriz, s/n, Morro Vermelho, Caeté, MG, CEP 34.800-000, Brasil',
        { sub: 'Associação Comunitária de Morro Vermelho' },
        'Praça da Matriz, 01, Morro Vermelho, Caeté, MG, CEP 34800-000, Brasil',
        { sub: 'Paróquia de Nossa Senhora de Nazareth' },
        'Paróquia Nossa Senhora de Nazareth – Morro Vermelho (Facebook)',
        { lista: [
          link('https://www.facebook.com/paroquianossasenhoradenazareth/'),
          link('http://arquivo.arquidiocesebh.org.br/catalogo/paroquia.php?id=196'),
        ] },
        { sub: 'Escola Municipal Anézia Maria Pinheiro' },
        link('http://emaneziamariapinheiro.blogspot.com.br/'),
        { sub: 'Natal Futebol Clube' },
        { sub: 'Associação de Ação e Cidadania do Morro Vermelho' },
        'Rua José Evangelista Marques, 10, Morro Vermelho, Caeté, MG, CEP 34800-000, Brasil. '
      + 'Telefone (31) 3652-2245 / (31) 3651-2073. E-mail soniasomar@yahoo.com.br',
        { sub: 'Associação dos Artesãos e Produtos Caseiros de Morro Vermelho' },
        'Rua José Evangelista Marques, 12, Morro Vermelho, Caeté, MG, CEP 34800-000, Brasil. '
      + 'Telefone (31) 3652-2142',
        { sub: 'Conselho Ambiental e Cultural de Morro Vermelho (CAC/MV)' },
        'Rua Raimundo Teles de Melo, 54, Caeté, MG, CEP 34.800-000, Brasil',
        { sub: 'Jeep Clube Morro Vermelho' },
        'Fazenda Alpenrose, Morro Vermelho, Caeté, MG, CEP 34.800-000, Brasil. (31) 99799-6147. '
      + link('http://www.restaurantealpenrose.com/JCMV'),
      ],
    },
  ],
  relacionadas: [
    { nome: 'Cultura Popular', href: 'cultura-popular.html', txt: 'Tradições e comportamento social de resistência', olho: '21' },
    { nome: 'Serviços', href: 'servicos.html', txt: 'Onde fica, como chegar, o que ver, comer, comprar', olho: '26' },
    { nome: 'Galeria de Fotos', href: 'galeria-de-fotos.html', txt: 'Vistas, eventos, história', olho: '29' },
  ],
};
