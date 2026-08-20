import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      className="flex h-screen flex-col items-center justify-center gap-4 bg-[length:280px] bg-[position:bottom_left] bg-no-repeat px-5 text-center large:bg-[length:800px]"
      style={{ backgroundImage: "url('/assets/img/john-404.gif')" }}
    >
      <h1 className="text-post text-8xl font-bold tracking-widest">404</h1>
      <p className="font-mono text-texts">Ué? Cadê? Parece que não tem o que você procura.</p>
      <Link
        href="/"
        className="mt-2 rounded-md border border-borders px-3 py-2 text-xs font-bold uppercase tracking-wide text-texts transition-opacity hover:opacity-70"
      >
        De volta ao blog!
      </Link>
    </div>
  )
}
