/* ==========================================================================
   SERVIÇOS
   Visitar · 26
   --------------------------------------------------------------------------
   A página mais prática do portal, e a que envelhece mais rápido: telefone
   muda, restaurante fecha, pousada troca de dono. Todo dado aqui tem uma
   data de conferência declarada, porque uma lista de serviços sem data é
   pior que nenhuma — ela manda o visitante para uma porta fechada.

   TRÊS TELEFONES DO ACERVO ORIGINAL ESTÃO INCOMPLETOS ("(31) 3652-", "(31)").
   Não foram completados por dedução e não foram publicados pela metade: um
   número truncado apresentado como número é um erro pior que a ausência.
   Aparecem como "telefone a confirmar".

   NOMES DE PESSOAS FÍSICAS: o acervo lista quem vende queijo, mel e doce
   pelo primeiro nome ou apelido, com telefone particular em dois casos. Aqui
   o produto e o nome ficam; o telefone particular NÃO, exceto onde o próprio
   acervo o apresenta como contato comercial. Publicar telefone de morador
   num site aberto sem autorização é decisão de quem mora, não de quem
   escreve o site.
   ========================================================================== */

export default {
  slug: 'servicos',
  numero: '26',
  titulo: 'Serviços',
  olho: 'Visitar · 26',
  tom: 'var(--serra-700)',
  estado: 'A conferir · dados de 2021',
  resumo: 'Onde fica, como chegar, o que ver, onde comer, onde ficar e o que comprar. Todos os acessos são por estrada de terra, e essa é a primeira coisa que quem vem precisa saber.',
  resumoSeo: 'Como chegar a Morro Vermelho, Caeté (MG): distâncias, acessos por estrada de terra, o que visitar, onde comer, onde ficar e o que comprar no distrito.',
  secoes: [
    {
      id: 'onde-fica', titulo: 'Onde fica',
      blocos: [
        { abertura: 'Morro Vermelho é distrito de <strong>Caeté</strong>, município da Região Metropolitana de Belo Horizonte, em Minas Gerais. Fica a <strong>10 quilômetros da sede do município</strong>, mas liga-se também a Sabará (16 km), Raposos (14 km) e Rio Acima (18 km).' },
        '<strong>Todos os acessos são por estrada de terra.</strong> É a informação mais importante desta página e por isso está aqui, no primeiro parágrafo, e não numa observação no fim.',
        { nota: 'Estrada de terra em Minas significa duas coisas diferentes conforme o mês. Na seca, poeira e trechos de cascalho solto. Na chuva, barro, atoleiro e trechos que exigem tração. Um carro de passeio comum passa na maior parte do ano; num dia de chuva forte, não necessariamente. Quem for de moto ou de bicicleta deve contar com isso.', titulo: 'O que “estrada de terra” quer dizer na prática' },
      ],
    },
    {
      id: 'como-chegar', titulo: 'Como chegar',
      blocos: [
        { lista: [
          '<strong>Por Caeté, o acesso mais comum.</strong> De Belo Horizonte pela BR-381, subindo a Serra da Piedade, até a sede de Caeté. Da sede ao distrito são 10 km de estrada de terra, no trecho em melhores condições.',
          '<strong>Por Sabará.</strong> Pela MGT-262 até Sabará, seguindo até o Bairro Siderúrgica, e dali 16 km de estrada de terra.',
          '<strong>Por Nova Lima e Raposos, o trecho mais curto.</strong> Da Savassi, em Belo Horizonte, são 45 km no total, dos quais 14 km de estrada de terra.',
        ] },
        'Vale notar o contraste: o caminho mais curto desde o centro de Belo Horizonte é também o que tem a maior proporção de terra. Quem quer o percurso mais tranquilo vai por Caeté; quem quer o mais rápido, por Raposos.',
        { lacuna: 'O acervo registra que a Prefeitura de Caeté firmou, em <strong>24 de fevereiro de 2021</strong>, termo de compromisso com a mineradora Vale e a Universidade Federal de Itajubá para aplicar rejeito de minério de ferro em cerca de <strong>sete quilômetros</strong> da estrada, entre o balneário de Juca Vieira e o povoado, com obras previstas para maio de 2021. <strong>Não se sabe se a obra foi executada.</strong> É a informação prática mais valiosa desta página e precisa ser conferida antes de qualquer visita.' },
      ],
    },
    {
      id: 'o-que-ver', titulo: 'O que ver',
      blocos: [
        { lista: [
          '<strong>Matriz de Nossa Senhora de Nazareth:</strong> de 1713, tombada pelo Iphan desde 1950.',
          '<strong>Capela de Nossa Senhora do Rosário dos Pretos:</strong> de 1703, mais antiga que a Matriz, com tombamento municipal.',
          '<strong>Morro da Santa Cruz:</strong> o monte que dá nome ao povoado, com o cruzeiro no alto e a romaria centenária.',
          '<strong>Pedra do Sino</strong>',
          '<strong>Ruínas do Arraial de Viracopos:</strong> reconhecido como patrimônio arqueológico do município.',
          '<strong>Ruínas do Palácio do Barão:</strong> na antiga sede da Fazenda do Cutão. Hoje em terreno de mineradora: <strong>o acesso depende de autorização.</strong>',
          '<strong>Ruínas de engenhos de apuração de ouro</strong> no Cutão e no Carrancas.',
          '<strong>Minas de ouro</strong> no Carrancas, no Cutão, e uma no quintal de uma casa.',
          '<strong>Parque Nacional da Serra do Gandarela</strong>',
          '<strong>Cachoeiras de Santo Antônio, das Estrelas e do Maquiné</strong>',
          '<strong>Retiro dos Capetas:</strong> ruínas do posto fiscal da Coroa Portuguesa.',
        ] },
        { nota: 'Metade desta lista está em propriedade privada, sem sinalização e sem infraestrutura. Aparecer no portão de uma fazenda com esta página impressa não é autorização de entrada. Antes de programar visita a ruína, mina, cachoeira ou ao Retiro dos Capetas, procure a Associação Comunitária ou o Conselho Ambiental e Cultural do distrito. É por respeito ao proprietário e por segurança de quem vai.', titulo: 'Nada nesta lista é parque aberto' },
      ],
    },
    {
      id: 'onde-comer', titulo: 'Onde comer',
      blocos: [
        { lista: [
          '<strong>Restaurante Alpenrose:</strong> comida típica alemã e mineira, na saída para Raposos. (31) 3651-2859 e (31) 3652-2116.',
          '<strong>Restaurante do Bigode:</strong> Rua José Evangelista Marques. (31) 3652-2151.',
          '<strong>Restaurante da Lili:</strong> Rua José Evangelista Marques. Telefone a confirmar.',
          '<strong>Restaurante Fazenda Máximo:</strong> na estrada da Charneca. Telefone a confirmar.',
        ] },
      ],
    },
    {
      id: 'onde-ficar', titulo: 'Onde ficar',
      blocos: [
        { lista: [
          '<strong>Pousada da Bandeira:</strong> Estrada do Curtume. (31) 3273-2666.',
          '<strong>Pousada Xavier:</strong> Praça da Matriz. Telefone a confirmar.',
          '<strong>Casas para temporada:</strong> existem, e a relação de quem aluga não está registrada no acervo.',
        ] },
        { lacuna: 'A rede de hospedagem é a informação mais incompleta desta página, e a que mais decide se alguém vem ou não. <strong>Faltam</strong>: o telefone da Pousada Xavier, a capacidade de cada pousada, e uma relação de casas de temporada com contato autorizado. Numa festa de 7 de setembro que atrai romeiros de toda a região, saber quantos leitos existem no distrito é dado de planejamento, não curiosidade.' },
      ],
    },
    {
      id: 'o-que-comprar', titulo: 'O que comprar',
      blocos: [
        'A produção do distrito é caseira e feita por gente com nome. A lista abaixo vem do acervo de pesquisa e é a razão principal para quem vem levar dinheiro que fica no lugar.',
        { lista: [
          '<strong>Queijão de Morro Vermelho</strong> e canudos: Paulinho Magalhães, Graça Pinheiro. O queijão está registrado na Arca do Gosto do Slow Food.',
          '<strong>Biscoitos, rosquinhas e brevidades:</strong> Graça Pinheiro.',
          '<strong>Mel:</strong> Alexandre, Tozo, Lucas, Marcolino.',
          '<strong>Café Morro Vermelho:</strong> Alexandre.',
          '<strong>Doces:</strong> Olga, Florípedes.',
          '<strong>Cachaça:</strong> Tião, Maria Rocha, Alpenrose.',
          '<strong>Queijo:</strong> Tião, Sílvio Pinheiro, Fazenda Máximo.',
          '<strong>Bordado de bainha aberta</strong>, por encomenda: Beatriz Xavier, Márcia e Magda Marques, Fatinha Lopes, Guiomar Lopes.',
          '<strong>Pintura em quadro, tecido e vidro:</strong> Valéria. (31) 3652-2267.',
          '<strong>Verduras e legumes:</strong> Aparecida Pinheiro.',
          '<strong>Pães, bolos, geleias e conservas</strong>, Du Jardim Artesanal: Lucas, Railton, Douglas.',
        ] },
        { nota: 'O acervo original traz telefone celular particular de dois produtores. Eles não foram publicados aqui. Um portal aberto que expõe o celular de um morador sem autorização escrita cria transtorno real, e a autorização é decisão de quem mora, não de quem escreve o site. Onde o número aparece acima é porque o próprio acervo o registra como contato comercial do estabelecimento.', titulo: 'Por que faltam telefones nesta lista' },
        { lacuna: 'Falta o que transformaria esta lista em economia: <strong>a Associação dos Artesãos e Produtores Caseiros de Morro Vermelho tem endereço e telefone registrados</strong> (Rua José Evangelista Marques, 12, (31) 3652-2142) e poderia ser o ponto único de encomenda de tudo acima. Confirmar se ela está ativa é a providência mais útil desta página.' },
      ],
    },
    {
      id: 'entidades', titulo: 'Entidades do distrito',
      blocos: [
        'Quem quer visitar com organização, pesquisar, doar acervo ou pedir autorização para fotografar deve procurar uma destas:',
        { lista: [
          '<strong>Associação Comunitária de Morro Vermelho:</strong> Praça da Matriz, 1.',
          '<strong>Associação de Ação e Cidadania do Morro Vermelho:</strong> Rua José Evangelista Marques, 10. (31) 3652-2245 e (31) 3651-2073.',
          '<strong>Associação dos Artesãos e Produtores Caseiros de Morro Vermelho:</strong> Rua José Evangelista Marques, 12. (31) 3652-2142.',
          '<strong>Conselho Ambiental e Cultural de Morro Vermelho (CAC/MV):</strong> Rua Raimundo Teles de Melo, 54.',
          '<strong>Paróquia de Nossa Senhora de Nazareth:</strong> a quem pedir sobre a Matriz, a Capela do Rosário e os livros de registro.',
          '<strong>Cavalhada de Nossa Senhora de Nazareth:</strong> Praça da Matriz, s/nº.',
          '<strong>Escola Municipal Anézia Maria Pinheiro:</strong> onde funciona o ensaio de biblioteca pública do distrito.',
          '<strong>Jeep Clube de Morro Vermelho:</strong> Fazenda Alpenrose. (31) 99799-6147.',
          '<strong>Natal Futebol Clube</strong>',
        ] },
        'O CEP do distrito é <strong>34800-000</strong>.',
      ],
    },
    {
      id: 'conferir', titulo: 'O que conferir antes de publicar isto como serviço',
      blocos: [
        { lacuna: 'Todos os dados desta página vêm do acervo de pesquisa e refletem a situação de <strong>2021</strong>. Antes de tratá-los como informação de serviço é preciso confirmar, um por um: se cada restaurante e pousada continua aberto, se os telefones respondem, se a obra da estrada foi feita, se as associações estão ativas e se os produtores listados seguem produzindo.' },
        'É trabalho de uma tarde de telefone, e é o que separa uma página útil de uma página que atrapalha.',
        { nota: 'Uma lista de serviços sem data de conferência é pior do que nenhuma: ela manda o visitante para uma porta fechada e queima a confiança no portal inteiro. Por isso o estado desta página está declarado no cabeçalho, e por isso os telefones incompletos do acervo aparecem como “a confirmar” em vez de publicados pela metade.', titulo: 'A regra desta página' },
      ],
    },
  ],
  fontes: [
    'Acervo de pesquisa do portal: origem de todos os dados, com situação referente a 2021.',
    'Associação Comunitária de Morro Vermelho e Conselho Ambiental e Cultural (CAC/MV): a via para confirmar tudo e para organizar visita.',
    'Prefeitura Municipal de Caeté: situação da obra da estrada Juca Vieira–Morro Vermelho, acordada em 24 de fevereiro de 2021 no programa Criando Caminhos.',
    'ICMBio: informação oficial sobre visitação no Parque Nacional da Serra do Gandarela.',
    'Slow Food Brasil, Arca do Gosto: registros do Queijão de Morro Vermelho e do Aluá.',
    'Proprietários das áreas privadas onde estão as ruínas, minas e cachoeiras: a única fonte válida de autorização de acesso.',
  ],
  relacionadas: [
    { nome: 'Atrações', href: 'atracoes.html', txt: 'O que há para ver, por dentro.', olho: '14' },
    { nome: 'Cachoeiras e Cascatas', href: 'cachoeiras-e-cascatas.html', txt: 'Onde estão as águas e o que exige cuidado.', olho: '16' },
    { nome: 'Trilhas Ecológicas', href: 'trilhas-ecologicas.html', txt: 'Os caminhos, e por que não publicamos GPS ainda.', olho: '20' },
    { nome: 'Artesanato e Gastronomia', href: 'artesanato-gastronomia-musica.html', txt: 'O que se compra, e quem faz.', olho: '19' },
  ],
};
