import { NextSeo } from 'next-seo'
import Link from 'next/link'

import PageHeader from 'components/PageHeader'
import { MainContent } from 'styles/base'

const NotFoundPage = () => (
  <>
    <NextSeo title="404: Not found | Roberlan Carvalho" />
    <PageHeader
      title="404"
      description="Ué? Cadê? Parece que não tem o que você procura."
    />
    <MainContent>
      <p>
        <Link href="/">
          <a>← De volta ao blog</a>
        </Link>
      </p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/img/john-404.gif" alt="John Travolta procurando algo" />
    </MainContent>
  </>
)

export default NotFoundPage
