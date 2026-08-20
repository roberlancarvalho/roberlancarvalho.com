import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { ThemeScript } from 'components/layout/ThemeScript'
import { SkipLink } from 'components/layout/SkipLink'
import { SiteChrome } from 'components/layout/SiteChrome'
import { GoogleAnalytics, MicrosoftClarity } from 'components/analytics'
import { SITE_NAME, SITE_URL, TWITTER_HANDLE } from 'config/seo'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Roberlan Carvalho | Desenvolvedor Full Stack, IA e Inovação',
    template: `%s | ${SITE_NAME}`
  },
  description:
    'Desenvolvedor Full-Stack, apaixonado por inovação, desenvolvimento web e inteligência artificial. Compartilho experiências, dicas e projetos. Acompanhe!',
  keywords: ['Programador', 'Desenvolvimento Web', 'Next.js', 'IA', 'Inovação', 'Full Stack'],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  verification: {
    google: 'EYh_eLrkcQXh226Ebrk815s_Ly0066M7W3TFTLhAgy8'
  },
  icons: {
    icon: '/assets/img/roberlancarvalho-icon.png',
    apple: '/assets/icons/icon-192x192.png'
  },
  manifest: '/manifest.json',
  alternates: {
    types: { 'application/rss+xml': `${SITE_URL}/feed.xml` }
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: SITE_NAME
  },
  twitter: {
    card: 'summary_large_image',
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE
  },
  other: {
    'fb:app_id': '418829424131523'
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#272e39'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT

  return (
    <html lang="pt-BR">
      <body className="dark">
        <ThemeScript />
        <SkipLink />
        <SiteChrome>{children}</SiteChrome>
        <GoogleAnalytics />
        <MicrosoftClarity />
        {adsenseClient && (
          <Script
            async
            strategy="afterInteractive"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
            crossOrigin="anonymous"
          />
        )}
      </body>
    </html>
  )
}
