# Da v2 para a v3 — onde cada coisa foi parar

Guia para quem conhece `portal-v2/` e precisa achar o equivalente aqui. A
v2 continua no repositório, intacta: nada foi apagado, e ela é a referência
para conferir se algum comportamento se perdeu.

---

## Mapa de arquivos

| v2 (`portal-v2/`) | v3 (`portal-react/`) |
|---|---|
| `gerar.mjs` | `ferramentas/gerar.mjs` |
| `fonte/navegacao.mjs` | `src/dados/navegacao.js` |
| `fonte/documentos/*.mjs` | `src/dados/documentos/*.js` (praticamente inalterados) |
| — | `src/dados/documentos/index.js` (ordem dos capítulos + tempo de leitura) |
| — | `src/dados/home.js` (o que era markup na home virou dados) |
| — | `src/dados/contato.js` (WHATSAPP e REVISAO, que moravam no `comum.js`) |
| `fonte/modelos/icones.mjs` | `src/dados/simbolos.js` (gerado) + `src/dados/icones.jsx` |
| `fonte/modelos/chassi.mjs` | `src/componentes/{Chassi,Navbar,Drawer,Rodape,Marca,VoltarTopo}.jsx` |
| `fonte/modelos/home.mjs` | `src/paginas/Home.jsx` + `src/componentes/home/*.jsx` |
| `fonte/modelos/artigo.mjs` | `src/paginas/Artigo.jsx` + `src/componentes/artigo/*.jsx` |
| `fonte/modelos/erro404.mjs` | `src/paginas/Erro404.jsx` |
| `fonte/estilo/*.css` | `src/estilo/*.css` — **copiados na íntegra, sem uma linha alterada** |
| `fonte/script/comum.js` | `src/ganchos/*` + os componentes do chassi |
| `fonte/script/home.js` | `src/componentes/home/*` + `src/ganchos/trilho.js` |
| `fonte/script/artigo.js` | `src/paginas/Artigo.jsx` + `src/componentes/artigo/ComoCitar.jsx` |
| `ferramentas/baixar-*.mjs` | idem, com os caminhos de saída atualizados |

O CSS é o mesmo arquivo, byte a byte, com uma única exceção: os `url()` de
`fontes.css` passaram de `../midia/fontes/…` para `midia/fontes/…`, porque no
modo padrão a folha é embutida no `.html` e resolve a partir da página. O
gerador recoloca o `../` sozinho quando roda com `--separado`.

---

## Mapa de comportamentos

Cada módulo do IIFE `window.MV` virou um gancho ou um componente.

| Módulo da v2 | Onde está agora |
|---|---|
| `iniciarWhatsapp` | `src/dados/contato.js` — `linkZap()`, resolvido na geração |
| `iniciarMovimento` | `src/ganchos/movimento.jsx` — `ProvedorDeMovimento` |
| `iniciarNavbar` | `src/ganchos/rolagem.js` — `useNavbarAoRolar` |
| `iniciarMegaMenu` | `src/componentes/Navbar.jsx` — estado do componente |
| — | `src/componentes/home/Indice.jsx` — as 30 páginas, derivadas de DOCUMENTOS |
| `iniciarDrawer` | `src/componentes/Drawer.jsx` |
| `iniciarRevelar` | `src/ganchos/Revelar.jsx` — `<Revelar>` e `useRevelarAtivo` |
| `iniciarMidiaOpcional` | `src/componentes/CaixaDeMidia.jsx` — `useMidia` |
| `iniciarVoltarTopo` | `src/componentes/VoltarTopo.jsx` |
| `iniciarAno` | `src/componentes/Rodape.jsx` — `<AnoCorrente>` |
| `iniciarHero` | `src/componentes/home/Hero.jsx` |
| `iniciarNumeros` | `src/componentes/Numero.jsx` |
| `iniciarContagem` | `src/componentes/home/Cavalhadas.jsx` |
| `iniciarTrilhos` | `src/ganchos/trilho.js` — `useTrilho` |
| `iniciarComparadores` | `src/componentes/home/AntesDepois.jsx` |
| `iniciarLoader` | `src/componentes/home/Loader.jsx` |
| `iniciarSecaoAtiva` | `src/ganchos/rolagem.js` — `useSecaoAtiva` |
| `iniciarLeitura` | `src/paginas/Artigo.jsx` (sumário e tempo saem prontos do HTML) |
| `iniciarComoCitar` | `src/componentes/artigo/ComoCitar.jsx` |

A fila `MV.registrar()` com `try/catch` por módulo não tem equivalente e não
faz falta: cada gancho já é isolado no seu componente, e um erro num deles não
derruba os outros da mesma forma.

---

## O que mudou de comportamento (e por quê)

**Melhorou:**

- **Sumário e tempo de leitura** deixaram de ser calculados no navegador
  varrendo o DOM e passaram a ser derivados do conteúdo na pré-renderização.
  Aparecem sem JavaScript, e não podem dessincronizar do texto.
