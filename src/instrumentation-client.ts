import * as Sentry from '@sentry/nextjs'

// Mascaramento por padrão no Session Replay (LGPD) — nenhum texto/mídia
// sensível é capturado sem opt-in explícito por componente.
Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
  replaysSessionSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 0,
  replaysOnErrorSampleRate: 1.0,
  integrations: [
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true
    })
  ]
})

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart
