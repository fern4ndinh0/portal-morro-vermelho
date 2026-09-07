/* ==========================================================================
   BENS HISTÓRICOS
   Nossa História · 22
   --------------------------------------------------------------------------
   A PÁGINA MAIS FACTUAL DO PORTAL, e por um motivo simples: aqui tudo tem
   número de processo, número de decreto e data.

   Tombamento é ato administrativo publicado. Não se discute por tradição
   oral: consulta-se. Por isso esta página quase não tem caixa de lacuna — e
   as poucas que tem são sobre o que NÃO está protegido, não sobre o que está.

   O ARGUMENTO CENTRAL vem do próprio acervo, e é uma denúncia com prova
   documental ao lado: a Matriz é tombada pelo Iphan desde 1950 e a
   manutenção é paga pelos moradores. O tombamento existe; a verba não.

   REGRA PARTICULAR DESTA PÁGINA: nenhum número de decreto, processo ou data
   pode ser corrigido "por parecer errado". Ou se confere na fonte oficial e
   se corrige com a fonte anotada, ou fica como está no acervo original.
   ========================================================================== */

export default {
  slug: 'bens-historicos',
  numero: '22',
  titulo: 'Bens Históricos',
  olho: 'Nossa História · 22',
  tom: 'var(--grafite-700)',
  estado: 'Documentado · números de processo e decreto',
  resumo: 'Relíquias do passado desprotegidas. A Matriz de 1713 é tombada pelo Iphan desde 1950 e não recebe verba: a manutenção é paga pelos próprios moradores. O inventário completo do que está protegido no papel.',
  resumoSeo: 'Bens tombados de Morro Vermelho, Caeté (MG): Matriz de Nossa Senhora de Nazareth, Capela do Rosário dos Pretos, Passos da Paixão e patrimônio imaterial, com processos e decretos.',
  secoes: [
    {
      id: 'protegido-no-papel', titulo: 'Protegidos no papel',
      blocos: [
        { abertura: 'Vários bens históricos e culturais de Morro Vermelho estão protegidos por legislação federal e municipal — templos de mais de trezentos anos, edificações antigas, festas e ofícios. <strong>Essa proteção vigora apenas no papel.</strong>' },
        'A <strong>Matriz de Nossa Senhora de Nazareth</strong>, de 1713, é tombada pelo Iphan como bem histórico nacional <strong>desde 1950</strong>. Não recebe qualquer verba para manutenção: o custeio é feito pelos próprios moradores, para que o prédio não seja consumido pelo tempo.',
        'A <strong>Capela de Nossa Senhora do Rosário dos Pretos</strong>, de 1703 — mais antiga que a Matriz —, também vem sendo restaurada pelo povo, embora tenha tombamento municipal.',
        'As edificações antigas das ruas, de grande importância cultural, foram inventariadas pela prefeitura para tombamento. <strong>Parte delas já está em processo de ruína ou de reforma</strong> — e reforma sem orientação técnica, num conjunto inventariado, destrói tanto quanto o abandono.',
        'Os bens imateriais — festas e ofícios — também foram registrados para proteção, e igualmente não recebem qualquer ajuda para sua manutenção.',
        { nota: 'Um tombamento de 1950 sem verba em setenta e cinco anos não é uma falha de execução: é o modelo em funcionamento. O tombamento federal protege contra a demolição e a descaracterização, mas não obriga o poder público a pagar a conservação, que segue sendo do proprietário — aqui, a paróquia e a comunidade. Registrar isso com o número do processo ao lado é o que transforma uma reclamação em um dado.', titulo: 'O que um tombamento garante e o que não garante' },
      ],
    },
    {
      id: 'tombamento-federal', titulo: 'Tombamento federal',
      blocos: [
        { sub: 'Igreja Matriz de Nossa Senhora de Nazareth' },
        'Morro Vermelho, Caeté/MG. Tombamento pelo <strong>Instituto do Patrimônio Histórico e Artístico Nacional (Iphan)</strong>.',
        { lista: [
          '<strong>Processo</strong> nº 397-T',
          '<strong>Inscrição</strong> nº 362, <strong>Livro de Belas Artes</strong>, fl. 73',
          '<strong>Data</strong> 09.05.1950',
          '<strong>Inventário</strong> 2006',
        ] },
        'Este é o registro mais forte do portal inteiro: número de processo, número de inscrição, livro, folha e data. Com ele, qualquer pessoa confere a informação na fonte oficial em minutos.',
        { figura: 'Fotografia da Matriz de Nossa Senhora de Nazareth — de preferência mostrando o estado atual da conservação.', arquivo: 'figura-matriz-nazareth.jpg', legenda: '<strong>A Matriz de Nossa Senhora de Nazareth, de 1713</strong>, em dia de festa. Tombada pelo Iphan em 9 de maio de 1950, processo nº 397-T. A data desta fotografia ainda precisa ser registrada: num bem tombado sem verba, a foto datada é documento sobre o ritmo da deterioração.', alt: 'A Matriz de duas torres vista de dia, com pessoas e um andor no largo em frente.', credito: 'Acervo de pesquisa Geraldo Lopes e Viviane Pinheiro · autoria a confirmar' },
      ],
    },
    {
      id: 'tombamento-municipal', titulo: 'Tombamento municipal',
      blocos: [
        { sub: 'Conjunto Urbano e Paisagístico: Passos da Paixão' },
        'Morro Vermelho, Caeté/MG. Decreto nº <strong>077/09</strong>, de <strong>17.03.2009</strong>. Inventário 2009.',
        { sub: 'Capela de Nossa Senhora do Rosário dos Pretos' },
        'Morro Vermelho, Caeté/MG. Decreto nº <strong>2.016/04</strong>, de <strong>06.04.2004</strong>. Inventário 2006.',
        'O tombamento do conjunto dos <strong>Passos da Paixão</strong> é notável por proteger não um prédio, mas um <em>percurso</em> — o caminho da procissão, com seus marcos, na paisagem. É um tipo de proteção que reconhece que o patrimônio ali é o trajeto e o gesto de percorrê-lo, e não só a pedra.',
      ],
    },
    {
      id: 'bem-imaterial', titulo: 'Bem imaterial registrado pelo município',
      blocos: [
        { sub: 'Cavalhada de Nossa Senhora de Nazareth' },
        'Morro Vermelho, Caeté/MG. Registro municipal por Decreto nº <strong>161/09</strong>, de <strong>14.12.2009</strong>. Inventário 2009.',
        'É o reconhecimento oficial da festa que, segundo o acervo, se repete anualmente desde 1704. O registro municipal de 2009 protege a prática; a documentação da continuidade desde o século 18 é o que a página da <a href="cavalhada-de-nazareth.html">Cavalhada</a> examina.',
      ],
    },
    {
      id: 'inventariados', titulo: 'Bens inventariados pelo município',
      blocos: [
        'Inventário é o passo anterior ao tombamento: o bem é identificado, descrito e registrado, mas ainda não está protegido por decreto. É a lista onde o risco é maior, porque a proteção é expectativa e não obrigação.',
        { sub: 'Edificações' },
        { lista: [
          'Capela de Nossa Senhora do Rosário dos Pretos — Seção V, 2001/2006',
          'Edificação à Praça da Matriz, s/nº — <strong>Casa Paroquial</strong> — Seção V, 2001/2007',
          'Edificação à Rua Dr. Antônio Mourão Guimarães, nº 7 — Seção V, 2002/2007',
          'Edificação à Rua Dr. Antônio Mourão Guimarães, nº 34 — Seção V, 2002',
          'Edificação à Rua José Evangelista Marques, nº 2 — Seção V, 2001',
          'Edificação à Rua José Evangelista Marques, nº 3 — Seção V, 2002',
          'Edificação à Rua José Evangelista Marques, nº 36 — Seção V, 2002',
          'Edificação à Rua José Evangelista Marques, nº 56 — Seção V, 2001',
          'Edificação à Rua José Evangelista Marques, nº 531 — Seção V, 2002',
        ] },
        { nota: 'Seis das nove edificações inventariadas estão na mesma rua — a Rua José Evangelista Marques. Não é coincidência de numeração: é um trecho urbano inteiro que o município identificou como conjunto e não converteu em tombamento. É ali que uma reforma malfeita causa o dano mais irreversível.', titulo: 'Uma rua inteira em risco' },
        { sub: 'Patrimônio imaterial inventariado' },
        { lista: [
          '<strong>Aluá</strong> — Seção V, 2011',
          '<strong>Bainha Aberta</strong> — Seção V, 2011',
          '<strong>Cavalhada e Festa de Nossa Senhora de Nazaré</strong> — Seção V, 2003',
          '<strong>Cavalhada Mirim</strong> — Seção V, 2011',
          '<strong>Contradança</strong> — Seção V, 2011',
          '<strong>Encomendação das Almas</strong>',
          '<strong>Festa de Nossa Senhora do Rosário</strong>',
          '<strong>Queijão</strong>',
          '<strong>Semana Santa</strong>',
          '<strong>Sociedade Musical Santa Cecília de Morro Vermelho</strong>',
        ] },
        'Dez itens, e a lista descreve um modo de vida completo: uma bebida (o aluá), um bordado (a bainha aberta), um queijo, uma banda de música, um baile (a contradança), um ritual de quaresma, duas festas de padroeira e a versão infantil da Cavalhada — que é o mecanismo de transmissão da festa adulta.',
        { sub: 'Patrimônio arqueológico' },
        { lista: [
          '<strong>Viracopos</strong> — Morro Vermelho, Caeté/MG',
        ] },
        'O sítio do arraial primitivo é reconhecido como patrimônio arqueológico do município. É o único item desta página que não é uma construção nem uma prática: é <em>chão</em>. Ver <a href="arraial-de-viracopos.html">Arraial de Viracopos</a>.',
      ],
    },
    {
      id: 'o-que-nao-esta', titulo: 'O que não está protegido',
      blocos: [
        { lacuna: 'As listas acima vêm do acervo de pesquisa e precisam ser <strong>conferidas nas fontes oficiais</strong> — a base de bens tombados do Iphan e o arquivo de decretos da Prefeitura de Caeté — para checar três coisas: se algum item foi tombado depois de 2011 e não consta aqui; se a numeração e as datas estão exatas; e se as edificações inventariadas ainda estão de pé.' },
        'Fora das listas ficam bens que o próprio acervo menciona em outras páginas e que não aparecem em nenhum registro de proteção:',
        { lista: [
          'As <strong>ruínas do Palácio do Barão da Estrella</strong>, na antiga sede da Fazenda do Cutão, hoje em área de mineradora.',
          'As <strong>ruínas das casas de apuração de ouro</strong> às margens do Ribeirão Comprido.',
          'A <strong>Lagoa do Cutão</strong>, represa construída no século 18 ou 19 para captar água para a apuração do ouro.',
          'Os vestígios do posto fiscal do <strong>Retiro dos Capetas</strong>.',
          'O <strong>calçamento e os marcos remanescentes da Estrada Real</strong> no trecho do distrito.',
        ] },
        { nota: 'Esses cinco não são exigência de tombamento — são exigência de registro. Um vestígio sem coordenada de GPS, sem fotografia datada e sem descrição não existe para o poder público, e desaparece sem que ninguém possa provar que estava lá. O registro é barato e pode ser feito por qualquer morador com um celular.', titulo: 'Antes do tombamento, o registro' },
      ],
    },
  ],
  fontes: [
    'Iphan — base de bens tombados e o Livro de Belas Artes. O processo nº 397-T e a inscrição nº 362 permitem a consulta direta.',
    'Prefeitura Municipal de Caeté — arquivo dos decretos citados (077/09, 2.016/04, 161/09) e do inventário municipal, Seção V.',
    'IEPHA-MG (Instituto Estadual do Patrimônio Histórico e Artístico de Minas Gerais) — inventários estaduais e o repasse do ICMS Patrimônio Cultural, que é a via pela qual um município recebe recurso por bem protegido.',
    'Conselho Municipal de Patrimônio Cultural de Caeté — atas, que registram o que foi discutido e o que foi negado.',
    'Paróquia de Morro Vermelho — registros de obras e de custeio da manutenção da Matriz e da Capela do Rosário, que sustentam documentalmente a afirmação de que a conservação é paga pela comunidade.',
    'IBAMA e ANM, além da mineradora proprietária — situação legal das ruínas do Palácio do Barão da Estrella, hoje em terreno privado.',
  ],
  relacionadas: [
    { nome: 'Atrações', href: 'atracoes.html', txt: 'Os monumentos, por dentro.', olho: '14' },
    { nome: 'Cavalhada de Nazareth', href: 'cavalhada-de-nazareth.html', txt: 'O bem imaterial registrado por decreto em 2009.', olho: '18' },
    { nome: 'Arraial de Viracopos', href: 'arraial-de-viracopos.html', txt: 'O sítio arqueológico da lista.', olho: '04' },
    { nome: 'Cultura Popular', href: 'cultura-popular.html', txt: 'A pesquisa acadêmica sobre o que aqui está listado.', olho: '21' },
  ],
};
