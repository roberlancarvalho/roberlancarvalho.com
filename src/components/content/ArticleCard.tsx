import Link from 'next/link'

type ArticleCardProps = {
  slug: string
  date: string
  title: string
  description: string
  category?: string
  timeToRead?: string
  hideCategory?: boolean
}

export function ArticleCard({
  slug,
  date,
  title,
  description,
  category,
  timeToRead,
  hideCategory
}: ArticleCardProps) {
  return (
    <Link
      href={`/${slug}`}
      className="block border-b border-borders py-6 transition-opacity duration-200 hover:opacity-90"
    >
      {category && !hideCategory && (
        <span className="mb-2 inline-block rounded bg-medium-background px-2 py-1 text-xs uppercase tracking-wide text-highlight">
          {category}
        </span>
      )}
      <p className="text-sm text-texts">
        {date}
        {timeToRead && ` • ${timeToRead}`}
      </p>
      <h2 className="mt-1 text-2xl font-bold text-post">{title}</h2>
      <p className="mt-2 text-texts">{description}</p>
    </Link>
  )
}
