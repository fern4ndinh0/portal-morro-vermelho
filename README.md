# Portal Morro Vermelho — v3, em React

Portal cultural e museu digital do distrito de Morro Vermelho, Caeté — MG.

Escrito em React. **Publicado como HTML estático**, pré-renderizado, que abre
com duplo clique — sem servidor e sem internet.

```bash
npm install
npm run gerar     # gera publicar/
npm run dev       # desenvolvimento, com hot reload
```

**Para ver o site:** abra `publicar/index.html`.
**Para mexer no site:** edite `src/` e rode `npm run gerar`.

---

## A ideia central, em um parágrafo

React aqui é a linguagem em que o portal é **escrito**, não uma dependência de
quem o **lê**. O gerador roda os componentes no Node e escreve HTML completo:
o texto, o menu, as imagens, o sumário, o tempo de leitura e os links de
WhatsApp já saem prontos dentro de cada `.html`. O bundle que chega ao
navegador só **hidrata** o que já está lá, para acrescentar comportamento.

Se o JavaScript não rodar — bloqueado, lento, quebrado — o portal continua
legível, navegável e indexável. Essa era a primeira regra da versão anterior e
continua sendo a primeira aqui.

---

## Estrutura

```
portal-react/
│
├── publicar/          100% GERADO. É isto que sobe para o ar.
│                      Apagado e refeito a cada `npm run gerar`.
│                      Nunca edite nada aqui.
│
├── src/               100% EDITADO À MÃO.
│   ├── dados/           o CONTEÚDO: navegação, verbetes, acervo, contato
│   ├── componentes/     a FORMA: chassi, seções da home, blocos do artigo
│   ├── ganchos/         o COMPORTAMENTO: movimento, rolagem, revelação, trilho
│   ├── paginas/         a MONTAGEM: Home, Artigo, 404, e o mapa das páginas
│   ├── estilo/          o CSS, em seis folhas
│   ├── entrada-cliente.jsx    hidrata a página publicada
│   └── entrada-servidor.jsx   renderiza para o gerador
│
├── midia/             imagens, vídeos e fontes (fonte da verdade)
├── originais/         masters em resolução cheia, fora da publicação
│   └── word/            .docx recebidos + o .md extraído de cada um
│
├── .github/workflows/  publicar.yml — gera e publica no GitHub Pages
│
├── ferramentas/
│   ├── gerar.mjs            o gerador
│   ├── servir.mjs           pré-visualiza publicar/ sob http
│   ├── ler-word.mjs         extrai o texto dos .docx para Markdown
│   ├── preparar-imagens.py  escolhe e reduz as fotos que vão ao ar
│   ├── baixar-fontes.mjs    (re)gera src/estilo/fontes.css e os .woff2
│   └── baixar-icones.mjs    (re)gera src/dados/simbolos.js
│
├── index.html         molde de DESENVOLVIMENTO. Não vai para o ar.
└── vite.config.js     três modos: dev, bundle do cliente, bundle do servidor
```

A separação `src/` × `publicar/` é a mesma da v2, e pelo mesmo motivo:
`publicar/` é apagado e refeito a cada geração, o que só é seguro porque nada
de original mora lá.

---

## Como o gerador funciona

`npm run gerar` faz três coisas, nesta ordem:

| Etapa | O quê |
|---|---|
| `vite build` (servidor) | bundle que roda no Node e renderiza qualquer página em string |
| `vite build` (cliente) | bundle **IIFE**: script clássico, arquivo único, React embutido, zero `import` |
| `ferramentas/gerar.mjs` | para cada página: renderiza, monta o `<head>`, embute CSS e JS, escreve |

O bundle do cliente é IIFE de propósito. `<script type="module">` é bloqueado
em `file://` pela política de origem — e um portal cujo tema é preservação
precisa continuar funcionando dentro de um pendrive entregue a uma escola.

### Nenhuma imagem quebrada, nem sem JavaScript

O Vite congela na geração a lista de arquivos que existem em `midia/`
(`__MIDIA_EXISTENTE__`, em `vite.config.js`). Uma figura declarada cujo
arquivo não está lá **nem chega a virar `<img>`** no HTML — sai o espaço
reservado, com a descrição do que falta.

