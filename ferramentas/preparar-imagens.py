# =============================================================================
# PREPARAR-IMAGENS — escolhe, recorta e reduz as fotografias que vão ao ar
#
# POR QUE ESTE É O ÚNICO SCRIPT EM PYTHON NO PROJETO
# Redimensionar JPEG exige um decodificador. O Node não traz nenhum, e uma
# dependência de imagem no package.json seria a única coisa a quebrar quando
# alguém rodar `npm install` daqui a dez anos. O Python com PIL já está na
# máquina, e este script roda UMA VEZ por lote de fotos — não faz parte de
# `npm run gerar`. Se um dia o Python não estiver disponível, as imagens já
# processadas continuam em midia/ e o site continua gerando.
#
# O QUE ELE FAZ
# Lê o MANIFESTO abaixo, que é a curadoria: de 527 imagens extraídas dos
# documentos, estas são as que vão ao ar. Cada uma vira um arquivo em midia/
# com nome legível, no máximo 1600 px de largura e abaixo do teto de peso que
# midia/LEIA-ME.md estabelece.
#
# O MANIFESTO É A DECISÃO EDITORIAL, e o critério dele é um só: entram
# fotografias que são evidentemente registro de campo do próprio acervo —
# ruínas, minas, o casario, os interiores das igrejas, a Cavalhada, a
# paisagem, um documento de jornal. FICAM DE FORA pinturas, gravuras e
# retratos de personagens históricos gerais, que nos documentos originais
# vêm marcados "Reprodução da internet" e cuja licença não conhecemos.
#
# CRÉDITO AINDA A CONFIRMAR. O que se sabe é a procedência (o acervo de
# pesquisa de Geraldo Lopes e Viviane Pinheiro) e, em alguns casos, o nome do
# fotógrafo anotado no documento. Os campos de crédito nos verbetes dizem
# exatamente isso, sem inventar autoria.
#
#   python ferramentas/preparar-imagens.py
# =============================================================================

import os, sys
from PIL import Image, ImageOps

# O console do Windows abre em cp1252 e engasga em qualquer caractere fora
# dele. Sem esta linha, um acento no nome de um arquivo derruba o script
# inteiro na hora de IMPRIMIR o sucesso — o que é um jeito bobo de falhar.
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ORIGEM = os.path.join(RAIZ, 'originais', 'word', 'imagens')
DESTINO = os.path.join(RAIZ, 'midia')

LARGURA_MAX = 1600          # nada no portal é exibido maior que isto
TETO_KB = 400               # o teto de midia/LEIA-ME.md
TETO_KB_GALERIA = 260       # a galeria mostra 16 de uma vez: precisa ser leve

