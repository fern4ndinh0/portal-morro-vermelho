/* ==========================================================================
   FAZENDA DO CUTÃO
   Nossa História · 05
   --------------------------------------------------------------------------
   REGRA EDITORIAL QUE GOVERNA ESTE ARQUIVO: nenhum fato sobre Morro Vermelho
   foi inventado. O verbete separa explicitamente o CONTEXTO REGIONAL
   documentado — verdadeiro, porém genérico — das PERGUNTAS específicas sobre
   este lugar, que ficam em caixas "Lacuna documental".
   ========================================================================== */

export default {
  slug: 'fazenda-do-cutao',
  numero: '05',
  titulo: 'Fazenda do Cutão',
  olho: 'Nossa História · 05',
  tom: 'var(--areia-800)',
  estado: 'A pesquisar',
  resumo: 'Engenhos de apuração do ouro. Extrair era só metade do trabalho — a outra metade acontecia em estruturas de pedra e madeira que hoje quase ninguém sabe reconhecer no mato.',
  resumoSeo: 'A Fazenda do Cutão e os engenhos de apuração do ouro em Morro Vermelho, distrito de Caeté (MG): o que se sabe, o que falta documentar e onde procurar.',
  secoes: [
    {
      id: 'o-que-e', titulo: 'O que era um engenho de apuração',
      blocos: [
        { abertura: 'Tirar ouro do chão era só o começo. O minério saía misturado a cascalho, areia e terra, e <strong>separar o metal do resto</strong> exigia água encanada, desnível, força mecânica e mão de obra — quase sempre escravizada.' },
        'É por isso que as fazendas de apuração ficavam onde ficavam: não onde havia ouro, mas onde havia água com queda suficiente para mover engenho. Ler a paisagem de uma dessas fazendas é ler uma decisão de engenharia tomada há trezentos anos.',
        { lista: [
          '<strong>Levadas e canais</strong> — sulcos abertos na encosta para trazer água de longe até o ponto de lavagem. São o vestígio que mais sobrevive, e o que menos se reconhece: parecem valas naturais.',
          '<strong>Mundéus e canoas</strong> — tanques e calhas de madeira onde o cascalho era revolvido na corrente, para que o ouro, mais pesado, se depositasse no fundo.',
          '<strong>Engenhos de pilões</strong> — conjuntos de mãos de pedra ou ferro, movidos por roda d’água, que trituravam o minério de rocha até virar pó.',
          '<strong>Bateias</strong> — o acabamento manual, feito por pessoa, prato a prato. O gesto que dá nome ao Levante das Bateias.',
        ] },
        { nota: 'Tudo acima é documentado para a mineração colonial das Minas como região. Nada disso é, por enquanto, uma afirmação sobre a Fazenda do Cutão especificamente. A diferença entre as duas coisas é a razão de existir deste portal.', titulo: 'O que é contexto e o que é fato local' },
      ],
    },
    {
      id: 'o-cutao', titulo: 'A fazenda daqui',
      blocos: [
        'A Fazenda do Cutão é citada na memória do distrito como um dos lugares onde o ouro de Morro Vermelho era apurado. É um dos itens em que a memória oral está claramente à frente da documentação: as pessoas sabem o nome, sabem mais ou menos onde fica, e não existe ainda um levantamento que registre isso.',
        { lacuna: 'As perguntas desta página são cinco, e todas têm resposta possível: <strong>onde exatamente ficava a fazenda, de quem era, em que período operou, que estruturas ainda existem no terreno e quem é o proprietário atual?</strong> Sem a última, nenhuma das outras vira visita, pesquisa ou tombamento.' },
        { sub: 'O que procurar em campo' },
        { lista: [
          'Alinhamentos de pedra seca em meia encosta — quase sempre levada ou muro de arrimo.',
          'Depressões retangulares regulares perto de curso d’água — tanques.',
          'Pedras com cavidades circulares polidas — base de pilão.',
          'Acúmulos de cascalho rolado fora de leito de rio — rejeito de lavagem. Denunciam a atividade mesmo quando nada mais restou.',
        ] },
        { nota: 'Vestígio fotografado sem coordenada perde metade do valor documental. Leve GPS — o do celular basta — e fotografe com algo de escala conhecida no quadro.', titulo: 'Como registrar' },
      ],
    },
    {
      id: 'quem-trabalhou', titulo: 'Quem trabalhou ali',
      blocos: [
        'Um engenho de apuração não funcionava sozinho, e a pergunta sobre quem o operava é a mais importante desta página — e a mais fácil de deixar de fora, porque é a que menos aparece em documento de propriedade.',
        'Inventários e testamentos são a fonte mais direta: eles listam, lado a lado, as estruturas da fazenda e as pessoas escravizadas que nela trabalhavam, com nome, idade, procedência declarada e ofício. É um documento difícil de ler pelo que é, e é exatamente por isso que ele importa.',
        { citacao: 'Espaço reservado para a primeira fala gravada sobre a Fazenda do Cutão — de um morador, com nome, idade e data de entrevista.', autoria: 'Depoimento a coletar · Memória oral do distrito' },
        { figura: 'Vestígio de engenho, levada, tanque ou base de pilão no terreno da fazenda.', arquivo: 'figura-fazenda-do-cutao.jpg', legenda: '<strong>Água descendo sobre lajes de pedra na região do Cutão.</strong> O acervo documenta ali um paredão de pedra que represava água conduzida por túnel até um grande engenho de apuração do ouro.', alt: 'Queda de água em degraus sobre lajes de pedra, cercada de mata fechada.', credito: 'Acervo de pesquisa Geraldo Lopes e Viviane Pinheiro · autoria a confirmar' },
      ],
    },
  ],
  fontes: [
    'Cartório de Caeté — livros de notas: escrituras, inventários e testamentos que citem a fazenda, seus engenhos e as pessoas que nela trabalhavam.',
    'Arquivo Público Mineiro — registros de datas minerais, sesmarias e cartas de concessão de água.',
    'IEPHA-MG e IPHAN — inventários de bens culturais e de patrimônio ferroviário/industrial da região de Caeté.',
    'Levantamento de campo com GPS — identificar e georreferenciar estruturas remanescentes.',
    'Proprietário atual do terreno — autorização de acesso é o primeiro passo prático de tudo o que está nesta página.',
    'Memória oral — moradores antigos e famílias vizinhas sabem onde ficam as ruínas e como eram chamadas.',
  ],
  relacionadas: [
    { nome: 'A Busca do Ouro', href: 'a-busca-do-ouro.html', txt: 'O que trouxe gente para estas montanhas — e a que custo humano.', olho: '03' },
    { nome: 'Levante das Bateias', href: 'levante-das-bateias.html', txt: 'O gesto de apurar ouro virou nome de revolta.', olho: '10' },
    { nome: 'Retiro dos Capetas', href: 'retiro-dos-capetas.html', txt: 'Onde a Coroa cobrava o que saía daqui.', olho: '06' },
  ],
};
