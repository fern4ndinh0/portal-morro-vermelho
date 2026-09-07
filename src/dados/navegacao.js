/* ==========================================================================
   NAVEGAÇÃO — ponto único de verdade do menu do portal inteiro.

   Editar aqui muda, de uma vez, o mega menu, o menu mobile, o menu do
   <noscript> e o mapa do site no rodapé — em TODAS as páginas.

   A ESPINHA DO PORTAL
   Os verbetes seguem a numeração do índice do projeto (02 a 29, mais o 00,
   que é a procedência do acervo). O número
   não é enfeite: é a ordem em que a história do distrito foi organizada por
   quem a conhece, e é a mesma ordem de DOCUMENTOS em documentos/index.js,
   que governa o "capítulo anterior / próximo" no pé de cada página.

   REGRA QUE GOVERNA ESTE ARQUIVO
   'href' ausente = a página ainda não existe = o item NÃO vira link.
   Vira um <span> com a etiqueta "em breve", visível e não clicável.
   Zero link morto, zero href="#", zero 404 acidental.

   Campos aceitos por item:
     nome   texto do link                                    (obrigatório)
     href   destino. Sem ele, o item vira "em breve"
     desc   linha de apoio, só aparece no mega menu
     secao  id de uma seção da home; liga o aria-current que acompanha a
            rolagem (ver useSecaoAtiva em src/ganchos/rolagem.js)
     zap    mensagem de WhatsApp; o href é montado por src/dados/contato.js
   ========================================================================== */

/* --- Menu principal (desktop) --------------------------------------------
   Organizado por INTENÇÃO do visitante, não pela numeração. Quem chega quer
   "a história", "o que ver" ou "quando vir" — e não percorrer trinta itens
   em ordem. Mas dentro de cada intenção, TODAS as páginas do tópico estão
   aqui — não há mais um recorte de sete com um link de escape para "ver
   todas": a home não tem mais uma seção de índice para escapar para.

   Isso só funciona porque o painel (`.mega` em chassi.css) tem
   `overflow-y: auto` e `max-height: calc(100vh - 6rem)`: um painel que
   cresce demais rola por dentro em vez de transbordar a tela.

   O rodapé (MENU_RODAPE) continua com o mesmo inventário completo, em
   ordem numérica — os dois não precisam concordar item a item, só os dois
   precisam, juntos, cobrir as trinta páginas.                          */

