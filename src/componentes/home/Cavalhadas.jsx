/* ==========================================================================
   CAVALHADAS — DESATIVADA A PEDIDO, PRESERVADA PARA USO FUTURO

   No projeto original esta seção vivia dentro de um comentário HTML, com um
   aviso em caixa alta de que comentário HTML não aninha e que um "-->" solto
   lá dentro encerraria o comentário externo antes da hora.

   Aqui ela é o que sempre deveria ter sido: um componente inteiro,
   funcional, testável, desligado por uma constante — MOSTRAR_CAVALHADAS, em
   src/dados/home.js. É a forma honesta de dizer "existe, mas não está no ar",
   e não há sintaxe frágil segurando a decisão.

   PARA REATIVAR
     1. MOSTRAR_CAVALHADAS = true.
     2. CAVALHADAS.quando = a data ISO real. Enquanto estiver vazia, o bloco
        se declara "data a confirmar" em vez de exibir NaN.
     3. Recoloque o link no MENU e no MENU_RODAPE de navegacao.js.
   O CSS (.cavalhadas, .contagem, .partidos) nunca saiu de home.css.
   ========================================================================== */

import { useEffect, useState } from 'react';
import { CAVALHADAS } from '../../dados/home.js';
import { Revelar } from '../../ganchos/Revelar.jsx';
import { AVerificar } from '../Texto.jsx';

/* --------------------------------------------------------------------------
   Contagem regressiva.

   Data ausente ou inválida = o bloco diz que a data está por confirmar.
   Nunca NaN, nunca uma data inventada para o contador ter o que mostrar.
   -------------------------------------------------------------------------- */

function usarContagem(quando) {
  const alvo = quando ? new Date(quando) : null;
  const valida = alvo && !Number.isNaN(alvo.getTime());

  const [resta, setResta] = useState(null);

  useEffect(() => {
    if (!valida) return;
    const tique = () => setResta(alvo.getTime() - Date.now());
    tique();
    const timer = setInterval(tique, 1000);
    return () => clearInterval(timer);
  }, [valida, quando]);   // eslint-disable-line react-hooks/exhaustive-deps

  if (!valida) return { estado: 'sem-data', aviso: 'Data da próxima edição a confirmar com a comunidade.' };
  if (resta !== null && resta <= 0) return { estado: 'agora', aviso: 'É agora. Confira a programação do dia.' };
  if (resta === null) return { estado: 'contando', campos: null };

  const s = Math.floor(resta / 1000);
  const pad = (n) => (n < 10 ? '0' + n : String(n));
  return {
    estado: 'contando',
    campos: {
      dias: String(Math.floor(s / 86400)),
      horas: pad(Math.floor((s % 86400) / 3600)),
      min: pad(Math.floor((s % 3600) / 60)),
      seg: pad(s % 60),
    },
  };
}

export function Cavalhadas() {
  const contagem = usarContagem(CAVALHADAS.quando);
  const campos = contagem.campos;

  return (
    <section className="secao cavalhadas" id="cavalhadas" data-superficie="escura" aria-labelledby="cav-titulo">
      <div className="envelope">
        <div className="cavalhadas__grade">

          <Revelar>
            <p className="olho">Patrimônio imaterial vivo</p>
            <h2 className="cavalhadas__titulo" id="cav-titulo">As Cavalhadas</h2>
            <p className="linha-fina" style={{ marginBottom: 'var(--e-5)' }}>
              {CAVALHADAS.descricao}
              <AVerificar>revisar descrição com a comissão organizadora</AVerificar>
            </p>

            <div className="partidos">
              {CAVALHADAS.partidos.map((p) => (
                <div className="partido" key={p.nome} style={{ '--cor': p.cor }}>
                  <h3 className="partido__nome">{p.nome}</h3>
                  <p className="partido__txt">
                    {p.txt}
                    <AVerificar>confirmar cor, número de cavaleiros e figuras</AVerificar>
                  </p>
                </div>
              ))}
            </div>

            <p style={{ marginTop: 'var(--e-6)' }}>
              <span className="btn btn--claro" aria-disabled="true" style={{ opacity: 0.55, cursor: 'default' }}>
                Página completa das Cavalhadas · em breve
              </span>
            </p>
          </Revelar>

          <Revelar modo="escala">
            <div className="contagem" data-estado={contagem.estado}>
              {[['dias', 'dias'], ['horas', 'horas'], ['min', 'min'], ['seg', 'seg']].map(([chave, rotulo]) => (
                <span key={chave}>
                  <strong className="contagem__valor">{campos ? campos[chave] : '—'}</strong>
                  <span className="contagem__rotulo">{rotulo}</span>
                </span>
              ))}
              {contagem.aviso && <p className="contagem__aviso">{contagem.aviso}</p>}
            </div>
          </Revelar>

        </div>
      </div>
    </section>
  );
}
