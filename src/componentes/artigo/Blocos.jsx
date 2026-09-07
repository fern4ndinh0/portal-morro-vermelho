/* ==========================================================================
   BLOCOS DE TEXTO DE UM VERBETE

   Cada forma que um bloco pode ter dentro de uma seção. O conteúdo mora em
   src/dados/documentos/; a forma mora aqui. Editar um texto não deve exigir
   abrir o arquivo que desenha a navbar — era exatamente o que acontecia
   quando gerador, menu e os cinco verbetes dividiam um arquivo de 826 linhas.

   | Bloco                                       | Vira                        |
   |---------------------------------------------|-----------------------------|
   | 'texto'                                     | parágrafo                   |
   | { abertura }                                | parágrafo com capitular     |
   | { sub }                                     | subtítulo <h3>              |
   | { lista: [] }                               | lista com marcador de filete|
   | { citacao, autoria }                        | citação em papel envelhecido|
   | { lacuna }                                  | caixa "Lacuna documental"   |
   | { nota, titulo }                            | caixa de nota editorial     |
   | { figura, arquivo, legenda, alt, credito }  | figura com crédito          |
   | { galeria: [{arquivo, alt, legenda, credito}] } | grade de fotografias    |

   Forma não reconhecida derruba a geração. Um bloco com a chave escrita
   errado sumiria em silêncio do texto publicado, que é o pior desfecho
   possível num portal cujo assunto é preservação.
   ========================================================================== */

import { Icone } from '../../dados/icones.jsx';
import { MOSTRAR_LACUNAS } from '../../dados/contato.js';
import { CaixaDeMidia } from '../CaixaDeMidia.jsx';
import { Html } from '../Texto.jsx';

/* --------------------------------------------------------------------------
   FIGURA

   Diferença em relação ao projeto original: lá o <img> vinha comentado no
   HTML gerado e era preciso descomentá-lo à mão. Aqui basta salvar o arquivo
   em midia/ e declarar 'alt' no bloco — se o arquivo não existir, o espaço
   reservado permanece, como antes.

   O 'alt' é OBRIGATÓRIO para a imagem aparecer, e isso é deliberado: num
   acervo, o alt é a peça para quem não enxerga. Uma figura sem descrição
   continua exibindo o espaço reservado em vez de publicar uma imagem muda.
   -------------------------------------------------------------------------- */

function Figura({ b }) {
  const podeMostrar = Boolean(b.arquivo && b.alt);

  return (
    <CaixaDeMidia
      as="figure"
      className="figura"
      src={podeMostrar ? `midia/${b.arquivo}` : undefined}
      alt={b.alt || ''}
      largura={b.largura}
      altura={b.altura}
    >
      <div className="figura__ausente">
        <Icone nome="camera" />
        <p>{b.figura}</p>
      </div>
      <figcaption>
        {podeMostrar ? null : <><strong>Imagem a incorporar.</strong>{' '}</>}
        {b.legenda && <Html as="span" texto={b.legenda} />}
        {/* Enquanto não houver crédito declarado, o texto continua sendo a
            cobrança. Uma foto publicada sem crédito é uma foto que o portal
            não deveria estar exibindo, e a legenda diz isso em voz alta. */}
        <span className="figura__credito">
          {b.credito || 'Crédito e licença obrigatórios na publicação.'}
        </span>
      </figcaption>
    </CaixaDeMidia>
  );
}

/* --------------------------------------------------------------------------
   GALERIA

   Uma grade de fotografias, para a página 29. Não é carrossel e não é
   lightbox de propósito: as duas coisas dependem de JavaScript para mostrar
   a imagem, e aqui a regra é que a fotografia esteja visível sem script.
   Cada peça é uma <figure> completa, com descrição e crédito — o que a
   torna também a unidade certa para catalogação.

   A primeira imagem recebe prioridade de carregamento; as outras são
   preguiçosas, que é o que faz uma página de dezesseis fotos abrir rápido.
   -------------------------------------------------------------------------- */

function Galeria({ b }) {
  const pecas = b.galeria.filter((p) => p.arquivo && p.alt);

  return (
    <div className="galeria" role="group" aria-label="Galeria de fotografias do acervo">
      {pecas.map((p, i) => (
        <figure className="galeria__peca" key={p.arquivo}>
          <img
            src={`midia/${p.arquivo}`}
            alt={p.alt}
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding="async"
          />
          <figcaption>
            <Html as="span" texto={p.legenda} />
            <span className="figura__credito">
              {p.credito || 'Crédito e licença obrigatórios na publicação.'}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function Bloco({ b }) {
  if (typeof b === 'string') return <Html texto={b} />;

  if (b.abertura) return <Html className="abertura" texto={b.abertura} />;

  if (b.sub) return <Html as="h3" texto={b.sub} />;

  if (b.lista) {
    return (
      <ul>
        {b.lista.map((x, i) => <Html as="li" key={i} texto={x} />)}
      </ul>
    );
  }

  if (b.citacao) {
    return (
      <blockquote className="citacao-fonte">
        <Html texto={b.citacao} />
        <footer>{b.autoria}</footer>
      </blockquote>
    );
  }

  if (b.lacuna) {
    if (!MOSTRAR_LACUNAS) return null;
    return (
      <div className="nota nota--lacuna">
        <Icone nome="alerta" />
        <div>
          <p className="nota__titulo">Lacuna documental</p>
          <Html texto={b.lacuna} />
        </div>
      </div>
    );
  }

  if (b.nota) {
    return (
      <div className="nota">
        <Icone nome="doc" />
        <div>
          <p className="nota__titulo">{b.titulo || 'Nota'}</p>
          <Html texto={b.nota} />
        </div>
      </div>
    );
  }

  if (b.galeria) return <Galeria b={b} />;
  if (b.figura) return <Figura b={b} />;

  throw new Error('Bloco de texto sem forma reconhecida: ' + JSON.stringify(b).slice(0, 120));
}
