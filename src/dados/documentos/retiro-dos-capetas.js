/* ==========================================================================
   RETIRO DOS CAPETAS
   Nossa História · 06
   --------------------------------------------------------------------------
   REGRA EDITORIAL: nenhum fato sobre Morro Vermelho foi inventado. Contexto
   regional documentado e perguntas locais aparecem separados, de propósito.

   ATENÇÃO AO NOME: o índice do projeto grafa "Retiro dos Capetas"; parte da
   documentação anterior deste portal usava "Retiro do Capetas", no singular.
   A forma corrente no distrito precisa ser confirmada com moradores antes da
   publicação — e, uma vez confirmada, corrigida aqui e em navegacao.js.
   ========================================================================== */

export default {
  slug: 'retiro-dos-capetas',
  numero: '06',
  titulo: 'Retiro dos Capetas',
  olho: 'Nossa História · 06',
  tom: 'var(--grafite-700)',
  estado: 'A pesquisar',
  resumo: 'Posto fiscal da Coroa Portuguesa. O ouro não podia sair sem passar por aqui, e um nome como este raramente é gentileza de quem pagava.',
  resumoSeo: 'O Retiro dos Capetas, posto fiscal da Coroa em Morro Vermelho, distrito de Caeté (MG): o que era um registro colonial e o que falta documentar.',
  secoes: [
    {
      id: 'o-registro', titulo: 'O que era um registro',
      blocos: [
        { abertura: 'A Coroa portuguesa não vigiava as minas: vigiava os <strong>caminhos</strong>. Concentrando o trânsito em rotas autorizadas, bastava instalar postos nos pontos de passagem obrigatória para taxar tudo o que entrava e saía.' },
        'Esses postos tinham nomes variados (registro, contagem, casa de registro) e função sempre igual: conferir carga, cobrar o que era devido e anotar. Ficavam onde a geografia não deixava alternativa: uma garganta de serra, uma travessia de rio, o único ponto praticável de uma vertente.',
        { lista: [
          '<strong>O quinto:</strong> a quinta parte de todo o ouro extraído, devida ao rei. Sua cobrança mudou de forma várias vezes ao longo do século XVIII, e cada mudança gerou atrito.',
          '<strong>Entradas:</strong> taxa sobre mercadorias que entravam na região das minas: sal, ferramenta, tecido, gado, pessoas escravizadas.',
          '<strong>Passagens:</strong> cobrança pelo uso de travessias e pontes, muitas vezes arrematada por contratadores particulares.',
          '<strong>Livros de registro:</strong> onde tudo isso era anotado. Quando sobrevivem, são a fonte mais rica que existe sobre o movimento de um lugar.',
        ] },
        { nota: 'Tudo acima é documentado para as Minas coloniais como região. Que o Retiro dos Capetas tenha exercido essas funções é o que esta página precisa comprovar, e é uma hipótese forte, dada a posição do distrito na rede de caminhos do Sabarabuçu.', titulo: 'O que é contexto e o que é fato local' },
      ],
    },
    {
      id: 'o-nome', titulo: 'O nome',
      blocos: [
        'Topônimo é documento. "Retiro dos Capetas" não é nome que um posto fiscal escolha para si. É nome que se ganha de quem passa por ele. Vale a pena tratar essa hipótese com seriedade, porque nomes assim guardam a avaliação popular de uma instituição por séculos depois de ela desaparecer.',
        { lacuna: 'Duas perguntas, e a segunda é a que interessa: <strong>onde exatamente ficava o retiro</strong>, e <strong>de onde vem o nome?</strong> É apelido dado aos cobradores? Referência aos Dragões Reais destacados ali? Corruptela de um nome mais antigo? Ou nada disso, e a explicação é outra? Todas as hipóteses são interessantes, inclusive a que desmente a leitura mais bonita.' },
        { nota: 'Enquanto a origem do nome não for documentada, este portal não a afirma. Uma explicação plausível e não verificada, repetida em site oficial, vira "fato" em cinco anos, e este é exatamente o tipo de invenção que o projeto existe para não cometer.', titulo: 'Por que não escolhemos uma explicação' },
      ],
    },
    {
      id: 'onde', titulo: 'Onde procurar',
      blocos: [
        'Postos fiscais deixam menos vestígio que engenhos: eram construções pequenas, muitas vezes de pau a pique, e o que sobra costuma ser o alicerce e o topônimo.',
        { lista: [
          'A localização provável está no cruzamento entre o traçado do caminho colonial e o limite natural que o obrigava a passar num ponto só.',
          'Alicerces de pedra em plataforma aplainada, à beira do caminho velho.',
          'O nome no cadastro rural, em escritura antiga ou em mapa do IBGE: topônimos sobrevivem em papel de cartório muito depois de sumirem da fala.',
          'Menções em livros de registro do termo de Caeté, no Arquivo Público Mineiro.',
        ] },
      ],
    },
  ],
  fontes: [
    'Arquivo Público Mineiro: livros de registro, contagens e passagens do termo de Caeté; documentação da Real Extração e dos contratadores.',
    'Cartório de Caeté: escrituras e cadastros rurais em que o topônimo apareça.',
    'IBGE: cartas topográficas e nomes de lugar registrados em levantamentos antigos.',
    'Instituto Estrada Real: traçado reconhecido dos caminhos na região, para cruzar com a localização provável.',
    'IEPHA-MG e IPHAN: inventários de bens culturais do distrito.',
    'Memória oral, prioridade máxima nesta página: a origem do nome só sobrevive na fala.',
  ],
  relacionadas: [
    { nome: 'Estrada Real', href: 'estrada-real.html', txt: 'O caminho que tornava o posto inevitável.', olho: '08' },
    { nome: 'Os Dragões Reais', href: 'os-dragoes-reais.html', txt: 'A força que garantia a cobrança.', olho: '07' },
    { nome: 'Levante das Bateias', href: 'levante-das-bateias.html', txt: 'O que acontecia quando a cobrança passava do ponto.', olho: '10' },
  ],
};
