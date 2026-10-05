import styled from 'styled-components'
import media from 'styled-media-query'
import transitions from 'styles/transitions'
import { categoryBackground } from 'lib/categories'
import { Container } from 'styles/base'

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

  /* Dentro da coluna padrão (séries, busca), alinha com o título da página */
  ${Container} & {
    padding: 2rem 1.4rem;

    ${media.lessThan('large')`
      padding: 2rem 1rem;
    `}
  }
`

export const PostLink = styled.a`
  color: var(--texts);
  display: flex;
  text-decoration: none;
  transition: ${transitions.COLOR};
  animation: fadeUp 0.35s ${transitions.EASE} both;

  ${Array.from(
    { length: 10 },
    (_, i) => `&:nth-child(${i + 1}) { animation-delay: ${i * 30}ms; }`
  ).join('\n')}

  &:hover {
    color: var(--highlight);
  }

  &:hover ${PostWrapper} {
    background: var(--mediumBackground);
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
  transition: transform 0.4s ${transitions.EASE}, box-shadow 0.4s ${transitions.EASE};

  ${PostLink}:hover & {
    transform: scale(1.08) rotate(-4deg);
    box-shadow: 0 8px 24px rgba(56, 189, 248, 0.35);
  }

  background: ${({ color }) => categoryBackground(color)};
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);

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
  transition: transform 0.4s ${transitions.EASE};

  ${PostLink}:hover & {
    transform: translateX(6px);
  }

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
