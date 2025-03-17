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
  align-items: center;
  background: ${({ color }) => {
    const colorMap = {
      dev: '#A91E63',        // Rosa forte
      tech: '#BF5722',       // Laranja vibrante
      leitura: '#3F51B5',    // Azul escuro
      js: '#FFEB3B',         // Amarelo brilhante
      code: '#FF9800',       // Laranja queimado
      design: '#9C27B0',     // Roxo vibrante
      devops: '#00BCD4',     // Ciano forte
      tips: '#8BC34A',       // Verde claro
      ia: '#673AB7',         // Roxo escuro
      css: '#03A9F4',        // Azul brilhante
      dicas: '#FFC107',      // Amarelo dourado
      'ui/ux': '#F44336',    // Vermelho forte
      seg: '#795548',        // Marrom
      backend: '#607D8B',    // Azul acinzentado
      frontend: '#FF4081',   // Rosa neon
      mobile: '#009688',     // Verde esmeralda
      database: '#4CAF50',   // Verde clássico
      cloud: '#2196F3',      // Azul tradicional
      segurança: '#D50000',  // Vermelho intenso
      inovação: '#7C4DFF',   // Roxo elétrico
    };

    return colorMap[color?.toLowerCase()] || Object.values(colorMap)[Math.floor(Math.random() * Object.values(colorMap).length)];
  }};
  
  color: #fff;
  font-size: 1.1rem;  /* Texto um pouco maior */
  font-weight: 700;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;

  /* 🔵 Aumentamos o tamanho das bolinhas no desktop */
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  margin-right: 10px;
  border-radius: 50%;

  ${media.lessThan('medium')`
    /* 🔶 Formato RETANGULAR para telas menores */
    border-radius: 5px;
    font-size: 0.9rem;
    width: auto;
    height: auto;
    padding: 5px 12px;
    min-width: 55px;
    min-height: 35px;

    /* 🔹 Adicionamos um espaçamento inferior para não colar no texto */
    margin-bottom: 10px;
  `}
`;


export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
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
