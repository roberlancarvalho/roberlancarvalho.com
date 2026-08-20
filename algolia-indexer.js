require('dotenv').config()
const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const algoliasearch = require('algoliasearch')

const client = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID, process.env.ALGOLIA_ADMIN_KEY)
const index = client.initIndex(process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME)

// Posts migrated to src/content/articles/ during the App Router bump
// (see docs/decisions.md) — this indexer needs to point at the new
// location too, or it 404s on every build.
const postsDirectory = path.join(process.cwd(), 'src/content/articles')

const getPosts = () => {
  const files = fs.readdirSync(postsDirectory)

  return files.map((file) => {
    const filePath = path.join(postsDirectory, file)
    const fileContents = fs.readFileSync(filePath, 'utf-8')

    const { data, content } = matter(fileContents)

    return {
      objectID: file.replace('.md', ''),
      title: data.title || "Sem título",
      description: data.description || "Sem descrição",
      date: data.date || "Sem data",
      slug: data.slug || file.replace('.md', ''),
    }
  })
}

const indexPosts = async () => {
  const posts = getPosts()

  try {
    await index.saveObjects(posts)
    console.log('✅ Posts indexados no Algolia!')
  } catch (error) {
    console.error('❌ Erro ao indexar:', error)
  }
}

indexPosts()
