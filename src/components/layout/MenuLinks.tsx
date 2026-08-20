'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MENU_LINKS } from 'config/nav'

export function MenuLinks({ onLinkClick }: { onLinkClick?: () => void }) {
  const pathname = usePathname()

  return (
    <nav aria-label="Navegação principal">
      <ul className="space-y-1">
        {MENU_LINKS.map(link => (
          <li key={link.url}>
            <Link
              href={link.url}
              onClick={onLinkClick}
              className={`block rounded px-2 py-1 text-texts transition-colors duration-200 hover:text-highlight ${
                pathname === link.url ? 'font-semibold text-highlight' : ''
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
