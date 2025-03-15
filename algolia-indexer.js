require('dotenv').config()
const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const algoliasearch = require('algoliasearch')

// Configuração do Algolia (Substitua pelo seu)
const client = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID, process.env.ALGOLIA_ADMIN_KEY)
const index = client.initIndex(process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME)

// Caminho onde estão os posts em Markdown
const postsDirectory = path.join(process.cwd(), 'posts')

// Função para processar os arquivos Markdown e enviar para o Algolia
const getPosts = () => {
  const files = fs.readdirSync(postsDirectory)

  return files.map((file) => {
    const filePath = path.join(postsDirectory, file)
    const fileContents = fs.readFileSync(filePath, 'utf-8')

    const { data, content } = matter(fileContents)

    return {
      objectID: file.replace('.md', ''), // Garante que cada post tem um ID único
      title: data.title || "Sem título",
      description: data.description || "Sem descrição",
      date: data.date || "Sem data",
      slug: data.slug || file.replace('.md', ''), // Garante que sempre há um slug
    }
  })
}

// Envia os posts para o Algolia
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
