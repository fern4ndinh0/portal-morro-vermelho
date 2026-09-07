/* ==========================================================================
   MOVIMENTO REDUZIDO

   Duas vias, de propósito: a preferência do sistema E um botão próprio do
   portal. Há quem tenha enxaqueca e nunca tenha configurado o sistema
   operacional — exigir que configure é transferir o problema para a pessoa.

   O estado mora no atributo data-movimento do <html>, e não no React. É
   deliberado: o CSS inteiro já reage a esse atributo (ver base.css), e um
   script minúsculo no <head> o aplica ANTES do primeiro paint, para que quem
   reduziu animações não veja nada se mexer no caminho. Se o React só o
   soubesse depois de hidratar, haveria um quadro de animação antes da
   correção — exatamente o que se quer evitar.

   Este módulo, portanto, apenas ESPELHA em estado React o que já está no
   DOM, para que os componentes possam decidir se animam ou não.
   ========================================================================== */

import { createContext, useContext, useEffect, useState, useCallback } from 'react';

const Contexto = createContext({ reduzido: false, alternar: () => {}, prontoNoCliente: false });

const CHAVE = 'mv-movimento';

function lerDoAmbiente() {
  if (typeof window === 'undefined') return false;
  const porAtributo = document.documentElement.getAttribute('data-movimento') === 'reduzido';
  const porSistema = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  return porAtributo || porSistema;
}

export function ProvedorDeMovimento({ children }) {
  /* Começa em false nos DOIS lados — servidor e primeiro render do cliente —
     para que a hidratação case. O valor real entra no efeito logo abaixo,
     antes de qualquer animação ter chance de rodar. */
  const [reduzido, setReduzido] = useState(false);
  const [prontoNoCliente, setPronto] = useState(false);

  useEffect(() => {
    setReduzido(lerDoAmbiente());
    setPronto(true);

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const aoMudar = () => setReduzido(lerDoAmbiente());
    mq.addEventListener('change', aoMudar);
    return () => mq.removeEventListener('change', aoMudar);
  }, []);

  const alternar = useCallback(() => {
    const html = document.documentElement;
    const estaReduzido = html.getAttribute('data-movimento') === 'reduzido';

    if (estaReduzido) html.removeAttribute('data-movimento');
    else html.setAttribute('data-movimento', 'reduzido');

    try { localStorage.setItem(CHAVE, estaReduzido ? 'normal' : 'reduzido'); } catch { /* modo privado */ }

    setReduzido(lerDoAmbiente());
  }, []);

  return (
    <Contexto.Provider value={{ reduzido, alternar, prontoNoCliente }}>
      {children}
    </Contexto.Provider>
  );
}

export function useMovimento() {
  return useContext(Contexto);
}

/* Atalho para os muitos lugares que só precisam do booleano. */
export function useMovimentoReduzido() {
  return useContext(Contexto).reduzido;
}

/* Comportamento de rolagem coerente com a preferência. */
export function useComportamentoDeRolagem() {
  return useMovimentoReduzido() ? 'auto' : 'smooth';
}
