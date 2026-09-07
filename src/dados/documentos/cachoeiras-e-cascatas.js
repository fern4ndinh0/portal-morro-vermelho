/* ==========================================================================
   CACHOEIRAS E CASCATAS
   Atrações · 16
   --------------------------------------------------------------------------
   ATENÇÃO — ESTA É A PÁGINA DE MAIOR RISCO DE TODO O PORTAL.

   As outras arriscam publicar um erro histórico. Esta arrisca mandar alguém
   para um lugar perigoso, ou para dentro da propriedade de um terceiro.

   Por isso ela tem uma regra própria, mais dura que a do resto do projeto:
   nenhuma cachoeira é publicada com localização sem que (1) o acesso esteja
   verificado em campo, (2) a autorização do proprietário esteja registrada e
   (3) as condições de segurança estejam descritas. Enquanto os três não
   existirem, a página fala do conjunto e não indica ponto.
   ========================================================================== */

export default {
  slug: 'cachoeiras-e-cascatas',
  numero: '16',
  titulo: 'Cachoeiras e Cascatas',
  olho: 'Atrações · 16',
  tom: 'var(--serra-600)',
  estado: 'A levantar · publicação condicionada a acesso e segurança',
  resumo: 'Lazer e belezas naturais. A serra que guarda água em rocha devolve essa água em queda — e o que a comunidade sabe sobre esses lugares ainda não está escrito em lugar nenhum.',
  resumoSeo: 'Cachoeiras e cascatas de Morro Vermelho, distrito de Caeté (MG): o levantamento em curso e as regras de publicação responsável.',
  secoes: [
    {
      id: 'por-que-existem', titulo: 'Por que há tantas',
      blocos: [
        { abertura: 'A abundância de queda d’água na região não é acaso geográfico: é <strong>consequência direta da geologia</strong>. As formações ferruginosas do Quadrilátero armazenam água e a liberam devagar, alimentando nascentes que correm o ano inteiro.' },
        'É a mesma característica que faz da Serra do Gandarela um caso de conservação nacional. Vista do distrito, ela se traduz em algo bem mais concreto: córregos perenes, poços e quedas que os moradores conhecem pelo nome, e que quase nunca aparecem em mapa.',
        { nota: 'Esse conhecimento — quais são, como se chamam, por onde se chega, em que época encher, onde é fundo — existe hoje inteiro na memória dos moradores e em nenhum documento. É exatamente o tipo de acervo que este portal existe para registrar.', titulo: 'O que se sabe e não está escrito' },
      ],
    },
    {
      id: 'a-regra', titulo: 'A regra desta página',
      blocos: [
        'Publicar a localização de uma cachoeira é um ato com consequência física. Portal de turismo que lista queda d’água sem verificar acesso e segurança produz três problemas previsíveis, e todos já aconteceram em outros lugares:',
        { lista: [
          '<strong>Invasão de propriedade</strong> — o visitante segue a indicação e atravessa a terra de alguém que nunca foi consultado. O primeiro prejudicado é o morador; o segundo é o próximo visitante, que encontra a porteira fechada.',
          '<strong>Acidente</strong> — poço mais fundo do que parece, laje escorregadia, cabeça d’água em dia de chuva na cabeceira. Quem indicou o lugar sem descrever o risco tem responsabilidade nisso.',
          '<strong>Degradação</strong> — lixo, trilha alargada, fogueira, margem pisoteada. Volume de visita sem estrutura destrói em dois anos o que levou séculos para se formar.',
        ] },
        { nota: 'Nenhuma cachoeira será publicada com localização neste portal enquanto não houver: acesso verificado em campo, autorização registrada do proprietário quando o acesso for particular, e descrição honesta das condições de segurança e da época adequada. Onde faltar um dos três, o portal cita o conjunto e não indica o ponto.', titulo: 'A regra, por extenso' },
      ],
    },
    {
      id: 'o-levantamento', titulo: 'O levantamento',
      blocos: [
        'O trabalho tem uma ordem que economiza esforço e evita constrangimento: perguntar antes de ir, e ir antes de publicar.',
        { lista: [
          '<strong>Listar com moradores</strong> — nomes populares, localização aproximada, quem é o dono da terra por onde se passa.',
          '<strong>Falar com os proprietários</strong> — antes de qualquer visita. É a etapa que costuma ser pulada, e é a que determina se o resto acontece.',
          '<strong>Ir em campo</strong> — coordenada GPS, fotografia datada, tempo real de caminhada, grau de dificuldade, e o que há de perigoso.',
          '<strong>Registrar a época</strong> — cheia e seca mudam completamente o que a pessoa vai encontrar, e a época errada é motivo de frustração e de risco.',
          '<strong>Só então publicar</strong> — com tudo isso junto, e com a autorização declarada na própria página.',
        ] },
        { lacuna: 'O que falta, em uma frase: <strong>a lista.</strong> Quantas quedas há no território do distrito, como se chamam, de quem é a terra e quais delas podem receber visitante com segurança e com autorização. Nada nesta página avança antes disso.' },
        { citacao: 'Espaço reservado para a primeira fala gravada sobre as cachoeiras do distrito — de um morador, com nome, idade e data de entrevista.', autoria: 'Depoimento a coletar · Memória oral do distrito' },
        { figura: 'Queda d’água do distrito, com autorização do proprietário do acesso.', arquivo: 'figura-cachoeiras.jpg', legenda: '<strong>Cachoeira em degraus no distrito.</strong> A identificação exata da queda, a época do ano e a autorização do proprietário do acesso continuam pendentes — e este verbete não publica localização sem as três.', alt: 'Cachoeira larga descendo em vários degraus de rocha, emoldurada por vegetação.', credito: 'Acervo de pesquisa Geraldo Lopes e Viviane Pinheiro · autoria a confirmar' },
      ],
    },
  ],
  fontes: [
    'Moradores e proprietários rurais — a fonte principal, e a única que hoje sabe os nomes e os caminhos.',
    'ICMBio — para quedas situadas dentro do Parque Nacional da Serra do Gandarela ou na zona de amortecimento, onde valem regras próprias.',
    'IGAM e Agência Nacional de Águas — cursos d’água, bacias e qualidade da água.',
    'Prefeitura de Caeté — Secretaria de Turismo e de Meio Ambiente: cadastro de atrativos e eventuais estudos já feitos.',
    'Corpo de Bombeiros — histórico de ocorrências, que informa a descrição de risco de cada ponto.',
    'Levantamento de campo com GPS — coordenada, tempo de acesso e condições reais.',
  ],
  relacionadas: [
    { nome: 'Parque do Gandarela', href: 'parque-do-gandarela.html', txt: 'A serra que guarda a água que cai aqui.', olho: '15' },
    { nome: 'Trilhas Ecológicas', href: 'trilhas-ecologicas.html', txt: 'Os caminhos que levam até elas.', olho: '20' },
    { nome: 'Como chegar', href: 'index.html#visite', txt: 'Rota e informação prática.', olho: 'Visitar' },
  ],
};
