import styled from 'styled-components'

export const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`

export const SquarePhotoItem = styled.button`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border: none;
  padding: 0;
  border-radius: 8px;
  cursor: pointer;
`

export const ModalContainer = styled.div`
  position: relative;
  text-align: center;
  padding: 0.5rem;
`

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
  padding: 1rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`

export const ModalImage = styled.img`
  max-width: 100%;
  max-height: 75vh;
  object-fit: contain;
  display: block;

  @media (max-width: 768px) {
    max-height: 80vh;
    max-width: 100vw;
    width: 100%;
    height: auto;
    padding: 0 1rem;
  }
`

export const CloseIconButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  color: #fff;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 20;

  &:hover {
    color: var(--highlight);
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`

export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
  font-size: 1.3rem;
  z-index: 10;
  line-height: 0;

  ${({ direction }) => (direction === 'left' ? 'left: 5px;' : 'right: 5px;')}

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 1rem;
  }
`

export const ThemeTitle = styled.h2`
  margin-top: 2rem;
  font-size: 1.8rem;
  color: var(--texts);
  font-weight: bold;
  text-align: left;
  padding-left: 1rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`

export const ThemeDescription = styled.p`
  margin-bottom: 1rem;
  font-size: 1rem;
  color: var(--texts);
  text-align: left;
  padding-left: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`

export const Caption = styled.p`
  margin-top: 1rem;
  text-align: center;
  font-style: italic;
  color: var(--texts);
`