Antes, a `<img>` era escrita e só desaparecia depois que o JavaScript detectava
o erro de carregamento: com o script desligado, ficava o ícone de imagem
quebrada. Servidor e cliente agora leem a mesma lista, então renderizam igual
e a hidratação não reclama. O tratador de erro em tempo de execução continua
no lugar, para o caso de o arquivo existir e estar corrompido.

### Cada página carrega só o que usa

O CSS é partido em `portal` (toda página), `home` (só a index) e `artigo` (só
os verbetes). O sprite de ícones é montado a partir dos ícones que a página
**de fato** cita no HTML já renderizado: o 404 recebe 2 símbolos, uma página
de verbete 12 ou 13, e a home 22.

---

## Os dois modos de publicação

```bash
npm run gerar                  # padrão: autocontido
npm run gerar -- --separado    # CSS e JS em arquivos próprios
```

|  | autocontido (padrão) | `--separado` |
|---|---|---|
| index.html | 569 KB · **168 KB** gzip | 64 KB · **14,5 KB** gzip |
| página de verbete | ~528 KB · **~161 KB** gzip | ~49 KB · **~13,5 KB** gzip |
| 404.html | 480 KB · **150 KB** gzip | 4 KB · **1,6 KB** gzip |
| compartilhado | — | portal.js **142 KB** + CSS **16 KB** gzip |
| **total das 32** | **5.125 KB** gzip | **468 KB** gzip |

A diferença é o runtime do React, o chassi (menu, rodapé, sprite) e os dados
de todos os verbetes — repetidos em cada arquivo no modo autocontido. Com 32
páginas, o modo separado é **11×** menor no total. **Escolha assim:**

- **autocontido** quando o valor for o arquivo sobreviver sozinho — pendrive,
  anexo de e-mail, CD-ROM de escola, arquivamento. Cada `.html` é o portal
  inteiro e não depende de mais nada além de `midia/`.
- **`--separado`** quando o portal estiver num servidor. O navegador baixa
  `portal.js` uma vez e reusa nas outras 31 páginas; a partir da segunda
  página visitada ele fica bem mais rápido.

Os dois modos abrem do disco. O `--separado` também: são caminhos relativos.

> **A conta piorou de novo quando o portal cresceu.** Com 7 páginas a diferença
> era de 624 KB para 139 KB; com 22, de 2.541 KB para 298 KB; com 32, é de
> **5.125 KB para 468 KB** — e cada verbete novo aumenta o fosso em ~161 KB.
> **Se a publicação for para servidor, o padrão deveria ser `--separado`.**

> **Por que o `portal.js` cresceu de 98 para 142 KB gzip.** O bundle do cliente
> carrega os dados de todos os verbetes, porque é com eles que o React refaz a
> árvore ao hidratar. Cada página nova, portanto, engorda o bundle de TODAS as
> páginas. É o custo real de crescer, e ele é linear no volume de texto — não
> no número de páginas.

> **As fotografias não estão nesses números.** `midia/` é copiado à parte e
> nunca embutido, nos dois modos. Numa página de verbete de 164 KB gzip, o
> bundle são 142, o CSS 9, o sprite 1 e o HTML 12 — imagem, zero. Acrescentar
> ou remover fotos muda o peso de `publicar/midia/` (hoje ~3,9 MB, baixados
> só quando a página que os usa é aberta) e não muda uma linha da tabela
> acima. Para reduzir o peso das páginas há um caminho e é outro: servir os
> dados de cada verbete no próprio HTML em vez de embuti-los no bundle, o que
> derrubaria o `portal.js` para perto dos 75 KB do React puro.

> **Comparação honesta com a v2 (JavaScript puro):** a v2 entregava a home em
> ~30 KB gzip e uma página de verbete em ~21 KB. O custo desta migração é o
> runtime do React — cerca de 73 KB gzip, uma vez no modo `--separado` e uma
> vez por página no autocontido. É o preço da escolha, e vale a pena declará-lo
> em vez de escondê-lo.

---

## A espinha do portal

O conteúdo segue o índice do projeto — uma numeração de 02 a 29 que não é
alfabética nem cronológica: é a ordem em que a história do distrito foi
organizada por quem a conhece. A página 01 do índice é a capa, que aqui é a
home; a 00 não estava no índice e foi acrescentada no fim, com a procedência
do acervo.

