import remark from 'remark'
import html from 'remark-html'
import headings from 'remark-autolink-headings'
import slug from 'remark-slug'

// remark-oembed dropped: broken under Next 16's Turbopack (apr-intercept
// CJS/ESM interop failure, unmaintained package) and confirmed unused —
// none of the 9 real posts have bare-URL auto-embeds, only [text](url)
// links, which this plugin never touched anyway.
export default async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(html)
    .use(slug)
    .use(headings, {
      behavior: 'wrap',
      linkProperties: {
        className: 'anchor'
      }
    })
    .process(markdown)

  return result.toString()
}
