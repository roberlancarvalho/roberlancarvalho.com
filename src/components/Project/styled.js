import styled from 'styled-components';
import media from 'styled-media-query';
import transitions from 'styles/transitions';

export const ProjectWrapper = styled.section`
  align-items: center;
  border-bottom: 1px solid var(--borders);
  display: flex;
  padding: 2rem 3rem;
  width: 100%;

  ${media.lessThan('large')`
    flex-direction: column;
    padding: 2rem 1rem;
  `}
`;

export const ProjectLink = styled.a`
  color: var(--texts);
  display: flex;
  text-decoration: none;
  transition: ${transitions.COLOR};

  &:hover {
    color: var(--highlight);
  }
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;

  ${media.lessThan('large')`
    margin: 0;
  `}
`;

export const ProjectTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
`;

export const ProjectDescription = styled.h2`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`;

export const ProjectImage = styled.img`
  width: 100px; /* Ajuste conforme necessário */
  height: auto; /* Isso mantém a proporção da imagem */
  margin-right: 20px;
`;
