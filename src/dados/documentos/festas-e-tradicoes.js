/* ==========================================================================
   FESTAS E TRADIÇÕES
   Festas e Tradições · 17
   --------------------------------------------------------------------------
   Página-índice da família. Patrimônio imaterial tem uma regra que o
   patrimônio de pedra não tem: ele pertence a quem o pratica. Nada aqui se
   publica sem passar pelas pessoas que fazem a festa — não como cortesia,
   mas porque elas são a fonte e são as detentoras.
   ========================================================================== */

export default {
  slug: 'festas-e-tradicoes',
  numero: '17',
  titulo: 'Festas e Tradições',
  olho: 'Festas e Tradições · 17',
  tom: 'var(--terra-700)',
  estado: 'Calendário a levantar',
  resumo: 'Patrimônio imaterial conservado. É a parte da memória do distrito que não precisou de arquivo para chegar até aqui: veio pela repetição, ano após ano, feita por gente que assumiu a obrigação.',
  resumoSeo: 'Festas e tradições de Morro Vermelho, distrito de Caeté (MG): o calendário do patrimônio imaterial e o que falta registrar.',
  secoes: [
    {
      id: 'o-que-e', titulo: 'Patrimônio que se pratica',
      blocos: [
        { abertura: 'Uma igreja sobrevive por inércia: ninguém precisa fazer nada para que ela continue de pé no ano que vem. Uma festa é o contrário: <strong>ela só existe se alguém a fizer de novo</strong>, do zero, todo ano.' },
        'Essa diferença define tudo o que este portal pode e deve fazer aqui. Registrar a festa não é descrevê-la de fora: é registrar quem a faz, como se aprende a fazê-la e o que ela custa a quem assume.',
        { lista: [
          '<strong>Quem detém:</strong> irmandade, comissão, família, grupo. O patrimônio imaterial pertence a eles, não ao portal e nem ao município.',
          '<strong>Como se transmite:</strong> quem ensina, a quem, em que idade, com que material. É a pergunta que diz se a tradição está viva ou em risco.',
          '<strong>O que custa:</strong> roupa, alimentação, animal, instrumento, tempo de trabalho. Festa tradicional costuma ser sustentada por famílias, e isso raramente aparece escrito.',
          '<strong>O que mudou:</strong> nenhuma tradição centenária chegou intacta, e as mudanças são parte da história, não desvio dela.',
        ] },
        { nota: 'Antes de publicar qualquer descrição de festa, este portal a submete a quem a realiza. Não por formalidade: quem faz é a fonte, e é quem pode dizer o que está errado, e o que não deve ser publicado.', titulo: 'A regra de consentimento' },
      ],
    },
    {
      id: 'o-calendario', titulo: 'O calendário',
      blocos: [
        'O item que falta a este portal, e que é o mais pedido por qualquer visitante, é simples de enunciar e trabalhoso de levantar: <strong>o calendário anual do distrito</strong>.',
        { lacuna: 'O que precisa ser levantado, festa por festa: <strong>nome, data ou regra de data, duração, quem organiza, o que acontece em cada dia e o que o visitante pode ou não fazer.</strong> A regra de data importa mais que a data: muitas festas são móveis, presas ao calendário litúrgico, e publicar o dia de um ano só serve para aquele ano.' },
        { sub: 'O que já se sabe' },
        { lista: [
          '<strong><a href="cavalhada-de-nazareth.html">A Cavalhada de Nossa Senhora de Nazareth</a></strong> é a manifestação mais conhecida do distrito, e tem página própria neste portal.',
          '<strong>A festa da padroeira</strong>, à qual a cavalhada está associada, com sua programação religiosa própria.',
          '<strong>A <a href="sociedade-musical-santa-cecilia.html">Sociedade Musical Santa Cecília</a>:</strong> a banda, que participa de boa parte do calendário e é ela própria uma tradição.',
          'As demais celebrações do ano litúrgico e as festas de comunidades rurais do distrito, <span>ainda a levantar</span>.',
        ] },
      ],
    },
    {
      id: 'registro', titulo: 'Como registrar sem atrapalhar',
      blocos: [
        'Festa registrada com desatenção vira festa alterada. Câmera no lugar errado, público além do que a estrutura suporta, horário divulgado que não é o real: são efeitos comuns e evitáveis de um portal bem-intencionado.',
        { lista: [
          'Combinar antes com a comissão o que pode ser fotografado, filmado e publicado, e o que não pode.',
          'Gravar depoimentos fora do dia da festa. No dia, quem faz está trabalhando.',
          'Registrar a preparação, e não só o espetáculo: é onde está quase toda a informação que se perde.',
          'Publicar horário só depois de confirmado com quem organiza, e datado: "programação de 2026", não "programação".',
          'Devolver o material registrado a quem participou, antes de publicá-lo.',
        ] },
      ],
    },
  ],
  fontes: [
    'Comissões organizadoras, irmandades e famílias detentoras: a fonte principal e as detentoras do patrimônio.',
    'Arquivo da Paróquia de Morro Vermelho: livro de tombo e registros das festas religiosas ao longo dos anos.',
    'IEPHA-MG: inventário de patrimônio imaterial e orientação sobre registro de bens culturais de natureza imaterial.',
    'IPHAN: Inventário Nacional de Referências Culturais (INRC), metodologia aplicável.',
    'Prefeitura de Caeté: calendário oficial de eventos e apoios concedidos.',
    'Imprensa local e regional: coberturas antigas ajudam a datar mudanças na festa.',
    'Acervos fotográficos de família: a memória visual das festas está em álbum, não em arquivo público.',
  ],
  relacionadas: [
    { nome: 'Cavalhada de Nossa Senhora de Nazareth', href: 'cavalhada-de-nazareth.html', txt: 'A festa mais conhecida do distrito.', olho: '18' },
    { nome: 'Artesanato, Gastronomia e Música', href: 'artesanato-gastronomia-musica.html', txt: 'Os saberes que sustentam a festa.', olho: '19' },
    { nome: 'Sociedade Musical Santa Cecília', href: 'sociedade-musical-santa-cecilia.html', txt: 'A banda que toca em quase tudo.', olho: 'Música' },
  ],
};
