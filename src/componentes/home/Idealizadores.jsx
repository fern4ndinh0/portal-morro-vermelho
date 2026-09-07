/* ==========================================================================
   IDEALIZADORES

   Todo verbete deste portal — cada um dos 29 documentos originais — vem da
   pesquisa de duas pessoas com nome e sobrenome (ver src/dados/documentos/
   sobre-o-portal.js). Sem elas não haveria acervo a digitalizar. Por isso
   esta seção não é rodapé de crédito: é onde o portal para e apresenta
   quem o fez existir, antes de continuar contando a história do distrito.

   DUAS LINHAS EM Z, não duas colunas simétricas: a de Geraldo tem a foto à
   esquerda e o texto à direita; a de Viviane inverte — texto à esquerda,
   foto à direita. A ordem no DOM já é a ordem visual (não é CSS `order`),
   então a leitura por teclado/leitor de tela segue exatamente o que
   aparece na tela. Fotos em cor natural, sem tratamento — só a moldura.

   Os textos de biografia vieram prontos de Viviane Pinheiro, uma das duas
   pessoas retratadas — não são prosa deste projeto, e por isso a mesma
   regra do MANIFESTO em src/dados/home.js se aplica: reproduzidos sem
   paráfrase, um parágrafo por vez, na mesma ordem em que chegaram.
   ========================================================================== */

import { CaixaDeMidia } from '../CaixaDeMidia.jsx';
import { Icone } from '../../dados/icones.jsx';
import { IDEALIZADORES, IDEALIZADORES_ABERTURA } from '../../dados/home.js';
import { Revelar } from '../../ganchos/Revelar.jsx';

function Perfil({ pessoa, inverso, atraso }) {
  const foto = (
    <div className="idealizadores__foto" key="foto">
      <CaixaDeMidia
        className="idealizadores__moldura"
        src={pessoa.foto.src}
        alt={pessoa.foto.alt}
        largura={pessoa.foto.largura}
        altura={pessoa.foto.altura}
        classeImg="idealizadores__img"
      >
        <Icone nome="retrato" />
      </CaixaDeMidia>
    </div>
  );

  const texto = (
    <div className="idealizadores__texto" key="texto">
      <h3 className="idealizadores__nome">
        {pessoa.nome}
        {pessoa.apelido && <span className="idealizadores__apelido">{pessoa.apelido}</span>}
      </h3>
      {pessoa.bio.map((paragrafo, i) => (
        // eslint-disable-next-line react/no-danger
        <p key={i} dangerouslySetInnerHTML={{ __html: paragrafo }} />
      ))}
    </div>
  );

  return (
    <Revelar
      as="article"
      className={inverso ? 'idealizadores__linha idealizadores__linha--inverso' : 'idealizadores__linha'}
      atraso={atraso}
    >
      {inverso ? [texto, foto] : [foto, texto]}
    </Revelar>
  );
}

export function Idealizadores() {
  const [geraldo, viviane] = IDEALIZADORES;

  return (
    <section className="secao" id="idealizadores" data-superficie="papel" aria-labelledby="idealizadores-titulo">
      <div className="envelope">
        <Revelar as="header" style={{ maxWidth: '46rem', marginBottom: 'var(--e-7)' }}>
          <p className="olho">Quem faz este acervo existir</p>
          <h2 className="titulo-secao" id="idealizadores-titulo">Geraldo Lopes e Viviane Pinheiro</h2>
          <p className="linha-fina">{IDEALIZADORES_ABERTURA}</p>
        </Revelar>

        <div className="idealizadores__linhas">
          <Perfil pessoa={geraldo} inverso={false} atraso={0} />
          <Perfil pessoa={viviane} inverso atraso={0} />
        </div>

        <p className="idealizadores__mais">
          Os mais de quarenta anos de pesquisa que sustentam este acervo, e o que mudou
          na reconstrução desta versão, estão contados em{' '}
          <a href="sobre-o-portal.html">Como este portal foi feito</a>.
        </p>
      </div>
    </section>
  );
}
