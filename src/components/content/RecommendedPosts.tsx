import Link from 'next/link'
import type { Article } from 'lib/api'

type RecommendedPostsProps = {
  next: Article | null
  previous: Article | null
}

export function RecommendedPosts({ next, previous }: RecommendedPostsProps) {
  if (!next && !previous) return null

  return (
    <nav
      aria-label="Navegação entre artigos"
      className="mx-auto flex max-w-[70rem] flex-col gap-4 px-4 py-8 large:flex-row large:justify-between large:px-20"
    >
      {previous ? (
        <Link href={`/${previous.slug}`} className="text-texts hover:text-highlight">
          ← {previous.frontmatter.title}
        </Link>
      ) : (
        <span />
      )}
      {next && (
        <Link href={`/${next.slug}`} className="text-right text-texts hover:text-highlight">
          {next.frontmatter.title} →
        </Link>
      )}
    </nav>
  )
}
