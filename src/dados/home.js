/* ==========================================================================
   CONTEÚDO DA HOME

   No projeto original estes itens eram markup escrito à mão dentro de
   home.mjs, e a instrução era "duplique o bloco <article class='peca'>".
   Aqui são dados — que é o ganho concreto de ter migrado para componentes:
   acrescentar uma peça ao acervo é acrescentar um objeto a uma lista, e não
   copiar 14 linhas de HTML e lembrar de trocar --giro, --sepia e o ícone.

   A REGRA DOS NÚMEROS CONTINUA VALENDO, e ficou mais forte: nenhum número
   desta página é digitado. Os contadores do acervo são derivados destas
   listas (ver src/paginas/Home.jsx). Acrescente 40 peças e os números sobem
   sozinhos, exatamente como antes — só que agora sem depender de o navegador
   contar elementos no DOM.
   ========================================================================== */

/* --------------------------------------------------------------------------
   0. O MANIFESTO

   O texto com que o distrito se apresenta. Não é prosa deste portal: é a
   síntese que a própria comunidade faz da própria história, e por isso está
   aqui inteira, sem edição de estilo.

   ATENÇÃO EDITORIAL — este parágrafo faz SEIS afirmações datáveis e
   verificáveis, e cada uma tem um verbete próprio onde o que se sabe e o que
   falta provar estão separados. Ele não é, portanto, texto com fonte: é a
   declaração de identidade do distrito, e o portal a trata como tal.

   A etiqueta "a verificar" que acompanha o manifesto na home não desmente o
   texto. Diz apenas: as fontes estão sendo levantadas, e cada afirmação tem
   endereço onde a pesquisa pode ser acompanhada. É a diferença entre um
   portal que afirma e um portal que documenta — e este projeto escolheu ser
   o segundo sem calar o primeiro.
   -------------------------------------------------------------------------- */

export const MANIFESTO = {
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

  /* Onde cada afirmação do manifesto é examinada. É isto que transforma um
     texto de apresentação em roteiro de pesquisa navegável. */
  ondeSeExamina: [
    { afirmacao: 'Desde 1700', slug: 'a-busca-do-ouro' },
    { afirmacao: 'O primeiro grito contra o regime feudal', slug: 'levante-das-bateias' },
    { afirmacao: 'A primeira eleição direta das Américas', slug: 'guerra-dos-emboabas' },
    { afirmacao: 'As Diretas-Já', slug: 'diretas-ja' },
    { afirmacao: 'Os Dragões Reais', slug: 'os-dragoes-reais' },
    { afirmacao: 'A Guerra dos Emboabas', slug: 'guerra-dos-emboabas' },
  ],
};

/* --------------------------------------------------------------------------
   1. REVELAÇÕES
   Substituem a faixa de estatísticas inventadas da v1 ("300+ anos, 500
   fotografias, 120 documentos" — nenhum número real). Três fatos
   específicos, cada um com a sua fonte declarada ao lado.
   -------------------------------------------------------------------------- */

export const REVELACOES = [
  {
    num: '01',
    titulo: 'O distrito escolheu se apresentar pela liberdade, não pelo ouro',
    texto: 'Um povoado nascido da mineração poderia se vender pelo ciclo do ouro, '
         + 'como faz a maior parte das cidades históricas de Minas. Morro Vermelho '
         + 'adotou <strong>“Amor à Liberdade”</strong> como lema. Essa escolha '
         + 'desloca o centro da história das pedras para as pessoas, e organiza '
         + 'todo este portal.',
    fonte: 'Lema em uso pelo próprio distrito. Origem e data de adoção a documentar.',
  },
  {
    num: '02',
    titulo: 'O nome não é poesia: é a cor do chão',
    texto: 'Na cidade há um cume, com uma parte sem vegetação que exibe uma terra bem '
         + 'avermelhada, que é bem comum nas redondezas. A partir daí veio o nome que '
         + 'foi adotado para o local, Morro Vermelho.',
    fonte: 'Fonte a registrar: literatura sobre toponímia mineira / acervo municipal de Caeté.',
  },
  {
    num: '03',
    titulo: 'Metade da memória daqui está dentro de casas, não de arquivos',
    texto: 'Cartas, retratos de casamento, cadernos de receita e principalmente os mais '
         + 'antigos moradores. Este portal existe para digitalizar isso antes que o '
         + 'tempo resolva por nós, e devolver o original a quem o guardou.',
    fonte: 'Este é o compromisso editorial do projeto, não um dado histórico.',
  },
];

