'use client'

import { useEffect, useRef } from 'react'

export function Comments({ title }: { title: string }) {
  const commentBox = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'dark'
    const utterancesTheme = theme === 'dark' ? 'github-dark' : 'github-light'

    const watchThemeSwitch = new MutationObserver(mutations => {
      const utterances = document.querySelector<HTMLIFrameElement>('.utterances-frame')
      if (!utterances) return

      for (const mutation of mutations) {
        if (mutation.attributeName !== 'class') return
        const newTheme = (mutation.target as HTMLElement).classList.contains('dark')
          ? 'github-dark'
          : 'github-light'

        utterances.contentWindow?.postMessage(
          { type: 'set-theme', theme: newTheme },
          'https://utteranc.es'
        )
      }
    })

    const scriptEl = document.createElement('script')
    scriptEl.setAttribute('theme', utterancesTheme)
    scriptEl.setAttribute('src', 'https://utteranc.es/client.js')
    scriptEl.setAttribute('crossorigin', 'anonymous')
    scriptEl.setAttribute('repo', 'roberlancarvalho/roberlancarvalho.com')
    scriptEl.setAttribute('issue-term', 'title')
    commentBox.current?.replaceChildren(scriptEl)

    watchThemeSwitch.observe(document.body, { attributes: true })

    return () => watchThemeSwitch.disconnect()
  }, [title])

  return <div ref={commentBox} className="mx-auto max-w-[70rem] px-4 py-8 large:px-20" />
}
