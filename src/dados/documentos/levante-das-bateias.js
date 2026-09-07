/* ==========================================================================
   LEVANTE DAS BATEIAS
   Nossa História · 10
   --------------------------------------------------------------------------
   REGRA EDITORIAL: nenhum fato sobre Morro Vermelho foi inventado.

   Atenção especial nesta página: "Levante das Bateias" é o nome pelo qual o
   episódio é conhecido no distrito. Não foi possível, até aqui, vinculá-lo
   com segurança a um evento já nomeado assim na historiografia das Minas —
   o que NÃO significa que não tenha ocorrido, e sim que a documentação
   local ainda não foi levantada. É exatamente o tipo de episódio que só
   existe em arquivo de cartório e em memória oral até alguém ir buscar.
   ========================================================================== */

export default {
  slug: 'levante-das-bateias',
  numero: '10',
  titulo: 'Levante das Bateias',
  olho: 'Nossa História · 10',
  tom: 'var(--terra-600)',
  estado: 'A pesquisar · episódio a documentar',
  resumo: 'A dura luta contra os impostos exorbitantes. A bateia era o instrumento de quem apurava ouro com as próprias mãos, e virou o nome de uma revolta.',
  resumoSeo: 'O Levante das Bateias em Morro Vermelho, distrito de Caeté (MG): a revolta contra a carga fiscal colonial e o que falta documentar sobre ela.',
  secoes: [
    {
      id: 'a-carga', titulo: 'A carga que se cobrava',
      blocos: [
        { abertura: 'Nas Minas do século XVIII, o imposto não era um percentual discreto no fim do ano. Era uma <strong>presença física</strong>: postos no caminho, tropa na porta, e uma engenharia de cobrança que mudou de forma tantas vezes que cada mudança virou motivo de revolta.' },
        'A Coroa tentou de tudo para arrecadar o quinto: cobrar por bateia, por escravo, por cabeça de minerador, nas casas de fundição, por quota fixa da capitania. Nenhum método funcionou por muito tempo, e cada um deles gerou atrito específico com um grupo específico.',
        { lista: [
          '<strong>Cobrança por bateia:</strong> taxava-se o instrumento de trabalho, não o resultado. Quem tirava pouco pagava o mesmo que quem tirava muito: o método que mais pesava sobre o minerador pequeno.',
          '<strong>Capitação:</strong> imposto por pessoa escravizada empregada na lavra, independentemente do que ela produzisse.',
          '<strong>Casas de fundição:</strong> obrigavam a levar todo o ouro para ser fundido e quintado num ponto oficial. A imposição delas está na origem de mais de um motim.',
          '<strong>Derrama:</strong> a cobrança forçada da diferença quando a capitania não atingia a quota anual. É ela que assombra o fim do século e chega até a Inconfidência.',
        ] },
        { nota: 'Tudo acima é documentado para as Minas coloniais como região, e a revolta fiscal é um traço estrutural da capitania, não um acidente. Nada disso, por si só, é ainda uma afirmação sobre o levante ocorrido aqui.', titulo: 'O que é contexto e o que é fato local' },
      ],
    },
    {
      id: 'o-levante', titulo: 'O levante daqui',
      blocos: [
        'A memória do distrito guarda um episódio de resistência à cobrança sob o nome de <strong>Levante das Bateias</strong>. O nome é preciso demais para ser genérico: quem o cunhou sabia que o alvo da revolta era um método de cobrança específico, aquele que taxava o instrumento na mão do trabalhador.',
        { lacuna: 'As perguntas que esta página precisa responder: <strong>quando ocorreu o levante, contra qual cobrança exatamente, quem o liderou, quantos participaram e como terminou?</strong> Houve repressão? Houve processo? Existem nomes, dos revoltosos e de quem os julgou?' },
        'Um episódio assim raramente desaparece sem deixar papel. Motins na região das minas geravam devassa, e devassa gera lista de nomes, depoimentos e sentenças. Se o levante existiu na escala que a memória local sugere, há documento em algum arquivo.',
        { nota: 'Vale conferir, logo no início da pesquisa, se o "Levante das Bateias" é um episódio próprio do distrito ou o nome local de um movimento maior da capitania. As duas respostas são boas: a primeira dá a Morro Vermelho um episódio inédito; a segunda mostra o distrito participando de um movimento regional, e mostra como a memória local batiza os fatos com as próprias palavras, o que é um dado sobre este lugar.', titulo: 'Uma hipótese a testar cedo' },
      ],
    },
    {
      id: 'o-instrumento', titulo: 'A bateia como símbolo',
      blocos: [
        'Vale registrar por que o nome pegou. A bateia é um prato de madeira ou metal, girado na água com as mãos, com que se separa o ouro do cascalho. É o instrumento do trabalhador individual, não do dono de lavra, não do contratador, não da Coroa.',
        'Uma revolta que leva o nome do instrumento de trabalho está dizendo de quem ela foi. É a mesma lógica que faz este distrito escolher "Amor à Liberdade" em vez do ciclo do ouro: o centro da história são as pessoas, não o metal.',
      ],
    },
  ],
  fontes: [
    'Arquivo Público Mineiro: devassas, autos de querela e processos criminais do termo de Caeté; documentação fiscal da capitania.',
    'Arquivo Histórico Ultramarino / Projeto Resgate: correspondência dos governadores relatando motins e resistência à cobrança.',
    'Cartório de Caeté: livros de notas e registros que citem os envolvidos.',
    'Revista do Arquivo Público Mineiro: transcrições de documentação fiscal e judicial setecentista.',
    'Bibliografia sobre revoltas fiscais nas Minas: para verificar se o episódio já foi estudado sob outro nome.',
    'Memória oral, prioridade máxima: é a única fonte que hoje guarda o nome do episódio.',
  ],
  relacionadas: [
    { nome: 'Retiro dos Capetas', href: 'retiro-dos-capetas.html', txt: 'O posto onde a cobrança acontecia.', olho: '06' },
    { nome: 'Os Dragões Reais', href: 'os-dragoes-reais.html', txt: 'A tropa encarregada de conter revoltas como esta.', olho: '07' },
    { nome: 'Fazenda do Cutão', href: 'fazenda-do-cutao.html', txt: 'Onde a bateia era usada de verdade.', olho: '05' },
  ],
};
