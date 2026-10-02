import { useState } from 'react'
import { NextSeo } from 'next-seo'
import { MainContent } from 'styles/base'

const booksList = [
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

const BooksPage = () => {
  const [selectedBook, setSelectedBook] = useState(null)

  return (
    <>
      <NextSeo
        title="Livros | Roberlan Carvalho"
        description="Conheça meus livros e publicações autorais sobre tecnologia, produtividade e inteligência artificial."
        openGraph={{
          title: 'Livros | Roberlan Carvalho',
          description: 'Publicações sobre tecnologia, produtividade e IA.',
          images: booksList.map(book => ({
            url: `https://roberlancarvalho.com${book.image}`,
            width: 800,
            height: 600,
            alt: book.title
          }))
        }}
      />

      <MainContent>
        <h1>Livros</h1>
        <p>
          Conheça algumas das minhas publicações voltadas para tecnologia,
          produtividade e IA.
        </p>

        <div style={{ display: 'grid', gap: '2rem' }}>
          {booksList.map((book, index) => (
            <div key={index}>
              <img
                src={book.image}
                alt={book.title}
                style={{
                  maxWidth: '300px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                }}
                onClick={() => setSelectedBook(book)}
              />
              <h2>{book.title}</h2>
              <h4>{book.subtitle}</h4>
              <p>{book.description}</p>
              <a
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: '1rem',
                  
                }}
              >
                Ver mais
              </a>
            </div>
          ))}
        </div>
      </MainContent>

      {/* Modal */}
      {selectedBook && (
        <div
          onClick={() => setSelectedBook(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            cursor: 'pointer'
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: '#272e39',
              padding: '2rem',
              borderRadius: '8px',
              maxWidth: '500px',
              textAlign: 'center'
            }}
          >
            <img
              src={selectedBook.image}
              alt={selectedBook.title}
              style={{ maxWidth: '100%', borderRadius: '8px' }}
            />
            <h2
              style={{
                marginTop: '0.5rem',
                color: '#fff',
                fontSize: '1.5rem',
                textAlign: 'center'
              }}
            >
              {selectedBook.title}
            </h2>
            <p
              style={{
                marginTop: '0.5rem',
                color: '#fff',
                fontSize: '1rem',
                textAlign: 'center'
              }}
            >
              {selectedBook.subtitle}
            </p>
            <a
              href={selectedBook.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: '1rem',
                display: 'inline-block',
                padding: '0.5rem 1rem',
                background: '#62b0d3',
                color: '#000',
                borderRadius: '4px',
                textDecoration: 'none'
              }}
            >
              Comprar na Amazon
            </a>
            <br />
            <button
              onClick={() => setSelectedBook(null)}
              style={{
                marginTop: '1rem',
                background: 'transparent',
                border: 'none',
                color: '#fff',
                textDecoration: 'underline',
                cursor: 'pointer'
              }}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default BooksPage
