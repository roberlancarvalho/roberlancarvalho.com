'use client'

import { useState } from 'react'
import Image from 'next/image'
import ReactModal from 'react-modal'

type Photo = { src: string; alt: string; caption: string }

type GalleryProps = {
  theme: string
  description: string
  photos: Photo[]
}

export function Gallery({ theme, description, photos }: GalleryProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openModal = (index: number) => {
    setCurrentIndex(index)
    setModalOpen(true)
  }

  const nextImage = () => setCurrentIndex((currentIndex + 1) % photos.length)
  const prevImage = () => setCurrentIndex((currentIndex - 1 + photos.length) % photos.length)

  return (
    <section className="mx-auto max-w-[70rem] px-4 py-8 large:px-8">
      {theme && <h2 className="text-2xl font-bold text-post">{theme}</h2>}
      {description && <p className="mt-1 text-texts">{description}</p>}

      <div className="mt-4 grid grid-cols-2 gap-2 medium:grid-cols-3">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => openModal(i)}
            aria-label={`Ampliar: ${photo.alt}`}
            className="relative aspect-square overflow-hidden rounded"
          >
            <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
          </button>
        ))}
      </div>

      <ReactModal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel={photos[currentIndex]?.alt}
        ariaHideApp={false}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            maxWidth: 'calc(100vw - 2rem)',
            width: '100%',
            maxHeight: '90vh',
            background: 'transparent',
            border: 'none',
            padding: '0',
            overflow: 'hidden'
          },
          overlay: { backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: 1000 }
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <button
            type="button"
            onClick={() => setModalOpen(false)}
            aria-label="Fechar"
            className="self-end text-3xl text-white"
          >
            ×
          </button>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={prevImage}
              aria-label="Foto anterior"
              className="text-3xl text-white"
            >
              ‹
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photos[currentIndex]?.src}
              alt={photos[currentIndex]?.alt}
              className="max-h-[70vh] max-w-full rounded"
            />
            <button
              type="button"
              onClick={nextImage}
              aria-label="Próxima foto"
              className="text-3xl text-white"
            >
              ›
            </button>
          </div>
          <p className="text-center text-sm text-white">{photos[currentIndex]?.caption}</p>
        </div>
      </ReactModal>
    </section>
  )
}
