# =============================================================================
# PREPARAR-ACERVO — as fotografias do acervo entregue por Geraldo e Viviane
#
# DE ONDE VEM
# A pasta de origem é a que os autores mantêm fora do repositório, com as
# fotografias que compõem hoje os documentos do Word. Os arquivos são nomeados
# NNMVxx: NN é o capítulo, xx a ordem dentro dele. Conferimos: 303 dos 349
# arquivos são byte a byte idênticos às imagens embutidas nos .docx — ou seja,
# o nome do arquivo já diz a que texto a foto pertence.
#
# POR QUE A ORIGEM FICA FORA DO REPOSITÓRIO
# São 261 MB de originais em resolução de câmera. O que entra no git é o
# resultado: midia/, com as imagens reduzidas. Mesma decisão que já valia para
# originais/word/imagens/. Se a pasta não estiver na máquina, este script
# avisa e não faz nada — midia/ continua no lugar e o site continua gerando.
#
# O QUE FICOU DE FORA, e é decisão editorial:
#   · ilustrações genéricas de banco de imagem (lobisomem, mula sem cabeça,
#     mãos luminosas) que acompanhavam o capítulo de lendas. São desenho de
#     estoque, não registro do lugar;
#   · a fotografia clínica de varíola do capítulo 11 — é imagem médica de
#     procedência desconhecida, e o texto não precisa dela;
#   · pinturas e gravuras marcadas "Reprodução da internet" nos documentos,
#     cuja licença não se conhece. A exceção é o quadro de 1749 da Guerra dos
#     Emboabas, que o próprio documento credita ao Museu do Mosteiro de São
#     Bento, em Salvador.
#
#   python ferramentas/preparar-acervo.py
# =============================================================================

import io, os, sys, zipfile
from PIL import Image, ImageOps

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ORIGEM = r'C:\Arquivos soltos\Site Fernando'
DESTINO = os.path.join(RAIZ, 'midia')
WORD = os.path.join(RAIZ, 'originais', 'word')

LARGURA_MAX = 1600
TETO_KB = 320

