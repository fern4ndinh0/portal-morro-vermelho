/* ==========================================================================
   CONFIGURAÇÃO DO VITE

   Este arquivo serve a TRÊS modos, e a diferença entre eles é a única coisa
   que justifica um arquivo de configuração neste projeto:

     vite                       desenvolvimento, com HMR e as sete páginas
                                navegáveis (ver o plugin rotasDeDisco abaixo)

     ALVO=cliente vite build    o bundle que vai HIDRATAR a página publicada.
                                Formato IIFE — script clássico, um arquivo só,
                                React embutido, zero import. É o que permite a
                                página abrir do file:// sem servidor.

     ALVO=servidor vite build   o bundle que o gerador roda no Node para
                                PRÉ-RENDERIZAR cada página em HTML.

   O CSS não é importado por nenhum componente de propósito: o gerador lê
   fonte/estilo/*.css direto do disco e embute só o que cada página usa. É o
   que preserva o corte chassi/home/artigo do projeto original — o Vite
   juntaria tudo num arquivo só.
   ========================================================================== */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { existsSync, readdirSync } from 'node:fs';

const RAIZ = import.meta.dirname;
const ALVO = process.env.ALVO || 'dev';

/* --------------------------------------------------------------------------
   Em desenvolvimento o portal é servido como aplicação de página única, mas
   os links continuam sendo os mesmos do site publicado ('estrada-real.html').
   Este middleware devolve o index.html para qualquer .html pedido, e o
   roteador de src/roteador.js decide o que renderizar a partir do caminho.
   Assim nada nos componentes precisa saber se está em dev ou publicado.
   -------------------------------------------------------------------------- */
function rotasDeDisco() {
  return {
    name: 'mv-rotas-de-disco',
    configureServer(servidor) {
      servidor.middlewares.use((req, _res, proximo) => {
        const caminho = (req.url || '').split('?')[0];

        /* Qualquer .html cai no molde; quem decide o que renderizar é o
           slugDoCaminho() em src/paginas/index.jsx. */
        if (caminho.endsWith('.html')) req.url = '/index.html';

        /* Os url() de fontes.css são relativos à PÁGINA, porque no site
           publicado o CSS mora dentro do .html. Servido por <link> a partir
           de /src/estilo/, o navegador os procura um nível fundo demais —
           este desvio faz as fontes aparecerem também em desenvolvimento. */
        else if (caminho.startsWith('/src/estilo/midia/')) {
          req.url = caminho.replace('/src/estilo/midia/', '/midia/');
        }

        proximo();
      });
    },
  };
}

export default defineConfig(() => {
  const comum = {
    plugins: [react(), rotasDeDisco()],
    resolve: { alias: { '~': resolve(RAIZ, 'src') } },
    /* O ano em que o site foi gerado. Renderizado no HTML publicado e
       corrigido pelo próprio navegador na hidratação — assim o rodapé nunca
       exibe "© 2024" desatualizado e, ainda assim, servidor e cliente
       concordam no primeiro render. */
    define: {
      __ANO_DE_GERACAO__: new Date().getFullYear(),
      /* A LISTA DO QUE EXISTE EM midia/, CONGELADA NA GERAÇÃO.

         Sem isto, uma figura declarada cujo arquivo não existe emitia uma
         <img> no HTML pré-renderizado e só desaparecia depois que o
         JavaScript detectava o erro de carregamento. Ou seja: com o script
         desligado, o portal mostrava ícone de imagem quebrada — exatamente o
         que a regra do projeto proíbe.

         Agora servidor e cliente partem da MESMA lista, o que também
         significa que os dois renderizam igual e a hidratação não reclama.
         O tratador de erro em tempo de execução continua lá, para o caso do
         arquivo existir e estar corrompido.                              */
      __MIDIA_EXISTENTE__: JSON.stringify(
        existsSync(resolve(RAIZ, 'midia'))
          ? readdirSync(resolve(RAIZ, 'midia'), { recursive: true })
              /* readdirSync recursivo devolve subpasta com a barra do
                 sistema; no Windows vem 'fontes\\inter.woff2'. Os src do
                 portal usam barra normal. */
              .map((f) => String(f).split('\\').join('/'))
          : [],
      ),
    },
  };

  if (ALVO === 'cliente') {
    return {
      ...comum,
      /* SEM ESTA LINHA O BUNDLE TRIPLICA.
         Em modo 'lib' o Vite deixa process.env.NODE_ENV de pé de propósito,
         para que quem consome a biblioteca decida. Só que o React resolve a
         escolha entre build de desenvolvimento e de produção nesse mesmo
         process.env.NODE_ENV — deixá-lo indefinido faz o Rollup empacotar as
         DUAS versões de react, react-dom e scheduler. Foram 562 KB antes
         desta linha e 143 KB depois. */
      define: { ...comum.define, 'process.env.NODE_ENV': '"production"' },
      build: {
        outDir: 'construcao/cliente',
        emptyOutDir: true,
        target: 'es2019',
        cssCodeSplit: false,
        reportCompressedSize: false,
        lib: {
          entry: resolve(RAIZ, 'src/entrada-cliente.jsx'),
          formats: ['iife'],
          name: 'PortalMV',
          fileName: () => 'portal.js',
        },
      },
    };
  }

  if (ALVO === 'servidor') {
    return {
      ...comum,
      build: {
        outDir: 'construcao/servidor',
        emptyOutDir: true,
        ssr: resolve(RAIZ, 'src/entrada-servidor.jsx'),
        target: 'node20',
        minify: false,
        reportCompressedSize: false,
        rollupOptions: {
          output: { entryFileNames: 'servidor.mjs', format: 'esm' },
        },
      },
    };
  }

  return { ...comum, server: { open: '/index.html' } };
});