export const MENU = [
  {
    rotulo: 'Nossa História',
    colunas: [
      {
        titulo: 'A formação',
        itens: [
          { nome: 'História de Resistência', href: 'historia-de-resistencia.html', desc: 'Um povo unido constrói o próprio destino' },
          { nome: 'A Busca do Ouro', href: 'a-busca-do-ouro.html', desc: 'Bandeirantes levam riqueza e deixam miséria' },
          { nome: 'Arraial de Viracopos', href: 'arraial-de-viracopos.html', desc: 'Entreposto comercial e rota para a Serra da Piedade' },
          { nome: 'Fazenda do Cutão', href: 'fazenda-do-cutao.html', desc: 'Engenhos de apuração do ouro' },
          { nome: 'Retiro dos Capetas', href: 'retiro-dos-capetas.html', desc: 'Posto fiscal da Coroa Portuguesa' },
          { nome: 'Os Dragões Reais', href: 'os-dragoes-reais.html', desc: 'Força militar para arrecadar e conter rebeliões' },
          { nome: 'Estrada Real', href: 'estrada-real.html', desc: 'Caminho de bandeirantes, fiscais e tropeiros' },
        ],
      },
      {
        titulo: 'Poder, revolta e gente',
        itens: [
          { nome: 'Guerra dos Emboabas', href: 'guerra-dos-emboabas.html', desc: 'A primeira eleição direta das Américas' },
          { nome: 'Levante das Bateias', href: 'levante-das-bateias.html', desc: 'A dura luta contra os impostos exorbitantes' },
          { nome: 'Epidemia da Bexiga', href: 'epidemia-da-bexiga.html', desc: 'Moradores abandonam o povoado' },
          { nome: 'Família de Padres', href: 'familia-de-padres.html', desc: 'Povoado tem um comendador da Santa Sé' },
          { nome: 'Diretas-Já', href: 'diretas-ja.html', desc: 'Primeiro grito contra a ditadura militar' },
          { nome: 'Nossa Gente, Nossa História', href: 'nossa-gente.html', desc: 'Quem fez o povoado, com data de batismo' },
        ],
      },
    ],
  },

  { rotulo: 'Resistência', href: 'historia-de-resistencia.html' },

  {
    rotulo: 'Atrações',
    colunas: [
      {
        titulo: 'Ver e visitar',
        itens: [
          { nome: 'Atrações', href: 'atracoes.html', desc: 'Monumentos culturais protegidos' },
          { nome: 'Serviços', href: 'servicos.html', desc: 'Como chegar, onde comer, onde ficar, o que comprar' },
          { nome: 'Como chegar', href: 'index.html#visite', desc: 'Mapa e rota', secao: 'visite' },
        ],
      },
      {
        titulo: 'Natureza',
        itens: [
          { nome: 'Parque do Gandarela', href: 'parque-do-gandarela.html', desc: 'Matas e mananciais ainda preservados' },
          { nome: 'Cachoeiras e Cascatas', href: 'cachoeiras-e-cascatas.html', desc: 'Lazer e belezas naturais' },
          { nome: 'Trilhas Ecológicas', href: 'trilhas-ecologicas.html', desc: 'Caminhos de esportes e lazer' },
        ],
      },
      {
        titulo: 'Museu Digital',
        itens: [
          { nome: 'Acervo', href: 'index.html#acervo', desc: 'Documentos, fotografias e depoimentos digitalizados', secao: 'acervo' },
          { nome: 'Antes e depois', href: 'index.html#antes-depois', desc: 'A mesma esquina, com um século de diferença', secao: 'antes-depois' },
          { nome: 'Galeria de Fotos', href: 'galeria-de-fotos.html', desc: 'O acervo fotográfico, e o que ele exige' },
          { nome: 'Mídia e Redes', href: 'midia-e-redes.html', desc: 'Onde acompanhar o distrito' },
          { nome: 'Notícias da Terra', href: 'noticias-da-terra.html', desc: 'O que ameaça o patrimônio hoje' },
          { nome: 'Cultura Popular', href: 'cultura-popular.html', desc: 'Vinte e cinco estudos acadêmicos sobre o distrito' },
          { nome: 'Bens Históricos', href: 'bens-historicos.html', desc: 'Tombados desde 1950, e sem verba desde então' },
          { nome: 'Como este portal foi feito', href: 'sobre-o-portal.html', desc: 'A procedência do acervo' },
        ],
      },
    ],
  },

  {
    rotulo: 'Festas e Tradições',
    colunas: [
      {
        titulo: 'O calendário',
        itens: [
          { nome: 'Festas e Tradições', href: 'festas-e-tradicoes.html', desc: 'Patrimônio imaterial conservado' },
          { nome: 'Cavalhada de Nossa Senhora de Nazareth', href: 'cavalhada-de-nazareth.html', desc: 'Festa preservada desde 1704' },
          { nome: 'Outras Coisas', href: 'outras-coisas.html', desc: 'O Te Deum, e a gaveta declarada do acervo' },
        ],
      },
      {
        titulo: 'Saberes',
        itens: [
          { nome: 'Artesanato, Gastronomia e Música', href: 'artesanato-gastronomia-musica.html', desc: 'Tradições de pai para filho' },
          { nome: 'Sociedade Musical Santa Cecília', href: 'sociedade-musical-santa-cecilia.html', desc: 'A banda do distrito' },
          { nome: 'Estórias, Casos e Lendas', href: 'estorias-casos-e-lendas.html', desc: 'Trezentos anos de literatura oral' },
        ],
      },
    ],
  },

  { rotulo: 'Colabore', href: 'index.html#colabore', secao: 'colabore' },
];

