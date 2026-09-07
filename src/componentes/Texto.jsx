/* ==========================================================================
   TEXTO — dois auxiliares que aparecem no portal inteiro.
   ========================================================================== */

/* --------------------------------------------------------------------------
   <Html> — um trecho de conteúdo que contém marcação.

   Os textos do portal (verbetes, revelações, legendas) trazem <strong>, <em>
   e aspas tipográficas dentro das próprias strings. Isso é conteúdo
   editorial, escrito por quem redige, e continua vindo de arquivos de dados
   como vinha antes — não vale a pena transformar cada ênfase de cada
   parágrafo em JSX.

   dangerouslySetInnerHTML é seguro AQUI e só aqui: nada neste portal vem de
   entrada de usuário. Tudo é texto redigido e versionado no repositório, que
   passou por revisão antes de existir. O dia em que houver conteúdo enviado
   de fora — formulário, comentário, API — este componente não pode ser o
   caminho dele.
   -------------------------------------------------------------------------- */

export function Html({ as: Tag = 'p', texto, ...resto }) {
  return <Tag {...resto} dangerouslySetInnerHTML={{ __html: texto }} />;
}

/* --------------------------------------------------------------------------
   <AVerificar> — a etiqueta do sistema de verificação editorial.

   Todo dado sem fonte primária conferida aparece marcado no site. Quando
   tudo estiver conferido, vire REVISAO para false em src/dados/contato.js e
   todas as etiquetas somem de uma vez (é o CSS que as esconde, por
   html[data-revisao="off"]).

   marca=true    variante compacta, de um caractere só, para barras densas e
                 legendas — onde a pílula inteira roubaria a leitura. O texto
                 completo continua no title.
   -------------------------------------------------------------------------- */

export function AVerificar({ children, marca = false, title }) {
  return (
    <span className={marca ? 'a-verificar a-verificar--marca' : 'a-verificar'} title={title}>
      {children}
    </span>
  );
}
