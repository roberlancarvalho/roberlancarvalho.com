'use client'

import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { ArticleCard } from './ArticleCard'
import { timeToRead } from 'lib/utils'
import type { Article } from 'lib/api'

const PAGE_SIZE = 10

export function ArticleList({ articles }: { articles: Article[] }) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const visible = articles.slice(0, visibleCount)

  return (
    <InfiniteScroll
      dataLength={visible.length}
      next={() => setVisibleCount(count => count + PAGE_SIZE)}
      hasMore={visible.length < articles.length}
      loader={null}
    >
      {visible.map(article => (
        <ArticleCard
          key={article.slug}
          slug={article.slug}
          date={article.frontmatter.date}
          title={article.frontmatter.title}
          description={article.frontmatter.description}
          category={article.frontmatter.category}
          timeToRead={timeToRead(article.content)}
        />
      ))}
    </InfiniteScroll>
  )
}
