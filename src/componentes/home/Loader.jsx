/* ==========================================================================
   TELA DE ABERTURA

   REGRA QUE GOVERNA ESTE ARQUIVO: a tela de abertura NÃO existe no HTML
   publicado. Ela é criada depois que o React monta, e por portal, direto no
   <body>.

   Isso não é detalhe de implementação — é a mesma decisão do projeto
   original, e aqui ela importa ainda mais. Se este componente fosse
   renderizado na árvore normal, a tela de abertura sairia impressa no HTML
   pré-renderizado, e um visitante com JavaScript bloqueado veria uma cortina
   cobrindo o portal para sempre, sem nada que a tirasse.

   Uma vez por sessão, curta, e com teto: sai no 'load' ou em 1,4 s, o que
   vier primeiro. Nunca prende ninguém.
   ========================================================================== */

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useMovimento } from '../../ganchos/movimento.jsx';

const CHAVE = 'mv-visitou';
const TETO = 1400;
const APOS_LOAD = 320;
const SAIDA = 760;

export function Loader() {
  const { reduzido, prontoNoCliente } = useMovimento();
  const [fase, setFase] = useState('esperando');   /* esperando | visivel | saindo | fim */

  useEffect(() => {
    if (!prontoNoCliente || fase !== 'esperando') return;

    if (reduzido) { setFase('fim'); return; }

    /* sessionStorage indisponível (modo privado antigo, iframe): não insiste.
       Uma tela de abertura não vale um try/catch mal resolvido. */
    try {
      if (sessionStorage.getItem(CHAVE)) { setFase('fim'); return; }
      sessionStorage.setItem(CHAVE, '1');
    } catch { setFase('fim'); return; }

    setFase('visivel');
  }, [prontoNoCliente, reduzido, fase]);

  useEffect(() => {
    if (fase !== 'visivel') return;

    const sair = () => setFase('saindo');
    const teto = setTimeout(sair, TETO);
    const aoCarregar = () => { clearTimeout(teto); setTimeout(sair, APOS_LOAD); };

    if (document.readyState === 'complete') aoCarregar();
    else window.addEventListener('load', aoCarregar, { once: true });

    return () => {
      clearTimeout(teto);
      window.removeEventListener('load', aoCarregar);
    };
  }, [fase]);

  useEffect(() => {
    if (fase !== 'saindo') return;
    const t = setTimeout(() => setFase('fim'), SAIDA);
    return () => clearTimeout(t);
  }, [fase]);

  if (fase === 'esperando' || fase === 'fim') return null;

  return createPortal(
    <div className="loader" data-saindo={fase === 'saindo' ? 'sim' : undefined} aria-hidden="true">
      <div className="loader__selo">
        <svg focusable="false"><use href="#ic-selo" /></svg>
      </div>
      <p className="loader__nome">Morro Vermelho</p>
      <div className="loader__trilho" />
    </div>,
    document.body,
  );
}
