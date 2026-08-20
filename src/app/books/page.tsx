import type { Metadata } from 'next'
import Image from 'next/image'

// Único livro confirmado hoje. Lista completa é uma pendência real ainda
// não respondida pelo usuário — não inventar mais itens aqui.
const BOOKS = [
  {
    title: 'Maximize Seu Tempo',
    subtitle:
      'Estratégias Eficazes de Produtividade e Gestão de Tempo para Seus Estudos',
    description:
      'Descubra como transformar sua rotina, vencer a procrastinação e recuperar o controle do seu tempo. Maximize Seu Tempo é um guia prático e profundo para quem deseja organizar seus estudos, equilibrar responsabilidades e melhorar sua produtividade sem abrir mão da saúde mental.',
    image: '/assets/img/maximize-seu-tempo.png',
    link: 'https://a.co/d/ir2Cxvd'
  }
]

export const metadata: Metadata = {
  title: 'Livros',
  description:
    'Conheça meus livros e publicações autorais sobre tecnologia, produtividade e inteligência artificial.',
  openGraph: {
    title: 'Livros | Roberlan Carvalho',
    description: 'Publicações sobre tecnologia, produtividade e IA.',
    images: BOOKS.map(book => ({
      url: `https://roberlancarvalho.com${book.image}`,
      width: 800,
      height: 600,
      alt: book.title
    }))
  }
}

export default function BooksPage() {
  return (
    <div className="mx-auto max-w-[70rem] px-4 py-8 large:px-8">
      <h1 className="text-3xl font-bold text-post">Livros</h1>
      <p className="mt-2 text-texts">
        Conheça algumas das minhas publicações voltadas para tecnologia, produtividade
        e IA.
      </p>

      <div className="mt-8 grid gap-8">
        {BOOKS.map(book => (
          <div key={book.title} className="grid gap-4 large:grid-cols-[300px_1fr]">
            <Image
              src={book.image}
              alt={book.title}
              width={300}
              height={450}
              className="rounded-lg"
            />
            <div>
              <h2 className="text-xl font-bold text-post">{book.title}</h2>
              <h3 className="mt-1 font-medium text-texts">{book.subtitle}</h3>
              <p className="mt-2 text-texts">{book.description}</p>
              <a
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-highlight hover:underline"
              >
                Ver mais
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