/* --------------------------------------------------------------------------
   2. CAMINHOS DE ENTRADA (seção "Por onde você quer entrar")

   img: opcional. Enquanto não existir a fotografia, o cartão usa o campo
   'tom' e nada mais precisa ser feito — basta salvar o arquivo em midia/ e
   apontar aqui. Ver midia/LEIA-ME.md para nomes e medidas.
   -------------------------------------------------------------------------- */

export const CAMINHOS = [
  {
    indice: '01', href: '#acervo', grande: true, tom: 'var(--terra-700)', acao: 'Ver acervo', icone: 'seta-dir',
    titulo: 'Registros',
    desc: 'Documentos, fotografias e registros digitalizados, com transcrição, procedência e download em alta resolução.',
  },
  {
    indice: '02', href: 'historia-de-resistencia.html', tom: 'var(--serra-700)', acao: 'Ler', icone: 'seta-dir',
    titulo: 'História de Resistência',
    desc: 'O eixo da memória do distrito, em capítulos.',
  },
  {
    indice: '03', href: '#idealizadores', tom: 'var(--areia-800)', acao: 'Conhecer', icone: 'retrato',
    titulo: 'Quem fez este portal',
    desc: 'Geraldo Lopes e Viviane Pinheiro, e quarenta anos de pesquisa.',
  },
  {
    indice: '04', href: '#antes-depois', tom: 'var(--grafite-700)', acao: 'Comparar', icone: 'comparar',
    titulo: 'Antes e depois',
    desc: 'A mesma esquina, com um século de diferença.',
  },
  {
    indice: '05', href: '#visite', tom: 'var(--serra-600)', acao: 'Planejar', icone: 'pin',
    titulo: 'Visitar',
    desc: 'Distâncias reais, o que dá para ver em duas horas, e como chegar.',
    img: { src: 'midia/morro-vermelho.jpeg', largura: 1220, altura: 1463 },
  },
];

/* --------------------------------------------------------------------------
   3. LINHA DO TEMPO

   'estimado: true' desenha o contorno tracejado — data estimada, atribuída
   pela tradição local ou ainda não documentada. Preferimos mostrar a lacuna
   a preencher com invenção, e é por isso que o trilho tem mais tracejado do
   que gostaríamos.

   As datas de 1700, 1704, 1707, 1713 e 1983 são as que o próprio distrito guarda,
   e cada uma tem um verbete que explica o que já se sabe e o que falta
   provar. O campo 'href' leva até ele: um marco que declara ser estimado
   deve dizer onde a discussão está.
   -------------------------------------------------------------------------- */

export const LINHA_DO_TEMPO = [
  {
    ano: '1700', estimado: true,
    titulo: 'Formação do povoado',
    txt: 'A ocupação mineradora da região, no contexto das Minas setecentistas.',
    verificar: 'data e circunstância a documentar',
    href: 'a-busca-do-ouro.html',
  },
  {
    ano: '1704', estimado: true,
    titulo: 'Primeira Cavalhada de Nossa Senhora de Nazareth',
    txt: 'Data que a tradição do distrito guarda para o início da festa.',
    verificar: 'origem da data a documentar',
    href: 'cavalhada-de-nazareth.html',
  },
  {
    ano: '1707–1709', estimado: true,
    titulo: 'Guerra dos Emboabas',
    txt: 'O conflito pelas minas, e a aclamação que o distrito reivindica como a primeira eleição direta das Américas.',
    verificar: 'local da aclamação a documentar',
    href: 'guerra-dos-emboabas.html',
  },
  {
    ano: '1713',
    titulo: 'Construção da Igreja Matriz',
    txt: 'Erguida pelo capitão-mor Paulo Rodrigues Durão, pai do poeta Frei Santa Rita Durão. Tombada pelo IPHAN em 1950.',
    href: 'atracoes.html',
  },
  {
    ano: '?', estimado: true,
    titulo: 'Elevação a distrito de Caeté',
    txt: 'Verificar em legislação municipal/estadual e no acervo do IBGE.',
  },
  {
    ano: '1983',
    titulo: 'Mobilização pelas Diretas-Já',
    txt: 'Em 7 de setembro, o povo do distrito foi à Praça da Matriz pedir eleição direta para presidente: o ato foi noticiado no dia seguinte em editorial da Folha de S.Paulo.',
    href: 'diretas-ja.html',
  },
  {
    ano: '2014',
    titulo: 'Criação do Parque Nacional da Serra do Gandarela',
    txt: 'A serra que abastece a região metropolitana passa a ser unidade de conservação federal.',
    href: 'parque-do-gandarela.html',
  },
  {
    ano: '2026',
    titulo: 'Início da digitalização do acervo',
    txt: 'Este portal entra no ar como arquivo aberto e colaborativo do distrito.',
  },
];