/* --- Mapa do site (rodapé) + origem do menu mobile ------------------------
   Aqui, ao contrário do mega menu, vale a ordem NUMÉRICA do índice: quem
   desce até o rodapé quer o inventário completo, e o inventário tem uma
   ordem canônica. Os cinco primeiros grupos alimentam também o drawer;
   "Participar" fecha a tela.                                              */

export const MENU_RODAPE = [
  {
    titulo: 'Nossa História',
    itens: [
      { nome: '02 · História de Resistência', href: 'historia-de-resistencia.html' },
      { nome: '03 · A Busca do Ouro', href: 'a-busca-do-ouro.html' },
      { nome: '04 · Arraial de Viracopos', href: 'arraial-de-viracopos.html' },
      { nome: '05 · Fazenda do Cutão', href: 'fazenda-do-cutao.html' },
      { nome: '06 · Retiro dos Capetas', href: 'retiro-dos-capetas.html' },
      { nome: '07 · Os Dragões Reais', href: 'os-dragoes-reais.html' },
      { nome: '08 · Estrada Real', href: 'estrada-real.html' },
    ],
  },
  {
    titulo: 'Luta e memória',
    itens: [
      { nome: '09 · Guerra dos Emboabas', href: 'guerra-dos-emboabas.html' },
      { nome: '10 · Levante das Bateias', href: 'levante-das-bateias.html' },
      { nome: '11 · Epidemia da Bexiga', href: 'epidemia-da-bexiga.html' },
      { nome: '12 · Família de Padres', href: 'familia-de-padres.html' },
      { nome: '13 · Diretas-Já', href: 'diretas-ja.html' },
    ],
  },
  {
    titulo: 'Atrações',
    itens: [
      { nome: '14 · Atrações', href: 'atracoes.html' },
      { nome: '15 · Parque do Gandarela', href: 'parque-do-gandarela.html' },
      { nome: '16 · Cachoeiras e Cascatas', href: 'cachoeiras-e-cascatas.html' },
      { nome: '20 · Trilhas Ecológicas', href: 'trilhas-ecologicas.html' },
      { nome: '26 · Serviços', href: 'servicos.html' },
      { nome: 'Como chegar', href: 'index.html#visite', secao: 'visite' },
    ],
  },
  {
    titulo: 'Festas e Tradições',
    itens: [
      { nome: '17 · Festas e Tradições', href: 'festas-e-tradicoes.html' },
      { nome: '18 · Cavalhada de Nazareth', href: 'cavalhada-de-nazareth.html' },
      { nome: '19 · Artesanato, Gastronomia e Música', href: 'artesanato-gastronomia-musica.html' },
      { nome: 'Sociedade Musical Santa Cecília', href: 'sociedade-musical-santa-cecilia.html' },
      { nome: '28 · Outras Coisas', href: 'outras-coisas.html' },
    ],
  },
  {
    titulo: 'Cultura e patrimônio',
    itens: [
      { nome: '21 · Cultura Popular', href: 'cultura-popular.html' },
      { nome: '22 · Bens Históricos', href: 'bens-historicos.html' },
      { nome: '25 · Estórias, Casos e Lendas', href: 'estorias-casos-e-lendas.html' },
      { nome: '27 · Nossa Gente, Nossa História', href: 'nossa-gente.html' },
    ],
  },
  {
    titulo: 'Museu Digital',
    itens: [
      { nome: 'Acervo', href: 'index.html#acervo', secao: 'acervo' },
      { nome: 'Antes e depois', href: 'index.html#antes-depois', secao: 'antes-depois' },
      { nome: '23 · Notícias da Terra', href: 'noticias-da-terra.html' },
      { nome: '24 · Mídia e Redes', href: 'midia-e-redes.html' },
      { nome: '29 · Galeria de Fotos', href: 'galeria-de-fotos.html' },
    ],
  },
  {
    titulo: 'Participar',
    itens: [
      { nome: 'Enviar seu acervo', href: 'index.html#colabore', secao: 'colabore' },
      { nome: 'Falar no WhatsApp', zap: 'Olá! Escrevo pelo portal de Morro Vermelho.' },
      { nome: 'Área para escolas' },
      { nome: '00 · Como este portal foi feito', href: 'sobre-o-portal.html' },
    ],
  },
];

