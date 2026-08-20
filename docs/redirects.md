# Mapa de redirects — URLs legadas → novas

Baseline: `sitemap-0.xml` publicado em produção em 2026-08-19 (16 URLs, ver Fase 0 do
diagnóstico). Toda URL abaixo precisa de um redirect 301 permanente (não 302) antes do
corte para produção, exceto onde marcado.

Wiring real em `next.config` (`redirects()`) acontece quando a página de destino já
existir (fase de conteúdo) — redirecionar para uma rota que ainda não existe resultaria
em 404 e não pode ser testado. Este documento é o contrato a implementar naquele
momento; cada linha precisa ser testada manualmente (`curl -I` ou navegador) antes do
merge para `main`.

## Páginas estáticas

| URL antiga  | URL nova                  | Tipo               |
|-------------|----------------------------|---------------------|
| `/`         | `/` (mesma URL)             | **sem redirect** — ver nota abaixo |
| `/about`    | `/sobre`                    | 301 |
| `/portfolio`| `/projetos`                 | 301 |
| `/books`    | `/livros`                   | 301 |
| `/gallery`  | `/galeria`                  | 301 |
| `/search`   | `/search` (mantido)         | sem redirect — Algolia mantido por decisão do usuário |
| `/series`   | `/series` (mantido, corrigido)| sem redirect — taxonomia corrigida usando `category` (ex `main-class`) em vez do campo `categories` nunca populado |

### Nota sobre `/`

O prompt original lista `/artigos ← redirect 301 de /`, mas isso conflita com o mapa de
páginas que também define `/` como a nova home (hero, trajetória, destaques) — uma URL
não pode simultaneamente redirecionar embora e servir conteúdo novo.

Resolução adotada: `/` **mantém a URL** e só troca de conteúdo (lista de posts →
home com hero). Isso preserva toda autoridade/histórico de indexação já acumulado na
raiz do domínio. `/artigos` é uma **URL nova** (não alimentada por redirect de `/`) que
passa a hospedar o que antes vivia em `/` (lista paginada de posts). Sinalizado ao
usuário no relatório de fundação técnica; reversível se ele preferir o inverso.

## Posts (9 URLs → `/artigos/[slug]`, mapeamento 1:1, mesmo slug)

| URL antiga                                   | URL nova                                              |
|-----------------------------------------------|--------------------------------------------------------|
| `/mensageria-kafka-ia`                        | `/artigos/mensageria-kafka-ia`                          |
| `/como-a-ia-funciona`                         | `/artigos/como-a-ia-funciona`                            |
| `/sobre-o-hobbit`                             | `/artigos/sobre-o-hobbit`                                |
| `/ia-na-saude`                                | `/artigos/ia-na-saude`                                   |
| `/desenvolvimento-de-softwares-sob-medida`    | `/artigos/desenvolvimento-de-softwares-sob-medida`       |
| `/o-tdah-e-a-carreira-na-programacao`         | `/artigos/o-tdah-e-a-carreira-na-programacao`            |
| `/cms-próprio-ou-wordpress`                   | `/artigos/cms-próprio-ou-wordpress`                      |
| `/a-resposta-para-tudo-eh-42`                 | `/artigos/a-resposta-para-tudo-eh-42`                    |
| `/a-tecnologia-em-meio-a-crise`               | `/artigos/a-tecnologia-em-meio-a-crise`                  |

Todas 301, todas mesmo slug (sem renomear), só muda o prefixo de path.

## URLs novas sem equivalente legado (não precisam de redirect)

`/experiencia`, `/projetos/[slug]` (se aplicável), `/pesquisa`, `/publicacoes`,
`/artigos/categoria/[slug]`, `/artigos/tag/[slug]`, `/contato`,
`/politica-de-privacidade`.

## Legado já morto (sem redirect — decisão registrada em docs/decisions.md)

`/admin` (Netlify CMS) — removido, não fazia parte do sitemap público, `robots.txt`
passa a bloquear explicitamente. Os rewrites legados do Jekyll/Gatsby já existentes em
`next.config.js` (`/js/`, `/jekyll/`, `/svg/`, `/dev/`, `/tags/`, `/page/:slug*`,
`/making-of-blog-novo/`) são mantidos como estão — não fazem parte desta migração e já
funcionam.
