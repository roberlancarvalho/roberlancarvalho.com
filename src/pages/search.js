import { NextSeo } from 'next-seo'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch } from 'react-instantsearch-dom'

import Search from 'components/Search'

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_KEY
)

const SearchPage = () => (
  <>
    <NextSeo
      title="Search | Roberlan Carvalho"
      description="Vai lá, não tenha medo. Busque por posts novos e bem antigos."
    />
    <InstantSearch
      indexName={process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME}
      searchClient={searchClient}
    >
      <Search />
    </InstantSearch>
  </>
)

export default SearchPage
