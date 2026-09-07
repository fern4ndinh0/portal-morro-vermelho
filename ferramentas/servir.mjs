/* ==========================================================================
   SERVIDOR DE PRÉ-VISUALIZAÇÃO

       npm run ver

   Serve publicar/ em http://localhost:4173 — o site JÁ GERADO, sem Vite, sem
   hot reload, sem nada. É a versão que vai ao ar.

   Vale a pena existir por dois motivos:
     · o modo --separado só faz sentido sob http, e é aqui que se confere se
       os caminhos de estilo/ e script/ resolvem;
     · algumas coisas se comportam diferente em file:// e em http:// (o
       iframe do mapa, por exemplo). Ver as duas antes de publicar é barato.

   Para o teste que realmente importa — abrir do disco — não use isto: dê
   duplo clique em publicar/index.html.
   ========================================================================== */

import { createServer } from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { dirname, extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = join(dirname(dirname(fileURLToPath(import.meta.url))), 'publicar');
const PORTA = Number(process.env.PORTA) || 4173;

const TIPOS = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.mp4': 'video/mp4',
};

if (!existsSync(RAIZ)) {
  console.error('\n  publicar/ não existe. Rode antes: npm run gerar\n');
  process.exit(1);
}

createServer((req, res) => {
  const pedido = decodeURIComponent((req.url || '/').split('?')[0]);

  /* normalize + a checagem de prefixo barram '../' — um servidor de
     desenvolvimento não deve servir o disco inteiro nem por engano. */
  let caminho = normalize(join(RAIZ, pedido === '/' ? 'index.html' : pedido));
  if (!caminho.startsWith(RAIZ)) { res.writeHead(403).end('Fora de publicar/'); return; }

  if (existsSync(caminho) && statSync(caminho).isDirectory()) caminho = join(caminho, 'index.html');

  if (!existsSync(caminho)) {
    /* O 404 do portal, servido com o status certo. */
    const erro = join(RAIZ, '404.html');
    res.writeHead(404, { 'Content-Type': TIPOS['.html'] });
    if (existsSync(erro)) createReadStream(erro).pipe(res);
    else res.end('404');
    return;
  }

  res.writeHead(200, { 'Content-Type': TIPOS[extname(caminho)] || 'application/octet-stream' });
  createReadStream(caminho).pipe(res);
}).listen(PORTA, () => {
  console.log(`\n  publicar/ em http://localhost:${PORTA}\n  Ctrl+C para parar.\n`);
});
