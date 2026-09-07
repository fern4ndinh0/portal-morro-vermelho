/* ==========================================================================
   VOLTAR AO TOPO

   Aparece depois de uma tela de rolagem. Além de rolar, devolve o FOCO ao
   topo do conteúdo — sem isso, quem navega por teclado volta visualmente ao
   topo e continua tabulando lá de baixo, que é pior do que não ter o botão.
   ========================================================================== */

import { Icone } from '../dados/icones.jsx';
import { usePassouUmaTela } from '../ganchos/rolagem.js';
import { useComportamentoDeRolagem } from '../ganchos/movimento.jsx';

export function VoltarTopo() {
  const visivel = usePassouUmaTela();
  const comportamento = useComportamentoDeRolagem();

  function subir() {
    window.scrollTo({ top: 0, behavior: comportamento });
    const alvo = document.getElementById('conteudo') || document.body;
    alvo.setAttribute('tabindex', '-1');
    alvo.focus({ preventScroll: true });
  }

  return (
    <button
      type="button"
      className="voltar-topo"
      data-visivel={visivel ? 'sim' : 'nao'}
      aria-label="Voltar ao topo da página"
      onClick={subir}
    >
      <Icone nome="seta-cima" />
    </button>
  );
}