| | Verbete | Linha |
|---|---|---|
| 02 | História de Resistência | Um povo unido constrói o próprio destino |
| 03 | A Busca do Ouro | Bandeirantes levam riqueza e deixam miséria |
| 04 | Arraial de Viracopos | Entreposto comercial e rota para a Serra da Piedade |
| 05 | Fazenda do Cutão | Engenhos de apuração do ouro |
| 06 | Retiro dos Capetas | Posto fiscal da Coroa Portuguesa |
| 07 | Os Dragões Reais | Força militar para arrecadar e conter rebeliões |
| 08 | Estrada Real | Caminho de bandeirantes, fiscais e tropeiros |
| 09 | Guerra dos Emboabas | A primeira eleição direta das Américas |
| 10 | Levante das Bateias | A dura luta contra os impostos exorbitantes |
| 11 | Epidemia da Bexiga | Moradores abandonam o povoado |
| 12 | Família de Padres | Povoado tem um comendador da Santa Sé |
| 13 | Diretas-Já | Primeiro grito contra a ditadura militar |
| 14 | Atrações | Monumentos culturais protegidos |
| 15 | Parque do Gandarela | Matas e mananciais ainda preservados |
| 16 | Cachoeiras e Cascatas | Lazer e belezas naturais |
| 17 | Festas e Tradições | Patrimônio imaterial conservado |
| 18 | Cavalhada de N. Sra. de Nazareth | Festa preservada desde 1704 |
| 19 | Artesanato, Gastronomia e Música | Tradições de pai para filho |
| — | Sociedade Musical Santa Cecília | A banda do distrito |
| 20 | Trilhas Ecológicas | Caminhos de esportes e lazer |
| 21 | Cultura Popular | Tradições e comportamento social de resistência |
| 22 | Bens Históricos | Relíquias do passado desprotegidas |
| 23 | Notícias da Terra | Jornalismo feito no próprio distrito, 2020–2021 |
| 24 | Mídia e Redes | O que já se publicou sobre o distrito |
| 25 | Estórias, Casos e Lendas | Trezentos anos de literatura oral |
| 26 | Serviços | Onde fica, como chegar, o que ver, comer, comprar |
| 27 | Nossa Gente, Nossa História | Quem fez o povoado, com data de batismo |
| 28 | Outras Coisas | O Te Deum, e a gaveta declarada do acervo |
| 29 | Galeria de Fotos | O acervo fotográfico, e o que ele exige |
| 00 | Como este portal foi feito | Quarenta anos de pesquisa, e de quem |

A ordem vive em `DOCUMENTOS`, em `src/dados/documentos/index.js`, e é ela que
governa o "capítulo anterior / próximo" no pé de cada página. O mega menu
reorganiza os mesmos itens **por intenção do visitante**; o rodapé mantém a
ordem numérica, que é onde o inventário completo faz sentido.

### O manifesto e as seis afirmações

O texto de abertura da seção *Nossa História* é o manifesto do distrito — como
ele se apresenta, sem edição de estilo. Ele faz seis afirmações datáveis, e
cada uma tem um verbete onde o que já se sabe e o que falta provar aparecem
separados:

| Afirmação | Verbete |
|---|---|
| Desde 1700 | 03 · A Busca do Ouro |
| O primeiro grito contra o regime feudal | 10 · Levante das Bateias |
| A primeira eleição direta das Américas | 09 · Guerra dos Emboabas |
| As Diretas-Já | 13 · Diretas-Já |
| Os Dragões Reais | 07 · Os Dragões Reais |
| A Guerra dos Emboabas | 09 · Guerra dos Emboabas |

O manifesto é publicado inteiro, e a nota de método logo abaixo dele diz o que
ainda está em apuração e leva a cada verbete. **As duas coisas ao mesmo
tempo**: o distrito diz o que diz de si, e o portal mostra onde a pesquisa
está. Editar isso é editar `MANIFESTO` em `src/dados/home.js`.

### Onde a pesquisa é mais urgente

Três verbetes têm prazo, e não é retórica:

- **13 · Diretas-Já** — quem organizou o ato em 1984 está vivo e pode ser
  entrevistado este ano. É a única página cuja fonte primária pode ser
  *criada* agora, em vez de encontrada.
- **19 · Artesanato, Gastronomia e Música** — ofício e receita moram em
  pessoas, e somem com elas.
- **11 · Epidemia da Bexiga** — não tem prazo, mas é o levantamento de maior
  retorno: transcrever os livros de óbito responde esta página *e* produz a
  base de "Nossa Gente, Nossa História" de uma vez só.

