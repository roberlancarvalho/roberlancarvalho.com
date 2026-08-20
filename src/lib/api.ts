import matter from 'gray-matter'
import { join } from 'path'
import fs from 'fs'
import { format } from 'date-fns'
import { pt } from 'date-fns/locale'

const articlesDirectory = join(process.cwd(), 'src/content/articles')

export type ArticleFrontmatter = {
  title: string
  slug: string
  date: string
  description: string
  introduction?: string
  image?: string
  category: string
  tags?: string[]
  draft?: boolean
  seo?: {
    title?: string
    description?: string
    canonical?: string
  }
}

export type Article = {
  slug: string
  date: string
  frontmatter: ArticleFrontmatter & { date: string }
  content: string
}

export function getArticleBySlug(slug: string): Article | null {
  if (!slug) return null

  // Next 16/Turbopack hands dynamic [slug] params for non-ASCII segments
  // still percent-encoded (e.g. literal "cms-pr%C3%B3prio-ou-wordpress"
  // instead of the decoded string) — confirmed by logging the raw param
  // during the App Router bump. decodeURIComponent is a no-op on slugs
  // that are already plain (none of ours contain a literal "%"), so this
  // is safe unconditionally. NFC normalize as a second safety net in case
  // the decoded form ever arrives decomposed.
  const decoded = decodeURIComponent(slug)
  const realSlug = decoded.replace(/\.md$/, '').normalize('NFC')
  const fullPath = join(articlesDirectory, `${realSlug}.md`)
  if (!fs.existsSync(fullPath)) return null

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const frontmatter = data as ArticleFrontmatter

  const displayDate = format(new Date(frontmatter.date), "dd 'de' MMMM 'de' yyyy", {
    locale: pt
  })

  return {
    slug: realSlug,
    date: frontmatter.date,
    frontmatter: { ...frontmatter, date: displayDate },
    content
  }
}

export function getAllArticles(): Article[] {
  const files = fs.readdirSync(articlesDirectory).filter(f => f.endsWith('.md'))

  return files
    .map(file => getArticleBySlug(file))
    .filter((article): article is Article => article !== null && !article.frontmatter.draft)
    .sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1))
}

export function getArticlesByCategory(category: string): Article[] {
  return getAllArticles().filter(article => article.frontmatter.category === category)
}

export function getArticlesByTag(tag: string): Article[] {
  return getAllArticles().filter(article => article.frontmatter.tags?.includes(tag))
}

export function getAllCategories(): string[] {
  const categories = getAllArticles().map(article => article.frontmatter.category)
  return Array.from(new Set(categories)).filter(Boolean)
}
