'use client'

import { useState } from 'react'
import Image from 'next/image'
import ReactModal from 'react-modal'

type ProjectProps = {
  title: string
  description: string
  image: string
  link?: string
}

// Decisão do usuário: os 7 projetos do portfólio não têm link público real
// hoje. Em vez de link quebrado ("#") ou URL inventada, mostra como
// "privado/cliente" sem link clicável. Se algum ganhar link real no
// futuro, passa a renderizar como botão "Ver projeto" abaixo.
export function Project({ title, description, image, link }: ProjectProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="block w-full border-b border-borders py-4 text-left"
      >
        <div className="flex items-center gap-4">
          <Image
            src={image}
            alt={title}
            width={80}
            height={80}
            className="rounded object-cover"
          />
          <div>
            <h3 className="font-semibold text-post">{title}</h3>
            <p className="text-sm text-texts">{description}</p>
            {!link && (
              <span className="mt-1 inline-block text-xs uppercase tracking-wide text-texts">
                Projeto privado / cliente
              </span>
            )}
          </div>
        </div>
      </button>

      <ReactModal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel={title}
        ariaHideApp={false}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '500px',
            width: '90%',
            backgroundColor: 'var(--background)',
            color: 'var(--texts)'
          },
          overlay: { backgroundColor: 'var(--background)', opacity: 0.97 }
        }}
      >
        <div className="text-left">
          <h2 className="mb-4 text-2xl font-bold">{title}</h2>
          <Image
            src={image}
            alt={title}
            width={450}
            height={280}
            className="mb-3 w-full rounded object-cover"
          />
          <p className="mb-4">{description}</p>
          {!link && (
            <p className="mb-4 text-sm uppercase tracking-wide text-texts">
              Projeto privado / cliente — sem link público
            </p>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 inline-block text-highlight hover:underline"
            >
              Ver projeto
            </a>
          )}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="block text-texts hover:text-highlight"
          >
            Fechar
          </button>
        </div>
      </ReactModal>
    </>
  )
}
