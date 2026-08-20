// Single analytics implementation — replaces the triplicated GA in
// src/pages/_app.js (hardcoded UA-XXXXXXX-X placeholder, always loaded) and
// src/components/Analytics (a second, redundant GA loader). See
// docs/decisions.md. Not wired into _app.js yet: doing so now would run
// old + new GA side by side. Cutover happens together in one commit.

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
export const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID

type GtagEvent = {
  action: string
  category?: string
  label?: string
  value?: number
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export const pageview = (url: string): void => {
  if (!GA_MEASUREMENT_ID) return
  window.gtag?.('config', GA_MEASUREMENT_ID, { page_path: url })
}

export const event = ({ action, category, label, value }: GtagEvent): void => {
  if (!GA_MEASUREMENT_ID) return
  window.gtag?.('event', action, {
    event_category: category,
    event_label: label,
    value
  })
}

// Suggested event names (implement only where a real trigger exists —
// see the "Eventos sugeridos" list in the migration brief):
// contact_clicked, whatsapp_clicked, email_clicked, linkedin_clicked,
// github_clicked, project_viewed, publication_viewed, article_read,
// article_shared, tech_north_clicked, cv_downloaded.