---

## Como fazer as coisas

### Mudar um item de menu

`src/dados/navegacao.js`, e só lá. `MENU` alimenta o mega menu; `MENU_RODAPE`
alimenta o rodapé **e** o menu mobile; `MENU_NOSCRIPT`, o menu sem JavaScript.

**A regra dos sete.** Nenhum painel do mega menu passa de sete atalhos. Com
dezesseis, o painel de *Nossa História* media 1287 px de altura numa janela de
820 e transbordava a tela. O oitavo item de todo painel é sempre o mesmo —
`VER_TODAS`, que leva à seção **Índice** da home. O campo `todas.txt` de cada
menu nomeia o que ficou de fora, para que quem procura uma página específica
veja que ela existe antes de clicar.

O índice é `src/componentes/home/Indice.jsx`, e é um **mural**, não uma lista.
A primeira versão era uma lista de trinta linhas em duas colunas, e a home já
tem uma lista numerada logo acima (`.capitulos`): duas listas parecidas na
mesma página leem como repetição, e trinta linhas não se abarcam de relance.
No mural cada página é uma peça com o número grande, o título, o tempo de
leitura, a marca de estado editorial e a **cor do próprio verbete** — a mesma
que abre a página no destino, de modo que a peça é amostra de para onde se
vai. As peças ficam em seis faixas, cada uma com o intervalo que cobre
(`02–08`, `09–13`, …) numa cabeça que acompanha a rolagem.

**Nada nele é digitado**: as peças saem de `DOCUMENTOS`; o agrupamento é
derivado do número de cada verbete — não de uma segunda lista de categorias
que teria de ser mantida em sincronia com a primeira; os intervalos e as
contagens ("7 páginas") saem das pontas de cada faixa; e o placar do alto
("5 documentado · 13 em rascunho · 12 a pesquisar") é contado na hora, a
partir do campo `estado` de cada arquivo. Criar um verbete o faz aparecer lá
sozinho, com a cor e o estado que ele declarar.

