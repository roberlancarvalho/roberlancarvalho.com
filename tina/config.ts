import { defineConfig } from 'tinacms'

/**
 * Branch resolution: explicit override, then whatever the host exposes,
 * then a local fallback. Mirrors the pattern used in the Tech North
 * sibling project. Confirm the real default branch name before deploying
 * the hosted admin (this repo currently defaults to "main").
 */
const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main'

// Real, currently-populated taxonomy (was "main-class" in the old Netlify
// CMS config.yml) — replaces the never-populated "categories" field that
// left /series permanently empty. See docs/decisions.md.
const ARTICLE_CATEGORIES = [
  'tech',
  'leitura',
  'js',
  'dev',
  'code',
  'design',
  'devops',
  'tips',
  'ia',
  'css',
  'dicas',
  'ui/ux',
  'seg'
]

export default defineConfig({
  branch,
  // Only required for the hosted admin panel (TinaCloud). Locally,
  // `tinacms dev` runs fully against the filesystem without these.
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public'
  },

  media: {
    tina: {
      publicFolder: 'public',
      mediaRoot: 'assets/img'
    }
  },

  schema: {
    collections: [
      {
        name: 'article',
        label: 'Artigos',
        path: 'src/content/articles',
        format: 'md',
        ui: {
          router: ({ document }) => `/artigos/${document._sys.filename}`
        },
        fields: [
          { type: 'string', name: 'title', label: 'Título', isTitle: true, required: true },
          {
            type: 'string',
            name: 'slug',
            label: 'Slug (URL)',
            required: true,
            description:
              'Usado em /artigos/seu-slug. Não altere depois de publicado — quebra links existentes e redirects de SEO.'
          },
          { type: 'datetime', name: 'date', label: 'Data', required: true },
          { type: 'string', name: 'description', label: 'Descrição (SEO/preview)', required: true },
          { type: 'image', name: 'image', label: 'Imagem de capa' },
          {
            type: 'string',
            name: 'category',
            label: 'Categoria',
            options: ARTICLE_CATEGORIES,
            required: true
          },
          { type: 'string', name: 'tags', label: 'Tags', list: true },
          { type: 'boolean', name: 'draft', label: 'Rascunho (não publica)' },
          {
            type: 'object',
            name: 'seo',
            label: 'SEO (opcional, sobrescreve os padrões)',
            fields: [
              { type: 'string', name: 'title', label: 'Title override' },
              { type: 'string', name: 'description', label: 'Description override' },
              { type: 'string', name: 'canonical', label: 'Canonical URL override' }
            ]
          },
          { type: 'rich-text', name: 'body', label: 'Conteúdo', isBody: true }
        ]
      },
      {
        name: 'project',
        label: 'Projetos',
        path: 'src/content/projects',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Título', isTitle: true, required: true },
          { type: 'string', name: 'description', label: 'Descrição', required: true },
          { type: 'image', name: 'image', label: 'Imagem' },
          {
            type: 'string',
            name: 'link',
            label: 'URL pública (deixe vazio se privado/cliente)'
          },
          {
            type: 'string',
            name: 'status',
            label: 'Status',
            options: ['publico', 'privado'],
            required: true
          },
          { type: 'rich-text', name: 'body', label: 'Detalhes (opcional)', isBody: true }
        ]
      },
      {
        name: 'book',
        label: 'Livros',
        path: 'src/content/books',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Título', isTitle: true, required: true },
          { type: 'string', name: 'author', label: 'Autor', required: true },
          { type: 'string', name: 'description', label: 'Comentário', required: false },
          { type: 'image', name: 'image', label: 'Capa' },
          { type: 'string', name: 'link', label: 'Link (opcional)' }
        ]
      },
      {
        name: 'galleryItem',
        label: 'Galeria',
        path: 'src/content/gallery',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Título', isTitle: true, required: true },
          { type: 'string', name: 'section', label: 'Seção', required: true },
          { type: 'image', name: 'image', label: 'Imagem', required: true },
          { type: 'string', name: 'caption', label: 'Legenda' }
        ]
      },
      {
        name: 'publication',
        label: 'Publicações',
        path: 'src/content/publications',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Título', isTitle: true, required: true },
          { type: 'string', name: 'authors', label: 'Autores', list: true, required: true },
          { type: 'string', name: 'venue', label: 'Veículo/Revista' },
          { type: 'datetime', name: 'date', label: 'Data de publicação', required: true },
          { type: 'string', name: 'doi', label: 'DOI' },
          { type: 'string', name: 'url', label: 'URL (se não houver DOI)' },
          {
            type: 'string',
            name: 'type',
            label: 'Tipo',
            options: ['artigo', 'capitulo', 'conferencia', 'preprint']
          }
        ]
      },
      {
        name: 'talk',
        label: 'Palestras',
        path: 'src/content/talks',
        format: 'md',
        // Schema ready, sem entradas. /palestras só entra no ar quando
        // houver conteúdo real — ver PENDÊNCIAS no relatório de fundação.
        fields: [
          { type: 'string', name: 'title', label: 'Título', isTitle: true, required: true },
          { type: 'string', name: 'event', label: 'Evento', required: true },
          { type: 'datetime', name: 'date', label: 'Data', required: true },
          { type: 'string', name: 'url', label: 'Link (slides/gravação)' }
        ]
      },
      {
        name: 'page',
        label: 'Páginas (blocos editoriais)',
        path: 'src/content/pages',
        format: 'md',
        // Singleton-style editorial blocks: about/bio, home highlights, etc.
        // One markdown file per block, filename = block id.
        fields: [
          { type: 'string', name: 'title', label: 'Título interno', isTitle: true, required: true },
          { type: 'rich-text', name: 'body', label: 'Conteúdo', isBody: true }
        ]
      }
    ]
  }
})
