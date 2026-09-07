/* ==========================================================================
   GALERIA DE FOTOS
   O acervo · 29
   --------------------------------------------------------------------------
   O acervo original desta página é uma LISTA DE TÍTULOS DE SEÇÃO e mais nada:
   "História do Morro", "Vistas do Morro", "Festas no Morro", "Eventos no
   Morro", "Senhora do Morro Vermelho". A galeria era um plano, não um
   conteúdo.

   Ao mesmo tempo, os arquivos diagramados do acervo trazem 527 imagens
   embutidas, das quais 500 distintas — todas extraídas e guardadas, com um
   inventário que liga cada uma ao documento e à posição de onde saiu.

   ENTÃO POR QUE SÓ DEZESSEIS DELAS ESTÃO AQUI?

   Porque uma imagem sem quem-aparece, onde, quando, de-quem-é-o-original e
   autorizou-publicar não é acervo: é ilustração. E porque a foto que uma
   comunidade cede é a coisa mais delicada que um portal de memória recebe —
   publicar sem permissão queima a confiança de que todo o resto depende.

   Esta página é, portanto, galeria E página de MÉTODO ao mesmo tempo. Ela
   mostra o que já pode ser mostrado e declara, ao lado, o que existe, onde
   está e o que falta para o resto sair.

   PRIMEIRO LOTE PUBLICADO. Dezesseis fotografias entraram, e o critério foi
   estreito: só o que é registro do próprio lugar — ruínas, minas, interiores
   das igrejas, a Cavalhada, a paisagem, um recorte de jornal de 1895 — e só
   o que não expõe pessoa viva identificável. Ficaram de fora as pinturas e
   gravuras que nos documentos originais vêm marcadas "Reprodução da
   internet", cuja licença ninguém conhece, e as fotos de grupo com rostos
   reconhecíveis, que dependem de autorização de cada pessoa.

   O CRÉDITO DIZ "AUTORIA A CONFIRMAR", e é literalmente o que se sabe: a
   procedência é o acervo de pesquisa, o fotógrafo não está anotado na
   maioria dos casos. É melhor publicar a incerteza do que atribuir errado.

   AS 500 RESTANTES NÃO VÃO PARA CÁ. A decisão é do projeto: o portal guarda
   o que precisa durar, o Instagram fica com o fluxo. Uma galeria de 500
   fotos sem legenda não é acervo, é depósito.
   ========================================================================== */

