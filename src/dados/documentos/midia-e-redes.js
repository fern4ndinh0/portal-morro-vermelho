/* ==========================================================================
   MÍDIA E REDES
   O distrito hoje · 24
   --------------------------------------------------------------------------
   Um diretório de tudo o que já foi publicado sobre Morro Vermelho fora
   deste portal: reportagem de jornal, vídeo de televisão, documentário,
   mapa histórico, perfil de entidade.

   POR QUE ISTO É PÁGINA E NÃO RODAPÉ DE OUTRA: porque um acervo local
   raramente sabe o que já existe sobre si mesmo. Este levantamento é o
   inventário da presença do distrito na mídia — e é o ponto de partida de
   qualquer pesquisa futura.

   TRÊS DECISÕES EDITORIAIS AQUI

   1. URL SEM RÓTULO NÃO ENTRA. O acervo original tem dezenas de links
      soltos, do tipo "youtube.com/watch?v=Nzg3PMOeA9c" sem dizer o que é.
      Publicar isso é convidar o leitor a caçar. Onde o conteúdo não pôde
      ser identificado, o item entra na lista do que falta descrever — não
      no corpo como link anônimo.

   2. UM LINK QUEBRADO DO ORIGINAL FOI CORRIGIDO, e é a única correção
      silenciosa desta página: um endereço do YouTube aparecia duplicado
      dentro de si mesmo, concatenado com um parâmetro de rastreio do
      Facebook. Restou o endereço limpo. Isso é erro de colagem, não dado.

   3. PARÂMETROS DE RASTREIO (fbclid, sns, feature, t=) FORAM REMOVIDOS de
      todos os endereços. Eles não fazem parte do endereço: identificam quem
      clicou. Num acervo, são sujeira.
   ========================================================================== */

