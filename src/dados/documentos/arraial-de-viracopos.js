/* ==========================================================================
   ARRAIAL DE VIRACOPOS
   Nossa História · Capítulo III
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
  slug: 'arraial-de-viracopos',
  titulo: 'Arraial de Viracopos',
  numero: '04',
  olho: 'Nossa História · 04',
  tom: 'var(--serra-800)',
  estado: 'Rascunho · nome a confirmar',
  resumo: 'Antes de ser Morro Vermelho, o lugar teria sido o Arraial de Viracopos. Nomes antigos guardam informação que os novos apagaram.',
  resumoSeo: 'Arraial de Viracopos, o nome antigo de Morro Vermelho, distrito de Caeté (MG): o que a toponímia revela e o que falta documentar.',
  secoes: [
    {
      id: 'o-nome', titulo: 'O que um nome antigo carrega',
      blocos: [
        { abertura: 'Topônimos são documentos. Quando um lugar troca de nome, alguma coisa foi decidida — e quase sempre alguém decidiu. Recuperar o nome antigo é recuperar uma camada da história que o nome atual cobriu.' },
        '“Arraial” designava, nas Minas coloniais, o povoado ainda sem estatuto formal de vila: aglomerado nascido em torno de lavra ou capela, sem câmara municipal e sem pelourinho. Era o estágio anterior à existência oficial.',
        { lacuna: 'A designação "Arraial de Viracopos" aparece no site do próprio distrito, e é por isso que este capítulo existe. Falta confirmá-la em documentação: em que registro ela aparece, de que período, e por que e quando o nome mudou para Morro Vermelho.' },
      ],
    },
    {
      id: 'hipoteses', titulo: 'Hipóteses sobre a origem do nome',
      blocos: [
        'Nomes como este costumam ter uma de três origens. Registrar as hipóteses — sem escolher nenhuma — é mais honesto do que afirmar a mais pitoresca:',
        { lista: [
          '<strong>Origem descritiva:</strong> alguma característica física do lugar, do terreno ou do curso d’água.',
          '<strong>Origem anedótica:</strong> um episódio ocorrido ali, transmitido oralmente até virar nome. É a explicação mais contada e a mais difícil de comprovar.',
          '<strong>Origem transferida:</strong> nome trazido por quem chegou, replicando um lugar de onde a pessoa veio — padrão comum na ocupação das Minas.',
        ] },
        { nota: 'Quando não se sabe, escreve-se que não se sabe. A versão mais divertida da origem de um nome quase nunca é a documentada, e um portal de memória que publica a versão divertida como fato perde a autoridade para publicar o resto.', titulo: 'Por que não escolhemos uma hipótese' },
      ],
    },
    {
      id: 'a-troca', titulo: 'A troca de nome',
      blocos: [
        'A mudança de nome de um povoado costuma acompanhar uma mudança de estatuto: elevação a freguesia, a distrito, ou reorganização administrativa municipal. Essas mudanças deixam rastro em lei — estadual ou municipal — e em recenseamento.',
        'É um rastro rastreável. A legislação de criação e alteração de distritos em Minas Gerais está preservada, e o IBGE mantém histórico de nomes de localidades. Este é um dos poucos pontos desta página que pode ser resolvido em arquivo, sem depender de memória oral.',
        { figura: 'Reprodução de mapa, documento ou publicação em que o nome antigo apareça.', arquivo: 'figura-nome-antigo.jpg', legenda: '<strong>Muro de pedra seca nas ruínas de Viracopos.</strong> A fotografia registra o sítio; a grafia do nome antigo, que é a lacuna deste verbete, continua dependendo de documento escrito.', alt: 'Muro baixo de pedra seca em meio a capim alto, remanescente de construção antiga.', credito: 'Acervo de pesquisa Geraldo Lopes e Viviane Pinheiro · autoria a confirmar' },
      ],
    },
  ],
  fontes: [
    'IBGE — Enciclopédia dos Municípios Brasileiros e histórico de nomes de localidades.',
    'Legislação mineira de criação e alteração de distritos (Assembleia Legislativa de MG).',
    'Arquivo Público Mineiro — mapas e relações de arraiais e freguesias do termo de Caeté.',
    'Arquivo da Câmara Municipal de Caeté — atas e leis municipais.',
    'Bibliografia de toponímia mineira.',
    'Memória oral — se alguém mais velho ainda usa ou lembra o nome antigo, isso é fonte.',
  ],
  relacionadas: [
    { nome: 'A Busca do Ouro', href: 'a-busca-do-ouro.html', txt: 'Por que um arraial nasceu exatamente aqui.', olho: '03' },
    { nome: 'Estrada Real', href: 'estrada-real.html', txt: 'A rede de caminhos que ligava os arraiais.', olho: '08' },
    { nome: 'Estórias, Casos e Lendas', txt: 'As versões que a comunidade conta — registradas como o que são.' },
  ],
};
