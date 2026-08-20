'use client'

import { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-yaml'
import 'prismjs/plugins/line-numbers/prism-line-numbers'

export function ArticleBody({ html }: { html: string }) {
  useEffect(() => {
    Prism.highlightAll()
  }, [html])

  return (
    <div className="article-body" dangerouslySetInnerHTML={{ __html: html }} />
  )
}
