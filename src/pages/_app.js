import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import NextNProgress from 'nextjs-progressbar'

import * as gtag from 'lib/gtag'
import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

import Layout from 'components/Layout'
import GlobalStyles from 'styles/global'
import Analytics from 'components/Analytics'

function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = url => {
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
        <title>Roberlan Carvalho</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="shortcut icon"
          href="/assets/img/roberlancarvalho-icon.png"
        />
        <link
          rel="apple-touch-icon"
          href="/assets/img/roberlancarvalho-icon.png"
        />
        <meta
          name="google-adsense-account"
          content="ca-pub-2351736617081202"
        ></meta>
        <meta name="theme-color" content="#06092B" />
        <meta
          name="google-site-verification"
          content="8kDtWUmUQEh7QXoj_shRaxcgYAVpHs_YQ7TeniN0kmI"
        />
        <meta
          name="description"
          content="Um blog de um desenvolvedor Full Stack apaixonado por AngularJS. Vivendo a vida de nômade digital; compartilhando conhecimento e aventuras tecnológicas."
        />

        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#272e39" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="apple-mobile-web-app-status-bar" content="#272e39" />
      </Head>
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
