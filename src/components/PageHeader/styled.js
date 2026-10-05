import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import transitions from 'styles/transitions'
import { Container } from 'styles/base'
import { categoryBackground } from 'lib/categories'

const hero = css`
  align-items: flex-end;
  background: ${({ $category }) =>
    $category ? categoryBackground($category, '180px repeat') : '#0b1120'};
  color: #fff;
  display: flex;
  min-height: 24rem;
  padding: 6rem 0 3rem;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);

  img {
    animation: heroZoom 1.2s ${transitions.EASE} both;
  }

  /* Escurece a imagem para o texto ficar legível nos dois temas */
  &::after {
    background: linear-gradient(
      180deg,
      rgba(2, 6, 23, 0.25) 0%,
      rgba(2, 6, 23, 0.85) 100%
    );
    content: '';
    inset: 0;
    position: absolute;
  }

  ${media.lessThan('large')`
    min-height: 18rem;
    padding: 4rem 0 2rem;
  `}
`

export const Header = styled.header`
  color: var(--postColor);
  overflow: hidden;
  padding: 5rem 0 1rem;
  position: relative;

  ${media.lessThan('large')`
    padding: 3rem 0 1rem;
  `}

  ${({ $hero }) => $hero && hero}
`

export const Inner = styled(Container)`
  position: relative;
  width: 100%;
  z-index: 1;

  & > * {
    padding: 0 1.4rem;

    ${media.lessThan('large')`
      padding: 0 1rem;
    `}
  }
`

export const Back = styled.a`
  color: inherit;
  display: inline-block;
  margin-bottom: 1.5rem;
  opacity: 0.8;
  text-decoration: none;
  transition: ${transitions.COLOR}, opacity 0.2s ease;

  &:hover {
    color: var(--highlight);
    opacity: 1;
  }
`

export const Meta = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
`

export const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 1.15;
  margin: 0.8rem 0;

  ${media.lessThan('large')`
    font-size: 2.2rem;
  `}
`

export const Description = styled.h2`
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 1.35;

  ${media.lessThan('large')`
    font-size: 1.3rem;
  `}
`
