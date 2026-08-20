'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { BiHomeAlt, BiSearchAlt2, BiUpArrowAlt, BiMenu, BiCode } from 'react-icons/bi'
import { FaYoutube } from 'react-icons/fa6'
import { MdDarkMode } from 'react-icons/md'
import { IconButton } from 'components/ui/IconButton'
import { IconLink } from 'components/ui/IconLink'

declare global {
  interface Window {
    __theme?: string
    __setPreferredTheme?: (theme: string) => void
    __onThemeChange?: () => void
  }
}

export function MenuBar({ onMenuToggle }: { onMenuToggle: () => void }) {
  const pathname = usePathname()
  // Lazy init reads the value ThemeScript already set on <body> before
  // hydration; the effect only *subscribes* to later changes (theme
  // toggle click), it doesn't call setState synchronously on mount.
  const [theme, setTheme] = useState<string | undefined>(() =>
    typeof window === 'undefined' ? undefined : window.__theme
  )

  useEffect(() => {
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  const isDark = theme === 'dark'

  return (
    <nav
      aria-label="Menu"
      className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between border-t border-borders bg-background px-4 py-2 large:inset-y-0 large:inset-x-auto large:right-0 large:w-16 large:flex-col large:justify-between large:border-l large:border-t-0 large:py-6"
    >
      <div className="flex items-center gap-1 large:flex-col">
        <IconLink href="/" label="Home" active={pathname === '/'}>
          <BiHomeAlt className="h-5 w-5" />
        </IconLink>
        <IconLink href="/search" label="Pesquisar no blog" active={pathname === '/search'}>
          <BiSearchAlt2 className="h-5 w-5" />
        </IconLink>

        <div className="hidden large:flex large:flex-col large:items-center large:gap-1">
          <IconLink href="/portfolio" label="Ver portfólio" active={pathname === '/portfolio'}>
            <BiCode className="h-5 w-5" />
          </IconLink>
          <a
            href="https://www.youtube.com/@RoberlanCarvalho/?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            title="YouTube"
            className="flex h-10 w-10 items-center justify-center rounded-full text-texts transition-colors duration-200 hover:text-highlight focus-visible:outline focus-visible:outline-2 focus-visible:outline-highlight"
          >
            <FaYoutube className="h-5 w-5" />
          </a>
        </div>
      </div>

      <IconButton label="Abrir menu" onClick={onMenuToggle} className="large:hidden">
        <BiMenu className="h-6 w-6" />
      </IconButton>

      <div className="flex items-center gap-1 large:flex-col">
        <IconButton
          label="Alternar tema"
          active={isDark}
          onClick={() => window.__setPreferredTheme?.(isDark ? 'light' : 'dark')}
        >
          <MdDarkMode className="h-5 w-5" />
        </IconButton>
        <IconButton
          label="Ir para o topo"
          onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}
        >
          <BiUpArrowAlt className="h-5 w-5" />
        </IconButton>
      </div>
    </nav>
  )
}
