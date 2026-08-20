module.exports = {
    siteUrl: 'https://roberlancarvalho.com',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    // next-sitemap regenerates public/robots.txt on every `npm run build`,
    // overwriting the committed file — so the Disallow rule has to live
    // here, not just in the static public/robots.txt. Ver docs/decisions.md.
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/', disallow: '/admin' }
      ]
    }
  };
