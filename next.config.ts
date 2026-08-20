import type { NextConfig } from 'next'
import { withSentryConfig } from '@sentry/nextjs'

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()'
  },
  {
    // Precisa permitir: self, Sentry (report-to/ingest via tunnelRoute),
    // GA4/Clarity (script + connect), Algolia (busca), TinaCloud (admin
    // local usa mesma origem, mas o media manager/API fala com tina.io),
    // e imagens/scripts inline mínimos que o Next injeta.
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.clarity.ms https://pagead2.googlesyndication.com https://*.googlesyndication.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self' data:",
      "connect-src 'self' https://*.algolia.net https://*.algolianet.com https://www.google-analytics.com https://www.clarity.ms https://c.bing.com https://*.tina.io https://*.ingest.us.sentry.io https://*.ingest.sentry.io https://pagead2.googlesyndication.com",
      "frame-ancestors 'self'"
    ].join('; ')
  }
]

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // TinaCMS builds a static admin SPA into public/admin/index.html
      // (see tina/config.ts build.outputFolder) — this exposes it at the
      // clean /admin URL, same pattern as the Tech North sibling project.
      { source: '/admin', destination: '/admin/index.html' },

      // Legado Jekyll/Gatsby, mantido como estava (fora do escopo desta
      // migração — ver next.config.js original antes do bump).
      { source: '/js/', destination: 'https://roberlancarvalho.com/' },
      { source: '/jekyll/', destination: 'https://roberlancarvalho.com/' },
      { source: '/svg/', destination: 'https://roberlancarvalho.com/' },
      { source: '/dev/', destination: 'https://roberlancarvalho.com/' },
      { source: '/tags/', destination: 'https://roberlancarvalho.com/' },
      {
        source: '/making-of-blog-novo/',
        destination: 'https://roberlancarvalho.com/making-of-blog-novo-gatsby-js'
      },
      { source: '/page/:slug*', destination: 'https://roberlancarvalho.com/' }
    ]
  },

  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }]
  },

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'pbs.twimg.com' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' }
    ]
  }
}

export default withSentryConfig(nextConfig, {
  org: 'tech-north',
  project: 'roberlancarvalho-site',
  authToken: process.env.SENTRY_AUTH_TOKEN,
  widenClientFileUpload: true,
  tunnelRoute: '/monitoring',
  silent: !process.env.CI
})