/* --------------------------------------------------------------------------
   4. ACERVO

   Para acrescentar uma peça: acrescente um objeto a esta lista. Os quatro
   contadores da seção se atualizam sozinhos.

   tipo       'documento' | 'fotografia' | 'depoimento' — governa o rótulo,
              o ícone do espaço reservado e os contadores
   giro,
   giroFita,
   sepia      o repouso torto e o envelhecimento de cada peça. É o detalhe
              mais bonito do projeto original, agora sistematizado
   img        opcional. Enquanto não houver digitalização, a peça exibe
              'ausente' e SE DECLARA — jamais uma foto de banco de imagem
   img.alt    num museu digital, o alt É o acervo para quem não enxerga.
              Descreva a peça, não o assunto genérico
   -------------------------------------------------------------------------- */

export const ACERVO = [
  {
    tipo: 'documento', rotulo: 'Documento', giro: '-1.4deg', giroFita: '-3deg', sepia: 0.34,
    titulo: 'Livro de registros paroquiais',
    meta: 'Século XIX', verificar: 'confirmar', metaFim: 'procedência a identificar',
    ausente: 'Documento identificado.\nDigitalização pendente.',
  },
  {
    tipo: 'fotografia', rotulo: 'Fotografia', giro: '1.1deg', giroFita: '2.5deg', sepia: 0.5,
    titulo: 'A Matriz e o cruzeiro',
    meta: 'Data a estabelecer', metaFim: 'procedência a identificar',
    verificarMarca: { texto: 'datar', title: 'Datar a fotografia e identificar a procedência' },
    ausente: 'Fotografia em acervo de família.\nAguardando autorização e digitalização.',
    img: {
      src: 'midia/matriz-antiga.jpeg', largura: 1218, altura: 1223,
      alt: 'Fotografia antiga da Igreja Matriz de Morro Vermelho, fachada de duas torres, '
         + 'com cruzeiro de madeira à esquerda e terreiro de terra batida em frente.',
    },
  },
  {
    tipo: 'depoimento', rotulo: 'Memória oral', giro: '-0.7deg', giroFita: '1.5deg', sepia: 0.22,
    titulo: 'Como se aprendia música na banda',
    meta: 'Entrevista prevista', metaFim: 'transcrição integral',
    ausente: 'Depoimento a gravar.\nRoteiro de entrevista em preparação.',
  },
  {
    tipo: 'documento', rotulo: 'Documento', giro: '0.9deg', giroFita: '-2deg', sepia: 0.4,
    titulo: 'Escritura de imóvel no centro',
    meta: 'Data a estabelecer', metaFim: 'acervo particular',
    ausente: 'Escritura em gaveta de família.\nContato feito, digitalização a agendar.',
  },
];

/* Ícone do espaço reservado, por tipo de peça. */
export const ICONE_POR_TIPO = {
  documento: 'doc',
  fotografia: 'camera',
  depoimento: 'som',
};

/* --------------------------------------------------------------------------
   5. COMPARADOR ANTES / DEPOIS

   Duas fotografias do mesmo ponto. Enquanto uma delas não existir, a face
   correspondente mostra o que falta — e o comparador continua funcionando.
   -------------------------------------------------------------------------- */

