import Script from 'next/script'
import { GA_MEASUREMENT_ID, CLARITY_PROJECT_ID } from 'lib/analytics'

/*
 * Single GA4 + Clarity load, production-only, inert with no env var set —
 * replaces the old triplicated GA (a hardcoded placeholder script plus two
 * redundant real loaders in the pre-bump src/pages/_app.js).
 */

export function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID || process.env.NODE_ENV !== 'production') return null

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  )
}

export function MicrosoftClarity() {
  if (!CLARITY_PROJECT_ID || process.env.NODE_ENV !== 'production') return null

  return (
    <Script id="clarity-init" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
      `}
    </Script>
  )
}
