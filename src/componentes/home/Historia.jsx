/* ==========================================================================
   HISTÓRIA + LINHA DO TEMPO

   A v1 tinha uma timeline de três pontos, sendo o último "Dias Atuais" — um
   não-dado. Aqui o trilho é horizontal, navegável por teclado e por setas
   que FUNCIONAM, e cada marco declara se a data é precisa ou estimada.

   O TEXTO DE ABERTURA É O MANIFESTO DO DISTRITO, e não prosa deste portal.
   Ele substituiu o parágrafo genérico que a versão anterior mantinha com a
   etiqueta "a substituir por texto com fonte" — que era exatamente um pedido
   por este texto.

   Como o manifesto faz seis afirmações datáveis, ele vem acompanhado de uma
   linha que aponta onde cada uma é examinada. Não é ressalva envergonhada:
   é o que separa "o distrito diz" de "está provado", mantendo os dois no ar
   e deixando o leitor seguir a pesquisa.
   ========================================================================== */

import { Icone } from '../../dados/icones.jsx';
import { LINHA_DO_TEMPO, MANIFESTO } from '../../dados/home.js';
import { Revelar } from '../../ganchos/Revelar.jsx';
import { useTrilho } from '../../ganchos/trilho.js';
import { TrilhoControles } from '../TrilhoControles.jsx';
import { AVerificar } from '../Texto.jsx';

/* Um marco pode ou não levar ao verbete que o discute. Quando leva, o li
   inteiro vira link — e não só o título, para que o alvo de toque no celular
   seja o cartão inteiro. */
function Marco({ m }) {
  const miolo = (
    <>
      <p className="marco__ano">{m.ano}</p>
      <h4 className="marco__titulo">{m.titulo}</h4>
      <p className="marco__txt">
        {m.txt}
        {m.verificar && <AVerificar>{m.verificar}</AVerificar>}
      </p>
    </>
  );

  return (
    <li className={m.estimado ? 'marco marco--estimado' : 'marco'}>
      {m.href
        ? <a href={m.href} style={{ display: 'grid', gap: 'inherit', textDecoration: 'none', color: 'inherit' }}>{miolo}</a>
        : miolo}
    </li>
  );
}

export function Historia() {
  const trilho = useTrilho();

  return (
    <section className="secao" id="historia" data-superficie="elevada" aria-labelledby="historia-titulo">
      <div className="envelope">
        <Revelar style={{ display: 'grid', gap: 'var(--e-8)', alignItems: 'start' }}>
          <header style={{ maxWidth: '46rem' }}>
            <p className="olho">Nossa História</p>
            <h2 className="titulo-secao" id="historia-titulo">
              Um lugar que se define pela liberdade que conquistou
            </h2>
          </header>

          <div className="corpo" style={{ maxWidth: 'var(--largura-texto)' }}>
            <p style={{
              fontFamily: 'var(--fonte-serif)', fontSize: 'var(--t-lg)',
              fontStyle: 'italic', color: 'var(--marca)', marginBottom: 'var(--e-4)',
            }}>
              {MANIFESTO.lema}
            </p>

            <p>{MANIFESTO.texto}</p>

            {/* A prestação de contas do manifesto. Cada afirmação datável tem
                um verbete onde o que se sabe e o que falta provar estão
                separados — e é para lá que estes links levam. */}
            <p style={{
              color: 'var(--texto-tenue)', fontSize: 'var(--t-sm)',
              borderLeft: '2px solid var(--areia-400)', paddingLeft: 'var(--e-4)',
            }}>
              <strong>Nota de método:</strong> o texto acima é como o distrito se
              apresenta, e as seis afirmações que ele faz estão sendo documentadas uma
              a uma. Cada verbete separa o que é contexto regional comprovado do que
              ainda precisa de fonte primária, inclusive quando a conclusão é
              incômoda. Acompanhe a pesquisa em{' '}
              {MANIFESTO.ondeSeExamina
                .filter((x, i, lista) => lista.findIndex((y) => y.slug === x.slug) === i)
                .map((x, i, lista) => (
                  <span key={x.slug}>
                    <a href={`${x.slug}.html`}>{x.afirmacao}</a>
                    {i < lista.length - 2 ? ', ' : i === lista.length - 2 ? ' e ' : '.'}
                  </span>
                ))}
            </p>
          </div>
        </Revelar>
      </div>

      {/* --- Linha do tempo ------------------------------------------------ */}
      <div className="envelope" id="linha-do-tempo" style={{ marginTop: 'var(--e-9)' }}>
        <Revelar style={{
          display: 'flex', flexWrap: 'wrap', alignItems: 'end',
          justifyContent: 'space-between', gap: 'var(--e-4)',
        }}>
          <div>
            <p className="olho">Linha do tempo</p>
            <h3 style={{ fontSize: 'var(--t-xl)', color: 'var(--marca)', marginTop: 'var(--e-2)' }}>
              Marcos documentados
            </h3>
          </div>
          <TrilhoControles
            trilho={trilho}
            rotuloAnterior="Marcos anteriores"
            rotuloProximo="Marcos seguintes"
          />
        </Revelar>
      </div>

      <div className="trilho-envelope">
        <ol
          ref={trilho.ref}
          className="trilho"
          tabIndex={0}
          onKeyDown={trilho.aoTeclado}
          aria-label="Linha do tempo de Morro Vermelho, use as setas do teclado para navegar"
        >
          {LINHA_DO_TEMPO.map((m) => <Marco m={m} key={m.titulo} />)}
        </ol>
      </div>

      <div className="envelope">
        <p style={{
          fontSize: 'var(--t-xs)', color: 'var(--texto-tenue)',
          display: 'flex', gap: 'var(--e-3)', alignItems: 'center',
        }}>
          <Icone nome="alerta" style={{ width: '1rem', height: '1rem', color: 'var(--destaque)' }} />
          Marco com contorno tracejado = data estimada, atribuída pela tradição local
          ou ainda não documentada. Preferimos mostrar a lacuna a preencher com invenção.
        </p>
      </div>
    </section>
  );
}
