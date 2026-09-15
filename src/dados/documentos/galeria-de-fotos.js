/* ==========================================================================
   29 · GALERIA DE FOTOS

   FONTE: originais/word/29MV.docx — "Pesquisa, texto e fotos: Geraldo Lopes".
   O documento original define apenas a organização da galeria: História do
   Morro, Vistas, Festas, Eventos e A Senhora do Morro Vermelho. É essa
   organização que esta página segue.

   As legendas dizem o que a fotografia mostra e nada além disso — os fatos
   citados em cada uma estão nos verbetes correspondentes, escritos pelo
   autor. O 'alt' descreve a imagem para quem não enxerga: é acessibilidade,
   não texto editorial.
   ========================================================================== */

const CREDITO = 'Acervo de pesquisa Geraldo Lopes e Viviane Pinheiro';

export default {
  slug: 'galeria-de-fotos',
  numero: '29',
  titulo: 'Galeria de Fotos',
  olho: 'O acervo · 29',
  tom: 'var(--areia-600)',
  resumo: 'Vistas, eventos, história, A Dona do Morro Vermelho',
  resumoSeo: 'A galeria de fotos de Morro Vermelho, Caeté (MG): a história do morro, as vistas, '
           + 'as festas, os eventos e a padroeira.',
  secoes: [
    {
      id: 'historia-do-morro', titulo: 'História do Morro',
      blocos: [
        { galeria: [
          { arquivo: 'galeria-matriz-antiga.jpg',
            alt: 'Fotografia antiga em preto e branco da Matriz de duas torres, com multidão '
               + 'reunida no largo em frente e um mastro alto à esquerda.',
            legenda: 'A Matriz de Nossa Senhora de Nazareth em fotografia antiga, com o mastro '
                   + 'erguido e o povo reunido no largo.',
            credito: CREDITO },
          { arquivo: 'galeria-familia-de-padres.jpg',
            alt: 'Retrato de grupo em preto e branco: casal sentado ao centro com uma criança, '
               + 'cercado por mulheres de vestido claro e seis homens jovens de batina.',
            legenda: 'O professor Antônio Evangelista Marques Guimarães, Eliza Carolina de Jesus '
                   + 'Guimarães e os filhos, seis deles padres.',
            credito: CREDITO },
          { arquivo: 'galeria-barao-da-estrella.jpg',
            alt: 'Retrato fotográfico antigo, em sépia, de homem de bigode, cabelo repartido e '
               + 'casaco escuro.',
            legenda: 'José Joaquim de Maya Monteiro, o Barão da Estrella (1854–1910), dono da '
                   + 'Fazenda do Cutão, onde foi sepultado.',
            credito: CREDITO },
          { arquivo: 'galeria-minas-geraes-1895.jpg',
            alt: 'Recorte de página de jornal antigo com uma coluna intitulada Morro Vermelho, '
               + 'dentro da seção Secção Alheia do jornal Minas Geraes.',
            legenda: 'Abaixo-assinado do povo de Morro Vermelho publicado no <em>Minas '
                   + 'Geraes</em>, em dezembro de 1895, agradecendo os socorros que debelaram a '
                   + 'epidemia de varíola.',
            credito: 'Jornal Minas Geraes, 1895' },
          { arquivo: 'galeria-ruinas-viracopos.jpg',
            alt: 'Ruínas de paredes de pedra e tijolo tomadas por vegetação, em meio à mata.',
            legenda: 'Ruínas do Arraial de Viracopos, a três quilômetros do povoado.',
            credito: CREDITO },
          { arquivo: 'galeria-boca-de-mina.jpg',
            alt: 'Entrada escura de galeria de mina escavada em barranco de terra vermelha, '
               + 'cercada de vegetação.',
            legenda: 'Boca de mina de ouro abandonada.',
            credito: CREDITO },
          { arquivo: 'galeria-tropeiros.jpg',
            alt: 'Tropa de burros carregados atravessando estrada de terra entre eucaliptos.',
            legenda: 'Tropa em estrada de terra. Todos os acessos a Morro Vermelho continuam '
                   + 'sendo por terra.',
            credito: CREDITO },
        ] },
      ],
    },
    {
      id: 'vistas-do-morro', titulo: 'Vistas do Morro',
      blocos: [
        { galeria: [
          { arquivo: 'galeria-morro-santa-cruz.jpg',
            alt: 'Encosta de terra vermelha exposta, com uma cruz fincada no alto do morro contra '
               + 'o céu.',
            legenda: 'O Morro da Santa Cruz, que deu nome ao povoado, com o cruzeiro no cume.',
            credito: CREDITO },
          { arquivo: 'galeria-cachoeira-poco.jpg',
            alt: 'Queda de água entre paredões de rocha avermelhada, formando poço de água '
               + 'esverdeada cercado de mata.',
            legenda: 'Poço entre paredões de rocha, numa das cachoeiras do distrito.',
            credito: CREDITO },
          { arquivo: 'galeria-paleotoca.jpg',
            alt: 'Galerias arredondadas escavadas em barranco de rocha clara, com aberturas em '
               + 'arco.',
            legenda: 'Paleotoca da Serra do Gandarela, na divisa entre Rio Acima e Morro '
                   + 'Vermelho: a maior identificada no Brasil, com 340 metros de comprimento.',
            credito: CREDITO },
        ] },
      ],
    },
    {
      id: 'festas-no-morro', titulo: 'Festas no Morro',
      blocos: [
        { galeria: [
          { arquivo: 'galeria-cavalhada-matriz.jpg',
            alt: 'Cavalo branco empinado diante da igreja iluminada à noite, montado por cavaleiro '
               + 'de azul, com fileiras de cavaleiros ao fundo.',
            legenda: 'A Cavalhada diante da Matriz, na noite de 7 de setembro.',
            credito: CREDITO },
          { arquivo: 'galeria-cavalhada-fogos.jpg',
            alt: 'Multidão de costas no largo da igreja à noite, sob fogos de artifício e arcos '
               + 'decorados iluminados.',
            legenda: 'Os fogos de artifício, que na Cavalhada significam a queima dos deuses '
                   + 'pagãos pelos mouros.',
            credito: CREDITO },
          { arquivo: 'galeria-forro-rosario.jpg',
            alt: 'Pintura em forro de tábuas: Nossa Senhora com o Menino entregando o rosário a '
               + 'São Domingos, anjos ao redor e a inscrição REGINA SACRATISSIMI ROSARII.',
            legenda: 'Forro pintado da Capela de Nossa Senhora do Rosário dos Pretos, de 1703, a '
                   + 'mais antiga edificação do lugar.',
            credito: CREDITO },
          { arquivo: 'galeria-bainha-aberta.jpg',
            alt: 'Detalhe de renda branca de bainha aberta, com desenhos geométricos vazados em '
               + 'tecido desfiado.',
            legenda: 'Bainha aberta, bordado que chegou a Minas com os colonizadores portugueses '
                   + 'no início do século 18.',
            credito: CREDITO },
        ] },
      ],
    },
    {
      id: 'a-dona-do-morro-vermelho', titulo: 'A Dona do Morro Vermelho',
      blocos: [
        { galeria: [
          { arquivo: 'galeria-nave-matriz.jpg',
            alt: 'Nave de igreja barroca com altares laterais, altar-mor ao fundo e forro '
               + 'pintado.',
            legenda: 'A nave da Matriz de Nossa Senhora de Nazareth, erguida em 1713 e tombada '
                   + 'pelo Iphan em 1950.',
            credito: CREDITO },
          { arquivo: 'galeria-capela-rosario.jpg',
            alt: 'Interior de capela pequena com forro de tábuas pintado com figuras de santos, '
               + 'paredes claras e porta ao fundo.',
            legenda: 'O interior da Capela do Rosário dos Pretos, tombada pelo município em 2004 '
                   + 'e restaurada pelos próprios moradores.',
            credito: CREDITO },
        ] },
      ],
    },
  ],
  relacionadas: [
    { nome: 'Atrações', href: 'atracoes.html', txt: 'Monumentos culturais protegidos', olho: '14' },
    { nome: 'Cavalhada de N. Sra. de Nazareth', href: 'cavalhada-de-nazareth.html', txt: 'Festa preservada desde 1704', olho: '18' },
    { nome: 'Redes Sociais', href: 'midia-e-redes.html', txt: 'Sites interessantes', olho: '24' },
  ],
};
