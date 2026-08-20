import type { Metadata } from 'next'
import { Search } from 'components/content/Search'

export const metadata: Metadata = {
  title: 'Buscar',
  description: 'Vai lá, não tenha medo. Busque por posts novos e bem antigos.'
}

export default function SearchPage() {
  return (
    <div className="mx-auto max-w-[70rem] px-4 py-8 large:px-8">
      <Search />
    </div>
  )
}
