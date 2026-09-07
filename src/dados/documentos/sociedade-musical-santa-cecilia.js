/* ==========================================================================
   SOCIEDADE MUSICAL SANTA CECÍLIA
   Nossa História · Capítulo V
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
  slug: 'sociedade-musical-santa-cecilia',
  titulo: 'Sociedade Musical Santa Cecília',
  numero: '19a',
  olho: 'Festas e Tradições · Música',
  tom: 'var(--serra-700)',
  estado: 'Rascunho · acervo vivo',
  resumo: 'Em Minas, a banda é instituição. Ela atravessa gerações, ensina música de graça e mantém um acervo de partituras que quase ninguém cataloga.',
  resumoSeo: 'A Sociedade Musical Santa Cecília de Morro Vermelho, Caeté (MG): a corporação musical do distrito, seu acervo e o que precisa ser preservado.',
  secoes: [
    {
      id: 'a-banda', titulo: 'A banda como instituição',
      blocos: [
        { abertura: 'Poucos estados têm com a banda de música a relação que Minas Gerais tem. As <strong>corporações musicais</strong> mineiras são associações civis centenárias que sobrevivem a crises, mudanças de governo e esvaziamento populacional — e continuam tocando.' },
        'O nome já diz o que ela é: <em>sociedade</em>. Não é um grupo informal, é uma associação com estatuto, diretoria, sede, patrimônio e livro de atas. Isso significa que ela tem <strong>arquivo</strong> — e arquivo de banda é uma das fontes históricas mais subestimadas que existem.',
        { lista: [
          '<strong>Escola de música gratuita:</strong> gerações aprenderam a ler partitura e tocar um instrumento sem pagar nada, dentro da própria comunidade.',
          '<strong>Estrutura das festas:</strong> procissão, festa de padroeiro, cortejo cívico e enterro. Sem banda, o calendário do distrito muda de forma.',
          '<strong>Rede de parentesco:</strong> instrumentos e cadeiras passam de pai para filho. A banda é um mapa das famílias do lugar.',
          '<strong>Repertório próprio:</strong> muitas corporações guardam dobrados e peças compostas localmente, que existem apenas ali — em manuscrito, em uma pasta, numa sala.',
        ] },
      ],
    },
    {
      id: 'santa-cecilia', titulo: 'Por que Santa Cecília',
      blocos: [
        'Santa Cecília é a padroeira dos músicos na tradição católica, celebrada em 22 de novembro. É de longe o nome mais frequente entre corporações musicais brasileiras — o que indica que a fundação se deu dentro da cultura católica que organizava a vida do distrito.',
        { lacuna: 'Ano de fundação, fundadores, sede, número atual de músicos, maestro, e se a corporação está em atividade contínua ou passou por interrupções. Nada disso pode ser suposto: cada item precisa vir do estatuto, do livro de atas ou de quem toca hoje.' },
      ],
    },
    {
      id: 'acervo', titulo: 'O acervo que precisa ser salvo agora',
      blocos: [
        'De tudo que este portal pretende preservar, o arquivo de uma banda é o mais urgente — porque é o mais frágil. Partitura manuscrita é papel fino, guardado em sala sem climatização, manuseado com a mão suada de quem acabou de tocar, e com um custo de perda que ninguém percebe até que se perca.',
        { sub: 'O que digitalizar, em ordem de urgência' },
        { lista: [
          '<strong>Partituras manuscritas</strong>, especialmente as de autoria local — são obras únicas, sem cópia em nenhum outro lugar do mundo.',
          '<strong>Livros de ata e estatutos</strong> — dão a data de fundação, os nomes dos fundadores e a cronologia da instituição.',
          '<strong>Fotografias de formação</strong> — cada uma é um retrato coletivo datável da comunidade, não só da banda.',
          '<strong>Uniformes, estandartes e instrumentos antigos</strong> — registrar em fotografia com escala visível.',
          '<strong>Gravações</strong>, de qualquer época e qualquer qualidade, incluindo fita cassete e vídeo de celular.',
        ] },
        { nota: 'Uma partitura manuscrita da qual não existe outra cópia é, em termos de acervo, exatamente tão insubstituível quanto um documento setecentista. A diferença é que ninguém a trata assim.', titulo: 'Escala de prioridade' },
        { citacao: 'Espaço reservado para a fala de um músico da corporação sobre como aprendeu a tocar e com quem.', autoria: 'Depoimento a coletar · Memória oral do distrito' },
      ],
    },
  ],
  fontes: [
    'Arquivo da própria Sociedade Musical Santa Cecília — estatuto, livros de ata, partituras, fotografias.',
    'Federação das Bandas de Música do Estado de Minas Gerais — registros de filiação e histórico.',
    'Arquivo da paróquia — a banda aparece nos registros de festa e procissão.',
    'Entrevistas com maestro, músicos veteranos e famílias de ex-integrantes.',
    'Jornais regionais de Caeté e Belo Horizonte — apresentações, concursos e aniversários da corporação.',
    'Acervos fotográficos de família — fotos de formação circulam muito mais nas casas do que na sede.',
  ],
  relacionadas: [
    { nome: 'Festas e Tradições', txt: 'O calendário que a banda sustenta.' },
    { nome: 'Nossa Gente, Nossa História', txt: 'As famílias do distrito — a banda é um mapa delas.' },
  ],
};
