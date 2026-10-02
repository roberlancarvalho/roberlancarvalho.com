import styled from 'styled-components'
import media from 'styled-media-query'
import transitions from 'styles/transitions'

export const PostWrapper = styled.section`
  align-items: center;
  border-bottom: 1px solid var(--borders);
  display: flex;
  padding: 2rem 3rem;
  width: 100%;
  transition: ${transitions.ALL};

  ${media.lessThan('large')`
    align-items: flex-start;
    flex-direction: column;
    padding: 2rem 1rem;
  `}
`

export const PostLink = styled.a`
  color: var(--texts);
  display: flex;
  text-decoration: none;
  transition: ${transitions.COLOR};

  &:hover {
    color: var(--highlight);
  }
`

export const PostTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  flex-shrink: 0;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;

  background: ${({ color }) => {
    const gradientMap = {
      dev: 'linear-gradient(135deg, #1565C0 0%, #0D47A1 100%)', // Azul escuro
      tech: 'linear-gradient(135deg, #00838F 0%, #006064 100%)', // Azul petróleo
      nerd: 'linear-gradient(135deg, #3949AB 0%, #1A237E 100%)', // Azul médio
      js: 'linear-gradient(135deg, #FDD835 0%, #FFEB3B 100%)', // Amarelo equilibrado
      code: 'linear-gradient(135deg, #FB8C00 0%, #F57C00 100%)', // Laranja quente
      design: 'linear-gradient(135deg, #8E24AA 0%, #9C27B0 100%)', // Roxo elegante
      devops: 'linear-gradient(135deg, #0097A7 0%, #00796B 100%)', // Azul petróleo escuro
      tips: 'linear-gradient(135deg, #7CB342 0%, #558B2F 100%)', // Verde suave
      ia: 'linear-gradient(135deg, #5E35B1 0%, #4527A0 100%)', // Roxo médio
      css: 'linear-gradient(135deg, #0288D1 0%, #01579B 100%)', // Azul brilhante
      dicas: 'linear-gradient(135deg, #FFA000 0%, #FF8F00 100%)', // Amarelo dourado
      'ui/ux': 'linear-gradient(135deg, #E53935 0%, #B71C1C 100%)', // Vermelho moderado
      seg: 'linear-gradient(135deg, #6D4C41 0%, #4E342E 100%)', // Marrom escuro
      backend: 'linear-gradient(135deg, #546E7A 0%, #37474F 100%)', // Azul acinzentado escuro
      frontend: 'linear-gradient(135deg, #EC407A 0%, #D81B60 100%)', // Rosa forte
      mobile: 'linear-gradient(135deg, #00796B 0%, #004D40 100%)', // Verde escuro suave
      database: 'linear-gradient(135deg, #388E3C 0%, #1B5E20 100%)', // Verde clássico
      cloud: 'linear-gradient(135deg, #1976D2 0%, #0D47A1 100%)', // Azul médio escuro
      segurança: 'linear-gradient(135deg, #C62828 0%, #B71C1C 100%)', // Vermelho intenso
      inovação: 'linear-gradient(135deg, #673AB7 0%, #512DA8 100%)', // Roxo elétrico
    };

    return gradientMap[color?.toLowerCase()] || 'linear-gradient(135deg, #777 0%, #444 100%)';
  }};

  width: 85px;
  height: 85px;
  font-size: 0.9rem;
  margin-right: 10px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);

  ${media.lessThan('medium')`
    border-radius: 5px;
    font-size: 0.9rem;
    width: auto;
    height: auto;
    padding: 6px 14px;
    min-width: 60px;
    min-height: 40px;
    margin-bottom: 10px;
  `}
`;

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.2rem;
  margin-bottom: 1rem;

  ${media.lessThan('large')`
    margin: 0;
  `}
`

export const PostDate = styled.time`
  font-size: 0.9rem;
`

export const PostTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
`

export const PostDescription = styled.h2`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`
