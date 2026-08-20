import type { Metadata } from 'next'
import { getAllCategories, getArticlesByCategory } from 'lib/api'
import { ArticleCard } from 'components/content/ArticleCard'

export const metadata: Metadata = {
  title: 'Series',
  description: 'Aqui ficarão as series em que iremos abordar sobre determinados assuntos.',
  openGraph: {
    images: [
      {
        url: 'https://roberlancarvalho.com/assets/img/series-cover.png',
        width: 1200,
        height: 630,
        alt: 'Roberlan Carvalho Series'
      }
    ]
  }
}

export default function SeriesPage() {
  // Corrigido: usava frontmatter.categories, campo nunca populado em
  // nenhum post (bug confirmado na Fase 0). category (ex main-class) é a
  // taxonomia real, já preenchida em todos os artigos.
  const categories = getAllCategories()

  return (
    <div className="mx-auto max-w-[70rem] px-4 py-8 large:px-8">
      {categories.map(category => (
        <section key={category} id={category} className="mb-10">
          <h2 className="mb-4 bg-borders px-4 py-2 text-2xl font-bold text-post"># {category}</h2>
          {getArticlesByCategory(category).map(article => (
            <ArticleCard
              key={article.slug}
              slug={article.slug}
              date={article.frontmatter.date}
              title={article.frontmatter.title}
              description={article.frontmatter.description}
              hideCategory
            />
          ))}
        </section>
      ))}
    </div>
  )
}
