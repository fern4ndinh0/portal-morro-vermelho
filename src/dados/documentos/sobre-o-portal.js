/* ==========================================================================
   COMO ESTE PORTAL FOI FEITO
   O portal · 00
   --------------------------------------------------------------------------
   Esta página não é um verbete: é a PROCEDÊNCIA do acervo.

   Ela nasce do release de lançamento do site anterior, escrito por quem fez
   a pesquisa. Aquele documento contém o fato mais importante de todo este
   portal — que os textos vêm de mais de quarenta anos de pesquisa de dois
   jornalistas, com nome e sobrenome — e sem ele o site inteiro seria um
   anônimo afirmando coisas sobre o século 18.

   Num portal cuja regra é "nenhum fato inventado", dizer de onde vem o
   material é a primeira obrigação, não a última. É por isso que esta página
   existe, e é por isso que ela é citada no pé de cada verbete.

   O QUE NÃO ESTÁ AQUI, DE PROPÓSITO: a data de lançamento do site anterior.
   O release anuncia um coquetel "em fevereiro" e não diz o ano. Preencher
   por dedução seria exatamente o que este portal não faz.
   ========================================================================== */

export default {
  slug: 'sobre-o-portal',
  numero: '00',
  titulo: 'Como este portal foi feito',
  olho: 'O portal · Procedência',
  tom: 'var(--areia-700)',
  estado: 'Documentado · uma data a confirmar',
  resumo: 'Mais de quarenta anos de pesquisa de dois jornalistas, Geraldo Lopes e Viviane Pinheiro, reunidos primeiro num site e agora reconstruídos aqui. Quem escreveu, de onde vêm os textos e o que mudou nesta versão.',
  resumoSeo: 'A origem do portal de Morro Vermelho: quarenta anos de pesquisa de Geraldo Lopes e Viviane Pinheiro, e o que muda nesta nova versão.',
  secoes: [
    {
      id: 'quarenta-anos', titulo: 'Quarenta anos de pesquisa',
      blocos: [
        { abertura: 'Os textos deste portal não foram escritos para ele. Eles vêm de <strong>mais de quarenta anos de pesquisa e coleta de informações</strong> sobre Morro Vermelho, feitas pelos jornalistas <strong>Geraldo Lopes</strong> e <strong>Viviane Pinheiro</strong>, que os reuniram primeiro no site <em>morrovermelhomg.com.br</em>.' },
        'Quarenta anos é mais tempo do que a maioria dos arquivos municipais brasileiros dedica a um distrito rural. É o que explica por que este acervo tem coisas que não se acham em outro lugar: a transcrição da ordem de despejo a Manuel Nunes Viana, o censo de 1832 com o número de escravizados por fazenda, o registro de que o Ribeirão Comprido já era explorado em 1650, a data de 10 de julho de 1867 em que Richard Burton passou pelo povoado.',
        'O nome do site nunca mudou, e é o mesmo desta versão: <em>Morro Vermelho, amor à liberdade</em>.',
        { nota: 'Este portal é uma reconstrução técnica de um acervo que já existia. A pesquisa histórica é de Geraldo Lopes e Viviane Pinheiro; o que se refez aqui foi a construção do site: a estrutura, o código, a acessibilidade e o método de indicar o que ainda não tem fonte primária. Onde este portal diz "a pesquisar", a lacuna é desta versão, e não uma falha do material recebido.', titulo: 'Quem fez o quê' },
      ],
    },
    {
      id: 'o-que-se-propos', titulo: 'O que o portal se propôs a fazer',
      blocos: [
        'O release de lançamento do site anterior declara três objetivos, e vale reproduzi-los sem paráfrase, porque eles continuam sendo os desta versão:',
        { citacao: 'Este é o primeiro passo para incluir definitivamente Morro Vermelho no calendário turístico de Minas Gerais, atraindo gente de todo o país para apreciar suas belezas naturais, cachoeiras, trilhas ecológicas e gastronomia centenária. O objetivo final é trazer mais emprego e renda para seus moradores com uma atividade econômica perene, além de deixar registrada, para as gerações futuras, toda a história do povoado, para que não se perca no tempo.', autoria: 'Geraldo Lopes e Viviane Pinheiro · release de lançamento do portal' },
        'Os três estão em ordem de dificuldade crescente, e o terceiro é o único que depende só de trabalho: <strong>deixar registrada a história para que não se perca no tempo</strong>. Turismo e renda dependem de estrada, de sinalização, de poder público. O registro depende de alguém sentar e escrever, e é isso que o acervo é.',
        { sub: 'A escala do que já existia' },
        'O site anterior tinha mais de trinta páginas cobrindo a história de resistência do povoado, a Guerra dos Emboabas, o Levante das Bateias, as festas e a Cavalhada, o Parque Nacional da Serra do Gandarela, as cachoeiras, as trilhas, o artesanato, a gastronomia, a cultura popular, os bens históricos, as estórias e lendas, a gente do lugar, e uma página de serviços com onde fica, como chegar, onde ficar, o que ver, o que comer e o que comprar.',
        'Esta versão mantém a mesma espinha, com a mesma numeração.',
      ],
    },
    {
      id: 'esta-versao', titulo: 'O que mudou nesta versão',
      blocos: [
        'A ideia é a mesma; a construção é outra. O que esta versão acrescenta não é conteúdo: é o que garante que o conteúdo sobreviva e chegue a todo mundo.',
        { lista: [
          '<strong>Cada página abre do disco, sem servidor e sem internet.</strong> Um arquivo <code>.html</code> num pendrive ou num anexo de e-mail abre completo, com texto, tipografia e imagens. Um acervo que depende de um domínio pago some quando a fatura para de ser paga.',
          '<strong>Tudo funciona com o JavaScript desligado.</strong> Nenhum texto, link ou imagem aparece só depois que um script roda. A animação é enfeite por cima de uma página que já está inteira.',
          '<strong>Nada de número digitado à mão.</strong> Quantidade de peças no acervo, tempo de leitura, sumário e ano no rodapé são todos derivados do próprio conteúdo. Não existe como o site dizer "12 peças" quando há 15.',
          '<strong>Nenhum link morto.</strong> Item de menu sem destino não vira link: vira um rótulo "em breve", visível e não clicável.',
          '<strong>O que não tem fonte primária diz que não tem.</strong> Caixas de "Lacuna documental" marcam, com todas as letras, a pergunta que ainda falta responder, em vez de deixar o leitor supor que tudo ali está igualmente comprovado.',
        ] },
        { sub: 'Por que a lacuna aparece em vez de ser escondida' },
        'Um acervo local costuma ter dois tipos de afirmação misturados: o que está em documento e o que a comunidade sabe e repete. Os dois têm valor, e nenhum dos dois deve se disfarçar do outro.',
        'A escolha aqui foi mostrar a costura. Quando uma data vem da tradição e não de um papel, a página diz isso e diz onde o papel poderia estar. É mais trabalhoso e é menos vistoso, e é o que permite a um pesquisador confiar no resto.',
        { nota: 'Uma afirmação forte e documentada vale muito mais do que uma afirmação forte e repetida. "A primeira eleição direta das Américas" com a referência do arquivo ao lado é um patrimônio; sem ela, é uma frase que qualquer um pode contestar. A lacuna marcada é o mapa do que falta para transformar uma na outra.', titulo: 'O que se ganha admitindo o que falta' },
      ],
    },
    {
      id: 'onde-mais', titulo: 'Onde mais acompanhar',
      blocos: [
        'Paralelamente ao portal, o perfil <strong>@morrovermelhomg</strong> no Instagram publica notícias diárias, atrações e novidades do povoado. O portal é o acervo: o que precisa durar; a rede social é o dia a dia, que o acervo não dá conta de acompanhar.',
        { lacuna: 'Duas coisas que esta página ainda não pode afirmar: <strong>em que ano o site anterior foi lançado</strong> (o release anuncia o coquetel de lançamento para fevereiro, mas não registra o ano) e se o domínio <em>morrovermelhomg.com.br</em> continua ativo e sob controle dos autores. As duas se resolvem com uma pergunta a quem fez.' },
      ],
    },
    {
      id: 'colaborar', titulo: 'Como colaborar com o acervo',
      blocos: [
        'A parte mais frágil deste acervo não é o século 18: é o século 20. O material colonial está em arquivo e vai continuar lá. As fotografias de família, os nomes de quem aparece nelas, os depoimentos de quem viu a Cavalhada de 1960 ou o comício das Diretas-Já estão em casas particulares e na memória de pessoas vivas.',
        { lista: [
          '<strong>Fotografia antiga:</strong> vale mais com o nome de quem aparece, o ano e a autorização de quem guarda o original do que em alta resolução sem nada disso.',
          '<strong>Documento de família:</strong> escritura, carta, ata, recibo, caderno. Uma foto do papel com o celular já serve para começar.',
          '<strong>Depoimento:</strong> a fonte com prazo. Áudio de celular basta.',
          '<strong>Correção:</strong> se algo aqui está errado, a correção é bem-vinda e será publicada com o crédito de quem apontou.',
        ] },
        'Sem autorização escrita de quem guarda o original, nada de acervo particular vai ao ar. Um portal de memória que publica foto de família sem permissão perde a confiança da comunidade, e é dessa confiança que o acervo inteiro depende.',
      ],
    },
  ],
  fontes: [
    'Release de lançamento do portal morrovermelhomg.com.br, de Geraldo Lopes e Viviane Pinheiro: fonte direta de tudo nesta página.',
    'Os textos do acervo, nos 29 documentos originais de pesquisa dos mesmos autores, que são a base de todos os verbetes deste site.',
    'Geraldo Lopes e Viviane Pinheiro: a consultar sobre o ano de lançamento do site anterior, a situação do domínio e a autorização formal de reuso desta versão.',
    'Perfil @morrovermelhomg no Instagram: registro corrente do povoado.',
  ],
  relacionadas: [
    { nome: 'História de Resistência', href: 'historia-de-resistencia.html', txt: 'O verbete que abre a espinha do portal.', olho: '02' },
    { nome: 'Guerra dos Emboabas', href: 'guerra-dos-emboabas.html', txt: 'Onde a afirmação mais forte do acervo é examinada.', olho: '09' },
    { nome: 'Nossa Gente, Nossa História', href: 'nossa-gente.html', txt: 'Quem habitou o lugar, nome por nome.', olho: '27' },
  ],
};
