// Accessibility fix confirmed missing in the pre-bump site (zero aria-*,
// no skip link anywhere). Visually hidden until focused via keyboard.
export function SkipLink() {
  return (
    <a
      href="#conteudo"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-highlight focus:px-4 focus:py-2 focus:text-white"
    >
      Pular para o conteúdo
    </a>
  )
}