export const COMPARADOR = {
  antes: {
    src: 'midia/matriz-antiga.jpeg', largura: 1218, altura: 1223,
    alt: 'Fotografia antiga em preto e branco da Igreja Matriz de Morro Vermelho: fachada '
       + 'branca de duas torres com coruchéus, frontão triangular e sino visível na torre '
       + 'da direita. À esquerda, um cruzeiro de madeira com os instrumentos da Paixão. '
       + 'O terreiro em frente é de terra batida, sem calçamento.',
  },
  depois: {
    src: 'midia/comparador-depois.jpg', largura: 1218, altura: 1223,
    alt: 'A mesma fachada da Matriz hoje, do mesmo ponto de vista.',
  },
};

/* --------------------------------------------------------------------------
   6. COLABORE — o que o acervo aceita
   -------------------------------------------------------------------------- */

export const O_QUE_ACEITAMOS = [
  'Fotografias de família, festa, trabalho, obra, procissão, escola.',
  'Documentos: escrituras, cartas, cadernos, recortes de jornal.',
  'Receitas manuscritas, inclusive as com mancha de gordura.',
  'Histórias que só você sabe contar. Levamos o gravador.',
];

/* --------------------------------------------------------------------------
   7. CAVALHADAS — desativada a pedido, preservada para uso futuro

   No projeto original esta seção era mantida dentro de um comentário HTML, o
   que exigia cuidado (comentário HTML não aninha) e a fazia sumir do
   publicado por acidente de sintaxe. Aqui ela é um componente inteiro e
   funcional em src/componentes/home/Cavalhadas.jsx, desligado por esta
   constante — que é a forma honesta de dizer "existe, mas não está no ar".

   PARA REATIVAR
     1. Vire MOSTRAR_CAVALHADAS para true.
     2. Preencha CAVALHADAS.quando com a data ISO real — enquanto estiver
        vazia, o bloco se declara "data a confirmar" em vez de exibir NaN.
     3. Recoloque o link no MENU e no MENU_RODAPE de navegacao.js.
   O CSS (.cavalhadas, .contagem, .partidos) nunca saiu de home.css.
   -------------------------------------------------------------------------- */

export const MOSTRAR_CAVALHADAS = false;

export const CAVALHADAS = {
  quando: '',   /* ex.: '2026-12-08T09:00:00-03:00' */
  descricao: 'Durante dias, o distrito se divide em dois partidos e reencena a batalha '
           + 'entre mouros e cristãos a cavalo. Não é espetáculo montado para turista: '
           + 'é uma obrigação que as famílias assumem, com papéis herdados, roupa '
           + 'costurada em casa e cavalo preparado meses antes.',
  partidos: [
    { nome: 'Mouros',    cor: '#16325c',           txt: 'Partido azul.' },
    { nome: 'Cristãos',  cor: 'var(--terra-500)',  txt: 'Partido vermelho.' },
  ],
};

/* --------------------------------------------------------------------------
   8. IDEALIZADORES

   Sem estas duas pessoas não existe acervo: os textos de todo o portal vêm
   de mais de quarenta anos de pesquisa deles (ver src/dados/documentos/
   sobre-o-portal.js). Esta seção é o retrato dos dois — o coração do
   projeto, e não um rodapé de crédito.

   bio é uma lista de parágrafos porque os textos originais, enviados por
   Viviane, já vêm com essa quebra — reduzi-los a um bloco só apagaria a
   pausa entre "o que cada um fez na carreira" e "o que fazem aqui".

   IDEALIZADORES_ABERTURA é texto de enquadramento deste projeto (não veio
   do material de Viviane) — por isso fica FORA dos objetos de biografia.
   -------------------------------------------------------------------------- */

export const IDEALIZADORES_ABERTURA =
    'Nenhum verbete deste acervo foi escrito para caber num site. Vem de duas '
  + 'pessoas que carregam a história de Morro Vermelho há mais de quarenta '
  + 'anos, e que agora a devolvem ao próprio distrito, em código em vez de '
  + 'papel.';

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
