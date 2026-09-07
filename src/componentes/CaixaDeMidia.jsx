/* ==========================================================================
   MÍDIA OPCIONAL — o que torna foto e vídeo "arraste e solte"

   Toda imagem do portal aponta para um arquivo que pode ainda não existir:

     · carregou  → a CAIXA recebe data-tem-midia="sim" e o espaço reservado
                   some por CSS; a imagem recebe data-pronto="sim" e sobe a
                   opacidade
     · falhou    → a imagem sai do DOM e o espaço reservado permanece

   Resultado: colocar o arquivo em midia/ com o nome certo é TUDO que precisa
   ser feito. Nada de editar componente, nada de ícone de imagem quebrada,
   nada de retângulo preto. Ver midia/LEIA-ME.md para nomes e medidas.

   TRÊS FORMAS, da mais crua para a mais pronta:
     useMidia()      o gancho. Para quando o elemento que precisa de
                     data-tem-midia já é outra coisa — um cartão que também
                     revela ao rolar, por exemplo
     <Midia>         só a <img>, já ligada ao gancho
     <CaixaDeMidia>  caixa + imagem + espaço reservado, o caso comum
   ========================================================================== */

import { useEffect, useRef, useState } from 'react';
import { useMovimentoReduzido } from '../ganchos/movimento.jsx';

function avisarAusencia(src) {
  if (typeof console !== 'undefined') {
    console.info('[portal] mídia ausente, espaço reservado mantido: ' + src);
  }
}

/* --------------------------------------------------------------------------
   O QUE EXISTE EM midia/, SABIDO NA GERAÇÃO

   __MIDIA_EXISTENTE__ é substituído pelo Vite (ver vite.config.js) pela lista
   de arquivos que estavam em midia/ quando o portal foi gerado.

   Por que isto importa: antes, uma figura declarada cujo arquivo não existia
   emitia uma <img> no HTML pré-renderizado, e ela só desaparecia depois que
   o JavaScript detectava o erro. Com o script desligado, ficava o ícone de
   imagem quebrada — o oposto da regra do projeto. Agora a decisão é tomada
   antes de escrever o HTML.

   Servidor e cliente leem a MESMA lista, então renderizam igual e a
   hidratação não reclama de divergência.
   -------------------------------------------------------------------------- */

const NO_DISCO = new Set(
  typeof __MIDIA_EXISTENTE__ === 'undefined' ? [] : __MIDIA_EXISTENTE__,
);

/* Aceita 'midia/foto.jpg', 'foto.jpg' e './midia/foto.jpg'. Um src externo
   (http…) não é conferido: não é nosso arquivo e pode existir. */