export default {
  slug: 'midia-e-redes',
  numero: '24',
  titulo: 'Mídia e Redes',
  olho: 'O distrito hoje · 24',
  tom: 'var(--grafite-600)',
  estado: 'Diretório · endereços a reconferir',
  resumo: 'O que já foi publicado sobre Morro Vermelho fora deste portal: reportagens do Estado de Minas sobre o banho de cachaça no Cristo e a Cavalhada premiada na Espanha, o documentário da Arquidiocese, o mapa de 1700 na Biblioteca Nacional, e as entidades do distrito.',
  resumoSeo: 'Reportagens, vídeos, documentários e mapas sobre Morro Vermelho, Caeté (MG), e os perfis das entidades do distrito.',
  secoes: [
    {
      id: 'por-que', titulo: 'Por que este inventário existe',
      blocos: [
        { abertura: 'Um lugar pequeno raramente sabe o que já se publicou sobre ele. Esta página é o inventário da presença de Morro Vermelho na imprensa, na televisão, no cinema e nos arquivos digitais — e é, na prática, o ponto de partida de qualquer pesquisa nova.' },
        { nota: 'Endereço de internet é a informação que envelhece mais rápido deste portal — mais rápido que telefone. Jornal reorganiza site, universidade troca de servidor, vídeo é removido. Por isso cada item abaixo vem com descrição suficiente para ser reencontrado por busca, mesmo que o endereço morra. Um link sem rótulo é um link perdido no primeiro redesenho.', titulo: 'Por que cada link vem descrito' },
      ],
    },
    {
      id: 'imprensa', titulo: 'Na imprensa',
      blocos: [
        'O <strong>Estado de Minas</strong> cobriu o distrito ao menos cinco vezes, em três assuntos:',
        { lista: [
          '<strong>“Homens dão banho de cachaça em imagem de Cristo em Caeté”</strong> — 23 de fevereiro de 2012. <a href="https://www.em.com.br/app/noticia/gerais/2012/02/23/interna_gerais,279497/homens-dao-banho-de-cachaca-em-imagem-de-cristo-em-caete.shtml">Ler</a>',
          '<strong>“Banho com cachaça na imagem de santo é documentado para entrar para história”</strong> — 14 de fevereiro de 2013. <a href="https://www.em.com.br/app/noticia/gerais/2013/02/14/interna_gerais,350322/banho-com-cachaca-na-imagem-de-santo-e-documentado-para-entrar-para-historia.shtml">Ler</a>',
          '<strong>“Ritos sagrados ganham proteção em Minas Gerais”</strong> — 3 de fevereiro de 2013. <a href="https://www.em.com.br/app/noticia/gerais/2013/02/03/interna_gerais,348057/ritos-sagrados-ganham-protecao-em-minas-gerais.shtml">Ler</a>',
          '<strong>“Minas encena Cavalhada de 300 anos na Grande BH”</strong> — 6 de setembro de 2011. <a href="https://www.em.com.br/app/noticia/gerais/2011/09/06/interna_gerais,249246/minas-encena-cavalhada-de-300-anos-na-grande-bh.shtml">Ler</a>',
          '<strong>“Manifestações culturais centenárias são premiadas na Europa”</strong> — 25 de dezembro de 2011, sobre a Cavalhada Mirim. <a href="https://www.em.com.br/app/noticia/gerais/2011/12/25/interna_gerais,269151/manifestacoes-culturais-centenarias-sao-premiadas-na-europa.shtml">Ler</a>',
          '<strong>“Minas é premiada na Espanha”</strong> — 10 de março de 2012, também sobre a Cavalhada Mirim. <a href="https://www.em.com.br/app/noticia/gerais/2012/03/10/interna_gerais,282630/minas-e-premiada-na-espanha.shtml">Ler</a>',
        ] },
        { nota: 'A sequência de datas conta uma história por si: em 2012 a lavagem do Cristo é notícia curiosa; em fevereiro de 2013 ela é documentada “para entrar para a história”; dias antes, em 3 de fevereiro de 2013, uma reportagem trata da proteção oficial de ritos sagrados em Minas. Em três matérias se vê uma prática local passar de exotismo a patrimônio reconhecido — e a <a href="cavalhada-de-nazareth.html">Cavalhada Mirim</a> ser premiada duas vezes na Europa no meio disso.', titulo: 'O que a cronologia das matérias mostra' },
        { lacuna: 'Falta o levantamento na <strong>Hemeroteca Digital da Biblioteca Nacional</strong>, que tem busca por texto em jornais desde o século 19. É quase certo que existam registros de Morro Vermelho anteriores a 2011 — sobre a epidemia de 1895, sobre a insígnia papal de 1932, sobre a Cavalhada. Nenhum consta neste inventário.' },
      ],
    },
    {
      id: 'audiovisual', titulo: 'Em vídeo',
      blocos: [
        { lista: [
          '<strong><em>Água Benta, Fé Ardente; Água Ardente, Fé Benta</em></strong> (1999) — documentário de curta-metragem de João Dornelas e Armando Mendz sobre a lavagem do Cristo com cachaça, premiado no Festival do Rio. <a href="https://vimeo.com/44002248">Assistir</a>',
          '<strong><em>Senhora do Morro Vermelho</em></strong> — documentário da Arquidiocese de Belo Horizonte. <a href="https://www.youtube.com/watch?v=NT7_uMKPl24">Assistir</a>',
          '<strong>Festa e Cavalhada de Nossa Senhora de Nazareth</strong> — registros em vídeo da festa de 7 e 8 de setembro. <a href="https://www.youtube.com/watch?v=XX5OAw5hXHs">Vídeo 1</a> · <a href="https://www.youtube.com/watch?v=VgHC3B8Uz4E">Vídeo 2</a> · <a href="https://www.youtube.com/watch?v=O-QagLma_sA">Vídeo 3</a> · <a href="https://www.youtube.com/watch?v=WYfGplv-Tg8">Vídeo 4</a> · <a href="https://www.youtube.com/watch?v=_GXniaI-FJg">Vídeo 5</a> · <a href="https://www.youtube.com/watch?v=k7LU86BJPr0">Vídeo 6</a>',
          '<strong>Festa de Nossa Senhora do Rosário</strong>. <a href="https://www.youtube.com/watch?v=Y1UTkJM7aVg">Assistir</a>',
          '<strong>Senhor dos Passos</strong> — registro do ritual. <a href="https://www.youtube.com/watch?v=VqtuvuV-uvE">Assistir</a>',
          '<strong>Sociedade Musical Santa Cecília</strong> — apresentações da corporação musical. <a href="https://www.youtube.com/watch?v=UeRALRkbL0Q">Vídeo 1</a> · <a href="https://www.youtube.com/watch?v=4Kb1WU1VH_Y">Vídeo 2</a>',
          '<strong>Festa do Aluá</strong>. <a href="https://www.youtube.com/watch?v=PNYsgeVzlJo">Assistir</a>',
          '<strong>Reportagem na Globo</strong>. <a href="https://globoplay.globo.com/v/4911598/">Assistir no Globoplay</a>',
          '<strong>Jeep Clube de Morro Vermelho</strong>. <a href="https://www.youtube.com/watch?v=uc5B2SxR8Cw">Assistir</a>',
          '<strong>Cachoeira do distrito</strong> — registro em vídeo. <a href="https://www.youtube.com/watch?v=3Al2l_Mb8Dk">Assistir</a>',
        ] },
        { lacuna: 'Quatro vídeos de televisão registrados no acervo original <strong>não puderam ser descritos</strong>: os endereços estão anotados sem indicação de emissora, programa, data ou assunto. Eles não entram na lista acima como links anônimos — precisam ser assistidos e identificados primeiro. Um link sem rótulo não é referência, é adivinhação.' },
      ],
    },
    {
      id: 'pesquisa-e-arquivos', titulo: 'Pesquisa, arquivos e mapas',
      blocos: [
        { lista: [
          '<strong>Mapa de Morro Vermelho, c. 1700</strong> — na World Digital Library, com acervo da Biblioteca Nacional. <a href="http://www.wdl.org/pt/item/954/">Ver o mapa</a>',
          '<strong>Mapa atual</strong> — localização e coordenadas do distrito. <a href="http://mapasamerica.dices.net/brasil/portugues/mapa.php?nombre=Morro-Vermelho&id=15931">Ver</a>',
          '<strong><em>O caráter único de Morro Vermelho na Região Metropolitana de Belo Horizonte</em></strong> — estudo de arquitetura, versão do laboratório QUAPÁ da FAU-USP. <a href="http://quapa.fau.usp.br/wordpress/wp-content/uploads/2016/03/O-car%C3%A1ter-%C3%BAnico-de-Morro-Vermelho-na-RMBH.pdf">Ler</a>',
          '<strong><em>Trezentos anos depois…</em></strong> — sobre a Guerra dos Emboabas, no projeto Impressões Rebeldes da Universidade Federal Fluminense. <a href="http://www.historia.uff.br/impressoesrebeldes/wp-content/uploads/2017/02/Trezentos-anos-depois...pdf">Ler</a>',
          '<strong>Capão da Traição</strong> — verbete sobre o episódio da Guerra dos Emboabas. <a href="http://www.infoescola.com/historia-do-brasil/capao-da-traicao/">Ler</a>',
          '<strong>Restauração de bens de Morro Vermelho</strong> — registro de trabalho do Grupo Oficina de Restauro. <a href="http://www.grupooficinaderestauro.com.br/restauracoes/morro-vermelho.html">Ver</a>',
          '<strong>Geologia e mineração no Brasil, 1494–1803</strong> — contexto do ciclo do ouro. <a href="http://www.geologiadobrasil.com.br/1494_1803.html">Ler</a>',
        ] },
        { nota: 'O mapa de 1700 na World Digital Library é a peça mais valiosa desta seção e merece página própria. Um mapa contemporâneo à fundação do povoado permite conferir grafia do nome, posição do arraial, caminhos e topônimos vizinhos — inclusive a questão de <a href="arraial-de-viracopos.html">Viracopos</a>. É fonte primária cartográfica, e está aberta.', titulo: 'O mapa que precisa ser estudado' },
      ],
    },
    {
      id: 'ambiente', titulo: 'Meio ambiente, cachoeiras e trilhas',
      blocos: [
        { lista: [
          '<strong>Proposta de criação do Parque Nacional da Serra do Gandarela</strong> — ICMBio. <a href="http://www.icmbio.gov.br/portal/images/stories/o-que-fazemos/PARQUE_GANDARELA_proposta_ICMBio.pdf">Ler a proposta</a> · <a href="http://www.icmbio.gov.br/portal/images/stories/o-que-fazemos/folder_consultas_PNGandarela_2.pdf">Folder das consultas públicas</a>',
          '<strong>Plano da bacia do Ribeirão Gaia — UTE Caeté / Sabará / Morro Vermelho</strong>, Comitê da Bacia Hidrográfica do Rio das Velhas. <a href="http://cbhvelhas.org.br/wp-content/uploads/2017/10/Volume-6-Tomo-II-UTE-Caet%C3%A9-Sabar%C3%A1-Morro-Vermelho.pdf">Ler o volume</a>',
          '<strong>Visita técnica à bacia do Ribeirão Gaia</strong>, sobre abastecimento de água em Caeté e Sabará. <a href="http://cbhvelhas.org.br/noticias/visita-tecnica-e-realizada-na-bacia-do-ribeirao-gaia-nos-municipios-de-caete-e-sabara/">Ler</a>',
          '<strong>Trilhas de Morro Vermelho</strong> no Wikiloc, com percursos registrados por praticantes. <a href="http://pt.wikiloc.com/trilhas/outdoor/brazil/minas-gerais/morro-vermelho">Ver</a>',
          '<strong>Trilha em Caeté</strong> — relato de percurso. <a href="https://aventure-se.com/2014/09/04/trilha-em-caete/">Ler</a>',
          '<strong>Rapel na região</strong> — Liga Rapel. <a href="http://ligarapel.com.br/canion-do-meio-catas-altas-mg-2-2-2/">Ver</a>',
        ] },
        'O volume da bacia do Ribeirão Gaia é o documento técnico mais substancial já produzido sobre a água do distrito, e é peça central de qualquer discussão sobre <a href="parque-do-gandarela.html">o Gandarela</a> e sobre abastecimento.',
      ],
    },
    {
      id: 'gastronomia-reconhecida', titulo: 'Reconhecimento gastronômico',
      blocos: [
        { lista: [
          '<strong>Queijão de Morro Vermelho</strong> na <strong>Arca do Gosto</strong> do Slow Food — catálogo internacional de alimentos tradicionais em risco de desaparecer. <a href="https://www.slowfoodbrasil.com/arca-do-gosto/produtos-do-brasil/1125-queijao-de-morro-vermelho">Ver o registro</a>',
          '<strong>Aluá</strong> na Arca do Gosto do Slow Food. <a href="https://www.slowfoodbrasil.com/arca-do-gosto/produtos-do-brasil/1134-alua">Ver o registro</a>',
          '<strong>Receita do aluá</strong> — Sabores de Minas. <a href="https://www.uai.com.br/app/noticia/saboresdeminas/receitas/2016/08/12/receita-saboresdeminas,4156/alua.shtml">Ler</a>',
        ] },
        'Dois produtos do distrito num catálogo internacional de salvaguarda alimentar é um reconhecimento que poucos municípios inteiros têm. Ambos, o queijão e o aluá, estão também no inventário municipal de patrimônio imaterial — ver <a href="bens-historicos.html">Bens Históricos</a>.',
      ],
    },
    {
      id: 'perfis', titulo: 'Perfis e páginas do distrito',
      blocos: [
        { lista: [
          '<strong>@morrovermelhomg</strong> no Instagram — notícias diárias, atrações e novidades do povoado.',
          '<strong>Paróquia de Nossa Senhora de Nazareth</strong> — <a href="https://www.facebook.com/paroquianossasenhoradenazareth/">página no Facebook</a> e <a href="http://arquivo.arquidiocesebh.org.br/catalogo/paroquia.php?id=196">registro no arquivo da Arquidiocese de Belo Horizonte</a>',
          '<strong>Escola Municipal Anézia Maria Pinheiro</strong> — <a href="http://emaneziamariapinheiro.blogspot.com.br/">blog da escola</a>',
          '<strong>Pousada da Bandeira</strong> — <a href="http://www.pousadadabandeira.com.br/">site</a>',
          '<strong>Restaurante Alpenrose</strong> — <a href="https://www.facebook.com/RestauranteAlpenrose">página no Facebook</a>',
          '<strong>Jeep Clube de Morro Vermelho</strong> — <a href="https://www.facebook.com/1JCMV/">página no Facebook</a>',
          '<strong>Imagens antigas de Morro Vermelho / MG</strong> — grupo no Facebook onde moradores publicam fotografia de família. <strong>É a maior reserva de acervo fotográfico do distrito hoje</strong>, e não está catalogada em lugar nenhum.',
          '<strong>Sociedade Musical Santa Cecília de Morro Vermelho</strong> — página no Facebook.',
        ] },
        { nota: 'O grupo “Imagens antigas de Morro Vermelho / MG” é o item mais importante desta lista e o mais frágil. Ali há fotografia de família publicada por quem a guarda — exatamente o material que este acervo procura, e exatamente o material que desaparece quando uma plataforma fecha, muda de política ou perde o administrador. Catalogar aquele grupo, com autorização de cada pessoa que postou, é a tarefa de acervo mais urgente do portal. Ver <a href="galeria-de-fotos.html">Galeria de Fotos</a>.', titulo: 'O acervo que está numa rede social' },
        { lacuna: 'Faltam nesta lista os endereços diretos dos perfis do Facebook do grupo de imagens antigas e da Sociedade Musical Santa Cecília — o acervo original registra o nome, não o endereço. E falta confirmar quais destes perfis, páginas e sites continuam ativos.' },
      ],
    },
  ],
  fontes: [
    'Acervo de pesquisa do portal — levantamento original de endereços, aqui descrito e reorganizado.',
    'Hemeroteca Digital da Biblioteca Nacional — o levantamento que falta, com busca por texto em jornais desde o século 19.',
    'World Digital Library e Biblioteca Nacional — o mapa de c. 1700, que merece estudo próprio.',
    'Arquivo da Arquidiocese de Belo Horizonte — registros da paróquia e o documentário Senhora do Morro Vermelho.',
    'Comitê da Bacia Hidrográfica do Rio das Velhas (CBH Velhas) — documentação técnica sobre a água do distrito.',
    'Slow Food Brasil, Arca do Gosto — registros do queijão e do aluá.',
    'Administradores do grupo “Imagens antigas de Morro Vermelho / MG” — a consultar sobre catalogação e autorização de uso do acervo fotográfico.',
  ],
  relacionadas: [
    { nome: 'Cultura Popular', href: 'cultura-popular.html', txt: 'A bibliografia acadêmica, com 25 estudos.', olho: '21' },
    { nome: 'Galeria de Fotos', href: 'galeria-de-fotos.html', txt: 'O acervo fotográfico, e o que ele exige.', olho: '29' },
    { nome: 'Notícias da Terra', href: 'noticias-da-terra.html', txt: 'O jornalismo feito no próprio distrito.', olho: '23' },
    { nome: 'Como este portal foi feito', href: 'sobre-o-portal.html', txt: 'De onde vem tudo isto.', olho: '00' },
  ],
};
