import styled from 'styled-components'
import media from 'styled-media-query'

export const AvatarWrapper = styled.div`
  img {
    border-radius: 50%;
    transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  }

  &:hover img {
    transform: scale(1.08);
  }

  margin: auto;
  height: 6.25rem;
  width: 6.25rem;
  clip-path: circle(50% at 50% 50%);

  ${media.lessThan('large')`
    height: 3.5rem;
    width: 3.5rem;
  `}
`
