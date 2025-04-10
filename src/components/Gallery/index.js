import React, { useState } from 'react'
import Image from 'next/image'
import ReactModal from 'react-modal'
import {
  GalleryWrapper,
  SquarePhotoItem,
  ModalContainer,
  ModalContent,
  ModalImage,
  CloseIconButton,
  NavButton,
  ThemeTitle,
  ThemeDescription,
  Caption
} from './styled'

ReactModal.setAppElement('#__next')

export default function Gallery({ theme, description, photos }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openModal = (index) => {
    setCurrentIndex(index)
    setModalOpen(true)
  }

  const closeModal = () => setModalOpen(false)

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % photos.length)
  }

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + photos.length) % photos.length)
  }

  const ModalStyles = {
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
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      zIndex: 1000
    }
  }

  return (
    <>
      <ThemeTitle>{theme}</ThemeTitle>
      <ThemeDescription>{description}</ThemeDescription>

      <GalleryWrapper>
        {photos.map((photo, i) => (
          <SquarePhotoItem key={i} onClick={() => openModal(i)}>
            <Image src={photo.src} alt={photo.alt} layout="fill" objectFit="cover" />
          </SquarePhotoItem>
        ))}
      </GalleryWrapper>

      <ReactModal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={ModalStyles}
      >
        <ModalContainer>
          <CloseIconButton onClick={closeModal}>×</CloseIconButton>
          <ModalContent>
            <NavButton direction="left" onClick={prevImage}>{'<'}</NavButton>
            <ModalImage src={photos[currentIndex].src} alt={photos[currentIndex].alt} />
            <NavButton direction="right" onClick={nextImage}>{'>'}</NavButton>
          </ModalContent>
          <Caption>{photos[currentIndex].caption}</Caption>
        </ModalContainer>
      </ReactModal>
    </>
  )
}
