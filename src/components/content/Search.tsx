'use client'

import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits, Stats, Configure } from 'react-instantsearch'
import { SiAlgolia } from 'react-icons/si'
import { ArticleCard } from './ArticleCard'

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_KEY!
)

type AlgoliaHit = {
  objectID: string
  slug?: { current?: string } | string
  title: string
  description: string
  date: string
}

function Hit({ hit }: { hit: AlgoliaHit }) {
  const slug = typeof hit.slug === 'string' ? hit.slug : hit.slug?.current || hit.objectID
  return (
    <ArticleCard slug={slug} date={hit.date} title={hit.title} description={hit.description} hideCategory />
  )
}

export function Search() {
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME!}
    >
      <Configure hitsPerPage={200} distinct />
      <SearchBox placeholder="Pesquisar..." autoFocus classNames={{ input: 'w-full rounded border border-borders bg-background px-4 py-2 text-post' }} />
      <Stats
        classNames={{ root: 'mt-2 text-sm text-texts' }}
        translations={{
          rootElementText: ({ nbHits, processingTimeMS }) =>
            nbHits === 1
              ? `${nbHits} resultado encontrado em ${processingTimeMS}ms`
              : `${nbHits} resultados encontrados em ${processingTimeMS}ms`
        }}
      />
      <Hits hitComponent={Hit} classNames={{ list: 'mt-4' }} />
      <p className="mt-6 flex items-center gap-2 text-sm text-texts">
        Powered by Algolia <SiAlgolia className="h-4 w-4" />
      </p>
    </InstantSearch>
  )
}
