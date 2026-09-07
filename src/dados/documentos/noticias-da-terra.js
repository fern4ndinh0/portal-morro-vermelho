/* ==========================================================================
   NOTÍCIAS DA TERRA
   O distrito hoje · 23
   --------------------------------------------------------------------------
   Jornalismo local de verdade, feito no distrito entre 2020 e 2021: seis
   reportagens com apuração, fonte e cobrança de providência.

   O PROBLEMA E A SOLUÇÃO. Estas notícias têm cinco anos. Publicá-las como
   "notícias" seria mentir sobre o presente; jogá-las fora seria perder
   apuração que ninguém mais fez. A saída é a única honesta: elas viram
   ARQUIVO DATADO, cada uma com o ano do relato no título, e cada uma com a
   pergunta de acompanhamento explícita — a obra saiu? o tombamento veio?

   Uma reportagem de 2020 sobre um problema não resolvido não envelheceu:
   ela virou prova de quanto tempo o problema dura. É assim que esta página
   trata cada uma.

   ACHADO IMPORTANTE AQUI: a reportagem sobre a expedição do Resgate Colonial
   traz a descoberta, em museu de Portugal, de que em 1719 chegaram ao Brasil
   duas Companhias de Cavalaria de Dragões Reais, uma delas destacada para
   Morro Vermelho — com os nomes das três forças locais já existentes. É
   fonte primária para a página 07 e foi levada para lá.
   ========================================================================== */

