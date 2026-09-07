/* ==========================================================================
   DIRETAS-JÁ
   Nossa História · 13
   --------------------------------------------------------------------------
   REGRA EDITORIAL: nenhum fato sobre Morro Vermelho foi inventado.

   A PÁGINA MAIS URGENTE DO PORTAL — e a razão não é histórica, é biológica.
   Isto aconteceu nos anos 1980. Quem organizou, quem discursou, quem levou
   faixa e quem fotografou está vivo, e pode ser entrevistado ESTE ANO. Em
   vinte anos, esta página dependerá de arquivo; hoje ela depende de uma
   tarde com um gravador.

   É também a única página do portal cuja fonte primária pode ser criada
   agora, em vez de encontrada.
   ========================================================================== */

export default {
  slug: 'diretas-ja',
  numero: '13',
  titulo: 'Diretas-Já',
  olho: 'Nossa História · 13',
  tom: 'var(--terra-600)',
  estado: 'Data documentada · testemunhas a entrevistar',
  resumo: 'Primeiro grito contra a ditadura militar. Duzentos e cinquenta anos depois da aclamação dos Emboabas, o mesmo lugar volta a se organizar em torno do direito de escolher quem governa.',
  resumoSeo: 'Morro Vermelho e as Diretas-Já: a mobilização pelo voto direto no distrito de Caeté (MG), o que se sabe e o que falta documentar.',
  secoes: [
    {
      id: 'a-campanha', titulo: 'A campanha',
      blocos: [
        { abertura: 'Entre 1983 e 1984, o país se encheu de comícios pedindo uma coisa só: o direito de <strong>eleger o presidente pelo voto direto</strong>, suspenso desde 1964. Foi a maior mobilização popular da história do Brasil.' },
        'A campanha tinha um alvo legislativo concreto (a emenda constitucional que restabeleceria a eleição direta) e uma dinâmica que é essencial para entender o papel de um lugar como este: ela não começou nas capitais.',
        { lista: [
          '<strong>Começou pequena e no interior.</strong> Os primeiros atos foram comícios modestos, em cidades e distritos, meses antes das concentrações de centenas de milhares em São Paulo e no Rio.',
          '<strong>Cresceu por contágio.</strong> Cada ato local dava coragem e formato ao seguinte. É por isso que a ordem cronológica dos primeiros comícios é assunto disputado até hoje, e por que ela importa.',
          '<strong>A emenda foi derrotada</strong> na Câmara, em abril de 1984, por falta de votos.',
          '<strong>E venceu depois.</strong> A eleição direta para presidente só veio em 1989, mas a mobilização de 1984 é o marco do fim do regime.',
        ] },
        { nota: 'Tudo acima é história nacional documentada e amplamente estudada. Qual foi o papel de Morro Vermelho nela é o que esta página precisa estabelecer.', titulo: 'O que é contexto e o que é fato local' },
      ],
    },
    {
      id: 'a-afirmacao', titulo: 'A afirmação deste distrito',
      blocos: [
        'Morro Vermelho registra, na sua própria apresentação, que <strong>aqui o povo foi às ruas pelas Diretas-Já numa reação que avançou por toda a nação</strong>, e trata esse ato como o primeiro grito contra a ditadura militar.',
        { citacao: 'Como sempre fez durante toda a sua longa história, em 7 de setembro de 1983, o povo de Morro Vermelho mais uma vez se concentrou para um ato cívico de oposição brasileira na Praça da Matriz. Ali, deu início a um novo grito de liberdade, desta vez pelas eleições diretas para presidente da República, abafado em todo o país desde a Revolução de 1964.', autoria: 'Otaviano Lage · editorial no jornal Folha de S.Paulo, 8 de setembro de 1983' },
        { lacuna: 'A data e o teor do ato já têm fonte contemporânea, publicada um dia depois. O que falta: <strong>quem convocou, quantas pessoas participaram e quem discursou.</strong> E que reação veio depois, do poder local, da imprensa, do aparato de repressão?' },
        'A citação acima resolve a pergunta sobre a data, e é verificável: é um editorial publicado no dia seguinte ao ato, num jornal de circulação nacional. Falta agora reconstituir quem esteve lá.',
        { nota: 'A resposta mais provável, dada a dinâmica da campanha, é que o ato daqui esteja entre os primeiros de uma onda, o que já é notável para um distrito rural, e é mais interessante do que uma primazia absoluta difícil de sustentar. Documentar a data com precisão é o que transforma uma frase de apresentação num fato que ninguém pode tirar do distrito.', titulo: 'Por que a data exata importa mais que o superlativo' },
      ],
    },
    {
      id: 'urgencia', titulo: 'Por que esta página é a mais urgente',
      blocos: [
        'Todas as outras páginas deste portal dependem de arquivos que já existem e que continuarão existindo. Esta depende de pessoas.',
        'Quem organizou aquele ato tinha, digamos, trinta anos em 1983. Hoje tem mais de setenta. A janela para gravar essas vozes com qualidade, com calma e com autorização assinada não é indefinida, e, ao contrário de um documento de cartório, uma memória perdida não pode ser reencontrada por ninguém.',
        { sub: 'O que fazer primeiro' },
        { lista: [
          '<strong>Listar nomes.</strong> Quem convocou, quem discursou, quem fez faixa, quem cedeu o carro de som, quem tirou foto. Basta perguntar a três moradores para chegar a quinze nomes.',
          '<strong>Gravar.</strong> Áudio já basta; vídeo é melhor. Sempre com autorização de uso assinada, e sempre com transcrição integral.',
          '<strong>Pedir as fotos.</strong> Ato político dos anos 80 foi fotografado, e as fotos estão em álbum de família, não em arquivo público.',
          '<strong>Cruzar com a imprensa.</strong> Jornais de Belo Horizonte e de Caeté da época dão data, número estimado de público e, às vezes, nomes.',
        ] },
        { figura: 'Fotografia do ato: faixa, carro de som, concentração, ou o local como está hoje.', arquivo: 'figura-diretas-ja.jpg', legenda: 'Fotografia de acervo particular exige autorização escrita de quem a guarda e crédito nominal. Identificar, quando possível, as pessoas retratadas, com o consentimento delas.' },
      ],
    },
    {
      id: 'metodo', titulo: 'Nota de método',
      blocos: [
        'História recente tem uma dificuldade que a história colonial não tem: as pessoas envolvidas estão vivas, lembram de forma diferente umas das outras, e discordam. Isso não é um problema a resolver, é o material.',
        'A regra deste portal para esta página é: registrar cada versão com o nome de quem a contou e a data da entrevista, sem harmonizar as divergências e sem escolher um relato como oficial. Onde houver documento (jornal, foto datada, ata), ele entra ao lado, identificado como documento.',
      ],
    },
  ],
  fontes: [
    'Otaviano Lage, editorial no jornal Folha de S.Paulo de 8 de setembro de 1983, já localizado: confirma data e local do ato. Falta a edição original ou o microfilme, para conferência.',
    'Moradores que participaram, a fonte principal e a única com prazo. Prioridade máxima e imediata.',
    'Hemeroteca Digital da Biblioteca Nacional, jornais de 1983 e 1984, com busca por texto.',
    'Arquivo Público Mineiro e acervos de jornais de Belo Horizonte: cobertura regional dos comícios.',
    'Arquivo Nacional: fundos dos órgãos de informação do período, hoje de acesso público, que monitoravam atos políticos e frequentemente registram data, local e nomes.',
    'Câmara Municipal e Prefeitura de Caeté: atas, autorizações de uso de espaço público e requerimentos da época.',
    'Sindicatos, associação de moradores, paróquia e partidos: quem convocava guardava papel.',
    'Acervos fotográficos de família: a fonte visual quase certamente existe e não está em arquivo público.',
  ],
  relacionadas: [
    { nome: 'Guerra dos Emboabas', href: 'guerra-dos-emboabas.html', txt: 'A outra vez em que este lugar reivindicou o direito de escolher quem governa.', olho: '09' },
    { nome: 'História de Resistência', href: 'historia-de-resistencia.html', txt: 'O eixo que liga os dois episódios.', olho: '02' },
  ],
};
