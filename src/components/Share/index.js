import { useEffect, useState } from 'react'
import { Whatsapp } from '@styled-icons/boxicons-logos/Whatsapp'
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin'
import { FacebookCircle } from '@styled-icons/boxicons-logos/FacebookCircle'
import { Telegram } from '@styled-icons/boxicons-logos/Telegram'
import { Link as LinkIcon } from '@styled-icons/boxicons-regular/Link'
import { Check } from '@styled-icons/boxicons-regular/Check'
import { ShareAlt } from '@styled-icons/boxicons-regular/ShareAlt'

import { BLOG_URL } from 'lib/constants'
import { renderShareCard } from 'lib/shareCard'

import * as S from './styled'

const XLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const Share = ({ slug, title, description, category, image, tags = [] }) => {
  const url = `${BLOG_URL}/${slug}`
  const [copied, setCopied] = useState(false)
  const [status, setStatus] = useState('')
  const [busy, setBusy] = useState(null)
  const [canNativeShare, setCanNativeShare] = useState(false)

  useEffect(() => setCanNativeShare(Boolean(navigator.share)), [])

  const e = encodeURIComponent
  const networks = [
    {
      name: 'WhatsApp',
      icon: <Whatsapp />,
      color: '#25D366',
      href: `https://wa.me/?text=${e(`${title} ${url}`)}`
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin />,
      color: '#0A66C2',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${e(url)}`
    },
    {
      name: 'X',
      icon: <XLogo />,
      color: '#000000',
      href: `https://twitter.com/intent/tweet?text=${e(title)}&url=${e(url)}`
    },
    {
      name: 'Facebook',
      icon: <FacebookCircle />,
      color: '#1877F2',
      href: `https://www.facebook.com/sharer/sharer.php?u=${e(url)}`
    },
    {
      name: 'Telegram',
      icon: <Telegram />,
      color: '#26A5E4',
      href: `https://t.me/share/url?url=${e(url)}&text=${e(title)}`
    }
  ]

  const caption = [
    title,
    description,
    `📖 Leia o artigo completo no blog: ${url}`,
    tags.map(tag => `#${tag.replace(/\s+/g, '')}`).join(' ')
  ]
    .filter(Boolean)
    .join('\n\n')

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      setStatus('Não foi possível copiar. Copie o link da barra de endereço.')
    }
  }

  const nativeShare = () =>
    navigator.share({ title, text: description, url }).catch(() => {})

  // Gera a arte, copia a legenda e entrega a imagem: no celular abre o menu
  // de compartilhar (Instagram aparece lá); no computador baixa o PNG.
  const makeCard = async format => {
    setBusy(format)
    setStatus('')
    // Copia antes de gerar a imagem: alguns navegadores só permitem logo após o clique
    const captionCopied = navigator.clipboard?.writeText(caption).then(
      () => true,
      () => false
    )

    try {
      const blob = await renderShareCard({
        format,
        title,
        description,
        category,
        image,
        site: BLOG_URL.replace(/^https?:\/\//, '')
      })
      const file = new File([blob], `${slug}-${format}.png`, {
        type: 'image/png'
      })
      const legend = (await captionCopied)
        ? ' Legenda copiada, é só colar.'
        : ''

      if (navigator.canShare?.({ files: [file] })) {
        try {
          await navigator.share({ files: [file], title })
          setStatus(`Arte pronta!${legend}`)
          return
        } catch (err) {
          if (err.name === 'AbortError') return
          // compartilhamento bloqueado: segue para o download
        }
      }

      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = file.name
      link.click()
      setTimeout(() => URL.revokeObjectURL(link.href), 1000)
      setStatus(`Arte baixada!${legend}`)
    } catch (err) {
      setStatus('Não foi possível gerar a arte. Tente de novo.')
    } finally {
      setBusy(null)
    }
  }

  return (
    <S.ShareWrapper>
      <S.Section>
        <S.Label>Compartilhe este post</S.Label>
        <S.Buttons>
          {networks.map(({ name, icon, color, href }) => (
            <S.IconButton
              key={name}
              as="a"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Compartilhar no ${name}`}
              title={name}
              $color={color}
            >
              {icon}
            </S.IconButton>
          ))}
          <S.IconButton
            type="button"
            onClick={copyLink}
            aria-label="Copiar link"
            title={copied ? 'Copiado!' : 'Copiar link'}
            $color="var(--highlight)"
            $active={copied}
          >
            {copied ? <Check /> : <LinkIcon />}
          </S.IconButton>
          {canNativeShare && (
            <S.IconButton
              type="button"
              onClick={nativeShare}
              aria-label="Mais opções de compartilhamento"
              title="Mais opções"
              $color="var(--highlight)"
            >
              <ShareAlt />
            </S.IconButton>
          )}
        </S.Buttons>
      </S.Section>

      <S.Section>
        <S.Label>
          <S.InstagramIcon /> Arte pronta para o Instagram
        </S.Label>
        <S.Buttons>
          <S.CardButton
            type="button"
            onClick={() => makeCard('story')}
            disabled={Boolean(busy)}
          >
            <S.Ratio $story />
            {busy === 'story' ? 'Gerando…' : 'Story'}
            <small>9:16</small>
          </S.CardButton>
          <S.CardButton
            type="button"
            onClick={() => makeCard('feed')}
            disabled={Boolean(busy)}
          >
            <S.Ratio />
            {busy === 'feed' ? 'Gerando…' : 'Feed'}
            <small>4:5</small>
          </S.CardButton>
        </S.Buttons>
        <S.Hint>
          Gera a imagem com o título do post e copia uma legenda pronta com o
          link e as hashtags.
        </S.Hint>
      </S.Section>

      <S.Status aria-live="polite">
        {copied ? 'Link copiado!' : status}
      </S.Status>
    </S.ShareWrapper>
  )
}

export default Share
