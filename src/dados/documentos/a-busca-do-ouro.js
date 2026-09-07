/* ==========================================================================
   A BUSCA DO OURO
   Nossa História · Capítulo II
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
  slug: 'a-busca-do-ouro',
  titulo: 'A Busca do Ouro',
  numero: '03',
  olho: 'Nossa História · 03',
  tom: 'var(--areia-800)',
  estado: 'Rascunho estruturado',
  resumo: 'O ouro explica por que existe um povoado nestas montanhas. Não explica por que ele continuou existindo depois que o ouro acabou.',
  resumoSeo: 'A mineração de ouro e a formação do povoado de Morro Vermelho, distrito de Caeté, Minas Gerais: contexto documentado e lacunas de pesquisa.',
  secoes: [
    {
      id: 'porque-aqui', titulo: 'Por que aqui',
      blocos: [
        { abertura: 'Povoados não aparecem em qualquer lugar. Aparecem onde há motivo, e nas Minas do século XVIII o motivo era quase sempre o mesmo: alguém achou ouro no leito de um córrego.' },
        'O padrão de ocupação da região foi consistente. Descoberta em aluvião, chegada rápida e desordenada de gente, formação de arraial improvisado e, se o ouro durasse, construção de capela, chegada de autoridade eclesiástica e civil, e consolidação do povoado.',
        'O próprio nome do lugar pertence a essa geografia: solo ferruginoso, terra vermelha, morro. É um nome descritivo, do tipo que quem chega dá antes de haver mapa.',
        { lacuna: 'Falta o essencial: em que córrego ou lavra se minerava aqui, quem foram os primeiros a chegar, e em que ano. Sem isso, este capítulo é contexto regional, não história local.' },
      ],
    },
    {
      id: 'como-era', titulo: 'Como se minerava',
      blocos: [
        'A extração em Minas foi majoritariamente de <strong>ouro de aluvião</strong>: o metal já solto no cascalho dos rios, arrancado da rocha pela erosão ao longo de milênios. Não exigia engenharia complexa. Exigia água, bateia, e uma quantidade brutal de trabalho humano.',
        { sub: 'O trabalho' },
        'Esse trabalho foi feito, em sua esmagadora maioria, por pessoas escravizadas. Homens e mulheres africanos e afrodescendentes passavam o dia dentro d’água, revolvendo cascalho. As consequências (doenças respiratórias, articulares e de pele, expectativa de vida curta) estão documentadas em registros de óbito de toda a região mineradora.',
        { nota: 'Não é possível escrever sobre o ouro de Minas honestamente sem escrever sobre quem o extraiu. É por isso que este capítulo vem depois de "História de Resistência", e não antes: a ordem é uma escolha editorial.', titulo: 'Por que este capítulo é o segundo' },
        { sub: 'O esgotamento' },
        'O ouro de aluvião acaba. Ele é um estoque finito e superficial, e na maior parte das Minas ele se exauriu ao longo do século XVIII. O que acontece com um povoado depois disso (se ele murcha, se some, ou se encontra outra razão para existir) é a pergunta mais interessante que a história de um lugar como este pode responder.',
      ],
    },
    {
      id: 'depois', titulo: 'Depois do ouro',
      blocos: [
        'Quando a mineração deixou de sustentar a região, os povoados que sobreviveram o fizeram por outras vias: agricultura de subsistência, pecuária, pequenos ofícios e, decisivamente, pelos laços comunitários já formados. Igreja, banda, festa e parentesco seguraram gente onde a economia já não segurava.',
        'Essa é provavelmente a chave para entender Morro Vermelho. Um distrito que hoje se define por liberdade e resistência, e não por riqueza mineral, é um lugar cuja identidade foi construída no <em>depois</em>.',
        { figura: 'Fotografia de lavra, córrego ou vestígio de mineração no distrito.', arquivo: 'figura-lavra-ouro.jpg', legenda: '<strong>Interior de uma galeria de mina abandonada</strong> no distrito. O acervo registra quase 800 minas de ouro na região no auge do ciclo, e dezenas foram reidentificadas em campo no Carrancas, no Cutão e no Geriza.', alt: 'Interior de galeria de mina escavada na rocha, estreita e escura, com o túnel se afunilando ao fundo.', credito: 'Acervo de pesquisa Geraldo Lopes e Viviane Pinheiro · autoria a confirmar' },
      ],
    },
  ],
  fontes: [
    'Arquivo Público Mineiro: registros de datas minerais e sesmarias do termo de Caeté.',
    'Livros de óbito da paróquia: causa mortis e idade revelam as condições de trabalho melhor que qualquer crônica.',
    'Bibliografia sobre mineração colonial em Minas Gerais (produção acadêmica da UFMG e da UFOP).',
    'Levantamento de campo: identificar catas, canais, mundéus e outros vestígios físicos no território.',
    'Memória oral: o que as famílias contam sobre "o tempo do ouro" e sobre o que veio depois.',
  ],
  relacionadas: [
    { nome: 'História de Resistência', href: 'historia-de-resistencia.html', txt: 'Quem trabalhou nas lavras, e o que veio depois.', olho: '02' },
    { nome: 'Estrada Real', href: 'estrada-real.html', txt: 'Por onde o ouro saía, e por onde tudo mais entrava.', olho: '08' },
    { nome: 'Arraial de Viracopos', href: 'arraial-de-viracopos.html', txt: 'O povoado antes de se chamar Morro Vermelho.', olho: '04' },
  ],
};