# (arquivo na pasta de origem, nome em midia/)
MANIFESTO = [
    # --- 03 · A Busca do Ouro ----------------------------------------------
    ('03MV11.jpg', 'f-ouro-bateia.jpg'),
    ('03MV12.jpg', 'f-ouro-lavra-antiga.jpg'),
    ('03MV02.jpg', 'f-ouro-cata-aberta.jpg'),
    ('03MV05.jpg', 'f-ouro-galeria-grupo.jpg'),
    ('03MV07.jpg', 'f-ouro-galeria-pilares.jpg'),
    ('03MV17.jpg', 'f-ouro-galeria-fundo.jpg'),
    ('03MV18.jpg', 'f-ouro-boca-mata.jpg'),
    ('03MV10.jpg', 'f-ouro-boca-encosta.jpg'),
    ('03MV13.jpg', 'f-ouro-corrego.jpg'),

    # --- 04 · Arraial de Viracopos -----------------------------------------
    ('04MV03.jpg', 'f-viracopos-ruina-parede.jpg'),
    ('04MV02.jpg', 'f-viracopos-arco-pedra.jpg'),
    ('04MV07.jpg', 'f-viracopos-muro-pedra.jpg'),
    ('04MV06.jpg', 'f-viracopos-calcamento.jpg'),
    ('04MV05.jpg', 'f-viracopos-ruina-bambus.jpg'),
    ('04MV01.jpg', 'f-viracopos-ribeirao.jpg'),
    ('04MV08.jpg', 'f-viracopos-espigao.jpg'),

    # --- 05 · Fazenda do Cutão ---------------------------------------------
    ('05MV01.jpg', 'f-cutao-palacio-barao.jpg'),
    ('05MV05.jpg', 'f-cutao-retrato-barao.jpg'),
    ('05MV07.jpg', 'f-cutao-lagoa.jpg'),
    ('05MV04.jpg', 'f-cutao-paredao.jpg'),
    ('05MV06.jpg', 'f-cutao-tunel.jpg'),
    ('05MV08.jpg', 'f-cutao-casa-apuracao.jpg'),
    ('05MV03.jpg', 'f-cutao-mata.jpg'),

    # --- 06 · Retiro dos Capetas -------------------------------------------
    ('06MV01.jpg', 'f-capetas-casa-pedra.jpg'),
    ('06MV04.jpg', 'f-capetas-muro.jpg'),
    ('06MV03.jpg', 'f-capetas-desfiladeiro.jpg'),
    ('06MV02.jpg', 'f-capetas-serra.jpg'),

    # --- 08 · Estrada Real --------------------------------------------------
    ('08MV01.jpg', 'f-estrada-carroca.jpg'),
    ('08MV02.jpg', 'f-estrada-marco.jpg'),
    ('08MV06.jpg', 'f-estrada-caminho.jpg'),
    ('08MV04.jpg', 'f-estrada-serra.jpg'),

    # --- 09 · Guerra dos Emboabas ------------------------------------------
    ('09MV01.jpg', 'f-emboabas-quadro-1749.jpg'),
    ('09MV03x.jpg', 'f-emboabas-quadro-ermida.jpg'),

    # --- 10 · Levante das Bateias ------------------------------------------
    ('10MV02.jpg', 'f-bateias-bateia.jpg'),
    ('10MV03.jpg', 'f-bateias-corrego.jpg'),

    # --- 11 · Epidemia da Bexiga -------------------------------------------
    ('11MV01.jpg', 'f-bexiga-povoado-antigo.jpg'),
    ('11MV02.jpg', 'f-bexiga-rua-antiga.jpg'),
    ('11MV03.jpg', 'f-bexiga-cruzeiro-cemiterio.jpg'),
    ('11MV05.jpg', 'f-bexiga-caminho-cemiterio.jpg'),

    # --- 12 · Família de Padres --------------------------------------------
    # A pasta não traz foto do capítulo 12: o retrato da família e o da
    # comenda já vieram do próprio .docx, e continuam em midia/ como
    # figura-familia-de-padres.jpg e galeria-familia-de-padres.jpg.

    # --- 13 · Diretas-Já ----------------------------------------------------
    ('13MV01.jpg', 'f-diretas-opiniao.jpg'),
    ('13MV02.jpg', 'f-diretas-folha.jpg'),

    # --- 14 · Atrações ------------------------------------------------------
    ('14MV01.jpg', 'f-atracoes-matriz-antiga.jpg'),
    ('14MV02.jpg', 'f-atracoes-nave.jpg'),
    ('14MV04.jpg', 'f-atracoes-altar-mor.jpg'),
    ('14MV05x.jpg', 'f-atracoes-forro-milagre.jpg'),
    ('14MV06.jpg', 'f-atracoes-talha-monograma.jpg'),
    ('14MV03.jpg', 'f-atracoes-coro.jpg'),
    ('14MV09.jpg', 'f-atracoes-rosario-interior.jpg'),
    ('14MV10.jpg', 'f-atracoes-rosario-forro.jpg'),
    ('14MV11.jpg', 'f-atracoes-cruzeiro-rosario.jpg'),
    ('14MV13.jpg', 'f-atracoes-morro-santa-cruz.jpg'),
    ('14MV14.jpg', 'f-atracoes-pedra-do-sino.jpg'),
    ('14MV16.jpg', 'f-atracoes-banda.jpg'),

    # --- 15 · Parque do Gandarela ------------------------------------------
    ('15MV01.jpg', 'f-gandarela-serra-neblina.jpg'),
    ('15MV05.jpg', 'f-gandarela-vale.jpg'),
    ('15MV04.jpg', 'f-gandarela-observadores.jpg'),
    ('15MV06.jpg', 'f-gandarela-estrada-mata.jpg'),
    ('15MV07.jpg', 'f-gandarela-paleotoca.jpg'),
    ('15MV02x.jpg', 'f-gandarela-mirante.jpg'),

    # --- 16 · Cachoeiras e Cascatas ----------------------------------------
    ('16MV01.jpg', 'f-cachoeiras-santo-antonio.jpg'),
    ('16MV10.jpg', 'f-cachoeiras-poco.jpg'),
    ('16MV09.jpg', 'f-cachoeiras-queda-alta.jpg'),
    ('16MV17.jpg', 'f-cachoeiras-cascatas-geriza.jpg'),
    ('16MV07.jpg', 'f-cachoeiras-lagoa.jpg'),
    ('16MV11.jpg', 'f-cachoeiras-maquine.jpg'),
    ('16MV16.jpg', 'f-cachoeiras-banho-antigo.jpg'),

    # --- 17 · Festas e Tradições -------------------------------------------
    ('17MV01.jpg', 'f-festas-padroeira.jpg'),
    ('17MV20.jpg', 'f-festas-ofertorio.jpg'),
    ('17MV05.jpg', 'f-festas-velas.jpg'),
    ('17MV06.jpg', 'f-festas-tapete.jpg'),
    ('17MV27.jpg', 'f-festas-procissao-velas.jpg'),
    ('17MV08.jpg', 'f-festas-senhor-dos-passos.jpg'),
    ('17MV09.jpg', 'f-festas-lavagem-pes.jpg'),
    ('17MV24.jpg', 'f-festas-quaresma.jpg'),
    ('17MV11.jpg', 'f-festas-cruzeiro-velas.jpg'),
    ('17MV16.jpg', 'f-festas-estandarte.jpg'),
    ('17MV17.jpg', 'f-festas-coroacao.jpg'),
    ('17MV15.jpg', 'f-festas-contradanca.jpg'),
    ('17MV19.jpg', 'f-festas-alua.jpg'),
    ('17MV10.jpg', 'f-festas-romaria.jpg'),

    # --- 18 · Cavalhada -----------------------------------------------------
    ('18MV03.jpg', 'f-cavalhada-cristao.jpg'),
    ('18MV17.jpg', 'f-cavalhada-mouro.jpg'),
    ('18MV06.jpg', 'f-cavalhada-matriz-dia.jpg'),
    ('18MV10.jpg', 'f-cavalhada-pares-fogos.jpg'),
    ('18MV04.jpg', 'f-cavalhada-mastro-levante.jpg'),
    ('18MV22x.jpg', 'f-cavalhada-mastro-erguido.jpg'),
    ('18MV16.jpg', 'f-cavalhada-enfeites.jpg'),
    ('18MV23.jpg', 'f-cavalhada-arcos.jpg'),
    ('18MV01.jpg', 'f-cavalhada-fogos.jpg'),
    ('18MV15.jpg', 'f-cavalhada-bandeira.jpg'),
    ('18MV21.jpg', 'f-cavalhada-mirim.jpg'),
    ('18MV20.jpg', 'f-cavalhada-mascarados.jpg'),
    ('18MV08.jpg', 'f-cavalhada-ornamentacao.jpg'),
    ('18MV07.jpg', 'f-cavalhada-mastro-campo.jpg'),

    # --- 19 · Artesanato e Gastronomia -------------------------------------
    ('19MV03.jpg', 'f-saberes-bainha-fazendo.jpg'),
    ('19MV34.jpg', 'f-saberes-bainha-detalhe.jpg'),
    ('19MV32.jpg', 'f-saberes-bainha-peca.jpg'),
    ('19MV01.jpg', 'f-saberes-bordando.jpg'),
    ('19MV09.jpg', 'f-saberes-oficina-pintura.jpg'),
    ('19MV10.jpg', 'f-saberes-pintura-pano.jpg'),
    ('19MV15.jpg', 'f-saberes-fogao.jpg'),
    ('19MV05.jpg', 'f-saberes-queca.jpg'),
    ('19MV35.jpg', 'f-saberes-rosquinhas.jpg'),
    ('19MV36.jpg', 'f-saberes-canudos.jpg'),
    ('19MV50.jpg', 'f-saberes-mel.jpg'),
    ('19MV13.jpg', 'f-saberes-tacho.jpg'),

    # --- 20 · Trilhas Ecológicas -------------------------------------------
    ('20MV04.jpg', 'f-trilhas-caminhada.jpg'),
    ('20MV06.jpg', 'f-trilhas-caminhantes.jpg'),
    ('20MV07.jpg', 'f-trilhas-ciclistas.jpg'),
    ('20MV05.jpg', 'f-trilhas-ciclistas-ladeira.jpg'),
    ('20MV09.jpg', 'f-trilhas-descanso-lagoa.jpg'),
    ('20MV12z.jpg', 'f-trilhas-trilheiros.jpg'),
    ('20MV02.jpg', 'f-trilhas-jipes.jpg'),
    ('20MV12.jpg', 'f-trilhas-motos-matriz.jpg'),

    # --- 21 · Cultura Popular ----------------------------------------------
    ('21MV02.jpg', 'f-cultura-compromisso-capa.jpg'),
    ('21MV15x.jpg', 'f-cultura-compromisso-pagina.jpg'),
    ('21MV03.jpg', 'f-cultura-lavagem-cristo.jpg'),
    ('21MV10.jpg', 'f-cultura-musico.jpg'),
    ('21MV12.jpg', 'f-cultura-tapete.jpg'),
    ('21MV05.jpg', 'f-cultura-escola.jpg'),
    ('21MV06.jpg', 'f-cultura-cavalhada-mirim.jpg'),

    # --- 22 · Bens Históricos ----------------------------------------------
    ('22MV01.jpg', 'f-bens-matriz-antiga.jpg'),
    ('22MV02.jpg', 'f-bens-rosario-aerea.jpg'),
    ('22MV03.jpg', 'f-bens-vaos.jpg'),
    ('22MV06.jpg', 'f-bens-casario-1.jpg'),
    ('22MV08.jpg', 'f-bens-casario-2.jpg'),
    ('22MV11.jpg', 'f-bens-casario-ruina.jpg'),
    ('22MV08x.jpg', 'f-bens-rua-festa.jpg'),

    # --- 23 · Notícias da Terra --------------------------------------------
    ('23MV09.jpg', 'f-noticias-morro-devastado.jpg'),
    ('23MV08.jpg', 'f-noticias-erosao.jpg'),
    ('23MV11.jpg', 'f-noticias-cemiterio.jpg'),
    ('23MV01.jpg', 'f-noticias-biblioteca.jpg'),
    ('23MV06.jpg', 'f-noticias-desbravadores.jpg'),
    ('23MV03.jpg', 'f-noticias-expedicao.jpg'),
    ('23MV13.jpg', 'f-noticias-estrada.jpg'),

    # --- 25 · Histórias, Casos e Lendas ------------------------------------
    ('25MV01.jpg', 'f-lendas-padroeira.jpg'),
    ('25MV04.jpg', 'f-lendas-cachaca.jpg'),
    ('25MV03.jpg', 'f-lendas-encomendacao.jpg'),
    ('25MV05.jpg', 'f-lendas-fogueira.jpg'),
    ('25MV07.jpg', 'f-lendas-vestidinhos.jpg'),
    ('25MV02.jpg', 'f-lendas-morro-estrada.jpg'),

    # --- 26 · Serviços ------------------------------------------------------
    ('26MV04.jpg', 'f-servicos-aerea.jpg'),
    ('26MV03.jpg', 'f-servicos-mapa.jpg'),
    ('26MV02.jpg', 'f-servicos-restaurante.jpg'),
    ('26MV01.jpg', 'f-servicos-pousada.jpg'),

    # --- 27 · Nossa Gente ---------------------------------------------------
    ('27MV06.jpg', 'f-gente-padre-joao.jpg'),
    ('27MV03.jpg', 'f-gente-professor.jpg'),
    ('27MV07.jpg', 'f-gente-barao-obito.jpg'),
    ('27MV09.jpg', 'f-gente-dona-lica.jpg'),
    ('27MV01.jpg', 'f-gente-pintora.jpg'),
    ('27MV05.jpg', 'f-gente-senhora.jpg'),
    ('27MV12.jpg', 'f-gente-cordisburgo.jpg'),

    # --- 28 · Outras Coisas -------------------------------------------------
    ('28MV01.jpg', 'f-outras-te-deum.jpg'),
    ('28MV02.jpg', 'f-outras-santissimo.jpg'),
    ('28MV09.jpg', 'f-outras-carta-vicoso.jpg'),
    ('28MV10.jpg', 'f-outras-carta-2.jpg'),
    ('28MV03.jpg', 'f-outras-minas-geraes.jpg'),
    ('28MV07.jpg', 'f-outras-actualidade.jpg'),

    # --- Conferência com o Word de layout (NNMV00.docx) ---------------------
    # Fotos que o layout de cada capítulo traz e o site ainda não tinha. Foram
    # encaixadas pela LEGENDA que o Word põe ao lado de cada foto, e não pelo
    # nome do arquivo. 'docx:ARQUIVO:media/imagemN' = imagem que só existe
    # dentro do .docx, lida de originais/word/.
    # cap. 02
    ('docx:02MV00.docx:media/image1.jpeg', 'f-historia-panorama.jpg'),
    ('docx:02MV00.docx:media/image4.jpg', 'f-historia-bandeiras.jpg'),
    ('docx:02MV00.docx:media/image5.jpg', 'f-historia-mapa.jpg'),
    ('docx:02MV00.docx:media/image7.jpg', 'f-historia-cruzeiro.jpg'),
    ('docx:02MV00.docx:media/image10.jpg', 'f-historia-tropa-matriz.jpg'),
    ('docx:02MV00.docx:media/image13.jpg', 'f-historia-estrada-eucaliptos.jpg'),
    ('docx:02MV00.docx:media/image11.jpg', 'f-historia-gruta.jpg'),
    ('docx:02MV00.docx:media/image15.jpg', 'f-historia-casa-antiga.jpg'),
    ('docx:02MV00.docx:media/image16.jpg', 'f-historia-largo-matriz.jpg'),
    ('docx:02MV00.docx:media/image18.jpg', 'f-historia-vista-antiga.jpg'),
    ('docx:02MV00.docx:media/image26.jpg', 'f-historia-casario.jpg'),
    ('docx:02MV00.docx:media/image25.jpg', 'f-historia-rua-cavalos.jpg'),
    ('docx:02MV00.docx:media/image21.jpg', 'f-historia-boiada.jpg'),
    ('docx:02MV00.docx:media/image20.jpg', 'f-historia-estrada-entardecer.jpg'),
    ('docx:02MV00.docx:media/image17.jpg', 'f-historia-bula.jpg'),
    ('docx:02MV00.docx:media/image19.jpg', 'f-historia-matriz-multidao.jpg'),
    ('docx:02MV00.docx:media/image12.jpg', 'f-historia-rua-motos.jpg'),
    ('docx:02MV00.docx:media/image24.jpg', 'f-historia-artesanato.jpg'),
    ('docx:02MV00.docx:media/image23.jpg', 'f-historia-rua-antiga.jpg'),
    ('docx:02MV00.docx:media/image22.jpg', 'f-historia-mineracao.jpg'),
    # cap. 03
    ('03MV01.jpg', 'f-ouro-fenda-rocha.jpg'),
    ('03MV03.jpg', 'f-ouro-galeria-mata.jpg'),
    ('03MV04.jpg', 'f-ouro-galeria-entulho.jpg'),
    ('03MV06.jpg', 'f-ouro-galeria-cutao.jpg'),
    ('03MV08.jpg', 'f-ouro-cruz-esculpida.jpg'),
    ('03MV09.jpg', 'f-ouro-galeria-luz.jpg'),
    ('03MV14.jpg', 'f-ouro-boca-folhas.jpg'),
    ('03MV15.jpg', 'f-ouro-gruta-amarela.jpg'),
    ('03MV16.jpg', 'f-ouro-gruta-saida.jpg'),
    # cap. 05
    ('05MV02.jpg', 'f-cutao-ruinas-palacio.jpg'),
    # cap. 08
    ('08MV05.jpg', 'f-estrada-encosta.jpg'),
    # cap. 09
    ('09MV03.jpg', 'f-emboabas-quadro-igreja.jpg'),
    ('09MV05.jpg', 'f-emboabas-monumento.jpg'),
    ('09MV10.jpg', 'f-emboabas-celebracao.jpg'),
    ('09MV08.jpg', 'f-emboabas-emboaba-capela.jpg'),
    ('09MV07.jpg', 'f-emboabas-emboaba-campo.jpg'),
    # cap. 11
    ('11MV04.jpg', 'f-bexiga-jornal-1895.jpg'),
    # cap. 12
    ('docx:12MV00.docx:media/image1.jpg', 'f-padres-familia.jpg'),
    ('docx:12MV00.docx:media/image12.jpg', 'f-padres-professor.jpg'),
    ('docx:12MV00.docx:media/image3.jpg', 'f-padres-casarao.jpg'),
    ('docx:12MV00.docx:media/image9.jpg', 'f-padres-nico.jpg'),
    ('docx:12MV00.docx:media/image4.jpg', 'f-padres-joao-capela.jpg'),
    ('docx:12MV00.docx:media/image11.jpg', 'f-padres-joao-roca.jpg'),
    ('docx:12MV00.docx:media/image10.jpg', 'f-padres-joao-estatua.jpg'),
    ('docx:12MV00.docx:media/image8.jpg', 'f-padres-pedro.jpg'),
    ('docx:12MV00.docx:media/image7.jpg', 'f-padres-benjamim.jpg'),
    ('docx:12MV00.docx:media/image6.jpg', 'f-padres-alberto.jpg'),
    # cap. 13
    ('13MV04.jpg', 'f-diretas-matriz.jpg'),
    # cap. 14
    ('14MV05.jpg', 'f-atracoes-senhor-morto.jpg'),
    ('docx:14MV00.docx:media/image4.jpg', 'f-atracoes-rosario-capela.jpg'),
    ('14MV12.jpg', 'f-atracoes-morro-palmeiras.jpg'),
    # cap. 15
    ('15MV03.jpg', 'f-gandarela-travessia.jpg'),
    ('15MV10.jpg', 'f-gandarela-barranco.jpg'),
    # cap. 16
    ('16MV13.jpg', 'f-cachoeiras-estrelas.jpg'),
    ('16MV02.jpg', 'f-cachoeiras-estrelas-poco.jpg'),
    ('16MV15.jpg', 'f-cachoeiras-banho.jpg'),
    ('16MV12.jpg', 'f-cachoeiras-trovao.jpg'),
    ('docx:16MV00.docx:media/image6.jpg', 'f-cachoeiras-ribeirao.jpg'),
    ('docx:16MV00.docx:media/image12.jpg', 'f-cachoeiras-lagoa-geriza.jpg'),
    ('docx:16MV00.docx:media/image11.jpeg', 'f-cachoeiras-lagoa-mata.jpg'),
    ('docx:16MV00.docx:media/image13.jpg', 'f-cachoeiras-cascata-mata.jpg'),
    # cap. 17
    ('docx:17MV00.docx:media/image1.jpg', 'f-festas-cortejo-rua.jpg'),
    ('17MV02.jpg', 'f-festas-andor.jpg'),
    ('17MV03.jpg', 'f-festas-procissao-luminosa.jpg'),
    ('17MV22.jpg', 'f-festas-caminhada.jpg'),
    ('docx:17MV00.docx:media/image5.jpg', 'f-festas-mordomos.jpg'),
    ('17MV23.jpg', 'f-festas-enterro.jpg'),
    ('17MV21.jpg', 'f-festas-cristo-morto.jpg'),
    ('17MV28.jpg', 'f-festas-triunfo.jpg'),
    ('17MV13.jpg', 'f-festas-charola.jpg'),
    ('17MV14.jpg', 'f-festas-rosario.jpg'),
    ('17MV26.jpg', 'f-festas-rosario-mastro.jpg'),
    ('17MV12.jpg', 'f-festas-cavalhada-mirim.jpg'),
    ('17MV30.jpg', 'f-festas-cavalhada-mirim-embaixadores.jpg'),
    # cap. 18
    ('18MV01x.jpg', 'f-cavalhada-antiga.jpg'),
    ('18MV04x.jpg', 'f-cavalhada-embaixadores-fogos.jpg'),
    ('18MV14.jpg', 'f-cavalhada-matriz-fogos.jpg'),
    ('18MV05x.jpg', 'f-cavalhada-mastro-noite.jpg'),
    ('18MV13.jpg', 'f-cavalhada-bandeira-caete.jpg'),
    ('18MV25.jpg', 'f-cavalhada-comissao.jpg'),
    ('18MV26.jpg', 'f-cavalhada-mascarados-grupo.jpg'),
    ('18MV26x.jpg', 'f-cavalhada-mascarados-rua.jpg'),
    ('18MV18.jpg', 'f-cavalhada-fogos-igreja.jpg'),
    ('18MV19.jpg', 'f-cavalhada-fogos-torres.jpg'),
    ('18MV28x.jpg', 'f-cavalhada-fitas-mastro.jpg'),
    ('18MV28.jpg', 'f-cavalhada-pares-galope.jpg'),
    ('18MV12.jpg', 'f-cavalhada-matina.jpg'),
    ('18MV24.jpg', 'f-cavalhada-enfeites-preparo.jpg'),
    ('18MV27.jpg', 'f-cavalhada-traje-mouro.jpg'),
    ('18MV27x.jpg', 'f-cavalhada-traje-cristao.jpg'),
    ('18MV02.jpg', 'f-cavalhada-mouro-bandeira.jpg'),
    ('18MV02x.jpg', 'f-cavalhada-mouro-mastro.jpg'),
    ('18MV03x.jpg', 'f-cavalhada-cristao-amizade.jpg'),
    ('18MV22.jpg', 'f-cavalhada-mastro-placa.jpg'),
    # cap. 19
    ('19MV06.jpg', 'f-saberes-fogao-lenha.jpg'),
    ('19MV14.jpg', 'f-saberes-assadeira.jpg'),
    ('19MV36x.jpg', 'f-saberes-doce-de-leite.jpg'),
    ('19MV33.JPG', 'f-saberes-pintura-flores.jpg'),
    ('19MV11.jpg', 'f-saberes-pintura-cavalo.jpg'),
    # cap. 20
    ('20MV08.jpg', 'f-trilhas-turistas.jpg'),
    ('20MV10x.jpg', 'f-trilhas-largo-bicicletas.jpg'),
    ('20MV12x.jpg', 'f-trilhas-motos-ladeira.jpg'),
    ('20MV11x.jpg', 'f-trilhas-quadriciclo.jpg'),
    # cap. 21
    ('21MV01.jpg', 'f-cultura-corrida-saco.jpg'),
    ('21MV04.jpg', 'f-cultura-banda-igreja.jpg'),
    ('21MV09.jpg', 'f-cultura-procissao-nazareth.jpg'),
    ('21MV07.jpg', 'f-cultura-reis.jpg'),
    ('21MV14.jpg', 'f-cultura-velho-criancas.jpg'),
    ('21MV13.jpg', 'f-cultura-cachoeira.jpg'),
    ('21MV11.jpg', 'f-cultura-encomendacao.jpg'),
    # cap. 22
    ('22MV04.jpg', 'f-bens-casa-largo.jpg'),
    ('22MV07.jpg', 'f-bens-casa-varanda.jpg'),
    ('22MV05.jpg', 'f-bens-casa-palmeiras.jpg'),
    ('22MV09.jpg', 'f-bens-centenaria-1.jpg'),
    ('22MV10.jpg', 'f-bens-centenaria-2.jpg'),
    # cap. 23
    ('23MV02.jpg', 'f-noticias-trilha-mata.jpg'),
    ('23MV04.jpg', 'f-noticias-arvore-caida.jpg'),
    ('23MV05.jpg', 'f-noticias-barranco.jpg'),
    ('23MV07.jpg', 'f-noticias-gaioleiros.jpg'),
    ('23MV10.jpg', 'f-noticias-loteamento.jpg'),
    ('23MV12.jpg', 'f-noticias-praca.jpg'),
    # cap. 24
    ('24MV01.jpg', 'f-redes-cavalhada.jpg'),
    ('24MV02.jpg', 'f-redes-procissao.jpg'),
    ('24MV03.jpg', 'f-redes-lagoa.jpg'),
    ('24MV04.jpg', 'f-redes-ribeirao.jpg'),
    ('24MV05.jpg', 'f-redes-banda.jpg'),
    # cap. 25
    ('25MV06.jpg', 'f-lendas-cavaleiro.jpg'),
    # cap. 27
    ('27MV10.jpg', 'f-gente-ze-pinheiro.jpg'),
    ('27MV11.jpg', 'f-gente-capela-sao-jose.jpg'),
    ('27MV04.jpg', 'f-gente-geraldo-baixinho-2.jpg'),
    # cap. 28
    ('28MV04.jpg', 'f-outras-actualidade-1878.jpg'),
    ('28MV05.jpg', 'f-outras-vigilante.jpg'),
    ('28MV06.jpg', 'f-outras-diario-de-minas.jpg'),
    ('28MV08.jpg', 'f-outras-carta-1715.jpg'),

    # --- Avulsos ------------------------------------------------------------
    # Ficheiros sem o prefixo NNMV, que não estão nos .docx. São registro
    # recente do estado de conservação dos bens tombados — exatamente o que o
    # capítulo 22 denuncia — mais alguns retratos e paisagens.
    ('Geraldo Baixinho.JPG',                        'f-gente-geraldo-baixinho.jpg'),
    ('martírio 2.jpg',                              'f-atracoes-cruzeiro-martirio.jpg'),
    ('gand.jpg',                                    'f-gandarela-marco.jpg'),
    ('IMG_9509.jpg',                                'f-servicos-povoado.jpg'),
    ('DJI_0220.JPG',                                'f-cavalhada-aerea.jpg'),
    ('005774a0-eff2-4cea-9941-7852a0fe994a.jpg',    'f-bens-forro-cupim.jpg'),
    ('56dbf58a-04bd-4f0f-9add-a255e8c06557.jpg',    'f-bens-pintura-descascada.jpg'),
    ('608b9808-6e20-4175-b9f1-a71242bdbd78.jpg',    'f-bens-parede-danificada.jpg'),
    ('874FB5B8-C6C8-4DC0-9307-251C92DDB73D.jpg',    'f-bens-casarao-abandonado.jpg'),
    ('IMG_7612.JPG',                                'f-bens-rachadura.jpg'),
]