export default {
  slug: 'noticias-da-terra',
  numero: '23',
  titulo: 'Notícias da Terra',
  olho: 'O distrito hoje · 23',
  tom: 'var(--terra-600)',
  estado: 'Arquivo datado · 2020–2021',
  resumo: 'O morro que dá nome ao povoado sendo devastado para encascalhar estrada. Um cemitério de variolosos de 1895 virando pasto. Uma praça reformada que ficou fora do padrão do tombamento. Seis reportagens feitas no distrito, e o que aconteceu depois.',
  resumoSeo: 'Reportagens sobre Morro Vermelho, Caeté (MG): devastação do Morro da Santa Cruz, cemitério dos bexiguentos, praça da Matriz, biblioteca, internet e estrada.',
  secoes: [
    {
      id: 'como-ler', titulo: 'Como ler esta página',
      blocos: [
        { abertura: 'As reportagens abaixo foram feitas no distrito entre <strong>2020 e 2021</strong>, com apuração local, fonte identificada e cobrança de providência. Elas não são notícia: são <strong>arquivo</strong>.' },
        'Cada uma vem com a data do relato e com a pergunta de acompanhamento que continua aberta. Uma reportagem de cinco anos sobre um problema não resolvido não perdeu validade. Ela ganhou outra: virou prova de quanto tempo o problema dura.',
        { nota: 'Esta é a página que mais precisa de atualização e a que menos pode ser reescrita. O texto original fica como está, datado, porque é o registro do que se sabia então. O que se acrescenta é a resposta de hoje, embaixo, também datada. Sobrescrever a apuração antiga apagaria justamente a linha do tempo do descaso.', titulo: 'Por que o texto antigo não é reescrito' },
      ],
    },
    {
      id: 'morro-devastado', titulo: 'Morro histórico é devastado · 2020',
      blocos: [
        'O povoado corre o risco de mudar de nome. O <strong>Morro da Santa Cruz</strong> (o monte que dá nome a Morro Vermelho, descoberto por bandeirantes no fim do século 17) <strong>já está com a encosta toda devastada</strong>. E, desta vez, a culpa não é das mineradoras.',
        'Segundo lideranças do distrito, a <strong>Prefeitura de Caeté</strong> (que deveria zelar, proteger e tombar o monumento natural) retirou minério de trás do morro para encascalhar estradas rurais. Havendo cascalho por toda parte, a administração escolheu justamente o símbolo da cidade, testemunha dos movimentos de resistência aos desmandos da Coroa.',
        'Ao sopé dessa montanha passava a <a href="estrada-real.html">Estrada Real</a>, por onde circulavam bandeirantes, fiscais e tropeiros levando toneladas de ouro da Serra da Piedade, de Caeté, de Viracopos, do Ribeirão Comprido e do Cuiabá para o porto de Parati. Mais à frente, pelo Caminho dos Emboabas, no <a href="retiro-dos-capetas.html">Retiro dos Capetas</a>, ficava o posto fiscal da Coroa onde os <a href="os-dragoes-reais.html">Dragões Reais</a> garantiam a cobrança de impostos sobre o metal e sobre animais, ferramentas, mantimentos e roupas que subiam para as <strong>quase 800 minas de ouro</strong> da região.',
        'O monte é também destino de romarias centenárias: grupos de católicos sobem a pé do povoado até o cume, onde reluz um cruzeiro, para a missa campal que atrai gente de toda a região.',
        'Além da prefeitura, o morro vem sendo devastado por trilheiros e carros fora de estrada, que todo fim de semana abrem crateras na traseira do morro. Com as chuvas fortes, as trilhas de moto se transformam em erosões que levam a terra da montanha.',
        { lista: [
          '<strong>O que se pedia:</strong> tombamento do Morro da Santa Cruz pela Prefeitura de Caeté; cerca para conter os trilheiros; fiscalização permanente; e plantio de árvores para recompor o dano.',
        ] },
        { lacuna: 'Cinco anos depois: <strong>o Morro da Santa Cruz foi tombado?</strong> A retirada de minério cessou? Houve cercamento, fiscalização ou replantio? Nenhum dos quatro pedidos aparece como bem tombado na lista de <a href="bens-historicos.html">Bens Históricos</a>, o que sugere que o principal deles não foi atendido. Confirmar na Prefeitura e no Conselho Municipal de Patrimônio.' },
      ],
    },
    {
      id: 'campos-sagrados', titulo: 'Campos sagrados invadidos · 2020',
      blocos: [
        'No alto de uma campina está o <strong>“cemitério dos bexiguentos”</strong>, as covas da epidemia de varíola de <strong>1895</strong>, que dizimou quase um terço da população do povoado. Até pouco tempo, todo mundo fazia questão de contornar aquelas terras com respeito, sem deixar nem que animais se aproximassem.',
        'Com um loteamento novo nas redondezas, casas e barracões subiram o morro. Gente recém-chegada esticou os quintais e <strong>ocupou o velho cemitério como pasto e curral</strong>. Não é por falta de aviso: diariamente há moradores alertando os novos habitantes sobre os riscos da bexiga ainda encravada em ossos sepultados ali.',
        'Como se não bastasse o desrespeito ao cemitério desativado há mais de um século, os novos habitantes já invadiram também <strong>o cemitério novo</strong>, e ao lado de covas frescas, cavalos, burros e potros pastam com tranquilidade. A Prefeitura de Caeté e a Paróquia têm conhecimento do assunto.',
        { sub: 'O que esta reportagem documentou sobre 1895' },
        'Ao apurar a invasão, a reportagem registrou o que é hoje a informação mais precisa do acervo sobre a epidemia, e que está desenvolvida na página <a href="epidemia-da-bexiga.html">Epidemia da Bexiga</a>:',
        { lista: [
          'O surto durou <strong>de agosto a dezembro de 1895</strong>, terminando com a instalação de um posto médico numa residência e a vacinação geral da população.',
          'Estima-se <strong>cerca de 300 mortos e outros 300 curados</strong>.',
          'Era difícil encontrar quem sepultasse os mortos: <strong>os próprios coveiros fugiram</strong>. As ruas ficaram desertas, as casas fechadas.',
          'Em <strong>dezembro de 1895</strong>, um abaixo-assinado ao Governo do Estado, assinado por <strong>Manoel Lopes de Magalhães Primo</strong> e publicado no <em>Diário Oficial</em>, agradeceu ao ex-governador <strong>João Pinheiro da Silva</strong> “os prontos socorros ministrados à localidade, debelando a epidemia de varíola, que grassava com intensidade, sem o que teríamos de ver hoje, com grande dissabor, esta população dizimada pelo flagelo e reduzida a um estado misérrimo”. O documento agradece também à Câmara Municipal de Sabará, por ter enviado um médico no início da epidemia, e às companhias inglesas de mineração de Raposos e Morro Velho, pelos socorros enviados espontaneamente.',
        ] },
        { nota: 'Este abaixo-assinado é fonte primária localizável: documento com data, autor identificado e publicação no Diário Oficial. Encontrar a edição exata transforma a epidemia de 1895, de memória transmitida, em fato documentado, e é a providência mais rendosa que a pesquisa deste portal pode tomar hoje.', titulo: 'O documento que fecha a página 11' },
        { lacuna: 'Situação atual do cemitério dos bexiguentos: <strong>foi cercado, sinalizado ou registrado?</strong> Um cemitério de epidemia é sítio de interesse arqueológico e sanitário, e existe um caminho formal para protegê-lo, o inventário municipal, que já cobre outros dez bens do distrito.' },
      ],
    },
    {
      id: 'praca', titulo: 'Descaso e perigo na Praça · 2020',
      blocos: [
        'Inaugurada às pressas em <strong>setembro de 2016</strong>, com placa de fim de governo, a reforma da <strong>Praça da Matriz</strong> deixou um rastro de descaso. As proteções improvisadas de madeira colocadas à direita e à esquerda da igreja estão corroídas e começaram a desabar, com risco para as crianças que brincam perto e podem cair numa ribanceira.',
        'Com parte da proteção já retirada, durante as festividades da Cavalhada de <strong>setembro de 2020</strong> um morador caiu no local e rolou ribanceira abaixo. Foi socorrido pelos companheiros e, por sorte, não se feriu.',
        'Moradores informam que a demora para instalar proteção definitiva se arrasta há mais de quatro anos por uma pendência com o Iphan: <strong>a reforma teria colocado a praça fora dos padrões do tombamento</strong>: a Matriz é tombada desde 1950.',
        { nota: 'Este é o caso exemplar do que a página <a href="bens-historicos.html">Bens Históricos</a> descreve. O tombamento federal impede a descaracterização, como deve. Mas quando uma obra malfeita é executada primeiro e a irregularidade é constatada depois, o resultado prático é um impasse: não se pode consertar do jeito errado, ninguém se organiza para consertar do jeito certo, e o perigo permanece. A proteção do patrimônio não é o problema aqui. O problema é a obra sem projeto aprovado.', titulo: 'O que este impasse ensina sobre tombamento' },
        { lacuna: 'A pendência com o Iphan foi resolvida? A proteção definitiva foi instalada? Passados <strong>dez anos</strong> da reforma, esta é a pergunta de resposta mais fácil de todas nesta página: basta uma fotografia da praça, hoje.' },
      ],
    },
    {
      id: 'biblioteca', titulo: 'Livros de graça para todos · 2020',
      blocos: [
        'Começou a funcionar na <strong>Escola Municipal Anézia Maria Pinheiro</strong> um ensaio da biblioteca pública de Morro Vermelho. Tem romance, poesia, conto, história e ficção, para crianças, adolescentes e adultos: Carlos Drummond, Guimarães Rosa, Fernando Sabino, João Ubaldo, Rachel de Queiroz, Fernando Pessoa, antologias de contos brasileiros e do mundo.',
        'Tem também <strong>o Compromisso da Irmandade da Virgem Senhora do Rozario dos Pretos do Arrayal do Morro Vermelho, de 1790</strong>, o documento mais antigo do acervo do distrito, disponível para leitura na escola do lugar.',
        'Para ler basta procurar a diretora <strong>Tania Cristina Pinheiro</strong>, se inscrever e pegar os livros. É de graça. O acervo vem de doações de egressos do povoado, de quem mora fora e de quem adotou Morro Vermelho como terra natal.',
        { nota: 'Guimarães Rosa numa estante de Morro Vermelho não é coincidência de currículo: o padre que fundou Cordisburgo, cidade natal do escritor, foi vigário deste povoado, e Rosa o evocou no discurso de posse na Academia Brasileira de Letras. Ver <a href="nossa-gente.html">Nossa Gente</a>.', titulo: 'Uma ligação que a biblioteca fecha' },
        { lacuna: 'A biblioteca continua funcionando? Quantos títulos tem hoje, quantos leitores inscritos? É a única notícia boa desta página, e a que mais merecia acompanhamento.' },
      ],
    },
    {
      id: 'resgate-colonial', titulo: 'Desbravadores abrem rotas para o turismo · 2021',
      blocos: [
        'Uma expedição de pesquisa percorreu o distrito e identificou, além dos pontos já conhecidos (Pedra do Sino, Cruzeiro do Rosário, Cruzeiro da Santa Cruz, Cachoeira de Santo Antônio), <strong>relíquias dos séculos 17 e 18 com potencial turístico</strong>.',
        { sub: 'Engenhos do ouro' },
        'Na <a href="fazenda-do-cutao.html">Fazenda do Cutão</a>, ou Furnas de Caeté, foram documentadas as ruínas do <strong>Palácio do Barão da Estrela</strong> e de um <strong>paredão de pedra destinado a represar águas que seguiam por um túnel até um grande engenho de apuração de ouro</strong>. Na mesma região, dezenas de minas de ouro e a Cachoeira das Estrelas.',
        { sub: 'A descoberta em Portugal' },
        'A expedição descobriu, <strong>por documentos encontrados em museu de Portugal, que em 1719 chegaram ao Brasil duas Companhias de Cavalaria de Dragões Reais</strong>, força especializada ligada diretamente ao rei. <strong>Uma delas foi destacada para Morro Vermelho</strong>, onde já funcionavam três forças locais:',
        { lista: [
          '<strong>Companhia de Ordenança a Pé de Morro Vermelho</strong>',
          '<strong>Companhia de Ordenança a Pé dos Homens Pardos Libertos de Morro Vermelho</strong>',
          '<strong>Guardamoria de Terras e Águas de Morro Vermelho e Viracopos</strong>',
        ] },
        { nota: 'Este é o achado documental mais importante de toda esta página, e ele muda a página 07. Não é tradição oral: é documento em museu português, com data. E os nomes das três forças locais dizem muito sozinhos: havia uma companhia militar formada por homens pardos libertos e uma autoridade específica sobre terras e águas do arraial e de Viracopos. Localizar essa documentação é a prioridade da pesquisa sobre os <a href="os-dragoes-reais.html">Dragões Reais</a>.', titulo: 'A descoberta que muda a página 07' },
        { sub: 'Emprego e renda' },
        'Para o arquiteto e urbanista <strong>Reginaldo Pinheiro</strong>, um dos idealizadores da expedição, Morro Vermelho vive desde o fim do ciclo do ouro uma crise econômica que força os trabalhadores, sobretudo os mais jovens, a migrar em busca de trabalho.',
        { citacao: 'Durante encontros informais, percebemos que pequenas comunidades, como Lavras Novas, São Sebastião das Águas Claras (Macacos) e outras acharam soluções com o turismo, garantindo emprego e renda para a população.', autoria: 'Reginaldo Pinheiro · arquiteto e urbanista, idealizador da expedição' },
      ],
    },
    {
      id: 'internet-e-estrada', titulo: 'Internet e estrada · 2020 e 2021',
      blocos: [
        { sub: 'Linha de celular não chega tão cedo · 2020' },
        'Apesar de um candidato a prefeito ter anunciado em carro de som, durante a campanha, que o acesso a celular e internet estava chegando, o benefício ficou para depois.',
        'O Governo de Minas anunciou, em <strong>maio de 2020</strong>, os 305 distritos e povoados contemplados pelo programa <strong>Alô Minas!</strong>, que levaria internet móvel e 3G a comunidades sem acesso. Estavam no programa os distritos de <strong>Morro Vermelho, Rancho Novo e Antônio dos Santos</strong>, em Caeté.',
        'Em <strong>agosto de 2020</strong> o Estado publicou edital de chamamento público para as operadoras. Em setembro, <strong>nenhuma empresa apresentou proposta</strong>, a justificativa foi que as circunstâncias econômicas da pandemia eram desfavoráveis, e o projeto ficaria para “momento oportuno de cenário econômico mais estável”.',
        'O programa pretendia beneficiar cerca de 210 mil pessoas e ampliar a cobertura do Minas Comunica II, que em fevereiro de 2020 havia atingido 707 distritos mineiros e 1,17 milhão de pessoas. Em 2013 o Estado já havia lançado outro programa para levar internet a povoados num raio de 80 km de Belo Horizonte, incluindo Morro Vermelho.',
        { sub: 'Prefeitura promete melhorar estrada · 2021' },
        'A estrada de terra que liga a sede de Caeté ao distrito receberia <strong>aplicação de rejeito de minério de ferro</strong>, tecnologia desenvolvida pela Universidade Federal de Itajubá em projeto financiado pela Vale.',
        'O termo de compromisso que incluiu Caeté no programa <strong>Criando Caminhos</strong> foi assinado em <strong>24 de fevereiro de 2021</strong> pelo prefeito Lucas Coelho e pelo coordenador de Relações Institucionais da Vale, Daniel Argento. Segundo a prefeitura, as obras começariam em <strong>maio de 2021</strong> e acabariam com a poeira e o barro. O trecho tem cerca de <strong>sete quilômetros</strong>, entre o balneário de Juca Vieira e o povoado.',
        { lacuna: 'As duas perguntas mais práticas do portal inteiro: <strong>chegou internet móvel a Morro Vermelho?</strong> E <strong>a obra dos sete quilômetros de estrada foi executada?</strong> Ambas mudam a vida de quem mora e a viabilidade do que a página <a href="servicos.html">Serviços</a> informa a quem visita.' },
        { nota: 'Vale registrar o desconforto, porque ele é o assunto: as duas melhorias de infraestrutura noticiadas aqui vêm da mineração: o rejeito que pavimenta a estrada é da mesma indústria que ameaça o Gandarela e que já é proprietária do terreno onde estão as ruínas do Palácio do Barão. Este portal não resolve essa contradição e não a esconde. Ver <a href="parque-do-gandarela.html">Parque do Gandarela</a>.', titulo: 'De onde vem a melhoria' },
      ],
    },
  ],
  fontes: [
    'Reportagens do acervo de pesquisa do portal, apuradas no distrito entre 2020 e 2021, texto-fonte de toda esta página.',
    'Prefeitura Municipal de Caeté: situação do tombamento do Morro da Santa Cruz, da pendência da Praça da Matriz com o Iphan e da obra do programa Criando Caminhos.',
    'Iphan: pendência sobre a reforma de 2016 da Praça da Matriz, em área de bem tombado.',
    'Diário Oficial de Minas Gerais, dezembro de 1895: abaixo-assinado do povo de Morro Vermelho sobre a epidemia de varíola, assinado por Manoel Lopes de Magalhães Primo. Localizar a edição exata.',
    'Museu em Portugal onde a expedição localizou a documentação de 1719 sobre as Companhias de Cavalaria de Dragões Reais: a identificação exata do acervo é a informação que falta e a mais valiosa.',
    'Secretaria de Estado de Desenvolvimento Econômico de Minas Gerais: situação atual dos programas Alô Minas! e Minas Comunica II em Caeté.',
    'Escola Municipal Anézia Maria Pinheiro: situação da biblioteca comunitária.',
    'Reginaldo Pinheiro, arquiteto e urbanista: a consultar sobre o relatório completo da expedição do Resgate Colonial.',
  ],
  relacionadas: [
    { nome: 'Bens Históricos', href: 'bens-historicos.html', txt: 'O que está tombado, e o que não está.', olho: '22' },
    { nome: 'Epidemia da Bexiga', href: 'epidemia-da-bexiga.html', txt: '1895, e o documento que fecha a página.', olho: '11' },
    { nome: 'Os Dragões Reais', href: 'os-dragoes-reais.html', txt: 'A companhia de 1719 e as três forças locais.', olho: '07' },
    { nome: 'Serviços', href: 'servicos.html', txt: 'A estrada, do ponto de vista de quem vem.', olho: '26' },
  ],
};
