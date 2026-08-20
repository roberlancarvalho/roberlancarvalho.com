import type { Metadata } from 'next'
import { getAllArticles } from 'lib/api'
import { ArticleList } from 'components/content/ArticleList'

export const metadata: Metadata = {
  title: 'Roberlan Carvalho',
  description:
    'Desenvolvedor Full Stack imerso em tecnologia, música e jogos, partilhando inovações.',
  openGraph: {
    images: [
      {
        url: 'https://roberlancarvalho.com/assets/img/blog-image.png',
        width: 1200,
        height: 630,
        alt: 'Roberlan Carvalho - Blog'
      }
    ]
  }
}

export default function HomePage() {
  const articles = getAllArticles()

  return (
    <div className="mx-auto max-w-[70rem] px-4 py-8 large:px-8">
      <ArticleList articles={articles} />
    </div>
  )
}
