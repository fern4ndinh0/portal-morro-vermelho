/* ==========================================================================
   PARQUE DO GANDARELA
   Atrações · 15
   --------------------------------------------------------------------------
   Página incomum neste portal: aqui a documentação EXISTE e é pública. O
   Parque Nacional da Serra do Gandarela foi criado por decreto federal e é
   administrado pelo ICMBio, com plano de manejo, limites publicados e
   processo de criação documentado.

   Isso muda a regra de trabalho. Nas outras páginas o risco é afirmar o que
   não se sabe; aqui o risco é o oposto — copiar número de fonte secundária.
   Área, data e limites devem sair do decreto e do ICMBio, não de resumo de
   terceiro. As etiquetas "a verificar" abaixo marcam exatamente os pontos em
   que isso ainda não foi conferido na fonte oficial.
   ========================================================================== */

export default {
  slug: 'parque-do-gandarela',
  numero: '15',
  titulo: 'Parque do Gandarela',
  olho: 'Atrações · 15',
  tom: 'var(--serra-700)',
  estado: 'Rascunho estruturado · dados oficiais a conferir na fonte',
  resumo: 'Matas e mananciais ainda preservados. A serra que abastece de água a região metropolitana de Belo Horizonte virou parque nacional depois de uma disputa longa — e o distrito está na sua borda.',
  resumoSeo: 'O Parque Nacional da Serra do Gandarela e Morro Vermelho, distrito de Caeté (MG): o que o parque protege, como visitar e o que falta confirmar.',
  secoes: [
    {
      id: 'o-que-e', titulo: 'O que o parque protege',
      blocos: [
        { abertura: 'A Serra do Gandarela guarda uma combinação rara no Quadrilátero Ferrífero: <strong>a mesma formação de rocha que contém o minério de ferro funciona como esponja</strong>, armazenando e liberando água ao longo do ano.' },
        'É por isso que a disputa sobre o que fazer com aquela serra foi tão longa e tão dura. Mineração e abastecimento de água disputavam literalmente o mesmo corpo rochoso — não terrenos vizinhos, o mesmo corpo.',
        { lista: [
          '<strong>Aquíferos em formação ferruginosa</strong> — as cangas e itabiritos que recarregam nascentes que abastecem parte da região metropolitana de Belo Horizonte.',
          '<strong>Campos rupestres ferruginosos</strong> — vegetação de canga, com espécies que ocorrem ali e em quase nenhum outro lugar do mundo.',
          '<strong>Remanescentes de Mata Atlântica</strong> em bom estado de conservação, em transição com cerrado.',
          '<strong>Cavidades naturais</strong> em formação ferrífera, protegidas por legislação específica.',
        ] },
        { nota: 'O Parque Nacional da Serra do Gandarela foi criado por decreto federal em outubro de 2014 e é administrado pelo ICMBio. A área declarada é de cerca de 31 mil hectares, abrangendo vários municípios do Quadrilátero Ferrífero.', titulo: 'A criação' },
        'Os números e a lista de municípios acima precisam ser conferidos no texto do decreto e no sítio do ICMBio antes da publicação — inclusive porque limites de unidade de conservação podem ser alterados por atos posteriores.',
      ],
    },
    {
      id: 'e-o-distrito', titulo: 'E Morro Vermelho',
      blocos: [
        'Caeté está entre os municípios alcançados pelo parque, e é dessa relação que trata esta página. Mas a pergunta que o portal precisa responder é mais fina que "o município está dentro".',
        { lacuna: 'As perguntas: <strong>o território de Morro Vermelho está dentro do parque, na zona de amortecimento, ou fora dos dois?</strong> Qual é o ponto de acesso mais próximo do distrito? Existe trilha, portaria ou base do ICMBio de uso a partir daqui? E há restrição de uso que afete propriedades e moradores do distrito?' },
        'A resposta é obtida com um mapa e um telefonema: os limites do parque são públicos e georreferenciados, e o ICMBio atende pedidos de informação. É pesquisa de um dia, não de um ano — e ela decide se esta página fala de um vizinho ilustre ou de algo que está literalmente no quintal.',
        { nota: 'Distinguir "dentro do parque" de "perto do parque" não é preciosismo. Um afeta regras de uso do solo, licenciamento e turismo; o outro é referência geográfica. Publicar um pelo outro cria expectativa errada nos dois sentidos.', titulo: 'Por que a distinção importa' },
      ],
    },
    {
      id: 'visitar', titulo: 'Visitar com responsabilidade',
      blocos: [
        'Parque nacional tem regras de visitação, e elas não são detalhe burocrático: em campo rupestre ferruginoso, uma trilha aberta fora do traçado leva décadas para cicatrizar.',
        { lista: [
          'Confirmar no ICMBio quais áreas estão abertas à visitação e sob que condições — parques recém-criados costumam ter abertura gradual.',
          'Verificar a existência e a situação do plano de manejo, que é o documento que define zonas de uso.',
          'Registrar o que é acesso por propriedade particular: boa parte dos caminhos da região atravessa terra de alguém.',
          'Publicar, ao lado de qualquer trilha indicada, o grau de dificuldade, a duração real e o que fazer com o lixo.',
        ] },
        { figura: 'Vista da serra a partir do distrito, ou de ponto de acesso ao parque.', arquivo: 'figura-parque-do-gandarela.jpg', legenda: '<strong>A serra na região do Gandarela.</strong> Falta indicar se o ponto fotografado está dentro dos limites do Parque Nacional ou fora deles — distinção que, aqui, decide o que pode ser minerado.', alt: 'Vista aberta de serra com vegetação rasteira e afloramentos de rocha, montanhas ao fundo.', credito: 'Acervo de pesquisa Geraldo Lopes e Viviane Pinheiro · autoria a confirmar' },
      ],
    },
  ],
  fontes: [
    'ICMBio — página oficial do Parque Nacional da Serra do Gandarela: limites, plano de manejo, regras e situação da visitação.',
    'Decreto federal de criação do parque — texto integral, para conferir data, área e municípios abrangidos.',
    'Diário Oficial da União — atos posteriores que tenham alterado limites ou regras.',
    'IBAMA e Agência Nacional de Águas — estudos sobre os aquíferos em formação ferruginosa da região.',
    'Prefeitura de Caeté — informação sobre a porção municipal do parque e sobre a zona de amortecimento.',
    'Movimentos e associações que participaram do processo de criação — memória da disputa, que é parte da história.',
  ],
  relacionadas: [
    { nome: 'Cachoeiras e Cascatas', href: 'cachoeiras-e-cascatas.html', txt: 'A água que a serra guarda, onde ela aparece.', olho: '16' },
    { nome: 'Trilhas Ecológicas', href: 'trilhas-ecologicas.html', txt: 'Os caminhos, e como percorrê-los sem estragá-los.', olho: '20' },
    { nome: 'Atrações', href: 'atracoes.html', txt: 'O patrimônio construído do distrito.', olho: '14' },
  ],
};
