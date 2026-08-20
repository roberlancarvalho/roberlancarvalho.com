// Central SEO defaults, replacing next-seo.config.js (App Router uses the
// native Metadata API — next-seo is a Pages Router library, dropped in the
// Next 16 bump). Consumed by src/app/layout.tsx's `metadata` export and
// overridden per-page via each route's own `generateMetadata`.

export const SITE_NAME = 'Roberlan Carvalho'
export const SITE_URL = 'https://roberlancarvalho.com'
export const SITE_LOCALE = 'pt_BR'

// The old next-seo.config.js had twitter.site set to the literal string
// "@site" — an unfilled placeholder, not a real handle. Dropped rather than
// carried forward; only the confirmed real handle is kept.
export const TWITTER_HANDLE = '@RoberlanCarvalh'