- **Links de WhatsApp** saem escritos no HTML. Na v2, sem JS, o `<a>` não
  tinha destino.
- **Referência ABNT** idem — só a data de acesso é corrigida na hidratação.
- **A figura de um verbete** pode exibir a fotografia de verdade. Na v2 o
  `<img>` vinha comentado e era preciso descomentá-lo no HTML gerado.
- **Foco do menu mobile** agora insiste quadro a quadro até aterrissar. A
  transição de `visibility` faz `focus()` ser ignorado se chamado cedo demais
  — era uma falha silenciosa possível também na v2.

**Mudou de forma:**

- **A seção Cavalhadas** era mantida dentro de um comentário HTML, com o aviso
  de que comentário HTML não aninha. Agora é `src/componentes/home/Cavalhadas.jsx`,
  um componente completo e funcional, desligado por `MOSTRAR_CAVALHADAS` em
  `src/dados/home.js`.
- **`node gerar.mjs --comentado`** existia para depurar com os comentários de
  CSS, JS e HTML preservados. Restou `npm run gerar -- --comentado`, que só
  vale para o CSS: JSX não emite comentários no HTML, e o bundle do cliente é
  sempre minificado.
- **Peças do acervo, marcos e cartões** deixaram de ser blocos de HTML a
  duplicar e viraram listas em `src/dados/home.js`.

**Piorou:**

- **Peso.** O runtime do React acrescenta ~73 KB gzip. Ver a tabela dos dois
  modos de publicação no [README](README.md).
- **Pré-requisito.** A v2 rodava com Node puro, sem `npm install`. O site
  publicado continua não precisando de nada, mas alterá-lo agora precisa.

---

## Como conferir se algo se perdeu

As duas versões produzem `publicar/`. Para comparar uma página:

```bash
node -e "console.log(require('fs').readFileSync('../portal-v2/publicar/estrada-real.html','utf8').replace(/<[^>]+>/g,' ').replace(/\s+/g,' '))" > /tmp/v2.txt
node -e "console.log(require('fs').readFileSync('publicar/estrada-real.html','utf8').replace(/<[^>]+>/g,' ').replace(/\s+/g,' '))"  > /tmp/v3.txt
diff /tmp/v2.txt /tmp/v3.txt
```

O texto deve bater nas cinco páginas que existiam nas duas versões. A
diferença esperada é o bundle do cliente, o sumário e o tempo de leitura —
que na v3 já estão no HTML e na v2 não estavam.

As outras vinte e cinco páginas não existem na v2. Quinze foram criadas a
partir do índice do projeto (02 a 20) e dez a partir dos textos de pesquisa
recebidos em `.docx` (21 a 29, mais a 00, que é a procedência do acervo). Ver
"A espinha do portal" no [README](README.md).

---

## De onde vem o conteúdo, a partir de agora

Os textos das páginas 21 a 29 vêm de 59 arquivos `.docx` do acervo de pesquisa
de Geraldo Lopes e Viviane Pinheiro, guardados em `originais/word/` com o `.md`
extraído ao lado de cada um. O par é sistemático: `NNMV.docx` é o texto limpo
da página NN, `NNMV00.docx` é a mesma página já diagramada, com as fotografias
embutidas e o cabeçalho repetido.

`npm run word` refaz a extração; `npm run word -- --imagens` também grava a
mídia embutida em `originais/word/imagens/<documento>/`, com um
`inventario.csv` que liga cada arquivo ao documento e à posição do texto de
onde saiu. Nada de `originais/` é publicado.

A v2 não tinha nada disso: o conteúdo dela foi escrito direto nos módulos.

### As fotografias

A v2 publicava 3 imagens e o resto do site vinha com espaços reservados. A v3
publica **29**: 16 na galeria da página 29 e 13 como figuras nos verbetes,
escolhidas entre as 527 embutidas nos documentos originais.

A curadoria é o `MANIFESTO` de `ferramentas/preparar-imagens.py` — o único
script Python do projeto, porque redimensionar JPEG precisa de um
decodificador que o Node não tem, e uma dependência de imagem no
package.json seria a primeira coisa a quebrar num `npm install` de 2035. Ele
roda uma vez por lote, não faz parte de `npm run gerar`, e se um dia o Python
faltar as imagens já processadas continuam em `midia/`.

O bloco `{ galeria: [...] }` é novo e não tem equivalente na v2. Não é
carrossel nem lightbox de propósito: as duas coisas dependem de JavaScript
para exibir a imagem, e a regra do projeto é que a fotografia esteja visível
sem script. Cada peça é uma `<figure>` completa, com `alt` e crédito.

### A publicação

A v2 não tinha rotina de publicação — `publicar/` era copiado à mão. A v3
traz `.github/workflows/publicar.yml`, que gera com `--separado` e publica no
GitHub Pages, e o `CNAME` passou a ser derivado de `DOMINIO` em
`src/dados/navegacao.js` em vez de escrito à mão.
