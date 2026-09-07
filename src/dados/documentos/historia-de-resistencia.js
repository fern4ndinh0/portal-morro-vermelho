/* ==========================================================================
   HISTÓRIA DE RESISTÊNCIA
   Nossa História · Capítulo I
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
  slug: 'historia-de-resistencia',
  titulo: 'História de Resistência',
  numero: '02',
  olho: 'Nossa História · 02',
  tom: 'var(--terra-800)',
  estado: 'Rascunho estruturado',
  resumo: 'O distrito não se apresenta pelo ouro que saiu daqui. Apresenta-se pela liberdade, e é isso que o lema "Amor à Liberdade" declara.',
  resumoSeo: 'A história de resistência de Morro Vermelho, distrito de Caeté (MG): o que o lema "Amor à Liberdade" significa e o que ainda precisa ser documentado.',
  secoes: [
    {
      id: 'o-lema', titulo: 'Um lema que é uma tese',
      blocos: [
        { abertura: 'Cidades escolhem como querem ser lembradas. Morro Vermelho escolheu <strong>“Amor à Liberdade”</strong>, e essa escolha diz mais sobre o distrito do que qualquer descrição de casario colonial.' },
        'Um povoado que nasce da mineração poderia se apresentar pelo ouro, pelo ciclo econômico, pela arquitetura setecentista. É o que a maioria faz. Aqui, a palavra escolhida foi liberdade. Isso desloca o centro da narrativa: das pedras para as pessoas, do que foi extraído para quem ficou.',
        { lacuna: 'Quando o lema foi adotado, por iniciativa de quem, e a partir de qual episódio histórico? Esta é a primeira pergunta que a pesquisa local precisa responder, e a resposta reorganiza todo o resto desta página.' },
      ],
    },
    {
      id: 'contexto', titulo: 'Contexto regional documentado',
      blocos: [
        'Nas Minas Gerais dos séculos XVIII e XIX, a resistência à escravidão assumiu formas variadas e simultâneas. Nem toda ela foi fuga: houve também negociação, compra de alforria, organização religiosa e acumulação lenta de autonomia dentro do próprio sistema.',
        { lista: [
          '<strong>Irmandades religiosas de pessoas negras</strong> (sobretudo as de Nossa Senhora do Rosário e de São Benedito) funcionaram como caixas de auxílio mútuo. Financiaram alforrias, garantiram enterro digno e deram estrutura de organização coletiva a pessoas escravizadas e libertas.',
          '<strong>Quilombos e comunidades de refúgio</strong> se formaram no relevo acidentado da região, que oferecia esconderijo e dificultava expedições de captura.',
          '<strong>Alforrias por compra</strong> eram registradas em cartório e em livros de notas. Pessoas escravizadas que trabalhavam por conta própria acumulavam pecúlio ao longo de anos para comprar a própria liberdade ou a de familiares.',
          '<strong>Comunidades pós-abolição</strong> permaneceram nas terras onde já viviam, muitas vezes sem título de propriedade, origem de boa parte das comunidades quilombolas certificadas hoje.',
        ] },
        { nota: 'Tudo acima é documentado para Minas Gerais como região. Nada disso é, por enquanto, uma afirmação sobre Morro Vermelho especificamente. A diferença entre as duas coisas é a razão de existir deste portal.', titulo: 'O que é contexto e o que é fato local' },
      ],
    },
    {
      id: 'perguntas', titulo: 'As perguntas desta pesquisa',
      blocos: [
        'Para transformar este verbete em história documentada, é preciso responder:',
        { lista: [
          'Existem registros de alforria em nome de pessoas de Morro Vermelho? Em que livro, em que cartório, de que anos?',
          'Houve irmandade do Rosário ou de São Benedito no distrito? Restam livros de compromisso, atas ou listas de irmãos?',
          'Há memória oral de quilombo, mocambo ou comunidade de refúgio na região?',
          'Como as famílias negras do distrito contam a própria origem? Que sobrenomes, que terras, que ofícios se repetem?',
          'O lema tem origem documental ou é uma síntese recente da autoimagem da comunidade? As duas hipóteses são igualmente interessantes.',
        ] },
        { citacao: 'Espaço reservado para a primeira fala gravada sobre este assunto, de um morador, com nome, idade e data de entrevista.', autoria: 'Depoimento a coletar · Memória oral do distrito' },
      ],
    },
    {
      id: 'metodo', titulo: 'Nota de método',
      blocos: [
        'Este portal não publica narrativa histórica sem fonte identificada. Um texto agradável e inventado sobre resistência seria, além de falso, um desrespeito ao assunto: é exatamente esse tipo de generalização que apaga histórias específicas de pessoas específicas.',
        'Por isso esta página está publicada em estado de rascunho declarado. Ela é útil como introdução e como roteiro de pesquisa. Não é útil como fonte, e não se apresenta como tal.',
      ],
    },
  ],
  fontes: [
    'Arquivo da Paróquia de Morro Vermelho: livros de batismo, casamento e óbito; registros de irmandades, se houver.',
    'Cartório de Caeté: livros de notas: cartas de alforria, escrituras, inventários.',
    'Arquivo Público Mineiro (Belo Horizonte): fundos coloniais e provinciais relativos ao termo de Caeté.',
    'Fundação Cultural Palmares: verificar existência de certificação quilombola na região.',
    'IPHAN / IEPHA-MG: processos de tombamento e inventários de bens culturais do distrito.',
    'Memória oral: entrevistas com moradores mais velhos, prioridade máxima e urgente.',
    'Acervos de família do próprio distrito: a fonte mais rica e a mais frágil.',
  ],
  relacionadas: [
    { nome: 'A Busca do Ouro', href: 'a-busca-do-ouro.html', txt: 'O que trouxe gente para estas montanhas, e a que custo humano.', olho: '03' },
    { nome: 'Arraial de Viracopos', href: 'arraial-de-viracopos.html', txt: 'O nome antigo do povoado.', olho: '04' },
    { nome: 'Nossa Gente, Nossa História', href: 'nossa-gente.html', txt: 'As famílias do distrito, contadas por elas mesmas.', olho: '27' },
  ],
};
