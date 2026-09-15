/* ==========================================================================
   SOCIEDADE MUSICAL SANTA CECÍLIA

   FONTE: a banda NÃO tem documento próprio nos arquivos do autor. Tudo o que
   se lê abaixo é reunido do que os documentos dizem dela:
     · 14MV.docx — "Corporação Musical Santa Cecília"
     · 18MV.docx — a banda na Cavalhada
     · 13MV.docx — a matina de 7 de setembro, na Folha de S.Paulo de 1983
     · 27MV.docx — José Rodrigues Pinheiro, que a comandou
     · 22MV.docx — a entidade na lista de bens do distrito

   Nenhuma frase foi acrescentada. Se a banda merecer capítulo próprio, ele
   precisa nascer de um texto novo do autor — e esta página é curta porque o
   material é o que é.
   ========================================================================== */

export default {
  slug: 'sociedade-musical-santa-cecilia',
  titulo: 'Sociedade Musical Santa Cecília',
  numero: '19a',
  olho: 'Festas, tradições e saberes · Música',
  tom: 'var(--serra-700)',
  resumo: 'A banda do distrito',
  resumoSeo: 'A Sociedade Musical Santa Cecília, de Morro Vermelho, Caeté (MG): banda nascida '
           + 'junto com a Cavalhada, no início do século 18, e uma das mais antigas de Minas '
           + 'Gerais.',
  secoes: [
    {
      id: 'abertura', titulo: null,
      blocos: [
        { abertura: 'A Corporação Musical Santa Cecília, de Morro Vermelho, também nasceu junto '
                  + 'com a Cavalhada Nossa Senhora de Nazareth, no início do século 18. É '
                  + 'considerada uma das mais antigas de Minas Gerais, conservando em seu '
                  + 'repertório músicas coloniais, populares e folclóricas.' },
        'Parte do acervo musical foi passada de ouvido, de geração a geração. Além de manter viva '
      + 'a banda de mais de 300 anos, o povo de Morro Vermelho transmite para suas crianças a arte '
      + 'da boa música. Sob a batuta do mestre José Leal, a Oficina de Música treina crianças e '
      + 'jovens da comunidade.',
      ],
    },
    {
      id: 'na-cavalhada', titulo: 'Na Cavalhada e na matina',
      blocos: [
        'Finalmente, eles fazem a despedida, agitando lenços brancos para a multidão, ao som da '
      + 'música “Adeus, Senhora de Nazareth, até para o ano que vem se Deus quiser”. Todas as '
      + 'evoluções são acompanhadas por músicas típicas executadas pela Corporação Musical Santa '
      + 'Cecília, outra tradição centenária do lugar.',
        'A matina ou alvorada ocorre na Festa de Nossa Senhora de Nazareth às 4h do dia 7 de '
      + 'setembro. Tradicionalmente é aberta com repiques de sinos e fogos de artifício. A banda '
      + 'musical se concentra na praça para tocar dobrados e marchas, com intuito de acordar os '
      + 'moradores e visitantes para a grande festa que se aproxima.',
        { citacao: 'O povo do distrito de Morro Vermelho, no município de Caeté, é '
                 + 'tradicionalmente acordado às quatro horas da manhã, em todo o dia 7 de '
                 + 'setembro. Naquele horário, a banda de música Santa Cecília percorre as poucas '
                 + 'ruas do povoado tocando dobrados, enquanto os sinos da Matriz repicam e os '
                 + 'fogos espoucam.',
          autoria: 'Otaviano Lage, jornal Folha de S.Paulo, em 08/09/1983' },
      ],
    },
    {
      id: 'ze-pinheiro', titulo: 'Zé Pinheiro, que a comandou',
      blocos: [
        'José Rodrigues Pinheiro, ou Zé Pinheiro como era mais conhecido, era filho de João '
      + 'Evangelista Pinheiro e Jovita Gonçalves Rodrigues. Nasceu em Morro Vermelho em 1912 e '
      + 'casou-se com Nicolina de Moraes, com quem teve 14 filhos. Trabalhador rural e pequeno '
      + 'proprietário, comandou a Corporação Musical Santa Cecília por muitos anos, deixando um '
      + 'legado de composições musicais, algumas incluídas na Cavalhada Nossa Senhora de Nazareth, '
      + 'repetida anualmente no povoado desde 1704. Também foi organizador e maestro da Coral '
      + 'Nossa Senhora de Nazareth, com presença marcante em todas as festas do lugarejo.',
      ],
    },
  ],
  relacionadas: [
    { nome: 'Cavalhada de N. Sra. de Nazareth', href: 'cavalhada-de-nazareth.html', txt: 'Festa preservada desde 1704', olho: '18' },
    { nome: 'Atrações', href: 'atracoes.html', txt: 'Monumentos culturais protegidos', olho: '14' },
    { nome: 'Nossa Gente, Nossa História', href: 'nossa-gente.html', txt: 'Eles prestaram relevantes serviços à comunidade', olho: '27' },
  ],
};
