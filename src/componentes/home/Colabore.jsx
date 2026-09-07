/* ==========================================================================
   COLABORE

   Na v1 isto era uma frase no rodapé atrás de um <button> sem função. O
   acervo de um distrito não é construído por uma equipe — é construído pelas
   gavetas das casas.

   WhatsApp, e não formulário: é o canal que a comunidade já usa. O link é
   montado na pré-renderização a partir de UMA constante (WHATSAPP, em
   src/dados/contato.js) — trocar o número não exige caçar link em página
   nenhuma, e o botão funciona mesmo com o JavaScript desligado, o que não
   acontecia na versão anterior.
   ========================================================================== */

import { Icone } from '../../dados/icones.jsx';
import { O_QUE_ACEITAMOS } from '../../dados/home.js';
import { linkZap, ZAP_CONFIGURADO, zapVisivel } from '../../dados/contato.js';
import { Revelar } from '../../ganchos/Revelar.jsx';

const MENSAGEM = 'Olá! Vi o portal de Morro Vermelho e quero enviar material para o acervo. '
  + 'Vou mandar aqui a foto/documento e conto o que sei sobre ele.';

export function Colabore() {
  return (
    <section className="secao" id="colabore" data-superficie="papel" aria-labelledby="colabore-titulo">
      <div className="envelope">
        <Revelar className="colabore">
          <p className="olho">Participe</p>
          <h2 className="colabore__titulo" id="colabore-titulo">Tem foto antiga na gaveta?</h2>
          <p
            className="linha-fina"
            style={{ color: 'color-mix(in oklab, var(--papel-50) 84%, transparent)', maxWidth: '44ch' }}
          >
            É disso que este acervo é feito. Digitalizamos, catalogamos, creditamos
            quem guardou, e devolvemos o original na sua mão.
          </p>

          <ul className="colabore__lista">
            {O_QUE_ACEITAMOS.map((item) => (
              <li key={item}><Icone nome="check" /><span>{item}</span></li>
            ))}
          </ul>

          <p style={{
            fontSize: 'var(--t-sm)',
            color: 'color-mix(in oklab, var(--papel-50) 72%, transparent)',
            maxWidth: '46ch',
          }}>
            Você decide a licença de uso e pode pedir a retirada de qualquer item a
            qualquer momento. Nada entra no ar sem a sua autorização.
          </p>

          <div className="colabore__acoes">
            <a
              className="btn btn--zap"
              href={linkZap(MENSAGEM)}
              target="_blank"
              rel="noopener"
              data-pendente={ZAP_CONFIGURADO ? undefined : 'sim'}
              title={ZAP_CONFIGURADO ? undefined
                : 'Número de WhatsApp ainda não configurado. Ver WHATSAPP em src/dados/contato.js'}
            >
              <Icone nome="whatsapp" />
              Enviar pelo WhatsApp
            </a>
            <p className="colabore__zap-nota">
              Mande a foto direto pela conversa. Se souber, conte quem aparece, onde
              foi e mais ou menos quando. É essa informação que transforma uma
              imagem solta em peça de acervo.
            </p>
          </div>

          <noscript
            dangerouslySetInnerHTML={{
              __html: '<p style="margin-top:var(--e-4);font-size:var(--t-sm);color:var(--areia-200)">'
                + 'WhatsApp: <strong>' + zapVisivel() + '</strong></p>',
            }}
          />
        </Revelar>
      </div>
    </section>
  );
}
