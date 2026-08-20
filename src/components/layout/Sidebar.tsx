import { Profile } from './Profile'
import { SocialLinks } from './SocialLinks'
import { MenuLinks } from './MenuLinks'

type SidebarProps = {
  isOpen: boolean
  onLinkClick: () => void
}

export function Sidebar({ isOpen, onLinkClick }: SidebarProps) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 w-80 overflow-y-auto border-r border-borders bg-background p-6 transition-transform duration-200 ease-out large:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="space-y-8">
        <Profile />
        <div className="space-y-6">
          <SocialLinks />
          <MenuLinks onLinkClick={onLinkClick} />
        </div>
      </div>
    </aside>
  )
}
