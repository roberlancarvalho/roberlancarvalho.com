import BlogPost from 'templates/blog-post'
import { getPostBySlug, getAllPosts, withoutContent } from 'lib/api'
import markdownToHtml from 'lib/markdownToHtml'

const Post = post => {
  return <BlogPost post={post} />
}

export default Post

export async function getStaticProps({ params }) {
  const slug = params.slug
  const post = getPostBySlug(slug)
  const content = await markdownToHtml(post.content || '')
  

  const allPosts = getAllPosts()
  const currentPostIndex = allPosts.findIndex(p => p.slug === slug)
  const nextPost = withoutContent(allPosts[currentPostIndex - 1])
  const prevPost = withoutContent(allPosts[currentPostIndex + 1])

  return {
    props: {
      ...post,
      content,
      nextPost,
      prevPost
    }
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts()
  const paths = posts.map(({ slug }) => ({ params: { slug } }))

  return {
    paths,
    fallback: false
  }
}
