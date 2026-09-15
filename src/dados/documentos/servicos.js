/* ==========================================================================
   26 · SERVIÇOS

   FONTE: originais/word/26MV.docx — "Pesquisa, texto e fotos: Geraldo Lopes".
   O parágrafo de abertura vem de 26MV00.docx. Texto do documento original,
   sem acréscimo: os telefones e nomes são os que o autor registrou.
   ========================================================================== */

export default {
  slug: 'servicos',
  titulo: 'Serviços',
  numero: '26',
  olho: 'O distrito hoje · 26',
  tom: 'var(--serra-700)',
  resumo: 'Onde fica, como chegar, o que ver, comer, comprar',
  resumoSeo: 'Como chegar a Morro Vermelho, distrito de Caeté (MG), o que ver, onde comer, onde '
           + 'ficar e o que comprar no povoado.',
  secoes: [
    {
      id: 'abertura', titulo: null,
      blocos: [
        { abertura: 'Escondido entre montanhas da Serra do Gongo Soco, entre os municípios de '
                  + 'Caeté, Sabará, Raposos e Rio Acima, o povoado de Morro Vermelho tem tradição '
                  + 'em receber bem os visitantes desde 1700, quando aqui aportaram bandeirantes, '
                  + 'tropeiros, mascates, fiscais e dragões reais da Coroa Portuguesa, todos em '
                  + 'busca de riqueza fácil. Passado o ciclo do ouro, o distrito entrou em '
                  + 'decadência, mas mantém até hoje a hospitalidade e a boa acolhida com os '
                  + 'turistas e forasteiros, que procuram locais aprazíveis para descanso, higiene '
                  + 'mental, aventura e contato com a natureza. Por aqui ainda há reservas da Mata '
                  + 'Atlântica, ar puro, água cristalina e uma boa comida caseira.' },
      ],
    },
    {
      id: 'onde-fica', titulo: 'Onde fica',
      blocos: [
        'O povoado de Morro Vermelho é um distrito de Caeté, município da Região Metropolitana de '
      + 'Belo Horizonte, Minas Gerais, Brasil. Está a 10 quilômetros da sede do município, mas se '
      + 'liga também a Sabará (16 quilômetros), Raposos (14 quilômetros) e Rio Acima (18 '
      + 'quilômetros). Todos os acessos são por estrada de terra.',
      ],
    },
    {
      id: 'como-chegar', titulo: 'Como chegar',
      blocos: [
        { lista: [
          'De Belo Horizonte, o acesso mais comum é por Caeté por estrada em melhores condições, '
        + 'por meio da BR-381, subindo a Serra da Piedade, e por Sabará pela MGT-262. Da sede até '
        + 'o distrito são 10 quilômetros, por terra.',
          'Outro percurso é por Sabará até o Bairro Siderúrgica e dali por estrada de terra de 16 '
        + 'quilômetros.',
          'O trecho mais curto é por Nova Lima e Raposos. Da Savassi, em BH, são 45 quilômetros, '
        + 'com estrada de terra de 14 quilômetros.',
        ] },
      ],
    },
    {
      id: 'o-que-ver', titulo: 'O que ver',
      blocos: [
        { lista: [
          'Matriz de Nossa Senhora de Nazareth',
          'Capela de Nossa Senhora do Rosário dos Pretos',
          'Morro da Santa Cruz',
          'Pedra do Sino',
          'Ruínas do Arraial de Viracopos',
          'Ruínas do Palácio do Barão',
          'Ruínas de engenhos de apuração de ouro no Cutão e no Carrancas',
          'Minas de ouro no Carrancas, no Cutão e no quintal de uma casa',
          'Parque Nacional do Gandarela',
          'Cachoeiras de Santo Antônio, das Estrelas e do Maquiné',
          'Retiro dos Capetas, ruínas de um posto fiscal da Coroa Portuguesa',
        ] },
      ],
    },
    {
      id: 'onde-comer', titulo: 'Onde comer',
      blocos: [
        { lista: [
          '<strong>Restaurante Alpenrose:</strong> comida típica alemã e mineira. Na saída para '
        + 'Raposos. (31) 3651-2859 e (31) 3652-2116.',
          '<strong>Restaurante do Bigode.</strong> Rua José Evangelista Marques. (31) 3652-2151.',
          '<strong>Restaurante da Lili.</strong> Rua José Evangelista Marques.',
          '<strong>Restaurante Fazenda Máximo</strong>, na estrada da Charneca.',
        ] },
      ],
    },
    {
      id: 'onde-ficar', titulo: 'Onde ficar',
      blocos: [
        { lista: [
          '<strong>Pousada da Bandeira.</strong> Estrada do Curtume. (31) 3273-2666.',
          '<strong>Pousada Xavier</strong>, Praça da Matriz.',
          'Casas para temporada.',
        ] },
      ],
    },
    {
      id: 'o-que-comprar', titulo: 'O que comprar',
      blocos: [
        { lista: [
          'Queijão, canudos (Paulinho Magalhães, Graça Pinheiro)',
          'Biscoitos, rosquinhas e brevidades (Graça Pinheiro)',
          'Mel (Alexandre, Tozo, Lucas, Marcolino)',
          'Café Morro Vermelho (Alexandre, 97177-7860)',
          'Doces (Olga, Florípedes)',
          'Cachaça (Tião, Maria Rocha, Alpenrose)',
          'Queijo (Tião, Sílvio Pinheiro, Fazenda Máximo)',
          'Artesanato de bordados (encomendas: Beatriz Xavier, Márcia e Magda Marques, Fatinha '
        + 'Lopes e Guiomar Lopes)',
          'Artesanato de pinturas de quadros, tecidos, vidros etc. (Valéria, '
        + 'valerianet2267@gmail.com e (31) 3652-2267)',
          'Verduras e legumes (Aparecida Pinheiro)',
          'Pães, bolos, geleias, conservas: Du Jardim Artesanal (Lucas, Railton, Douglas)',
        ] },
      ],
    },
  ],
  relacionadas: [
    { nome: 'Atrações', href: 'atracoes.html', txt: 'Monumentos culturais protegidos', olho: '14' },
    { nome: 'Artesanato e Gastronomia', href: 'artesanato-gastronomia-musica.html', txt: 'Tradições de pai para filho', olho: '19' },
    { nome: 'Trilhas Ecológicas', href: 'trilhas-ecologicas.html', txt: 'Caminhos de esportes e lazer', olho: '20' },
  ],
};
