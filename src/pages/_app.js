import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import NextNProgress from 'nextjs-progressbar'
import Script from 'next/script';

import * as gtag from 'lib/gtag'
import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

import Layout from 'components/Layout'
import GlobalStyles from 'styles/global'
import Analytics from 'components/Analytics'

function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <title>Roberlan Carvalho | Desenvolvedor Full Stack, IA e Inovação</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Desenvolvedor Full-Stack, apaixonado por inovação, desenvolvimento web e inteligência artificial. Compartilho experiências, dicas e projetos. Acompanhe!"
        />
        <meta name="keywords" content="Programador, Desenvolvimento Web, Next.js, IA, Inovação, Full Stack" />
        <meta name="author" content="Roberlan Carvalho" />
        <meta name="robots" content="index, follow" />

        <meta name="google-site-verification" content="EYh_eLrkcQXh226Ebrk815s_Ly0066M7W3TFTLhAgy8" />

        <script defer src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXX-X"></script>

        <link rel="shortcut icon" href="/assets/img/roberlancarvalho-icon.png" />
        <link rel="apple-touch-icon" href="/assets/img/roberlancarvalho-icon.png" />
        <meta name="theme-color" content="#06092B" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#272e39" />
        <link rel="apple-touch-icon" href="/assets/icons/icon-192x192.png" />
        <meta name="apple-mobile-web-app-status-bar" content="#272e39" />

        {/* Google AdSense carregado de forma manual para evitar erro */}
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT}`}
          crossOrigin="anonymous"
        ></script>
      </Head>

      {/* Google Analytics */}
      {process.env.NEXT_PUBLIC_GA_TRACKING && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING}`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING}', {
            page_path: window.location.pathname,
          });
        `,
            }}
          />
        </>
      )}

      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <Layout>
        <NextNProgress
          color="#62b0d3"
          startPosition={0.3}
          stopDelayMs={200}
          height={5}
          showSpinner={false}
        />
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </>
  )
}

export default App
