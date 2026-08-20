# Decisões arquiteturais — fundação técnica v2

Registro das decisões tomadas nesta fase (branch `feat/site-v2-foundation`) e o porquê,
para alimentar o relatório final exigido pelo briefing original.

## Confirmadas pelo usuário nesta sessão

- **Tailwind v4**, não styled-components, para consistência de manutenção com o Tech
  North. Adotado de forma aditiva nesta fase (ver abaixo).
- **Netlify CMS removido diretamente**, sem período de coexistência — usuário confirmou
  que não está mais em uso ativo.
- **Deploy confirmado como Vercel**.
- **Sentry**: usuário vai criar projeto próprio e fornecer o DSN — não reaproveitar o do
  Tech North. Scaffolding pronto, `dsn` lê de env var vazia.
- **Analytics final: GA4 + Microsoft Clarity**, um carregamento único de cada, sem
  redundância, sem PostHog (não solicitado).
- **Portfólio**: os 7 projetos sem link real ficam listados como "privado/cliente", sem
  link clicável — não remove, não inventa URL.
- **Mantidos**: Algolia (busca), Google AdSense, `/series` (com taxonomia corrigida).
- **`/publicacoes`** entra no ar já com o único artigo real confirmado (DOI
  `10.25191/recs.v10i1.1493`).

## Decisões técnicas desta fase (arquitetura, sem depender de fatos pendentes)

### Não fazer o bump de Next.js/App Router ainda
Decisão: adicionar TypeScript e Tailwind v4 **de forma aditiva**, ao lado do Pages
Router/styled-components atual (que continua 100% funcional), em vez de virar tudo de
uma vez. Motivo: a Fase 3 do briefing exige validação visual do design system *antes* da
conversão em massa — um bump de major version misturado com a validação de design
tornaria qualquer rollback muito mais caro. O bump completo fica para a próxima fase,
já com a direção visual aprovada.

### `@types/react`/`@types/react-dom` pinados em `17.0.2` (exato, não `^17`)
Motivo: versões mais novas da série 17.x do `@types/react` adicionaram um campo
`exports` ao `package.json` que bloqueia o subpath `@types/react/index.d.ts` — e o
verificador de setup TypeScript do Next.js 11 (`has-necessary-dependencies.js`) resolve
exatamente esse subpath, hardcoded, para decidir se o TypeScript está "instalado
corretamente". Com uma versão mais nova, `next dev` falha com "It looks like you're
trying to use TypeScript but do not have the required package(s) installed" mesmo com
tudo instalado. Confirmado reproduzindo a checagem exata do Next localmente. Reverter
esse pin quando o Next for atualizado para uma versão que não tenha esse checador antigo.

### `@sentry/nextjs`, `@next/third-parties` e `@tinacms/cli` NÃO instalados ainda
Motivo: todos exigem Next.js 13+ e/ou React 18+ como peer dependency — confirmado via
`npm view <pkg> peerDependencies`. Instalá-los agora quebraria `npm install` inteiro
(ERESOLVE) contra o Next 11/React 17 ainda em uso. Os arquivos de configuração
(`sentry.*.config.ts`, `tina/config.ts`) já estão escritos como scaffolding — instalação
real dos pacotes acontece junto do bump de Next/React na próxima fase. Analytics (GA4 +
Clarity) foi implementado com `next/script` puro em vez de `@next/third-parties`
justamente para não depender desse bump.

### Nomenclatura temporária `site-analytics/` em vez de `analytics/`
Motivo: Windows e macOS usam sistema de arquivos case-insensitive por padrão — uma pasta
nova `src/components/analytics/` colidiria com a `src/components/Analytics/` existente
(o loader de GA triplicado que está sendo substituído). Mesmo problema seria válido para
`layout/` vs `Layout/`; por isso essas duas pastas do esqueleto alvo não foram criadas
ainda — nascem quando `Analytics/` e `Layout/` forem apagadas no corte final.

### Taxonomia de `/series`: `category` (era `main-class`) substitui `categories`
O campo `categories` do frontmatter nunca foi populado em nenhum dos 9 posts — por isso
`/series` sempre renderizava vazia. `main-class`, por outro lado, é obrigatório no CMS
antigo e está preenchido em todos os posts. O schema novo do TinaCMS usa esse campo
(renomeado `category`) como a taxonomia real de `/series` e `/artigos/categoria/[slug]`.
Nenhuma categoria foi inventada — são as mesmas 13 opções já usadas
(tech, leitura, js, dev, code, design, devops, tips, ia, css, dicas, ui/ux, seg).

### Campos `color` e `layout` descartados do schema novo
Confirmado por grep em `src/` que nenhum componente lê `frontmatter.color` ou
`frontmatter.layout` — existiam só no `config.yml` do Netlify CMS antigo, sem consumidor
real. Não foram portados para o schema do TinaCMS.

### Resolução do redirect de `/`
O briefing lista `/artigos ← redirect 301 de /`, mas também define `/` como a nova home
(hero, trajetória) — as duas coisas não podem ser verdade ao mesmo tempo para a mesma
URL. Resolução adotada: `/` mantém a URL e só troca de conteúdo (lista de posts → home
com hero); `/artigos` é uma URL nova, sem redirect alimentando ela. Preserva a
autoridade de SEO já acumulada na raiz do domínio. Documentado em `docs/redirects.md`,
reversível se o usuário preferir o inverso.

### Consolidação de sitemap/RSS/Algolia — direção decidida, implementação adiada
Confirmada a duplicação: `next-sitemap` (postbuild) + `src/lib/generateSitemap.js`
(custom, dentro do `getStaticProps` de `index.js`) geram sitemaps concorrentes; da mesma
forma `algolia-indexer.js` (standalone) e `src/lib/buildAlgoliaIndexes.js` (build-time)
usam esquemas de `objectID` divergentes. Direção escolhida: manter `next-sitemap` (menos
código customizado para manter) e manter o indexador Algolia standalone
(`algolia-indexer.js`-style, mais simples de auditar). Implementação real dessa escolha
fica para quando `pages/index.js` for reconstruído na fase de conteúdo — mexer nisso
agora exigiria alterar uma página que ainda está em produção viva no Pages Router.

### `robots.txt`
Removida a diretiva `Host:` (não padrão, ignorada pela maioria dos crawlers) e adicionado
`Disallow: /admin` — cobre tanto o painel antigo (removido) quanto a futura saída de
build do admin do TinaCMS (`build.outputFolder: "admin"` em `tina/config.ts`).

## Pendências que ainda bloqueiam conteúdo (não fatos inventados)

Mestrado detalhado (linha de pesquisa, orientador, datas), ORCID, palestras reais,
lista completa de livros, e-mail/WhatsApp de contato, IDs reais de GA4/Clarity, DSN do
Sentry. Ver pergunta feita ao usuário na sessão de fundação técnica.
