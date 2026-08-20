import * as Sentry from '@sentry/nextjs'

// DSN pendente — usuário vai criar o projeto Sentry próprio (não o do
// Tech North) e fornecer o valor. Sem SENTRY_DSN setada, o SDK fica inerte.
Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
  replaysSessionSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 0,
  replaysOnErrorSampleRate: 1.0,
  integrations: [
    Sentry.replayIntegration({
      // Mask-first por padrão (LGPD) — nenhum texto/mídia sensível é
      // capturado no Session Replay sem opt-in explícito por componente.
      maskAllText: true,
      blockAllMedia: true
    })
  ]
})
