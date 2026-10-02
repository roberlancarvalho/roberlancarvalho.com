import styled from 'styled-components'
import media from 'styled-media-query'
import transitions from 'styles/transitions'

export const ProjectWrapper = styled.section`
  align-items: center;
  display: flex;
  padding: 2rem 3rem;
  width: 100%;
  border-bottom: 1px solid var(--borders);

  ${media.lessThan('large')`
    flex-direction: column;
    padding: 2rem 1rem;
  `}
`

export const ProjectLink = styled.a`
  color: var(--texts);
  display: flex;
  flex-direction: column;
  text-decoration: none;
  transition: ${transitions.COLOR};
  background-color: transparent;
  box-shadow: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: var(--highlight);
  }
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-left: 1.5rem;
  padding-bottom: 2rem;

  ${media.lessThan('large')`
    margin-left: 0;
    margin-top: 1rem;
    padding-bottom: 2rem;
  `}
`

export const ProjectTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
  text-align: left; // Alinha o título à esquerda
`

export const ProjectDescription = styled.h2`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
  text-align: left; // Alinha a descrição à esquerda
`

export const ProjectImage = styled.img`
  width: 100px; /* Ajuste conforme necessário */
  height: auto; /* Mantém a proporção da imagem */
  margin-right: 20px;

  ${media.lessThan('large')`
    width: 100%; /* Permite que a imagem se expanda para a largura total em dispositivos menores */
    margin-right: 0; /* Remove a margem direita em dispositivos menores */
  `}
`

export const MainContent = styled.section`
  margin: auto;
  max-width: 100%;
  padding: 0;

  ${media.lessThan('large')`
    padding: 0; // Ajusta conforme necessário para dispositivos menores
  `}
`

export const CloseButton = styled.button`
  cursor: pointer;
  background-color: var(--highlight);
  color: var(--black);
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-weight: bold;
  margin-top: 1px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darken(
      var(--highlight),
      10%
    ); // Escurece o botão no hover
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5); // Destaca o botão quando focado para acessibilidade
  }
`
