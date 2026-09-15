/* ==========================================================================
   CONTEÚDO DA HOME

   FONTE: originais/word/01MV.docx — a CAPA do projeto. Ela tem quatro coisas
   e só estas quatro:

     · o nome:    MORRO VERMELHO
     · o lema:    Amor à liberdade
     · o texto de apresentação do distrito (o "manifesto")
     · os LINKS:  a lista dos capítulos 02 a 29, cada um com a sua linha
     · o "E MAIS": onde fica, como chegar, onde ficar, o que ver, comer,
                   comprar — que é o capítulo 26, Serviços

   As biografias de Geraldo e Viviane vêm do material enviado por Viviane.

   REGRA DESTE ARQUIVO, a mesma dos verbetes: nenhuma frase sobre Morro
   Vermelho que não esteja nos documentos do autor. As descrições dos
   capítulos abaixo são as linhas de apoio que o próprio 01MV.docx dá a cada
   um deles — as mesmas que abrem cada verbete.

   O QUE SAIU DAQUI em setembro de 2026, por não ter origem nos documentos:
     · REVELAÇÕES      três "fatos" escritos pelo portal, com fontes que
                       diziam "a documentar"
     · ACERVO          três peças de exemplo, duas sem imagem, com textos
                       como "Escritura em gaveta de família"
     · COMPARADOR      o antes/depois, que dependia de uma fotografia que
                       não existe (midia/comparador-depois.jpg)
     · O_QUE_ACEITAMOS a lista do "Colabore"
     · CAVALHADAS      bloco desligado, com descrição escrita pelo portal;
                       o assunto é o verbete 18
     · as etiquetas "a verificar" e os marcos "estimados" da linha do tempo
     · IDEALIZADORES_ABERTURA, que o próprio comentário deste arquivo já
       declarava não ter vindo do material de Viviane
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. O MANIFESTO

   O texto com que o distrito se apresenta, transcrito de 01MV.docx inteiro e
   sem edição de estilo. É a página de rosto do livro.
   -------------------------------------------------------------------------- */

export const MANIFESTO = {
  titulo: 'Morro Vermelho, amor à liberdade',
  lema: 'Amor à Liberdade',
  texto:
    'Desde 1700, o povoado de Morro Vermelho vem dando ao Brasil seguidas lições de '
  + 'resistência, dignidade e cidadania. Aqui ecoou o primeiro grito contra o regime '
  + 'feudal no Brasil. Aqui nasceu a primeira eleição direta das Américas. Aqui o povo '
  + 'foi às ruas pelas Diretas-Já, numa reação que avançou por toda a nação. Aqui os '
  + 'temidos Dragões Reais controlaram rebeliões sob o jugo da espada. Diante da '
  + 'prepotência tirânica e da voracidade fiscal, este povo destemido comandou a Guerra '
  + 'dos Emboabas e conseguiu, pelo amor à liberdade, banir das Minas Gerais o direito '
  + 'de conquista dos colonizadores e reformar a estrutura estatal vigente, abrindo '
  + 'caminhos para motins até a Inconfidência Mineira.',
};

/* --------------------------------------------------------------------------
   2. POR ONDE COMEÇAR

   Cinco entradas para os capítulos. O título é o do capítulo e a descrição é
   a linha de apoio que o documento dá a ele — nada aqui é redigido.

   img: opcional. Enquanto não existir a fotografia, o cartão usa o campo
   'tom' e nada mais precisa ser feito — basta salvar o arquivo em midia/ e
   apontar aqui. Ver midia/LEIA-ME.md para nomes e medidas.
   -------------------------------------------------------------------------- */