/* --- Menu do <noscript> ---------------------------------------------------
   Sem JS o drawer não abre. Este menu curto aparece sempre, no topo.
   Escolhido à mão, e não derivado do rodapé: com dezenove verbetes, derivar
   produziria uma parede de links justamente para quem está na pior
   situação. São os destinos que respondem "que lugar é este, o que houve
   aqui e o que dá para ver".                                              */

export const MENU_NOSCRIPT = [
  { nome: 'História de Resistência', href: 'historia-de-resistencia.html' },
  { nome: 'A Busca do Ouro', href: 'a-busca-do-ouro.html' },
  { nome: 'Guerra dos Emboabas', href: 'guerra-dos-emboabas.html' },
  { nome: 'Atrações', href: 'atracoes.html' },
  { nome: 'Festas e Tradições', href: 'festas-e-tradicoes.html' },
  { nome: 'Serviços', href: 'servicos.html' },
  { nome: 'Início', href: 'index.html' },
];

/* --- Identidade ----------------------------------------------------------
   Usada na marca da navbar, do drawer, do rodapé e do 404.                */

export const MARCA = {
  nome: 'Morro Vermelho',
  local: 'Amor à Liberdade · Caeté, MG',
  sobre: 'Arquivo aberto e colaborativo da memória do distrito. Projeto sem '
       + 'fins comerciais, para manter viva a memória da cidade em uma era digital.',
};

/* --- Domínio -------------------------------------------------------------
   TROCAR ANTES DE PUBLICAR. Alimenta canonical, Open Graph e JSON-LD de
   todas as páginas de uma vez.                                            */

/* ==========================================================================
   ONDE O PORTAL VAI MORAR

   TROQUE ESTA LINHA E MAIS NADA. DOMINIO alimenta, de uma vez: o canonical,
   o Open Graph, o JSON-LD de todas as páginas e o arquivo CNAME que o GitHub
   Pages exige para servir num domínio próprio.

   Formato: só o host, sem 'https://' e sem barra no fim.
     'morrovermelhomg.com.br'        domínio próprio
     'usuario.github.io/portal'      GitHub Pages sem domínio próprio

   Enquanto estiver no valor de exemplo abaixo, o gerador NÃO escreve o
   CNAME — publicar um CNAME errado tira o site do ar até alguém notar.   */

/* .example ligado de propósito: o domínio morrovermelhomg.com.br ainda não
   tem DNS apontado para o GitHub Pages. Enquanto isso, o site publica no
   link padrão (usuario.github.io/repo), sem depender de DNS. Quando o
   domínio estiver configurado, tire o ".example" desta linha e mais nada. */
export const DOMINIO = 'morrovermelhomg.com.br.example';

export const DOMINIO_CONFIGURADO = !DOMINIO.endsWith('.example');

export const SITE = 'https://' + DOMINIO;

/* ==========================================================================
   RESOLUÇÃO DE LINKS
   Um item de menu declara 'index.html#acervo'. Numa página de documento isso
   está certo. Dentro da PRÓPRIA home, porém, o link deve ser só '#acervo' —
   senão cada clique no menu recarrega a página inteira em vez de rolar até a
   seção. Estas duas funções são o único lugar que precisa saber disso.
   ========================================================================== */

export function alvo(href, slugAtual) {
  if (!href) return null;
  if (slugAtual === 'index' && href.startsWith('index.html#')) return href.slice('index.html'.length);
  if (slugAtual === 'index' && href === 'index.html') return '#topo';
  return href;
}

export function ehPaginaAtual(href, slugAtual) {
  return !!href && href === slugAtual + '.html';
}
