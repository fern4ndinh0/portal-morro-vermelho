/* ==========================================================================
   CONTATO E ESTADO EDITORIAL

   Duas constantes que o projeto original guardava dentro do comum.js e que
   aqui ganham arquivo próprio, porque são CONTEÚDO, não comportamento —
   quem troca o número do WhatsApp não deveria precisar abrir um arquivo de
   JavaScript de interface.
   ========================================================================== */

/* ---- WHATSAPP -----------------------------------------------------------
   PONTO ÚNICO DE VERDADE do número. Todo link de WhatsApp do portal, em
   qualquer página, é montado a partir daqui. Trocar o número = editar esta
   linha, e não caçar o número em 15 arquivos.
   Formato: código do país + DDD + número, só dígitos. Brasil = 55.        */

export const WHATSAPP = '5531900000000';   /* TODO substituir pelo número real */

/* Mensagem que já vem digitada quando a pessoa abre a conversa. */
export const WHATSAPP_MSG = 'Olá! Encontrei o portal de Morro Vermelho e gostaria de '
  + 'contribuir com o acervo. Tenho o seguinte material para compartilhar:';

export const ZAP_CONFIGURADO = /^\d{12,15}$/.test(WHATSAPP) && WHATSAPP !== '5531900000000';

/* GANHO DA MIGRAÇÃO: no projeto original o href era montado por JavaScript
   em tempo de execução, então um visitante sem JS via um <a> sem destino.
   Aqui o link é montado na PRÉ-RENDERIZAÇÃO e já sai escrito no HTML —
   funciona com o JavaScript desligado. */
export function linkZap(mensagem) {
  return 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(mensagem || WHATSAPP_MSG);
}

/* O número por extenso, para o <noscript> e para onde ele apareça escrito. */
export function zapVisivel() {
  if (!ZAP_CONFIGURADO) return 'número a configurar';
  return WHATSAPP.replace(/^55(\d{2})(\d{4,5})(\d{4})$/, '($1) $2-$3');
}

/* ---- REVISÃO EDITORIAL --------------------------------------------------
   Enquanto true, as etiquetas "a verificar" ficam visíveis no site.
   Vire para false só quando todo dado tiver fonte primária conferida — todas
   as etiquetas somem de uma vez.                                          */

export const REVISAO = true;
