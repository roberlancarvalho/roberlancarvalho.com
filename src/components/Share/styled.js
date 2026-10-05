import styled from 'styled-components'
import media from 'styled-media-query'
import { Instagram } from '@styled-icons/boxicons-logos/Instagram'

import transitions from 'styles/transitions'
import { Container } from 'styles/base'

export const ShareWrapper = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem 4rem;
  padding-bottom: 3rem;
  padding-top: 1rem;

  & > * {
    padding: 0 1.4rem;

    ${media.lessThan('large')`
      padding: 0 1rem;
    `}
  }
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Label = styled.p`
  align-items: center;
  color: var(--postColor);
  display: flex;
  font-size: 1.1rem;
  font-weight: 700;
  gap: 0.5rem;
`

export const InstagramIcon = styled(Instagram)`
  color: #e1306c;
  height: 1.4rem;
  width: 1.4rem;
`

export const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`

export const IconButton = styled.button`
  align-items: center;
  background: ${({ $active, $color }) =>
    $active ? $color : 'var(--mediumBackground)'};
  border: 1px solid var(--borders);
  border-radius: 50%;
  color: ${({ $active }) => ($active ? '#fff' : 'var(--texts)')};
  cursor: pointer;
  display: inline-flex;
  height: 2.75rem;
  justify-content: center;
  padding: 0.65rem;
  transition: transform 0.3s ${transitions.EASE}, background 0.2s ease,
    color 0.2s ease, border-color 0.2s ease;
  width: 2.75rem;

  svg {
    height: 100%;
    width: 100%;
  }

  &:hover,
  &:focus-visible {
    background: ${({ $color }) => $color};
    border-color: ${({ $color }) => $color};
    color: #fff;
    transform: translateY(-3px);
  }
`

export const CardButton = styled.button`
  align-items: center;
  background: var(--mediumBackground);
  border: 1px solid var(--borders);
  border-radius: 999px;
  color: var(--postColor);
  cursor: pointer;
  display: inline-flex;
  font-size: 1rem;
  font-weight: 600;
  gap: 0.6rem;
  padding: 0.6rem 1.2rem;
  transition: transform 0.3s ${transitions.EASE}, border-color 0.2s ease;

  small {
    color: var(--texts);
    font-size: 0.8rem;
    font-weight: 400;
  }

  &:hover:not(:disabled),
  &:focus-visible {
    border-color: #e1306c;
    transform: translateY(-3px);
  }

  &:disabled {
    cursor: progress;
    opacity: 0.7;
  }
`

// Miniatura da proporção (9:16 ou 4:5) com o degradê do Instagram
export const Ratio = styled.span`
  background: linear-gradient(45deg, #f58529, #dd2a7b, #8134af);
  border-radius: 3px;
  display: inline-block;
  height: 1.3rem;
  width: ${({ $story }) => ($story ? '0.73rem' : '1.04rem')};
`

export const Hint = styled.p`
  color: var(--texts);
  font-size: 0.85rem;
  max-width: 26rem;
`

export const Status = styled.p`
  color: var(--highlight);
  flex-basis: 100%;
  font-size: 0.95rem;
  min-height: 1.2rem;
`