def reduzir(caminho, destino, teto_kb=TETO_KB):
    im = Image.open(caminho)
    im = ImageOps.exif_transpose(im).convert('RGB')
    if im.width > LARGURA_MAX:
        im = im.resize((LARGURA_MAX, round(im.height * LARGURA_MAX / im.width)), Image.LANCZOS)
    # Foto em pé com 1600 de largura fica com mais de 2000 de altura e não cabe
    # no teto nem baixando a qualidade. O que manda é a área, não a largura.
    if im.width * im.height > 1_600_000:
        f = (1_600_000 / (im.width * im.height)) ** 0.5
        im = im.resize((round(im.width * f), round(im.height * f)), Image.LANCZOS)
    for q in (82, 76, 70, 65, 60, 55, 50, 45):
        im.save(destino, 'JPEG', quality=q, optimize=True, progressive=True)
        if os.path.getsize(destino) <= teto_kb * 1024:
            return im.size, q, os.path.getsize(destino)
    return im.size, 45, os.path.getsize(destino)


def main():
    if not os.path.isdir(ORIGEM):
        sys.exit('não achei a pasta de origem:\n  %s\n'
                 'As imagens já processadas continuam em midia/.' % ORIGEM)
    os.makedirs(DESTINO, exist_ok=True)

    total, faltando, nomes = 0, [], set()
    for origem, nome in MANIFESTO:
        if nome in nomes:
            sys.exit('nome repetido no manifesto: ' + nome)
        nomes.add(nome)
        if origem.startswith('docx:'):
            _, docx, interno = origem.split(':', 2)
            try:
                p = io.BytesIO(zipfile.ZipFile(os.path.join(WORD, docx)).read('word/' + interno))
            except (OSError, KeyError):
                faltando.append(origem)
                continue
        else:
            p = os.path.join(ORIGEM, origem)
            if not os.path.exists(p):
                faltando.append(origem)
                continue
        (w, h), q, tam = reduzir(p, os.path.join(DESTINO, nome))
        total += tam
        print('  %-38s %5dx%-5d q%d %4d KB   <- %s' % (nome, w, h, q, tam // 1024, origem))

    print('\n  %d imagens, %.1f MB' % (len(MANIFESTO) - len(faltando), total / 1024 / 1024))
    if faltando:
        print('\n  NÃO ENCONTRADAS:')
        for f in faltando:
            print('   ', f)


if __name__ == '__main__':
    main()