# (arquivo de origem, nome de destino, teto em KB)
MANIFESTO = [
    # --- Galeria (página 29) ------------------------------------------------
    ('14MV00/image3.jpg',  'galeria-morro-santa-cruz.jpg',   TETO_KB_GALERIA),
    ('14MV00/image1.jpg',  'galeria-matriz-antiga.jpg',      TETO_KB_GALERIA),
    ('12MV00/image1.jpg',  'galeria-familia-de-padres.jpg',  TETO_KB_GALERIA),
    ('18MV00/image8.jpg',  'galeria-cavalhada-matriz.jpg',   TETO_KB_GALERIA),
    ('18MV00/image10.jpg', 'galeria-cavalhada-fogos.jpg',    TETO_KB_GALERIA),
    ('14MV00/image5.jpg',  'galeria-forro-rosario.jpg',      TETO_KB_GALERIA),
    ('14MV00/image16.jpg', 'galeria-capela-rosario.jpg',     TETO_KB_GALERIA),
    ('14MV00/image15.jpg', 'galeria-nave-matriz.jpg',        TETO_KB_GALERIA),
    ('11MV00/image5.jpg',  'galeria-minas-geraes-1895.jpg',  TETO_KB),
    ('03MV00/image10.jpg', 'galeria-boca-de-mina.jpg',       TETO_KB_GALERIA),
    ('04MV00/image1.jpg',  'galeria-ruinas-viracopos.jpg',   TETO_KB_GALERIA),
    ('05MV00/image7.jpg',  'galeria-barao-da-estrella.jpg',  TETO_KB_GALERIA),
    ('16MV00/image2.jpg',  'galeria-cachoeira-poco.jpg',     TETO_KB_GALERIA),
    ('08MV00/image5.jpg',  'galeria-tropeiros.jpg',          TETO_KB_GALERIA),
    ('15MV00/image2.jpg',  'galeria-paleotoca.jpg',          TETO_KB_GALERIA),
    ('19MV00/image12.jpg', 'galeria-bainha-aberta.jpg',      TETO_KB_GALERIA),

    # --- Figuras dentro dos verbetes ---------------------------------------
    ('03MV00/image16.jpg', 'figura-lavra-ouro.jpg',          TETO_KB),
    ('04MV00/image4.jpg',  'figura-nome-antigo.jpg',         TETO_KB),
    ('08MV00/image3.jpg',  'figura-estrada-real.jpg',        TETO_KB),
    ('05MV00/image5.jpg',  'figura-fazenda-do-cutao.jpg',    TETO_KB),
    ('11MV00/image6.jpg',  'figura-epidemia-da-bexiga.jpg',  TETO_KB),
    ('18MV00/image32.jpg', 'figura-matriz-nazareth.jpg',     TETO_KB),
    ('18MV00/image20.jpg', 'figura-cavalhada.jpg',           TETO_KB),
    ('16MV00/image9.jpg',  'figura-cachoeiras.jpg',          TETO_KB),
    ('15MV00/image6.jpg',  'figura-parque-do-gandarela.jpg', TETO_KB),
    ('19MV00/image1.jpg',  'figura-saberes.jpg',             TETO_KB),
    ('14MV00/image13.jpg', 'figura-atracoes.jpg',            TETO_KB),
    ('12MV00/image5.jpg',  'figura-familia-de-padres.jpg',   TETO_KB),
    ('20MV00/image7.jpg',  'figura-trilhas.jpg',             TETO_KB),
]


def reduzir(caminho, destino, teto_kb):
    im = Image.open(caminho)
    # exif_transpose respeita a orientação gravada pela câmera; sem isso, foto
    # de celular sai deitada.
    im = ImageOps.exif_transpose(im).convert('RGB')
    if im.width > LARGURA_MAX:
        im = im.resize((LARGURA_MAX, round(im.height * LARGURA_MAX / im.width)), Image.LANCZOS)

    # Desce a qualidade até caber no teto. Começa em 82, que é onde o JPEG
    # ainda não mostra artefato em fotografia, e não desce abaixo de 60.
    for q in (82, 76, 70, 65, 60):
        im.save(destino, 'JPEG', quality=q, optimize=True, progressive=True)
        if os.path.getsize(destino) <= teto_kb * 1024:
            return im.size, q, os.path.getsize(destino)
    return im.size, 60, os.path.getsize(destino)


def main():
    if not os.path.isdir(ORIGEM):
        sys.exit(f'não achei {ORIGEM}. Rode antes:  npm run word -- --imagens')
    os.makedirs(DESTINO, exist_ok=True)

    total, faltando = 0, []
    for origem, nome, teto in MANIFESTO:
        p = os.path.join(ORIGEM, origem)
        if not os.path.exists(p):
            faltando.append(origem)
            continue
        (w, h), q, tam = reduzir(p, os.path.join(DESTINO, nome), teto)
        total += tam
        print(f'  {nome:34s} {w:5d}x{h:<5d} q{q}  {tam // 1024:4d} KB   <- {origem}')

    print(f'\n  {len(MANIFESTO) - len(faltando)} imagens, {total / 1024 / 1024:.1f} MB em midia/')
    if faltando:
        print('\n  NÃO ENCONTRADAS (confira o nome em originais/word/imagens/):')
        for f in faltando:
            print('   ', f)


if __name__ == '__main__':
    main()
