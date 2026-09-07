/* ==========================================================================
   ACERVO — o melhor detalhe da v1, levado a sério

   A moldura branca, o sepia variável e a fita adesiva torta eram o único
   momento com alma no site original. Aqui: peças de verdade, setas que
   funcionam, teclado, e a peça sem digitalização SE DECLARA em vez de sumir
   ou de exibir uma foto de banco de imagem.

   Os quatro contadores são derivados de ACERVO. Acrescente uma peça em
   src/dados/home.js e todos os números sobem sozinhos.
   ========================================================================== */

import { Icone } from '../../dados/icones.jsx';
import { ACERVO, ICONE_POR_TIPO } from '../../dados/home.js';
import { Revelar } from '../../ganchos/Revelar.jsx';
import { useTrilho } from '../../ganchos/trilho.js';
import { Midia, useMidia } from '../CaixaDeMidia.jsx';
import { TrilhoControles } from '../TrilhoControles.jsx';
import { AVerificar } from '../Texto.jsx';
import { Numero } from '../Numero.jsx';

/* --------------------------------------------------------------------------
   Uma peça.

   --giro e --giro-fita dão a cada peça um repouso torto diferente; --sepia
   varia o envelhecimento. É o detalhe da v1, sistematizado.

   O alt NÃO é decorativo: num museu digital, o alt É o acervo para quem não
   vê. Compare com a v1, onde o alt era "Carta Antiga".
   -------------------------------------------------------------------------- */

function Peca({ peca }) {
  const midia = useMidia(peca.img?.src);

  return (
    <article
      className="peca"
      data-peca=""
      data-tipo={peca.tipo}
      style={{ '--giro': peca.giro, '--giro-fita': peca.giroFita, '--sepia': peca.sepia }}
    >
      <div className="peca__moldura" {...(peca.img ? midia.propsDaCaixa : {})}>
        <span className="peca__fita" aria-hidden="true" />

        {peca.img && (
          <Midia
            midia={midia}
            className="peca__img"
            src={peca.img.src}
            alt={peca.img.alt}
            largura={peca.img.largura}
            altura={peca.img.altura}
          />
        )}

        {/* Sem digitalização ainda: a peça se declara. Honesto e, num
            arquivo, até interessante. */}
        <div className="peca__ausente">
          <Icone nome={ICONE_POR_TIPO[peca.tipo]} />
          <p>
            {peca.ausente.split('\n').map((linha, i) => (
              <span key={i}>{i > 0 && <br />}{linha}</span>
            ))}
          </p>
        </div>
      </div>

      <div className="peca__legenda">
        <p className="peca__tipo">{peca.rotulo}</p>
        <h3 className="peca__titulo">{peca.titulo}</h3>
        <p className="peca__meta">
          {peca.meta}
          {peca.verificar && <AVerificar>{peca.verificar}</AVerificar>}
          {peca.verificarMarca && (
            <AVerificar marca title={peca.verificarMarca.title}>{peca.verificarMarca.texto}</AVerificar>
          )}
          {peca.metaFim && <> · {peca.metaFim}</>}
        </p>
      </div>
    </article>
  );
}

export function Acervo() {
  const trilho = useTrilho();

  /* NÚMEROS REAIS: contados da própria lista de peças, nunca digitados. */
  const contar = (tipo) => ACERVO.filter((p) => p.tipo === tipo).length;
  const contadores = [
    { valor: ACERVO.length,           rotulo: 'peças catalogadas' },
    { valor: contar('documento'),     rotulo: 'documentos' },
    { valor: contar('fotografia'),    rotulo: 'fotografias' },
    { valor: contar('depoimento'),    rotulo: 'depoimentos' },
  ];

  return (
    <section className="secao textura-papel" id="acervo" data-superficie="papel" aria-labelledby="acervo-titulo">
      <div className="envelope">
        <Revelar style={{
          display: 'flex', flexWrap: 'wrap', alignItems: 'end',
          justifyContent: 'space-between', gap: 'var(--e-5)',
        }}>
          <div style={{ maxWidth: '44rem' }}>
            <p className="olho">Museu Digital</p>
            <h2 className="titulo-secao" id="acervo-titulo">Acervo</h2>
            <p className="linha-fina">
              Cada peça tem página própria, endereço permanente, procedência declarada,
              licença de uso e instrução de citação. É o que separa um museu digital
              de uma galeria de imagens.
            </p>
          </div>
          <TrilhoControles
            trilho={trilho}
            rotuloAnterior="Peças anteriores"
            rotuloProximo="Peças seguintes"
          />
        </Revelar>
      </div>

      <div className="trilho-envelope">
        <div
          ref={trilho.ref}
          className="trilho pecas"
          tabIndex={0}
          onKeyDown={trilho.aoTeclado}
          aria-label="Peças do acervo, use as setas do teclado para navegar"
        >
          {ACERVO.map((p) => <Peca key={p.titulo} peca={p} />)}

          {/* Porta de saída do trilho: na v1 era href="#". */}
          <div className="peca peca--porta">
            <div className="peca__moldura">
              <Icone nome="mais" style={{ width: '2.2rem', height: '2.2rem', color: 'var(--marca)' }} />
              <p style={{ fontFamily: 'var(--fonte-serif)', fontSize: 'var(--t-lg)', color: 'var(--marca)' }}>
                Acervo completo
              </p>
              <p style={{
                fontSize: 'var(--t-xs)', color: 'var(--texto-tenue)',
                maxWidth: '16ch', marginInline: 'auto',
              }}>
                Com busca, filtro por década, tema, lugar e pessoa. Em breve.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="envelope">
        <Revelar className="numeros">
          {contadores.map((c) => (
            <div key={c.rotulo}>
              <Numero className="numero__valor" valor={c.valor} />
              <span className="numero__rotulo">{c.rotulo}</span>
            </div>
          ))}
        </Revelar>
        <p style={{
          marginTop: 'var(--e-4)', fontSize: 'var(--t-xs)',
          color: 'var(--texto-tenue)', maxWidth: 'var(--medida)',
        }}>
          Os números acima são contados automaticamente das peças desta página.
          São pequenos porque o acervo está começando, e preferimos um número
          pequeno verdadeiro a um número grande inventado.
        </p>
      </div>
    </section>
  );
}
