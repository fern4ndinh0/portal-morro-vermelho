/* ==========================================================================
   CAVALHADA DE NOSSA SENHORA DE NAZARETH
   Festas e Tradições · 18
   --------------------------------------------------------------------------
   REGRA EDITORIAL: nenhum fato sobre Morro Vermelho foi inventado, e aqui a
   regra vem dobrada com a regra do patrimônio imaterial — quem faz a festa é
   a fonte E é o detentor. Nada nesta página se publica sem passar pela
   comissão organizadora.

   A afirmação "preservada desde 1704" é o coração do verbete e está tratada
   como o que é: a data que a tradição do distrito guarda, e que a pesquisa
   documental precisa confirmar. Ver a seção "A data".

   NOTA TÉCNICA: existe neste portal um componente completo de seção de
   Cavalhadas para a home — src/componentes/home/Cavalhadas.jsx, com contagem
   regressiva e os dois partidos —, desligado pela constante
   MOSTRAR_CAVALHADAS em src/dados/home.js. Ele foi desativado a pedido e
   continua desativado; ligá-lo é mudar uma linha, e preencher
   CAVALHADAS.quando com a data real da próxima edição.
   ========================================================================== */

export default {
  slug: 'cavalhada-de-nazareth',
  numero: '18',
  titulo: 'Cavalhada de Nossa Senhora de Nazareth',
  olho: 'Festas e Tradições · 18',
  tom: 'var(--terra-800)',
  estado: 'Rascunho estruturado · data de origem a documentar',
  resumo: 'Festa preservada desde 1704. Durante dias, o distrito se divide em dois partidos e reencena a cavalo a batalha entre mouros e cristãos, com papéis herdados de pai para filho.',
  resumoSeo: 'A Cavalhada de Nossa Senhora de Nazareth em Morro Vermelho, distrito de Caeté (MG): a festa, os partidos, a data de origem e o que falta documentar.',
  secoes: [
    {
      id: 'o-que-e', titulo: 'O que é uma cavalhada',
      blocos: [
        { abertura: 'Cavalhada é a reencenação, a cavalo, da <strong>batalha entre mouros e cristãos</strong>, um enredo trazido da península ibérica que atravessou o Atlântico e se enraizou no interior do Brasil, onde sobreviveu melhor do que na origem.' },
        'A estrutura é reconhecível em toda parte onde a festa existe: dois partidos, embaixadas trocadas, torneios de destreza a cavalo, combate encenado e desfecho. O que muda de um lugar para outro (e é onde mora tudo o que interessa) são as cores, os personagens, as regras e o modo como os papéis passam de uma geração à seguinte.',
        { lista: [
          '<strong>Os dois partidos:</strong> mouros e cristãos, cada um com sua cor, seu rei e seus cavaleiros.',
          '<strong>As embaixadas:</strong> os textos declamados que estruturam a narrativa e que, em muitos lugares, são transmitidos oralmente.',
          '<strong>Os torneios:</strong> provas de destreza a cavalo, como a argolinha, disputadas antes ou entre os combates.',
          '<strong>A obrigação:</strong> em festas assim, participar não costuma ser convite: é papel herdado, assumido com o cavalo, a roupa e os meses de preparação que ele exige.',
        ] },
        { nota: 'Tudo acima é documentado sobre cavalhadas como manifestação cultural brasileira. Como cada um desses elementos se apresenta em Morro Vermelho é o que esta página precisa registrar, e só a comissão organizadora e os cavaleiros podem dizer.', titulo: 'O que é contexto e o que é fato local' },
      ],
    },
    {
      id: 'a-data', titulo: 'A data',
      blocos: [
        'O distrito guarda <strong>1704</strong> como o ano em que a cavalhada começou aqui. É uma data de peso: colocaria a festa entre as manifestações continuadas mais antigas do país, e a poria em pé antes mesmo da Guerra dos Emboabas.',
        { lacuna: 'A pergunta central: <strong>de onde vem a data de 1704?</strong> Existe documento de época (livro de tombo paroquial, registro de irmandade, ata, provisão episcopal) que a sustente? Ou é tradição oral transmitida na própria comunidade? E a festa foi de fato ininterrupta desde então, ou houve períodos de interrupção e retomada, como é comum e não diminui nada?' },
        { nota: 'Nenhuma das respostas possíveis é ruim. Documento de 1704 é um achado de importância nacional. Tradição oral de trezentos anos é, ela própria, patrimônio imaterial de primeira ordem, e é registrável como tal, com a metodologia do IPHAN, sem depender de papel setecentista. Interrupções e retomadas são a história normal de qualquer festa centenária e contam como ela sobreviveu.', titulo: 'Por que perguntar não enfraquece a festa' },
        'O que este portal não faz é afirmar a data como documentada antes de sabê-la documentada. É a mesma regra que vale para a <a href="guerra-dos-emboabas.html">Guerra dos Emboabas</a>, e pelo mesmo motivo.',
      ],
    },
    {
      id: 'a-festa-daqui', titulo: 'A festa daqui',
      blocos: [
        'O registro da cavalhada de Morro Vermelho ainda precisa ser feito, e ele tem uma lista de perguntas razoavelmente padronizada, o que é uma boa notícia, porque significa que existe método pronto.',
        { lista: [
          '<strong>Quando:</strong> a data e sua regra, associada à festa da padroeira. Data móvel exige publicar a regra, não o dia.',
          '<strong>Os partidos:</strong> cores, nomes, número de cavaleiros, personagens, quem são os reis e como são escolhidos.',
          '<strong>Os papéis:</strong> como se herda, com que idade se começa, o que acontece quando uma família não tem quem assuma.',
          '<strong>As embaixadas:</strong> os textos. Se são transmitidos oralmente, gravá-los é urgente; se há caderno manuscrito, digitalizá-lo é urgente.',
          '<strong>A preparação:</strong> roupa, arreio, treino do cavalo, ensaios, e quem custeia o quê.',
          '<strong>A comissão:</strong> quem organiza hoje, como se organiza, e há quanto tempo.',
        ] },
        { citacao: 'Espaço reservado para a primeira fala gravada sobre a cavalhada, de um cavaleiro, de quem costura a roupa ou de quem organiza, com nome, idade e data de entrevista.', autoria: 'Depoimento a coletar · Memória oral do distrito' },
        { figura: 'A cavalhada: cavaleiros, partidos, embaixada, preparação ou os bastidores.', arquivo: 'figura-cavalhada.jpg', legenda: '<strong>Cavaleiro cristão em cavalo empinado, na noite de 7 de setembro.</strong> São vinte e quatro cavaleiros: doze cristãos de azul, doze mouros de vermelho.', alt: 'Cavalo branco empinado à noite, montado por cavaleiro de capa azul-clara com o braço erguido.', credito: 'Acervo de pesquisa Geraldo Lopes e Viviane Pinheiro · autoria a confirmar' },
      ],
    },
    {
      id: 'registro', titulo: 'Registro e proteção',
      blocos: [
        'Uma cavalhada com esta idade declarada é candidata natural a registro formal como patrimônio imaterial, no âmbito municipal, estadual e, eventualmente, federal. O registro não muda a festa: ele reconhece quem a detém e pode destravar apoio para a parte cara, que é sempre a que ameaça a continuidade.',
        'O caminho passa pelo Inventário Nacional de Referências Culturais e pela orientação do IEPHA-MG, e ele começa exatamente com o levantamento descrito na seção anterior. O trabalho que este portal propõe é, na prática, a primeira etapa do processo.',
        { nota: 'A decisão de buscar registro é da comunidade detentora, e não do portal. O que este projeto pode fazer é reunir o material que essa decisão exige, e entregá-lo pronto a quem for decidir.', titulo: 'De quem é a decisão' },
      ],
    },
  ],
  fontes: [
    'Comissão organizadora da cavalhada, cavaleiros e famílias participantes: a fonte principal e as detentoras do patrimônio.',
    'Arquivo da Paróquia de Morro Vermelho: livro de tombo, registros de irmandade e da festa da padroeira; a via mais direta para a data de 1704.',
    'Arquivo Público Mineiro e Arquivo Histórico Ultramarino: documentação setecentista que mencione a festa ou a devoção.',
    'IPHAN: Inventário Nacional de Referências Culturais (INRC) e processos de registro de cavalhadas em outros estados, como referência de método.',
    'IEPHA-MG: orientação para registro estadual de bem imaterial.',
    'Imprensa histórica mineira: coberturas antigas ajudam a datar mudanças e a comprovar continuidade.',
    'Acervos fotográficos de família: a memória visual da festa está em álbum, e é a fonte mais frágil de todas.',
  ],
  relacionadas: [
    { nome: 'Festas e Tradições', href: 'festas-e-tradicoes.html', txt: 'O calendário completo do distrito.', olho: '17' },
    { nome: 'Artesanato, Gastronomia e Música', href: 'artesanato-gastronomia-musica.html', txt: 'A roupa, a comida e o som que a festa exige.', olho: '19' },
    { nome: 'Guerra dos Emboabas', href: 'guerra-dos-emboabas.html', txt: 'O que acontecia por aqui na mesma década.', olho: '09' },
  ],
};
