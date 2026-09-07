/* ==========================================================================
   OUTRAS COISAS
   Festas e Tradições · 28
   --------------------------------------------------------------------------
   A página menor do acervo original: um único texto, sobre o Te Deum
   cantado na noite de 8 de setembro, mais a anotação "INSERIR 2 PDF —
   TeDeum e TeDeum2", que aponta para dois arquivos que não vieram.

   Foi mantida como página em vez de virar seção de outra, e por uma razão
   editorial: "Outras Coisas" é a gaveta declarada do acervo — o lugar do
   que não caberia em nenhuma das 28 páginas restantes sem ser distorcido.
   Um acervo honesto precisa dessa gaveta, com o nome na porta. O que não
   pode é ela ficar escondida.

   O TE DEUM É O FECHAMENTO NATURAL DO PORTAL. Ele é o último ato da Festa
   da Padroeira, e o portal segue a mesma ordem: 29 páginas depois, o
   assunto é a despedida na porta da matriz e a promessa de voltar no ano
   seguinte. Não é acidente que esta seja a página 28, e não a primeira.
   ========================================================================== */

export default {
  slug: 'outras-coisas',
  numero: '28',
  titulo: 'Outras Coisas',
  olho: 'Festas e Tradições · 28',
  tom: 'var(--areia-700)',
  estado: 'A ampliar · dois documentos a receber',
  resumo: 'A gaveta declarada do acervo. Por ora, guarda o Te Deum: na noite de 8 de setembro, depois da procissão luminosa, moradores, romeiros e emigrados se ajoelham para cantar o maior hino do cristianismo, agradecer pela festa e prometer voltar.',
  resumoSeo: 'O Te Deum de Morro Vermelho, Caeté (MG): o hino cantado na noite de 8 de setembro que encerra a Festa de Nossa Senhora de Nazareth.',
  secoes: [
    {
      id: 'te-deum', titulo: 'Te Deum, hino de louvor',
      blocos: [
        { abertura: 'Na noite de <strong>8 de setembro</strong>, depois da procissão luminosa, e antes de se despedirem da Festa, moradores, romeiros e emigrados de Morro Vermelho se prostram de joelhos diante do Santíssimo Sacramento e da imagem de Nossa Senhora de Nazareth para cantar o <strong>Te Deum</strong>.' },
        'Agradecer, louvar, pedir e compromissar — são os quatro verbos do rito. Agradecem a Deus pelo êxito das festividades e pedem um ano feliz, de paz e tranquilidade para todos. Depois recebem a bênção final.',
        'Ainda na porta da matriz, despedem-se com um abraço e seguem, cada um para o seu destino, <strong>prometendo retornar no ano seguinte</strong>.',
        { nota: 'É o último ato da festa, e por isso é a última página deste portal a falar dela. Vale notar quem está presente: moradores, romeiros e emigrados. Um dos estudos acadêmicos listados em Cultura Popular investiga exatamente esse terceiro grupo — como quem saiu do povoado permanece vinculado e identificado a ele, mesmo inserido em outra cultura. O Te Deum é o momento em que os três se ajoelham juntos, e a promessa de voltar é o que os mantém.', titulo: 'Por que o Te Deum encerra o portal' },
        { lacuna: 'O acervo original registra a existência de <strong>dois documentos em PDF sobre o Te Deum</strong> — anotados como “TeDeum” e “TeDeum2” — que não acompanharam os textos recebidos. Provavelmente contêm a letra cantada, a partitura ou o roteiro da celebração. <strong>São os dois arquivos mais fáceis de recuperar de todo o acervo</strong>, e devem estar com quem organizou a pesquisa ou com a Paróquia.' },
        { sub: 'O que falta registrar' },
        { lista: [
          '<strong>A letra e a partitura</strong> como são cantadas aqui. O Te Deum é um hino latino do século 4, mas cada comunidade tem sua versão, seu tom e seus acréscimos — e é a versão local que interessa.',
          '<strong>Quem conduz.</strong> O coral da Matriz cantava em latim a missa a quatro vozes e os motetos da Semana Santa sob a regência de <a href="nossa-gente.html">Clarinda da Conceição Pinheiro</a>, que morreu em 2020. Quem regeu depois dela?',
          '<strong>A gravação em áudio.</strong> Nada substitui, e é o registro mais simples de fazer: um telefone na porta da matriz, na noite de 8 de setembro.',
          '<strong>Desde quando.</strong> O acervo não data o início da prática. A Cavalhada é registrada desde 1704; o Te Deum é parte do mesmo ciclo, mas isso precisa ser verificado nos livros da paróquia, não presumido.',
        ] },
      ],
    },
    {
      id: 'a-gaveta', titulo: 'Sobre esta página',
      blocos: [
        'Um acervo precisa de uma gaveta para o que não cabe em nenhuma prateleira sem ser torcido — e precisa que essa gaveta tenha o nome escrito na porta. É esta.',
        'O acervo original a chamou de <em>Outras Coisas</em>, e o nome foi mantido justamente por ser honesto. O que entra aqui é o que não pertence a nenhuma das outras vinte e oito páginas: um rito que não é festa inteira, um documento que não é verbete, uma prática que não é tradição catalogada.',
        { nota: 'A alternativa seria distribuir cada item na página “mais parecida”. Isso deixa o site mais arrumado e o acervo pior: um rito que virou parágrafo de outra coisa some da busca, perde o título e deixa de ser encontrável por quem procura exatamente ele. Uma gaveta declarada é melhor que um armário organizado com dados enfiados no lugar errado.', titulo: 'Por que não distribuir isto nas outras páginas' },
        'Conforme a pesquisa avança, é esperado que itens saiam desta página para páginas próprias — e é esperado que outros cheguem. Uma página que só cresce ou só encolhe não está funcionando como gaveta.',
      ],
    },
  ],
  fontes: [
    'Os dois arquivos em PDF sobre o Te Deum registrados no acervo original e ainda não recebidos — a fonte mais imediata desta página.',
    'Paróquia de Nossa Senhora de Nazareth — livros de tombo e de crônica da paróquia, onde a data de início da prática pode estar registrada.',
    'Coral de Nossa Senhora de Nazareth e Sociedade Musical Santa Cecília — a versão local do hino, a partitura e quem conduz hoje.',
    'Moradores, romeiros e emigrados presentes na noite de 8 de setembro — para a gravação em áudio e para o relato do rito.',
    'Arquivo da Arquidiocese de Belo Horizonte — documentação litúrgica da paróquia.',
  ],
  relacionadas: [
    { nome: 'Festas e Tradições', href: 'festas-e-tradicoes.html', txt: 'O ciclo inteiro do qual o Te Deum é o fecho.', olho: '17' },
    { nome: 'Cavalhada de Nazareth', href: 'cavalhada-de-nazareth.html', txt: 'Os dois dias que antecedem esta noite.', olho: '18' },
    { nome: 'Nossa Gente', href: 'nossa-gente.html', txt: 'Quem regia o coral da matriz.', olho: '27' },
    { nome: 'Cultura Popular', href: 'cultura-popular.html', txt: 'O estudo sobre os emigrados que voltam para a festa.', olho: '21' },
  ],
};
