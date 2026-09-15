/* ==========================================================================
   VISITE

   Ausente por completo na v1 — que por isso não conseguia cumprir o próprio
   objetivo de turismo. Sem responder "onde é isso e dá para ir no domingo?",
   nenhum portal converte interesse em visita.

   MAPA
   Usa a busca por nome do Google Maps (output=embed), que não exige chave de
   API nem coordenadas — então não há risco de mandar visitante para o lugar
   errado. Duas ressalvas registradas de propósito:

     LGPD      o iframe é do Google e coloca cookies antes de qualquer
               consentimento. Para conformidade estrita, troque por uma
               imagem estática que só carrega o iframe após clique.
     Precisão  confira se o pin cai no lugar certo antes de publicar.
   ========================================================================== */

import { Icone } from '../../dados/icones.jsx';
import { Revelar } from '../../ganchos/Revelar.jsx';

const DESTINO = 'Morro+Vermelho%2C+Ca%C3%A9t%C3%A9+-+MG';

/* As três distâncias e os três acessos são os do capítulo 26, Serviços, como
   o documento os dá. Nada aqui é estimado. */
const PRATICO = [
  { icone: 'pin', titulo: 'Onde fica:',
    txt: 'distrito de Caeté, a 10 quilômetros da sede do município. Liga-se também a Sabará '
       + '(16 km), Raposos (14 km) e Rio Acima (18 km).' },
  { icone: 'seta-dir', titulo: 'O acesso mais comum:',
    txt: 'de Belo Horizonte por Caeté, pela BR-381, subindo a Serra da Piedade.' },
  { icone: 'seta-dir', titulo: 'O trecho mais curto:',
    txt: 'por Nova Lima e Raposos. Da Savassi são 45 quilômetros, com 14 de estrada de terra.' },
];

export function Visite() {
  return (
    <section className="secao" id="visite" data-superficie="elevada" aria-labelledby="visite-titulo">
      <div className="envelope">
        <div className="visite">

          <Revelar>
            <p className="olho">Informação prática</p>
            <h2 className="titulo-secao" id="visite-titulo">Como chegar</h2>
            <p className="linha-fina" style={{ marginBottom: 'var(--e-6)' }}>
              O povoado de Morro Vermelho é um distrito de Caeté, município da Região
              Metropolitana de Belo Horizonte. Todos os acessos são por estrada de terra.
            </p>

            {/* Links de rota do Google Maps. Funcionam em qualquer aparelho: no
                celular abrem o app, no desktop abrem o site. Não precisam de
                chave de API nem de biblioteca. */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--e-3)' }}>
              <a
                className="btn btn--primario"
                href={`https://www.google.com/maps/dir/?api=1&destination=${DESTINO}`}
                target="_blank" rel="noopener"
              >
                <Icone nome="pin" />
                Traçar rota até aqui
              </a>
              <a
                className="btn btn--contorno"
                href={`https://www.google.com/maps/search/?api=1&query=${DESTINO}`}
                target="_blank" rel="noopener"
              >
                Ver no Google Maps
              </a>
            </div>

            <ul style={{
              display: 'grid', gap: 'var(--e-3)', marginTop: 'var(--e-6)',
              fontSize: 'var(--t-sm)', color: 'var(--texto-suave)',
            }}>
              {PRATICO.map((p) => (
                <li key={p.titulo} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 'var(--e-3)' }}>
                  <Icone
                    nome={p.icone}
                    style={{ width: '1.05rem', height: '1.05rem', color: 'var(--acento)', marginTop: '.28em' }}
                  />
                  <span><strong>{p.titulo}</strong> {p.txt}</span>
                </li>
              ))}
            </ul>
          </Revelar>

          <Revelar modo="escala">
            <div className="mapa-embed">
              <iframe
                title="Mapa de Morro Vermelho, distrito de Caeté, Minas Gerais"
                src="https://www.google.com/maps?q=Morro%20Vermelho%2C%20Ca%C3%A9t%C3%A9%20-%20MG&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p style={{ marginTop: 'var(--e-3)', fontSize: 'var(--t-xs)', color: 'var(--texto-tenue)' }}>
              Mapa fornecido pelo Google. Um mapa próprio, com camadas de patrimônio
              e natureza, entra depois em <span style={{ whiteSpace: 'nowrap' }}>mapa.html</span>.
            </p>
          </Revelar>

        </div>
      </div>
    </section>
  );
}