export const CAMINHOS = [
  {
    indice: '02', href: 'historia-de-resistencia.html', grande: true,
    tom: 'var(--terra-800)', acao: 'Ler', icone: 'seta-dir',
    titulo: 'História de Resistência',
    desc: 'Um povo unido constrói o seu próprio destino.',
  },
  {
    indice: '09', href: 'guerra-dos-emboabas.html',
    tom: 'var(--terra-700)', acao: 'Ler', icone: 'seta-dir',
    titulo: 'Guerra dos Emboabas',
    desc: 'A primeira eleição direta das Américas.',
  },
  {
    indice: '18', href: 'cavalhada-de-nazareth.html',
    tom: 'var(--areia-800)', acao: 'Ler', icone: 'seta-dir',
    titulo: 'Cavalhada de Nossa Senhora de Nazareth',
    desc: 'Festa preservada sem interrupção desde 1704.',
  },
  {
    indice: '15', href: 'parque-do-gandarela.html',
    tom: 'var(--serra-700)', acao: 'Ler', icone: 'seta-dir',
    titulo: 'Parque do Gandarela',
    desc: 'Matas e mananciais ainda preservados.',
  },
  {
    indice: '26', href: 'servicos.html',
    tom: 'var(--serra-600)', acao: 'Ver', icone: 'pin',
    titulo: 'Serviços',
    desc: 'Onde fica, como chegar, onde ficar, o que ver, comer e comprar.',
    img: { src: 'midia/morro-vermelho.jpeg', largura: 1220, altura: 1463 },
  },
];

/* --------------------------------------------------------------------------
   3. LINHA DO TEMPO

   Cada marco é uma data que está escrita em algum dos documentos, e o campo
   'href' leva ao capítulo de onde ela saiu. Não há mais marco "estimado" nem
   etiqueta "a verificar": o que o autor data, está datado; o que ele não
   data, não entra.
   -------------------------------------------------------------------------- */

export const LINHA_DO_TEMPO = [
  {
    ano: '1650',
    titulo: 'Habitações em Viracopos',
    txt: 'O historiador Agostinho Marques registra a presença de habitações no arraial de '
       + 'Viracopos, a três quilômetros do povoado.',
    href: 'arraial-de-viracopos.html',
  },
  {
    ano: '1700',
    titulo: 'A primeira capela',
    txt: 'O registro de conclusão da primeira capela de Nossa Senhora de Nazareth.',
    href: 'historia-de-resistencia.html',
  },
  {
    ano: '1701',
    titulo: 'As grandes jazidas de ouro',
    txt: 'Bandeirantes encontram grandes jazidas em Caeté, Cuiabá, Ribeiro Comprido e Morro '
       + 'Vermelho.',
    href: 'a-busca-do-ouro.html',
  },
  {
    ano: '1703',
    titulo: 'Capela do Rosário dos Pretos',
    txt: 'A mais antiga edificação de Morro Vermelho, construída por escravos.',
    href: 'atracoes.html',
  },
  {
    ano: '1704',
    titulo: 'Primeira Cavalhada de Nossa Senhora de Nazareth',
    txt: 'Desde este ano a festa vem sendo repetida anualmente, sem jamais ter sido '
       + 'interrompida.',
    href: 'cavalhada-de-nazareth.html',
  },
  {
    ano: '1707',
    titulo: 'Guerra dos Emboabas',
    txt: 'Em dezembro, os povos de Sabará, Rio das Velhas e Caeté marcham para Morro Vermelho e '
       + 'elegem Manuel Nunes Viana governador das Minas Gerais.',
    href: 'guerra-dos-emboabas.html',
  },
  {
    ano: '1713',
    titulo: 'Construção da Igreja Matriz',
    txt: 'Erguida pelo capitão-mor Paulo Rodrigues Durão, pai do poeta de O Caramuru, frei '
       + 'Santa Rita Durão.',
    href: 'atracoes.html',
  },
  {
    ano: '1715',
    titulo: 'Levante das Bateias',
    txt: 'A insurreição contra a cobrança do quinto do ouro por bateia rebenta furiosa em Morro '
       + 'Vermelho, e o governador acaba cedendo.',
    href: 'levante-das-bateias.html',
  },
  {
    ano: '1719',
    titulo: 'Os Dragões Reais',
    txt: 'Chegam a Minas Gerais duas companhias de dragões enviadas de Lisboa, uma delas '
       + 'destacada para Morro Vermelho.',
    href: 'os-dragoes-reais.html',
  },
  {
    ano: '1866',
    titulo: 'Indulgência Plenária',
    txt: 'O Papa Pio IX concede a bula aos devotos que visitarem a Matriz em 7 e 8 de setembro.',
    href: 'festas-e-tradicoes.html',
  },
  {
    ano: '1880',
    titulo: 'Criação do distrito',
    txt: 'A Lei Provincial nº 2.709, de 30 de novembro, cria o distrito de Morro Vermelho e o '
       + 'anexa ao município de Caeté.',
    href: 'historia-de-resistencia.html',
  },
  {
    ano: '1895',
    titulo: 'Epidemia da bexiga',
    txt: 'A varíola mata cerca de 300 pessoas e faz a maioria da população abandonar o povoado.',
    href: 'epidemia-da-bexiga.html',
  },
  {
    ano: '1932',
    titulo: 'Comendador da Santa Sé',
    txt: 'O Papa Pio XI concede a insígnia ao professor Antônio Evangelista Marques Guimarães, '
       + 'por ter dado à Igreja seis filhos padres.',
    href: 'familia-de-padres.html',
  },
  {
    ano: '1950',
    titulo: 'Tombamento da Matriz',
    txt: 'Em 9 de maio, o Iphan tomba a Matriz de Nossa Senhora de Nazareth como bem histórico '
       + 'nacional.',
    href: 'bens-historicos.html',
  },
  {
    ano: '1983',
    titulo: 'Diretas-Já',
    txt: 'Em 7 de setembro, na Praça da Matriz, é lançada a campanha pelas eleições diretas para '
       + 'presidente da República.',
    href: 'diretas-ja.html',
  },
  {
    ano: '2014',
    titulo: 'Parque Nacional da Serra do Gandarela',
    txt: 'Criado pelo governo federal em outubro, a pedido de organizações civis de todo o país.',
    href: 'parque-do-gandarela.html',
  },
];

