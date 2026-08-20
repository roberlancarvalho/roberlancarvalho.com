import Head from 'next/head'

// Internal-only preview of the proposed Tailwind v4 design tokens, ported
// 1:1 from src/styles/global.js + src/styles/base.js. Not linked from any
// nav, excluded from indexing. Delete once the design direction is
// validated and the real components are converted (see docs/decisions.md).

const swatches = [
  { name: 'background', class: 'bg-background' },
  { name: 'borders', class: 'bg-borders' },
  { name: 'texts', class: 'bg-texts' },
  { name: 'post', class: 'bg-post' },
  { name: 'highlight', class: 'bg-highlight' },
  { name: 'medium-background', class: 'bg-medium-background' }
]

const typeScale = [
  { label: 'Post title (desktop)', class: 'text-[4rem]' },
  { label: 'Post title (mobile)', class: 'text-[2.8rem]' },
  { label: 'h1', class: 'text-[2.8rem]' },
  { label: 'h2', class: 'text-[2.1rem]' },
  { label: 'h3', class: 'text-[1.6rem]' },
  { label: 'body copy', class: 'text-[1.25rem]' }
]

const spacingScale = ['0.5rem', '1rem', '1.5rem', '2rem', '3rem', '3.75rem', '5rem']

function IconButton({ label, children }) {
  return (
    <button
      type="button"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-borders text-texts transition-colors duration-200 ease-out hover:border-highlight hover:text-highlight focus-visible:outline focus-visible:outline-2 focus-visible:outline-highlight"
    >
      {children}
    </button>
  )
}

const DesignSystemPreview = () => (
  <>
    <Head>
      <title>Design System Preview (dev only)</title>
      <meta name="robots" content="noindex, nofollow" />
    </Head>

    <main className="bg-background text-texts min-h-screen p-8 space-y-12">
      <header>
        <h1 className="text-[2.8rem] font-bold text-post">Design system — proposta</h1>
        <p className="mt-2 max-w-prose">
          Tokens portados 1:1 do styled-components atual (src/styles/global.js,
          src/styles/base.js) para Tailwind v4. Página interna, não indexada —
          só para validação visual antes da conversão em massa dos componentes.
        </p>
      </header>

      <section>
        <h2 className="text-[2.1rem] font-semibold mb-4">Cores (tema atual do &lt;body&gt;)</h2>
        <div className="flex flex-wrap gap-4">
          {swatches.map(({ name, class: bgClass }) => (
            <div key={name} className="w-40">
              <div className={`h-20 rounded-md border border-borders ${bgClass}`} />
              <p className="mt-2 text-sm">{name}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-[2.1rem] font-semibold mb-4">Tipografia</h2>
        <div className="space-y-3">
          {typeScale.map(({ label, class: sizeClass }) => (
            <p key={label} className={sizeClass}>
              {label} — Roberlan Carvalho
            </p>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-[2.1rem] font-semibold mb-4">Espaçamento</h2>
        <div className="flex flex-wrap items-end gap-4">
          {spacingScale.map(space => (
            <div key={space} className="text-center">
              <div className="bg-highlight" style={{ width: space, height: space }} />
              <p className="mt-2 text-sm">{space}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-[2.1rem] font-semibold mb-4">
          Primitivos convertidos (proposta)
        </h2>
        <p className="mb-4 max-w-prose">
          Hoje o botão de tema/hamburger do MenuBar é um{' '}
          <code>&lt;span onClick&gt;</code> sem <code>aria-label</code> — inacessível
          por teclado e leitor de tela. Proposta abaixo: <code>&lt;button&gt;</code>{' '}
          real, focável, com rótulo.
        </p>
        <div className="flex items-center gap-4">
          <IconButton label="Alternar tema">☾</IconButton>
          <IconButton label="Abrir menu">☰</IconButton>
          <button
            type="button"
            className="rounded-md bg-highlight px-6 py-3 font-semibold text-white transition-opacity duration-200 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight"
          >
            Botão primário
          </button>
        </div>
      </section>
    </main>
  </>
)

export default DesignSystemPreview
