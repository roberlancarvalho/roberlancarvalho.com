import Prism from 'prismjs'

import { useEffect } from 'react'
import { NextSeo } from 'next-seo'

import { timeToRead } from 'lib/utils'

import PageHeader from 'components/PageHeader'
import RecommendedPosts from 'components/RecommendedPosts'
import Comments from 'components/Comments'

import { MainContent } from 'styles/base'

const BlogPost = ({ post }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [post])

  return (
    <>
      <NextSeo
        title={`${post.frontmatter.title} - Roberlan Carvalho`}
        description={post.frontmatter.description}
        openGraph={{
          url: `https://roberlancarvalho.com/${post.slug}`,
          title: `${post.frontmatter.title} - Roberlan Carvalho`,
          description: post.frontmatter.description,
          images: [
            {
              url: post.frontmatter.image
                ? post.frontmatter.image.startsWith('http')
                  ? post.frontmatter.image
                  : `https://roberlancarvalho.com${post.frontmatter.image}`
                : 'https://roberlancarvalho.com/images/default-og.png',

              alt: `${post.frontmatter.title}`,
              width: 1200,
              height: 630
            }
          ],
          type: 'article'
        }}
      />

      <PageHeader
        backHref="/"
        meta={`${post.frontmatter.date} • ${timeToRead(post.content)}`}
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
        category={post.frontmatter['main-class'] || 'tech'}
      />
      <MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </MainContent>
      <RecommendedPosts next={post.nextPost} previous={post.prevPost} />
      <Comments title={post.frontmatter.title} />
    </>
  )
}

export default BlogPost
