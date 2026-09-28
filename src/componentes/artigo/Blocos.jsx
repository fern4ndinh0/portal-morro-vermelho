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
   | { figura, arquivo, legenda, alt, credito }  | figura com crédito          |
   | { galeria: [{arquivo, alt, legenda, credito}] } | grade de fotografias    |

   Forma não reconhecida derruba a geração. Um bloco com a chave escrita
   errado sumiria em silêncio do texto publicado, que é o pior desfecho
   possível num portal cujo assunto é preservação.
   ========================================================================== */

import { Icone } from '../../dados/icones.jsx';
import { Midia, useMidia } from '../CaixaDeMidia.jsx';
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

   QUADRO DE PROPORÇÃO FIXA
   A foto não dita mais a altura da figura: toda figura tem o mesmo quadro,
   e a foto se encaixa inteira dentro dele, centrada, sem corte. Uma foto em
   pé e uma panorâmica ocupam o mesmo espaço na página. O quadro é um link
   para o arquivo; com JavaScript, o clique abre o Ampliador (ver
   componentes/Ampliador.jsx), e a foto aparece no tamanho da tela.
   -------------------------------------------------------------------------- */

function Figura({ b }) {
  const src = b.arquivo && b.alt ? `midia/${b.arquivo}` : undefined;
  const midia = useMidia(src);
  const mostra = src && !midia.ausente;

  return (
    <figure className="figura" {...midia.propsDaCaixa}>
      {/* Um ou outro, nunca os dois: o servidor já sabe se o arquivo existe,
          então a foto sai sem o espaço reservado por baixo, mesmo sem JS. */}
      {mostra ? (
        <a className="figura__quadro" href={src} data-ampliar="">
          <Midia midia={midia} src={src} alt={b.alt} largura={b.largura} altura={b.altura} />
          <span className="figura__ampliar" aria-hidden="true"><Icone nome="ampliar" /></span>
          <span className="sr"> (ampliar foto)</span>
        </a>
      ) : (
        <div className="figura__ausente">
          <Icone nome="camera" />
          <p>{b.figura}</p>
        </div>
      )}
      <figcaption>
        {b.legenda && <Html as="span" texto={b.legenda} />}
        {b.credito && <span className="figura__credito">{b.credito}</span>}
      </figcaption>
    </figure>
  );
}

/* --------------------------------------------------------------------------
   GALERIA

   Uma grade de fotografias. Não é carrossel de propósito: carrossel depende
   de JavaScript para mostrar a imagem, e aqui a regra é que a fotografia
   esteja visível sem script. Cada peça é uma <figure> completa, com
   descrição e crédito — o que a torna também a unidade certa para
   catalogação.

   Cada miniatura é um link para o arquivo, que o Ampliador intercepta: na
   grade a foto aparece recortada no quadro 4/3, e o clique a mostra inteira.

   A primeira imagem recebe prioridade de carregamento; as outras são
   preguiçosas, que é o que faz uma página de dezesseis fotos abrir rápido.
   -------------------------------------------------------------------------- */

function Galeria({ b }) {
  const pecas = b.galeria.filter((p) => p.arquivo && p.alt);

  return (
    <div className="galeria" role="group" aria-label="Galeria de fotografias do acervo">
      {pecas.map((p, i) => (
        <figure className="galeria__peca" key={p.arquivo}>
          <a className="galeria__quadro" href={`midia/${p.arquivo}`} data-ampliar="">
            <img
              src={`midia/${p.arquivo}`}
              alt={p.alt}
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
            <span className="figura__ampliar" aria-hidden="true"><Icone nome="ampliar" /></span>
            <span className="sr"> (ampliar foto)</span>
          </a>
          <figcaption>
            {p.legenda && <Html as="span" texto={p.legenda} />}
            {p.credito && <span className="figura__credito">{p.credito}</span>}
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
    /* As transcricoes dos documentos originais costumam ter varios paragrafos.
       Um array vira varios <p> dentro da mesma citacao — e nao uma pilha de
       blockquotes separados, que leria como varias citacoes diferentes. */
    const paragrafos = Array.isArray(b.citacao) ? b.citacao : [b.citacao];
    return (
      <blockquote className="citacao-fonte">
        {paragrafos.map((t, i) => <Html texto={t} key={i} />)}
        {b.autoria && <footer>{b.autoria}</footer>}
      </blockquote>
    );
  }

  if (b.galeria) return <Galeria b={b} />;
  if (b.figura) return <Figura b={b} />;

  throw new Error('Bloco de texto sem forma reconhecida: ' + JSON.stringify(b).slice(0, 120));
}
