/* ==========================================================================
   FAMÍLIA DE PADRES
   Nossa História · 12
   --------------------------------------------------------------------------
   REGRA EDITORIAL: nenhum fato sobre Morro Vermelho foi inventado.

   Página com fonte primária excepcionalmente boa: a Igreja arquiva bem e
   arquiva há muito tempo. Nomes, datas de ordenação, paróquias servidas e
   títulos honoríficos ficam registrados em série — inclusive em Roma.
   ========================================================================== */

export default {
  slug: 'familia-de-padres',
  numero: '12',
  titulo: 'Família de Padres',
  olho: 'Nossa História · 12',
  tom: 'var(--serra-700)',
  estado: 'A pesquisar',
  resumo: 'Povoado tem um comendador da Santa Sé. Um distrito pequeno que forma padres em série está dizendo algo sobre si mesmo: sobre escola, sobre vocação e sobre as poucas portas de saída que existiam.',
  resumoSeo: 'A família de padres de Morro Vermelho, distrito de Caeté (MG), e o comendador da Santa Sé: o que se sabe e o que falta documentar.',
  secoes: [
    {
      id: 'o-que-significa', titulo: 'O que significa formar padres',
      blocos: [
        { abertura: 'Num distrito rural, a ordenação de um filho não era só um acontecimento religioso. Era, durante muito tempo, <strong>uma das poucas rotas de estudo formal</strong> disponíveis a quem não era rico, e uma decisão que reorganizava a família inteira.' },
        'Uma família que dá vários padres à Igreja concentra, portanto, três coisas ao mesmo tempo: uma tradição religiosa forte, acesso a instrução e uma rede de relações que vai muito além do distrito. Nenhuma das três é banal num povoado deste tamanho.',
        { lista: [
          '<strong>O seminário</strong> era internato, e custava. Saber quem pagou (a família, a paróquia, um benfeitor, uma bolsa diocesana) já conta uma história.',
          '<strong>A carreira</strong> deixa rastro: cada paróquia servida, cada nomeação, cada transferência está registrada em livro de tombo e no arquivo da diocese.',
          '<strong>Os títulos honoríficos</strong> (monsenhor, cônego, comendador de ordem pontifícia) são concedidos por ato formal e registrados. São a parte mais fácil de confirmar.',
          '<strong>O retorno ao distrito:</strong> padres formados fora costumam voltar, e voltam com livros, com correspondência e com influência. Muitos acervos de família começaram assim.',
        ] },
        { nota: 'Tudo acima é contexto geral sobre vocação e clero no interior de Minas. Quem foram os padres desta família, quando, e o que fizeram é o que esta página precisa estabelecer.', titulo: 'O que é contexto e o que é fato local' },
      ],
    },
    {
      id: 'o-comendador', titulo: 'O comendador',
      blocos: [
        'O item mais específico da memória do distrito é a existência de um <strong>comendador da Santa Sé</strong> nascido ou formado aqui. Comenda pontifícia é distinção concedida por ato do papa, por serviços à Igreja, e vem sempre acompanhada de documentação.',
        { lacuna: 'As perguntas: <strong>qual o nome completo do comendador, em que ano recebeu a comenda, de qual ordem pontifícia e por qual serviço?</strong> Onde nasceu, onde estudou, que paróquias serviu, onde está sepultado? A família já está identificada, os Marques Guimarães, com seis irmãos sacerdotes nascidos entre 1887 e 1903: falta agora o nome e a data de ordenação de cada um, e qual deles foi o comendador.' },
        { nota: 'Diferentemente da maior parte das páginas em aberto deste portal, aqui a documentação quase certamente existe e está catalogada. É pesquisa de arquivo, não de garimpo: bastam as cartas certas para as instituições certas. É por isso que esta é uma boa página para começar.', titulo: 'A pesquisa mais direta do portal' },
      ],
    },
    {
      id: 'o-acervo', titulo: 'O acervo que costuma vir junto',
      blocos: [
        'Casa de padre guarda papel. Correspondência, livros anotados, fotografias de ordenação e de visitas pastorais, cadernos de sermão, registros de obras na igreja, é um tipo de acervo que sobrevive melhor que a média, porque quem o herda sabe que ele tem valor.',
        'Localizar os descendentes e herdeiros dessa família é, provavelmente, o caminho mais curto para uma das maiores contribuições possíveis ao acervo deste portal.',
        { figura: 'Retrato de ordenação, documento de concessão da comenda, ou fotografia da família reunida.', arquivo: 'figura-familia-de-padres.jpg', legenda: '<strong>Um dos seis irmãos sacerdotes da família Marques Guimarães.</strong> Falta identificar qual deles, e há fonte para isso: as datas de nascimento dos seis estão registradas, de 1887 a 1903. A fotografia da família inteira está na <a href="galeria-de-fotos.html">galeria</a>.', alt: 'Retrato antigo de sacerdote idoso de batina e óculos, em preto e branco.', credito: 'Acervo de pesquisa Geraldo Lopes e Viviane Pinheiro · autoria a confirmar' },
      ],
    },
  ],
  fontes: [
    'Arquivo da Arquidiocese de Belo Horizonte e da diocese à qual Caeté esteve subordinada: livros de ordenação, provisões e nomeações.',
    'Arquivo da Paróquia de Morro Vermelho: livro de tombo, registros de batismo e assentos que documentem a família.',
    'Arquivo do seminário onde os padres estudaram: matrículas, boletins e correspondência.',
    'Annuario Pontificio e atos da Santa Sé: a concessão de comenda pontifícia é publicada e verificável.',
    'Imprensa católica mineira e imprensa local: ordenações, jubileus e comendas eram noticiados com detalhe.',
    'Descendentes e herdeiros da família: acervo particular, correspondência e fotografias.',
  ],
  relacionadas: [
    { nome: 'Epidemia da Bexiga', href: 'epidemia-da-bexiga.html', txt: 'Os livros paroquiais respondem as duas páginas de uma vez.', olho: '11' },
    { nome: 'Atrações', href: 'atracoes.html', txt: 'A Matriz e os bens que a paróquia guarda.', olho: '14' },
    { nome: 'Nossa Gente, Nossa História', href: 'nossa-gente.html', txt: 'As famílias do distrito, contadas por elas mesmas.', olho: '27' },
  ],
};
