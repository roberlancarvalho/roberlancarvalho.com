import styled from 'styled-components'
import media from 'styled-media-query'

import transitions from 'styles/transitions'

export const MenuLinksWrapper = styled.nav`
  ${media.lessThan('large')`
    margin: auto;
  `}
`

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;

  ${media.lessThan('large')`
    font-size: 1.8rem;
  `}
`

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;

  ${media.lessThan('large')`
    padding: 1rem 0;
  `}

  .active {
    color: var(--highlight);
  }

  a {
    color: var(--texts);
    text-decoration: none;
    background: linear-gradient(var(--highlight), var(--highlight)) left bottom /
      0 1px no-repeat;
    padding-bottom: 2px;
    transition: ${transitions.COLOR}, background-size 0.35s ${transitions.EASE};

    &:hover,
    &.active {
      color: var(--highlight);
      background-size: 100% 1px;
    }
  }
`
