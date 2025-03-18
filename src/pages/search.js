import { NextSeo } from 'next-seo'
import algoliasearch from 'algoliasearch/lite'
import { withInstantSearch } from 'next-instantsearch'
import { useEffect, useState } from 'react'

import Search from 'components/Search'

const algolia = {
  appId: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_KEY,
  indexName: process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME
}

console.log("🔍 Algolia Config:", algolia);

const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)

const SearchPage = () => {
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    let isActive = true; // Variável de controle para verificar se o componente ainda está montado

    return () => {
      isActive = false; // Define como falso quando o componente for desmontado
      searchClient.clearCache(); // Libera a memória do Algolia
      setIsMounted(false);
    };
  }, []);

  return isMounted ? (
    <>
      <NextSeo
        title="Search | Roberlan Carvalho"
        description="Vai lá, não tenha medo. Busque por posts novos e bem antigos."
      />
      <Search />
    </>
  ) : null;
}

export default withInstantSearch({
  indexName: algolia.indexName,
  searchClient
})(SearchPage)
