import Link from 'next/link'
import { Avatar } from './Avatar'
import { BLOG_AUTHOR, BLOG_AUTHOR_POSITION, BLOG_AUTHOR_DESCRIPTION } from 'lib/constants'

export function Profile({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? 'flex items-center gap-3' : 'space-y-3'}>
      <Link href="/" className="flex items-center gap-3">
        <Avatar />
        <span>
          <span className="block font-semibold text-post">{BLOG_AUTHOR}</span>
          <span className="block text-sm text-texts">{BLOG_AUTHOR_POSITION}</span>
        </span>
      </Link>
      {!compact && <p className="text-sm text-texts">{BLOG_AUTHOR_DESCRIPTION}</p>}
    </div>
  )
}