export default {
  slug: 'galeria-de-fotos',
  numero: '29',
  titulo: 'Galeria de Fotos',
  olho: 'O acervo · 29',
  tom: 'var(--areia-600)',
  estado: 'Primeiro lote · 16 fotografias',
  resumo: 'Dezesseis fotografias do acervo: o morro que dá nome ao povoado, a Matriz em imagem antiga, a família com seis filhos padres, o forro pintado da Capela do Rosário, a Cavalhada à noite e o recorte de jornal de 1895. O que entrou, por que só isto entrou, e o que falta para as outras.',
  resumoSeo: 'O acervo fotográfico de Morro Vermelho, Caeté (MG): o que existe, o que falta para publicar e como colaborar com imagens.',
  secoes: [
    {
      id: 'o-primeiro-lote', titulo: 'O primeiro lote',
      blocos: [
        { abertura: 'Dezesseis fotografias, escolhidas entre as 500 que o acervo de pesquisa guarda. São o registro do próprio lugar: o que se construiu, o que ruiu, o que se cava, o que se reza e o que se borda.' },
        { galeria: [
          { arquivo: 'galeria-morro-santa-cruz.jpg', alt: 'Encosta de terra vermelha exposta, com uma cruz de madeira fincada no alto do morro contra o céu.', legenda: 'O <strong>Morro da Santa Cruz</strong>, que dá nome ao povoado, com o cruzeiro no cume. É até onde sobem as romarias, e é a encosta que uma reportagem do acervo denuncia como devastada para encascalhar estrada.', credito: 'Acervo de pesquisa Geraldo Lopes e Viviane Pinheiro · autoria a confirmar' },
          { arquivo: 'galeria-matriz-antiga.jpg', alt: 'Fotografia antiga em preto e branco da Matriz de duas torres, com multidão reunida no largo em frente e um mastro alto à esquerda.', legenda: 'A <strong>Matriz de Nossa Senhora de Nazareth em fotografia antiga</strong>, com o mastro e o povo reunido no largo. O acervo associa este conjunto de imagens ao acervo de Clodomiro Marques, de 1918.', credito: 'Acervo de Clodomiro Marques · data e autoria a confirmar' },
          { arquivo: 'galeria-familia-de-padres.jpg', alt: 'Retrato de grupo em preto e branco: casal sentado ao centro com uma criança, cercado por mulheres de vestido claro e seis homens jovens de batina.', legenda: 'A <strong>família Marques Guimarães</strong> reunida: o professor Antônio, Elisa Carolina e os filhos, seis deles de batina. É a fotografia que explica a insígnia de Comendador da Santa Sé recebida do Papa Pio XI em 1932.', credito: 'Acervo de pesquisa Geraldo Lopes e Viviane Pinheiro · autoria a confirmar' },
          { arquivo: 'galeria-cavalhada-matriz.jpg', alt: 'Cavalo branco empinado diante da igreja iluminada à noite, montado por cavaleiro de azul, com fileiras de cavaleiros de azul e de vermelho ao fundo.', legenda: '<strong>A Cavalhada diante da Matriz.</strong> Cristãos de azul, mouros de vermelho: vinte e quatro cavaleiros, todo 7 de setembro. A tradição situa a origem da festa em 1704, data ainda sem confirmação documental.', credito: 'Acervo de pesquisa Geraldo Lopes e Viviane Pinheiro · autoria a confirmar' },
          { arquivo: 'galeria-cavalhada-fogos.jpg', alt: 'Multidão de costas no largo da igreja à noite, sob fogos de artifício e arcos decorados iluminados.', legenda: '<strong>A festa à noite.</strong> Os fogueteiros conversam entre si por meio dos fogos desde o início do século 18: a comunicação à distância marca as evoluções dos cavaleiros.', credito: 'Acervo de pesquisa Geraldo Lopes e Viviane Pinheiro · autoria a confirmar' },
          { arquivo: 'galeria-forro-rosario.jpg', alt: 'Pintura em forro de tábuas: Nossa Senhora com o Menino entregando o rosário a São Domingos, anjos ao redor e a inscrição REGINA SACRATISSIMI ROSARII.', legenda: '<strong>Forro pintado da Capela de Nossa Senhora do Rosário dos Pretos</strong>, de 1703, mais antiga que a Matriz. A inscrição lê-se <em>Regina Sacratissimi Rosarii</em>.', credito: 'Acervo de pesquisa Geraldo Lopes e Viviane Pinheiro · autoria a confirmar' },
          { arquivo: 'galeria-capela-rosario.jpg', alt: 'Interior de capela pequena com forro de tábuas pintado com figuras de santos, paredes claras e porta vermelha ao fundo.', legenda: '<strong>O interior da Capela do Rosário dos Pretos.</strong> Tombada pelo município em 2004 e restaurada pelos próprios moradores.', credito: 'Acervo de pesquisa Geraldo Lopes e Viviane Pinheiro · autoria a confirmar' },
          { arquivo: 'galeria-nave-matriz.jpg', alt: 'Nave de igreja barroca com altares laterais dourados, altar-mor ao fundo e forro pintado.', legenda: '<strong>A nave da Matriz de Nossa Senhora de Nazareth</strong>, de 1713. Tombada pelo Iphan em 9 de maio de 1950, e sem verba de manutenção desde então.', credito: 'Acervo de pesquisa Geraldo Lopes e Viviane Pinheiro · autoria a confirmar' },
          { arquivo: 'galeria-minas-geraes-1895.jpg', alt: 'Recorte de página de jornal antigo com uma coluna intitulada Morro Vermelho, dentro da seção Secção Alheia do jornal Minas Geraes.', legenda: '<strong>O documento de 1895.</strong> Abaixo-assinado do povo de Morro Vermelho publicado no <em>Minas Geraes</em>, agradecendo os socorros que debelaram a epidemia de varíola. Datado de <strong>10 de dezembro de 1895</strong> e assinado por Manoel Lopes de Magalhães Primo.', credito: 'Jornal Minas Geraes, 1895 · recorte do acervo de pesquisa' },
          { arquivo: 'galeria-boca-de-mina.jpg', alt: 'Entrada escura de galeria de mina escavada em barranco de terra vermelha, cercada de vegetação.', legenda: '<strong>Boca de mina de ouro abandonada.</strong> O acervo registra quase 800 minas na região no ciclo do ouro; dezenas foram reidentificadas no Carrancas, no Cutão e no Geriza.', credito: 'Acervo de pesquisa Geraldo Lopes e Viviane Pinheiro · autoria a confirmar' },
          { arquivo: 'galeria-ruinas-viracopos.jpg', alt: 'Ruínas de paredes de pedra e tijolo tomadas por vegetação, em meio à mata.', legenda: '<strong>Ruínas do arraial de Viracopos</strong>, a três quilómetros do povoado, o povoamento primitivo, com presença de habitações registrada em 1650. É o único bem do distrito reconhecido como patrimônio arqueológico.', credito: 'Acervo de pesquisa Geraldo Lopes e Viviane Pinheiro · autoria a confirmar' },
          { arquivo: 'galeria-barao-da-estrella.jpg', alt: 'Retrato fotográfico antigo, em sépia, de homem de bigode, cabelo repartido e casaco escuro.', legenda: '<strong>José Joaquim de Maia Monteiro, o Barão da Estrella</strong> (1846–1910). Nasceu no Rio de Janeiro e morreu em Morro Vermelho. Do palácio dele, na Fazenda do Cutão, restam ruínas em terreno de mineradora.', credito: 'Acervo de pesquisa Geraldo Lopes e Viviane Pinheiro · autoria a confirmar' },
          { arquivo: 'galeria-cachoeira-poco.jpg', alt: 'Queda de água entre paredões de rocha avermelhada, formando poço de água esverdeada cercado de mata.', legenda: '<strong>Poço entre paredões de rocha.</strong> As cachoeiras do distrito estão em propriedade particular e sem nenhuma infraestrutura, o que exige autorização e cautela antes de qualquer visita.', credito: 'Acervo de pesquisa Geraldo Lopes e Viviane Pinheiro · autoria a confirmar' },
          { arquivo: 'galeria-tropeiros.jpg', alt: 'Tropa de burros carregados atravessando estrada de terra entre eucaliptos.', legenda: '<strong>Tropa em estrada de terra.</strong> Todos os acessos a Morro Vermelho continuam sendo por terra, pelos mesmos traçados que levavam o ouro ao porto de Parati.', credito: 'Acervo de pesquisa Geraldo Lopes e Viviane Pinheiro · autoria a confirmar' },
          { arquivo: 'galeria-paleotoca.jpg', alt: 'Galerias arredondadas escavadas em barranco de rocha clara, com aberturas em arco.', legenda: '<strong>Paleotoca.</strong> Galeria escavada por tatus gigantes há milhares de anos, na região do Parque Nacional da Serra do Gandarela, vestígio anterior a qualquer ocupação humana do lugar.', credito: 'Acervo de pesquisa Geraldo Lopes e Viviane Pinheiro · autoria a confirmar' },
          { arquivo: 'galeria-bainha-aberta.jpg', alt: 'Detalhe de renda branca de bainha aberta, com desenhos geométricos vazados em tecido desfiado.', legenda: '<strong>Bainha aberta.</strong> A técnica chegou com os colonizadores portugueses no início do século 18 e sobreviveu nos moldes originais pelo trabalho das bordadeiras. Dona Lica (1907–2006) a ensinou a filhas e vizinhas por toda a vida.', credito: 'Acervo de pesquisa Geraldo Lopes e Viviane Pinheiro · autoria a confirmar' },
        ] },
        { nota: 'Dezesseis, e não quinhentas, por decisão do projeto. O portal guarda o que precisa durar e ser citável; o fluxo diário do povoado fica no perfil <strong>@morrovermelhomg</strong> no Instagram, que é onde ele funciona. Uma galeria de quinhentas fotos sem legenda não é acervo: é depósito.', titulo: 'Por que dezesseis' },
      ],
    },
    {
      id: 'o-que-existe', titulo: 'O que existe e não foi publicado',
      blocos: [
        'O acervo de pesquisa contém <strong>500 imagens distintas</strong>, guardadas fora da publicação, com um inventário que liga cada arquivo ao documento e ao ponto do texto de onde saiu. Dezesseis foram ao ar. As outras ficaram, e por três razões diferentes:',
        { lista: [
          '<strong>Rosto reconhecível sem autorização.</strong> Fotos de grupo, comissões de festa, crianças, bordadeiras trabalhando. É o material mais bonito do acervo e o que mais depende de permissão: de cada pessoa retratada, e não de quem tirou a foto.',
          '<strong>Licença desconhecida.</strong> Pinturas, gravuras e retratos de personagens históricos gerais, que os documentos originais marcam como “Reprodução da internet”. Sem saber a origem, não se publica.',
          '<strong>Resolução insuficiente.</strong> Boa parte veio recomprimida dentro de arquivos de texto. Algumas das publicadas acima têm menos de 700 pixels de largura. Servem, mas o original em alta resolução é melhor e existe.',
        ] },
        { nota: 'Uma imagem sem quem aparece, onde, quando, de quem é o original e se foi autorizada a publicação não é peça de acervo: é ilustração. A diferença não é formalidade: é o que separa um museu digital de um banco de imagens bonito.', titulo: 'A diferença entre acervo e ilustração' },
      ],
    },
    {
      id: 'as-secoes', titulo: 'As seções previstas',
      blocos: [
        'O acervo original já definiu a organização da galeria, e ela é boa: separa por natureza da imagem, não por data, que é o que funciona quando a datação da maior parte do material é incerta.',
        { lista: [
          '<strong>História do Morro:</strong> documento, mapa, escritura, jornal antigo, fotografia histórica.',
          '<strong>Vistas do Morro:</strong> a paisagem, o casario, o monte, as ruas, as águas.',
          '<strong>Festas no Morro:</strong> Cavalhada, Festa da Padroeira, Rosário, Semana Santa, Encomendação das Almas, Festa do Aluá.',
          '<strong>Eventos no Morro:</strong> o que acontece uma vez: obra, visita, romaria, enchente, comício.',
          '<strong>Senhora do Morro Vermelho:</strong> a imagem da padroeira, o andor, a bandeira, o estandarte, os vestidinhos do Menino Jesus.',
        ] },
        'A esta lista falta uma sexta seção, que o acervo não previu e que é a mais valiosa de todas: <strong>Retratos:</strong> as pessoas do povoado, com nome. É a categoria que transforma imagem em documento, e a única que só a comunidade pode preencher.',
      ],
    },
    {
      id: 'o-que-falta', titulo: 'O que cada foto precisa antes de ir ao ar',
      blocos: [
        'Seis campos. Os quatro primeiros são o que dá valor à imagem; os dois últimos decidem se ela pode ser publicada.',
        { lista: [
          '<strong>Quem aparece:</strong> nome completo. É o que transforma imagem em documento. “Não identificado” também é resposta válida e deve ser registrada como tal.',
          '<strong>Onde:</strong> rua, prédio, ponto de referência. Para vestígio no mato (calçamento, ruína, ponte, marco), <strong>coordenada de GPS</strong>: sem localização vale metade.',
          '<strong>Quando:</strong> ano. “Década de 1950” serve. “Não identificado” serve.',
          '<strong>Quem fotografou:</strong> se conhecido.',
          '<strong>De quem é o original:</strong> vira o crédito publicado.',
          '<strong>Autorização para publicar:</strong> por escrito, e dizendo se permite uso por terceiros.',
        ] },
        'Sem os dois últimos a foto não vai ao ar. Não é excesso de zelo jurídico: <strong>um portal de memória que publica imagem de família sem autorização perde a confiança da comunidade</strong>, e é dessa confiança que o acervo inteiro depende. A primeira foto publicada sem permissão é a última que alguém empresta.',
        { nota: 'A autorização também protege quem doa. Uma fotografia de acervo particular publicada na internet passa a circular fora de controle. Quem empresta tem direito de saber disso antes, e de decidir se aceita, inclusive de dizer não a uma imagem específica e sim às outras.', titulo: 'A autorização protege os dois lados' },
      ],
    },
    {
      id: 'onde-esta-o-acervo', titulo: 'Onde está o acervo que falta',
      blocos: [
        'A fotografia histórica de Morro Vermelho não está em arquivo público. Está em três lugares, em ordem de urgência:',
        { lista: [
          '<strong>Em álbuns de família</strong>, nas casas do distrito e nas casas de quem saiu. É o maior acervo e o mais frágil: uma caixa de fotos se perde numa mudança, numa enchente, num inventário.',
          '<strong>No grupo “Imagens antigas de Morro Vermelho / MG”</strong>, no Facebook, onde moradores já publicaram material por conta própria. É um acervo espontâneo, considerável e <strong>não catalogado em lugar nenhum</strong>, e que depende inteiramente de uma plataforma privada continuar existindo e mantendo a política atual.',
          '<strong>Nos arquivos das entidades:</strong> Paróquia, Cavalhada, Sociedade Musical Santa Cecília, Escola Anézia Maria Pinheiro, associações. Instituições guardam foto de evento com data, o que é raro e precioso.',
        ] },
        { nota: 'Catalogar o grupo do Facebook, com autorização de cada pessoa que publicou, é a tarefa de acervo mais urgente deste portal. Ali o trabalho de reunir já foi feito pela comunidade; falta preservar. Um grupo de rede social não é arquivo: é um empréstimo por prazo indeterminado, revogável sem aviso por quem não é a comunidade.', titulo: 'A tarefa mais urgente' },
        { lacuna: 'Não há hoje <strong>nenhum inventário</strong> do acervo fotográfico do distrito: nem das famílias, nem das entidades, nem do grupo na rede social. Não se sabe quantas imagens existem, de que períodos, nem quem as guarda. O inventário vem antes da digitalização e antes da galeria.' },
      ],
    },
    {
      id: 'como-colaborar', titulo: 'Como colaborar',
      blocos: [
        'A prioridade é sempre a <strong>fotografia com pessoas identificáveis e data anterior a 1980</strong>: é a que tem mais valor documental e a que corre mais risco.',
        { lista: [
          '<strong>Não é preciso equipamento.</strong> Uma foto da foto, feita com celular em luz natural, sem flash e sem sombra, já serve para o inventário. O escaneamento em alta resolução pode vir depois.',
          '<strong>O original nunca sai de casa.</strong> A digitalização pode ser feita no local, e deve.',
          '<strong>Anote junto:</strong> os seis campos acima, num papel, num áudio de celular ou numa mensagem. A anotação vale tanto quanto a imagem.',
          '<strong>Quem aparece na foto tem voz.</strong> Se a pessoa retratada está viva, é dela a decisão sobre ser identificada, e não de quem guarda a foto.',
          '<strong>Vestígio físico:</strong> calçamento, ruína, marco, mina, ponte, registre a coordenada de GPS. O celular faz isso sozinho.',
        ] },
        { citacao: 'Espaço reservado para a primeira fotografia catalogada do acervo, com nome de quem aparece, ano, crédito do original e autorização registrada.', autoria: 'Peça a receber · Acervo fotográfico do distrito' },
        { sub: 'Como a galeria cresce daqui' },
        'A grade acima aceita peças novas uma a uma, cada uma com os seis campos preenchidos. O caminho mais curto para dobrar esta galeria não é escanear mais nada: é <strong>identificar quem aparece nas fotos de grupo que já estão guardadas</strong> e pedir autorização às pessoas. O material existe; falta o consentimento e o nome.',
      ],
    },
  ],
  fontes: [
    'Famílias do distrito e de quem emigrou: o maior acervo fotográfico existente, e o único que não está em nenhuma instituição.',
    'Grupo “Imagens antigas de Morro Vermelho / MG”, no Facebook: acervo espontâneo considerável, sem catalogação e sem garantia de permanência.',
    'Paróquia de Nossa Senhora de Nazareth, Cavalhada, Sociedade Musical Santa Cecília, Escola Municipal Anézia Maria Pinheiro e associações do distrito: arquivos de evento, geralmente datados.',
    'Museu Regional de Caeté: acervo regional e a oficina de bainha aberta.',
    'Arquivo Público Mineiro, seção de iconografia: fotografia histórica de Caeté e região.',
    'Acervos das companhias inglesas de mineração de Morro Velho e Raposos: empregaram moradores do distrito por décadas e produziram registro fotográfico sistemático.',
    'World Digital Library e Biblioteca Nacional: o mapa de c. 1700, primeira peça iconográfica identificada sobre o povoado.',
  ],
  relacionadas: [
    { nome: 'Mídia e Redes', href: 'midia-e-redes.html', txt: 'Onde está o acervo fotográfico espontâneo.', olho: '24' },
    { nome: 'Como este portal foi feito', href: 'sobre-o-portal.html', txt: 'A regra de autorização, e por que ela existe.', olho: '00' },
    { nome: 'Nossa Gente', href: 'nossa-gente.html', txt: 'As pessoas que os retratos deveriam mostrar.', olho: '27' },
    { nome: 'Festas e Tradições', href: 'festas-e-tradicoes.html', txt: 'O que as seções de festa registrariam.', olho: '17' },
  ],
};