/* --------------------------------------------------------------------------
   4. IDEALIZADORES

   Sem estas duas pessoas não existe acervo: os textos de todo o portal vêm
   de mais de quarenta anos de pesquisa deles.

   bio é uma lista de parágrafos porque os textos originais, enviados por
   Viviane, já vêm com essa quebra — reduzi-los a um bloco só apagaria a
   pausa entre "o que cada um fez na carreira" e "o que fazem aqui".
   -------------------------------------------------------------------------- */

export const IDEALIZADORES = [
  {
    nome: 'Geraldo Lopes',
    apelido: 'Sô Zico',
    foto: {
      src: 'midia/retrato-geraldo-lopes.jpeg', largura: 682, altura: 1024,
      alt: 'Retrato de Geraldo Lopes.',
    },
    bio: [
      'Jornalista, publicitário e relações-públicas, formado pela Universidade Federal '
    + 'de Minas Gerais (UFMG), Geraldo Lopes construiu uma trajetória de mais de quatro '
    + 'décadas dedicada ao jornalismo e à comunicação. Durante 45 anos, atuou nos mais '
    + 'importantes veículos da imprensa escrita brasileira, entre eles <em>Estado de '
    + 'Minas</em> e <em>Folha de S.Paulo</em>, além de exercer atividades como assessor '
    + 'de comunicação.',
      'Com uma carreira marcada pela experiência, pelo conhecimento e pelo compromisso '
    + 'com a informação, Geraldo é natural do distrito de Morro Vermelho. Idealizador do '
    + 'site, une sua reconhecida trajetória profissional às raízes e à identidade de sua '
    + 'terra natal, contribuindo para preservar, registrar e projetar a história, a '
    + 'cultura e a riqueza de Morro Vermelho.',
    ],
  },
  {
    nome: 'Viviane Pinheiro',
    apelido: '',
    foto: {
      src: 'midia/retrato-viviane-pinheiro.jpeg', largura: 960, altura: 1280,
      alt: 'Retrato de Viviane Pinheiro.',
    },
    bio: [
      'Licenciada em Letras e Jornalista formada pelo Centro Universitário Newton '
    + 'Paiva, Viviane Pinheiro reúne em sua trajetória a experiência jornalística, a '
    + 'comunicação e a educação. Atuou em assessorias de comunicação na capital mineira '
    + 'e construiu sólida experiência na produção de conteúdos para jornal impresso, '
    + 'televisão e mídias digitais. Divide sua atuação profissional entre o jornalismo '
    + 'televisivo e a docência, onde leciona Língua Portuguesa.',
      'É natural do distrito de Morro Vermelho e participa, ao lado de Geraldo, da '
    + 'concepção e do desenvolvimento do site, e coloca sua formação, experiência e '
    + 'profundo vínculo com a terra natal a serviço da valorização, da memória e da '
    + 'divulgação da história, da cultura e das singularidades de Morro Vermelho.',
    ],
  },
];
