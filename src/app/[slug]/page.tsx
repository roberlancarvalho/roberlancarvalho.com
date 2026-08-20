import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllArticles, getArticleBySlug } from 'lib/api'
import markdownToHtml from 'lib/markdownToHtml'
import { timeToRead } from 'lib/utils'
import { ArticleBody } from 'components/content/ArticleBody'
import { RecommendedPosts } from 'components/content/RecommendedPosts'
import { Comments } from 'components/content/Comments'
import { SITE_URL } from 'config/seo'

export function generateStaticParams() {
  return getAllArticles().map(article => ({ slug: article.slug }))
}

function getNeighbors(slug: string) {
  const all = getAllArticles()
  const index = all.findIndex(a => a.slug === slug)
  return {
    nextArticle: all[index - 1] ?? null,
    prevArticle: all[index + 1] ?? null
  }
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}

  const image = article.frontmatter.image
    ? article.frontmatter.image.startsWith('http')
      ? article.frontmatter.image
      : `${SITE_URL}${article.frontmatter.image}`
    : `${SITE_URL}/assets/img/blog-image.png`

  return {
    title: article.frontmatter.title,
    description: article.frontmatter.description,
    openGraph: {
      url: `${SITE_URL}/${article.slug}`,
      title: article.frontmatter.title,
      description: article.frontmatter.description,
      type: 'article',
      images: [{ url: image, width: 1200, height: 630, alt: article.frontmatter.title }]
    }
  }
}

export default async function ArticlePage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const html = await markdownToHtml(article.content || '')
  const { nextArticle, prevArticle } = getNeighbors(article.slug)

  return (
    <article>
      <header className="mx-auto max-w-[70rem] px-4 pt-8 large:px-20 large:pt-20">
        <Link href="/" className="mb-6 inline-block text-texts hover:text-highlight">
          ← Voltar na listagem
        </Link>
        <p className="text-texts">
          {article.frontmatter.date} • {timeToRead(article.content)}
        </p>
        <h1 className="mt-2 text-4xl font-bold text-post large:text-6xl">
          {article.frontmatter.title}
        </h1>
        <p className="mt-2 text-xl font-light text-texts">{article.frontmatter.description}</p>
      </header>

      <ArticleBody html={html} />

      <RecommendedPosts next={nextArticle} previous={prevArticle} />
      <Comments title={article.frontmatter.title} />
    </article>
  )
}
