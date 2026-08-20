'use client'

import { useState, ReactNode } from 'react'
import { Sidebar } from './Sidebar'
import { MenuBar } from './MenuBar'
import { Profile } from './Profile'

export function SiteChrome({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Mobile-only compact header — sidebar becomes an off-canvas panel below `large` */}
      <header className="flex items-center justify-between border-b border-borders bg-background p-4 large:hidden">
        <Profile compact />
      </header>

      <Sidebar isOpen={isMenuOpen} onLinkClick={() => setIsMenuOpen(false)} />

      <main
        id="conteudo"
        className="min-h-screen px-4 pb-20 large:ml-80 large:mr-16 large:pb-4"
      >
        {children}
      </main>

      <MenuBar onMenuToggle={() => setIsMenuOpen(open => !open)} />
    </>
  )
}
