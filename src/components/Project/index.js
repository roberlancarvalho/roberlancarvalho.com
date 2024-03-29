import React, { useState } from 'react'
/* eslint-disable @next/next/no-img-element */
import ReactModal from 'react-modal'
import * as S from './styled'

ReactModal.setAppElement('#__next')

const Project = ({ title, description, link, image }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => setModalIsOpen(true)
  const closeModal = () => setModalIsOpen(false)

  return (
    <>
      <S.ProjectLink as="button" onClick={openModal}>
        <S.ProjectWrapper>
          <S.ProjectImage src={image} alt={title} />
          <S.ProjectInfo>
            <S.ProjectTitle>{title}</S.ProjectTitle>
            <S.ProjectDescription>{description}</S.ProjectDescription>
          </S.ProjectInfo>
        </S.ProjectWrapper>
      </S.ProjectLink>

      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel={title}
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
            color: 'var(--texts)',
            textAlign: 'left'
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 1)'
          }
        }}
      >
        <div style={{ textAlign: 'left' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>{title}</h2>
          <img
            src={image}
            alt={title}
            style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px' }}
          />
          <p style={{ marginBottom: '20px' }}>{description}</p>
          <S.CloseButton onClick={closeModal}>Fechar</S.CloseButton>
        </div>
      </ReactModal>
    </>
  )
}

export default Project