As três marcas de estado saem da **primeira palavra** do campo `estado`, que
é uma frase escrita à mão em cada verbete ("Documentado · registros paroquiais
e censos"). A frase inteira continua no HTML, em `.sr`, para leitor de tela:
a marca resume, não substitui.

**Item sem `href` não vira link.** Vira um `<span>` com a etiqueta "em breve",
visível e não clicável. Zero link morto, zero `href="#"`, zero 404 acidental.
A regra vale para todos os menus porque todos passam pelo mesmo componente
(`src/componentes/LinkDeMenu.jsx`).

### Criar um verbete novo

1. Crie `src/dados/documentos/<slug>.js` (copie um existente como molde).
2. Importe-o em `src/dados/documentos/index.js` e ponha-o em `DOCUMENTOS`, na
   posição certa — a ordem dessa lista é a espinha numerada do portal (02 a
   20) e define o "capítulo anterior / próximo".
3. Acrescente o item ao `MENU` e ao `MENU_RODAPE` em `navegacao.js`.
4. Se for capítulo de história, acrescente-o a `CAPITULOS` em
   `src/dados/home.js` (o título é lido do próprio verbete, nunca digitado).
5. `npm run gerar`.

Blocos disponíveis dentro de cada seção:

| Bloco | Vira |
|---|---|
| `'texto'` | parágrafo |
| `{ abertura }` | parágrafo com capitular |
| `{ sub }` | subtítulo `<h3>` |
| `{ lista: [] }` | lista com marcador de filete |
| `{ citacao, autoria }` | citação em papel envelhecido |
| `{ lacuna }` | caixa tracejada "Lacuna documental" |
| `{ nota, titulo }` | caixa de nota editorial |
| `{ figura, arquivo, legenda, alt }` | figura com crédito |

Sumário, tempo de leitura, barra de progresso, "como citar" e navegação entre
capítulos são **derivados do conteúdo** — nada disso se digita.

> Na figura, `alt` é obrigatório para a imagem aparecer. Sem descrição, a
> figura continua exibindo o espaço reservado. Num acervo, o alt é a peça para
> quem não enxerga; publicar imagem muda seria pior que não publicar.

### Trazer texto de um arquivo do Word

```bash
# 1. copie os .docx para originais/word/
npm run word          # 2. gera um .md ao lado de cada .docx
```

O extrator é `ferramentas/ler-word.mjs`, sem nenhuma dependência: um `.docx`
é um zip com XML dentro, e ler zip e XML o Node já faz. Ele preserva o que
importa num acervo — **títulos, listas, tabelas, itálico, negrito, links com
o endereço de destino e, principalmente, as notas de rodapé**, que saem
numeradas no fim do arquivo. Num projeto que cobra fonte de cada afirmação, a
nota de rodapé costuma ser a parte mais valiosa do documento.

O `.md` **não é publicado**. `originais/` inteiro fica fora de `publicar/`.
Ele é o passo intermediário: o texto do autor, legível e conferível lado a
lado com o original, antes de virar verbete.

O passo seguinte — recortar o `.md` em `secoes`/`blocos`, decidir o que é
`{ lacuna }` e o que é fato com fonte, escrever `resumoSeo` e montar a lista
de `fontes` — é editorial, e continua sendo feito à mão em
`src/dados/documentos/<slug>.js`. Ver "Criar um verbete novo", acima.

Só `.docx`. Um `.doc` do Word 97 é outro formato, binário; abra no Word e
salve como `.docx`. Arquivos `~$algo.docx` são ignorados — são o bloqueio que
o Word cria enquanto o documento está aberto, e não são documentos.

### Acrescentar uma peça ao acervo

Acrescente um objeto a `ACERVO`, em `src/dados/home.js`. Os quatro contadores
da seção se atualizam sozinhos.

O mesmo vale para `LINHA_DO_TEMPO`, `REVELACOES`, `CAMINHOS` e
`O_QUE_ACEITAMOS` — todos são listas de dados, não markup.

### Colocar uma imagem

Salve o arquivo em `midia/` e aponte para ele. Se o arquivo não existir, o
espaço reservado permanece e nada quebra — sem ícone de imagem quebrada, sem
retângulo preto. Ver [midia/LEIA-ME.md](midia/LEIA-ME.md) para medidas e nomes.

### Trocar o número do WhatsApp

`src/dados/contato.js`, no topo:

```js
export const WHATSAPP = '5531900000000';   // ← trocar aqui, e só aqui
```

Formato: 55 + DDD + número, só dígitos. Enquanto for o número de exemplo, os
botões aparecem em cinza com a etiqueta "nº a configurar" — eles não fingem
funcionar.

### Trocar o domínio antes de publicar

`src/dados/navegacao.js`:

```js
export const SITE = 'https://morrovermelho.example';
```

Alimenta canonical, Open Graph e JSON-LD das 32 páginas de uma vez.

### Refazer fontes e ícones

```bash
npm run fontes    # baixa de Google Fonts, escreve src/estilo/fontes.css
npm run icones    # baixa do lucide-static, escreve src/dados/simbolos.js
```

As duas famílias são **variáveis**: quatro arquivos (~200 KB) cobrem os nove
pesos. Os `.woff2` são o único recurso que nunca é embutido — um binário de
~50 KB em base64 dentro de 32 páginas viajaria 32 vezes. Se sumirem, nada
quebra: a pilha de fallback de `--fonte-serif` e `--fonte-sans` assume.

---

## As quatro regras que governam o código

**1. Conteúdo primeiro; animação por cima.**
Nada sai invisível do gerador. O CSS só esconde elementos para animar *depois*
que o React confirma que está rodando (`data-revelar-ativo` no `<html>`). JS
bloqueado = portal íntegro e legível. Numa página pré-renderizada isso importa
ainda mais: o HTML sai perfeito do gerador, e seria o navegador a escondê-lo.

**2. Nenhum número é digitado à mão.**
Os contadores derivam das listas de dados (`ACERVO.length`, e não `4`).

**3. Nenhum link morto.**
Página que ainda não existe não vira link — e agora isso é impossível de
esquecer, porque todo menu passa por `LinkDeMenu`.

**4. Estado por atributo `data-*`, nunca por troca de classe utilitária.**
O CSS lê `data-rolado`, `data-oculto`, `data-aberto`, `data-tem-midia`,
`data-movimento`, `data-revisao`. Os componentes escrevem esses atributos a
partir de estado React — mas o contrato com o CSS não mudou.

---

## O que a migração ganhou

| | v2 (JS puro) | v3 (React) |
|---|---|---|
| Sumário do artigo | montado no navegador, varrendo o DOM | derivado do conteúdo, **já no HTML** |
| Tempo de leitura | contado no navegador | contado na geração, **já no HTML** |
| Links de WhatsApp | `href` escrito por JS em tempo de execução | montados na geração, **funcionam sem JS** |
| Referência ABNT | montada no navegador | já no HTML; só a data de acesso é atualizada |
| Seção Cavalhadas | desativada dentro de um comentário HTML | componente inteiro, desligado por `MOSTRAR_CAVALHADAS` |
| Acervo, linha do tempo | blocos de HTML a duplicar à mão | listas de dados |
| Ícones | função que devolve string | componente, com o mesmo sprite podado |
| `aria-current` do menu | JS varria o documento e escrevia em nós alheios | cada link compara o próprio `data-secao` |
| Comentários no HTML | removidos pelo gerador | não existem — JSX não os emite |

## O que a migração custou

- **~73 KB gzip** de runtime do React (ver a tabela dos dois modos acima).
- **Um passo de build.** A v2 era Node puro, sem `npm install`. Se
  `ferramentas/gerar.mjs` sumir, `publicar/` continua funcionando para
  sempre — mas para *mudar* o portal agora é preciso ter as dependências.
- **Uma dependência de fornecedor.** React 18 e Vite 5.

---

## O sistema de verificação editorial

Todo dado sem fonte primária conferida aparece marcado no site, pelo
componente `<AVerificar>`. Quando tudo estiver conferido, em
`src/dados/contato.js`:

```js
export const REVISAO = true;   // → false
```

Todas as etiquetas somem de uma vez (é o CSS que as esconde, por
`html[data-revisao="off"]`).

---

## Sobre o conteúdo das páginas de documento

As 30 páginas de documento seguem uma regra editorial explícita, e ela é o
ponto mais
importante deste projeto: **nenhum fato sobre Morro Vermelho foi inventado.**

Cada verbete separa duas coisas que costumam ser misturadas:

- **Contexto regional documentado** — o que é verdade sobre Minas Gerais e
  serve de pano de fundo. Verdadeiro, porém genérico.
- **O que falta saber** — as perguntas específicas sobre Morro Vermelho,
  dentro de caixas "Lacuna documental", e uma lista de **fontes a consultar**.

Cada página nasce com dupla utilidade: introdução para o leitor comum e
roteiro de pesquisa para quem for escrever a versão definitiva.

---

## O que trocar antes de publicar

| Onde | O quê |
|---|---|
| `src/dados/contato.js` | **Número do WhatsApp**. Sem isso os botões ficam inativos |
| `src/dados/navegacao.js` | **Domínio real** em `DOMINIO`. Alimenta canonical, OG, JSON-LD e o CNAME |
| `src/dados/documentos/*.js` | **Crédito das fotografias**: os 29 arquivos em `midia/` estão publicados com "autoria a confirmar" |
| `src/paginas/Home.jsx` | `ogImagem` em 1200×630, gerada de uma fotografia **real** |
| `src/componentes/Rodape.jsx` | Rodapé: declarar equipe, parceiros e licença |
| `src/componentes/Rodape.jsx` | Rodapé: criar canal de contato para direitos de imagem |

### Mapa

A seção "Como chegar" usa o Google Maps por busca de nome
(`?q=Morro+Vermelho,+Caeté+-+MG&output=embed`), que não exige chave de API nem
coordenadas — então não há risco de mandar visitante para o lugar errado.

- **LGPD:** o iframe é do Google e coloca cookies antes de qualquer
  consentimento. Para conformidade estrita, troque por uma imagem estática que
  só carrega o iframe após clique.
- **Precisão:** confira se o pin cai no lugar certo.

---

## Publicar no GitHub Pages

O repositório já traz `.github/workflows/publicar.yml`. Ele gera o portal a
cada push na branch principal e publica `publicar/` no Pages.

**Três coisas, na ordem:**

1. **Edite `DOMINIO`** em `src/dados/navegacao.js` — só o host, sem `https://`
   e sem barra no fim. É o ponto único: dele saem o canonical, o Open Graph, o
   JSON-LD de todas as páginas **e** o arquivo `CNAME` que o Pages exige.
   Enquanto o valor terminar em `.example`, o gerador não escreve o CNAME — um
   CNAME errado tira o site do ar em vez de apenas ficar impreciso.
2. No repositório, **Settings › Pages › Source: GitHub Actions.**
3. No DNS do domínio, aponte para o Pages: um `CNAME` de `www` para
   `<usuario>.github.io`, e para o domínio de raiz os quatro registros `A` do
   GitHub (`185.199.108.153`, `.109.153`, `.110.153`, `.111.153`) ou um
   `ALIAS`/`ANAME`, se o provedor oferecer. Depois marque *Enforce HTTPS*.

> **Não crie o `CNAME` à mão.** O gerador o escreve a partir de `DOMINIO`, e
> `publicar/` é apagado e refeito a cada geração — um CNAME manual duraria até
> o próximo build.

O workflow pressupõe que **`portal-react/` é a raiz do repositório**. Se você
publicar a pasta de cima, mova o arquivo para a raiz de lá e troque os dois
caminhos marcados `RAIZ DO PROJETO` dentro dele.

**O workflow usa `--separado`**, e de propósito: no servidor o navegador baixa
`portal.js` uma vez e reusa nas 31 páginas restantes — 468 KB gzip no total,
contra 5.125 KB do autocontido. O autocontido continua sendo o modo certo para
pendrive, anexo de e-mail e arquivamento; só não para a web.

`publicar/`, `construcao/` e `originais/word/imagens/` estão no `.gitignore`.
Os `.docx` e os `.md` extraídos **são versionados** — são a matéria-prima do
conteúdo. As 500 imagens extraídas não: são 111 MB de cópias reproduzíveis com
`npm run word -- --imagens`.

---

## As fotografias

Das 527 imagens embutidas nos documentos originais, **29 estão publicadas**:
16 na galeria (página 29) e 13 como figuras dentro dos verbetes. Somam 2,7 MB.

```bash
npm run word -- --imagens              # extrai as 527 para originais/word/imagens/
python ferramentas/preparar-imagens.py # reduz as escolhidas para midia/
```

A curadoria é o `MANIFESTO` em `ferramentas/preparar-imagens.py` — uma lista
de pares origem→destino. Acrescentar uma foto é acrescentar uma linha lá e
depois declarar `alt`, `legenda` e `credito` no verbete ou na galeria.

**O critério de entrada foi estreito, e vale registrar por quê:**

- **Entrou** o que é registro do próprio lugar: ruínas, bocas de mina,
  interiores das igrejas, a Cavalhada, a paisagem, um recorte de jornal de
  1895, um retrato do século 19.
- **Ficou fora** o que os documentos originais marcam como "Reprodução da
  internet" — pinturas, gravuras, retratos de personagens históricos gerais —
  porque a licença é desconhecida.
- **Ficou fora** toda foto de grupo com rosto reconhecível. É o material mais
  bonito do acervo e o que mais depende de autorização: de cada pessoa
  retratada, não de quem fotografou.

`alt` continua sendo obrigatório para a imagem aparecer, e o crédito hoje diz
`autoria a confirmar` — que é literalmente o que se sabe. Ver a página
[Galeria de Fotos](src/dados/documentos/galeria-de-fotos.js).

---

## Acessibilidade — o que já está feito

- Skip link como primeiro `Tab`
- `:focus-visible` visível em toda parte
- Menu mobile completo: `aria-expanded`, `Esc`, **foco preso**, scroll travado
  sem perder posição, foco devolvido ao fechar
- Mega menu operável por teclado, com `Esc` e clique fora
- Movimento reduzido por **duas** vias: preferência do sistema **e** botão
  próprio (há quem tenha enxaqueca e nunca tenha configurado o SO)
- Contraste conferido e anotado nos próprios tokens
- Comparador acessível via `<input type="range">` nativo
- Folha de impressão: pesquisador e professor imprimem
- `<noscript>` serve um menu funcional

## O que ainda falta

- Busca global (só faz sentido com acervo indexado — por isso o botão nem existe)
- Lightbox e zoom profundo em documentos (OpenSeadragon, na página do acervo)
- Mapa interativo (Leaflet, em `mapa.html` — a moldura CSS já está pronta)
- As demais páginas do portal
- Teste com leitor de tela real (NVDA)
- Auditoria Lighthouse em mobile com throttle de 4G
- Itálico real de Cormorant Garamond (hoje é sintetizado pelo navegador)
