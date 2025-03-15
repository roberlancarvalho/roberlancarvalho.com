import { NextSeo } from 'next-seo'
import algoliasearch from 'algoliasearch/lite'
import { withInstantSearch } from 'next-instantsearch'

import Search from 'components/Search'

const algolia = {
  appId: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_KEY,
  indexName: process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME
}

console.log("🔍 Algolia Config:", algolia);

const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)

const SearchPage = () => {
  return (
    <>
      <NextSeo
        title="Search | Roberlan Carvalho"
        description="Vai lá, não tenha medo. Busque por posts novos e bem antigos."
      />
      <Search />
    </>
  )
}

export default withInstantSearch({
  indexName: algolia.indexName,
  searchClient
})(SearchPage)
