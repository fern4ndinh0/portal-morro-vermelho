# assets/midia/ — todas as imagens e vídeos

**Uma pasta só.** Fotos, scans e vídeos, tudo aqui. Sem subpasta, sem decidir
onde guardar. O nome do arquivo é que diz o que ele é.

---

## Regras

**Formato.** JPG para foto, PNG só com transparência, MP4 para vídeo.

**Peso.** Máximo **400 KB** por imagem (o hero pode ir a 600 KB) e **3 MB** por
vídeo. Foto de celular sai com 4–8 MB — precisa ser reduzida antes, senão o site
fica lento no 4G, que é como a maioria vai acessar.

Reduzir sem instalar nada: <https://squoosh.app> — roda no navegador, a foto não
sai do seu computador. Redimensione para a largura indicada e exporte em 75–80.

**Nome.** Sem acento, sem espaço, sem maiúscula, com hífen.
`praca-matriz-1940.jpg`, nunca `Praça Matriz (1940).JPG`.

**Originais não ficam aqui.** Aqui só a versão reduzida para web. O scan em alta
resolução e a foto de 8 MB vão para HD externo ou Drive, fora do projeto.

---

## Nomes que o site já procura

Estes nomes estão escritos nos comentários do HTML. Salve com o nome da lista e
é só descomentar a linha correspondente. **Se preferir outro nome, troque no
HTML** — nada aqui é obrigatório, é só o que já está escrito.

| Arquivo | Medida | Onde aparece |
|---|---|---|
| `og-capa.jpg` | 1200 × 630 | Miniatura ao compartilhar no WhatsApp. Provavelmente a imagem mais vista do projeto |
| `hero-vertical.mp4` | 1080 × 1920 | Vídeo de abertura (formato Reels) |
| `hero-poster.jpg` | 1080 × 1920 | Primeiro quadro congelado do vídeo |
| `hero-foto.jpg` | 1080 × 1920 | Foto de abertura, se não usar vídeo |
| `card-museu.jpg` | 1200 × 900 | Cartão "Museu Digital" |
| `card-historia.jpg` | 1200 × 900 | Cartão "História de Resistência" |
| `card-memoria.jpg` | 1200 × 900 | Cartão "Memória oral" |
| `card-antes-depois.jpg` | 1200 × 900 | Cartão "Antes e depois" |
| `card-visitar.jpg` | 1200 × 900 | Cartão "Visitar" |
| `comparador-antes.jpg` | 1600 × 1000 | Foto histórica do comparador |
| `comparador-depois.jpg` | 1600 × 1000 | Foto atual, **do mesmo ângulo** |
| `figura-lavra-ouro.jpg` | 1600 × 1067 | Dentro de "A Busca do Ouro" |
| `figura-nome-antigo.jpg` | 1600 × 1067 | Dentro de "Arraial de Viracopos" |
| `figura-estrada-real.jpg` | 1600 × 1067 | Dentro de "Estrada Real" |

Os cards aparecem em preto e branco e ganham cor no hover — **contraste importa
mais que cor**.

## Nomes para o que você for acrescentando

Sugestão de prefixo, só para o diretório continuar legível quando tiver 300
arquivos. Alfabético já agrupa por tipo:

```
acervo-1888-carta-alforria.jpg     documentos e fotos do acervo
retrato-terezinha-souza.jpg        quem deu depoimento
figura-<assunto>.jpg               imagem dentro de um texto
card-<assunto>.jpg                 cartão da home
```

---

## O que anotar junto com cada foto

Vale tanto quanto a foto. Um `.txt` de mesmo nome, ou uma planilha:

| Campo | Por quê |
|---|---|
| Quem aparece | Nome completo. É o que transforma imagem em documento |
| Onde | Rua, prédio, ponto de referência |
| Quando | Ano; "década de 1950" serve; "não identificado" também |
| Quem tirou | Fotógrafo, se conhecido |
| **De quem é o original** | Vira o crédito |
| **Autorizou publicar?** | Por escrito? Permite uso por terceiros? |

**Sem os dois últimos a foto não vai ao ar.** Um portal de memória que publica
imagem de família sem autorização perde a confiança da comunidade — e é dessa
confiança que o acervo inteiro depende.

Para vestígio físico (calçamento, ponte, marco), **anote a coordenada do GPS**.
Sem localização vale metade.

---

## Vídeo do hero (formato Reels)

O site já está no modo retrato: em desktop o vídeo vertical aparece em moldura
própria ao lado do texto, **sem corte**; no celular ele preenche a tela inteira,
onde 9:16 encaixa perfeitamente.

Antes de salvar:

- **Tire o áudio.** O vídeo toca sozinho e mudo — áudio seria bloqueado pelo
  navegador de qualquer jeito.
- **Corte para 10–15 segundos** e escolha um trecho que feche em loop sem
  solavanco.
- **Remova legenda, sticker e interface do Instagram.** Se estiverem gravados na
  imagem, corte a área ou escolha outro trecho.
- **Máximo 3 MB.** Se estiver maior, reduza a resolução para 720 × 1280.

Se tiver o `ffmpeg` instalado, isto resolve tudo de uma vez:

```bash
ffmpeg -i original.mp4 -t 14 -an -vf "scale=720:1280" \
  -c:v libx264 -crf 30 -movflags +faststart assets/midia/hero-vertical.mp4
```

Sem ffmpeg: <https://www.veed.io> ou o próprio editor do celular resolvem cortar,
mutar e reduzir.

**Se um dia a mídia for panorâmica (16:9)**, remova a classe `hero--retrato` do
`<section class="hero …">` no `index.html` e ela passa a preencher o hero como
fundo. Nesse modo existem dois ajustes finos, direto no HTML:

```html
style="--foco:50% 30%; --zoom:1.1"
```

`--foco` escolhe qual faixa fica visível (`50% 30%` sobe, `50% 70%` desce) e
`--zoom` aproxima.