export function midiaExiste(src) {
  if (!src) return false;
  if (/^(https?:)?\/\//.test(src)) return true;
  if (!NO_DISCO.size) return true;          /* lista vazia = não sabemos, não bloqueia */
  return NO_DISCO.has(src.replace(/^\.?\/?midia\//, ''));
}

/* --------------------------------------------------------------------------
   O gancho. Devolve o estado e as props a espalhar na <img>.
   -------------------------------------------------------------------------- */

export function useMidia(src) {
  /* Começa já em 'ausente' quando o arquivo não estava em midia/ na geração.
     É o estado inicial no servidor e no cliente, então os dois concordam. */
  const [estado, setEstado] = useState(() => (midiaExiste(src) ? 'carregando' : 'ausente'));
  const ref = useRef(null);

  /* A imagem pode já estar em cache quando o componente monta — nesse caso
     nem 'load' nem 'error' chegam a disparar, e sem esta checagem a foto
     ficaria para sempre em opacidade zero. */
  useEffect(() => {
    const img = ref.current;
    if (!img || !img.complete) return;
    if (img.naturalWidth > 0) setEstado('pronto');
    else { setEstado('ausente'); avisarAusencia(src); }
  }, [src]);

  return {
    estado,
    ausente: estado === 'ausente',
    /* Vai no elemento que contém a imagem E o espaço reservado. */
    propsDaCaixa: { 'data-tem-midia': estado === 'pronto' ? 'sim' : undefined },
    /* Vai na <img>. */
    propsDaImagem: {
      ref,
      'data-midia': '',
      'data-pronto': estado === 'pronto' ? 'sim' : undefined,
      onLoad: () => setEstado('pronto'),
      onError: () => { setEstado('ausente'); avisarAusencia(src); },
    },
  };
}

/* --------------------------------------------------------------------------
   <Midia> — só a imagem.

   width/height batendo com o arquivo real é o que reserva o espaço certo e
   evita o pulo de layout enquanto ela carrega.
   -------------------------------------------------------------------------- */

export function Midia({ midia, src, alt = '', largura, altura, prioridade = false, ariaHidden = false, ...resto }) {
  /* Sem src não há imagem a tentar: é uma figura cujo arquivo ainda não
     existe, ou cuja descrição ainda não foi escrita. Devolver uma <img> vazia
     deixaria no HTML um elemento que alguns navegadores desenham como ícone
     de imagem quebrada — justamente o que o espaço reservado existe para
     evitar. */
  if (!src || midia.ausente) return null;
  return (
    <img
      {...midia.propsDaImagem}
      src={src}
      alt={alt}
      width={largura}
      height={altura}
      aria-hidden={ariaHidden ? 'true' : undefined}
      decoding="async"
      loading={prioridade ? undefined : 'lazy'}
      /* minúsculo de propósito: o React 18 ainda não conhece este atributo, e
         em camelCase ele avisa e o descarta em vez de escrevê-lo */
      fetchpriority={prioridade ? 'high' : undefined}
      {...resto}
    />
  );
}

/* --------------------------------------------------------------------------
   <CaixaDeMidia> — caixa + imagem + espaço reservado.

   children é o espaço reservado. Fica sempre no HTML; o CSS o esconde quando
   a caixa tem mídia — e não o contrário, para que ele exista mesmo sem
   JavaScript.
   -------------------------------------------------------------------------- */

export function CaixaDeMidia({
  as: Tag = 'div',
  src, alt = '', largura, altura,
  classeImg, estiloImg, prioridade = false, ariaHidden = false,
  children,
  ...resto
}) {
  const midia = useMidia(src);
  return (
    <Tag {...resto} {...midia.propsDaCaixa}>
      <Midia
        midia={midia}
        src={src} alt={alt} largura={largura} altura={altura}
        prioridade={prioridade} ariaHidden={ariaHidden}
        className={classeImg} style={estiloImg}
      />
      {children}
    </Tag>
  );
}

/* --------------------------------------------------------------------------
   <CaixaDeVideo> — a mesma ideia para vídeo, com duas regras a mais.

   Não há vídeo no portal hoje; este componente existe porque o hero foi
   projetado para receber um (ver o modo hero--retrato em home.css) e porque
   as duas regras abaixo são fáceis de esquecer quando o vídeo chegar:

     · rede fraca ou economia de dados → nem baixa. A composição de serras em
       SVG sustenta o hero sozinha, e não se gasta o pacote de ninguém
     · movimento reduzido → mantém o vídeo, mas parado e com controles
   -------------------------------------------------------------------------- */

export function CaixaDeVideo({
  as: Tag = 'div',
  fontes = [],
  poster,
  classeVideo,
  estiloVideo,
  children,
  ...resto
}) {
  const [estado, setEstado] = useState('carregando');
  const reduzido = useMovimentoReduzido();

  useEffect(() => {
    const con = navigator.connection;
    const economia = con && (con.saveData || /(^|-)2g$/.test(con.effectiveType || ''));
    if (economia) {
      setEstado('ausente');
      avisarAusencia('(vídeo dispensado: economia de dados)');
    }
  }, []);

  return (
    <Tag {...resto} data-tem-midia={estado === 'pronto' ? 'sim' : undefined}>
      {estado !== 'ausente' && (
        <video
          data-midia=""
          data-pronto={estado === 'pronto' ? 'sim' : undefined}
          className={classeVideo}
          style={estiloVideo}
          poster={poster}
          muted
          playsInline
          autoPlay={!reduzido}
          loop={!reduzido}
          controls={reduzido}
          preload="metadata"
          aria-hidden="true"
          onLoadedData={() => setEstado('pronto')}
          onError={() => { setEstado('ausente'); avisarAusencia(fontes[0]?.src); }}
        >
          {fontes.map((f) => <source key={f.src} src={f.src} type={f.tipo} />)}
        </video>
      )}
      {children}
    </Tag>
  );
}
