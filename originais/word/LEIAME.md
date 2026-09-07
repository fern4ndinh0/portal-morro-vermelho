# Coloque os arquivos do Word aqui

Copie os `.docx` para esta pasta e rode, na raiz do projeto:

```bash
npm run word
```

Sai um `.md` ao lado de cada `.docx`, com o mesmo nome. Nada aqui é
publicado: `originais/` fica fora de `publicar/`.

## O que sobrevive à extração

Títulos, subtítulos, listas (com os níveis), tabelas, negrito, itálico,
citações, links com o endereço de destino e as notas de rodapé — que saem
numeradas no fim do arquivo, sob "Notas de rodapé do original".

## O que não sobrevive

Imagens coladas dentro do documento não são extraídas: elas precisam de nome,
crédito e descrição para entrar no acervo, e nada disso vem no arquivo. O
script avisa quantas encontrou. Mande as fotografias à parte, no maior tamanho
que tiver, para `originais/`.

Também se perdem cor de fonte, realce, caixas de texto, cabeçalho e rodapé de
página, e comentários de revisão.

## Só `.docx`

Um `.doc` do Word 97 é outro formato, binário. Abra no Word e salve como
`.docx`. Arquivos começando com `~$` são ignorados — é o bloqueio que o Word
cria enquanto o documento está aberto, não um documento.
