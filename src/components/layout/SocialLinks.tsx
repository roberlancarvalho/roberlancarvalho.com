import { FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaXTwitter } from 'react-icons/fa6'
import { SOCIAL_LINKS } from 'config/nav'

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  LinkedIn: FaLinkedin,
  GitHub: FaGithub,
  Instagram: FaInstagram,
  YouTube: FaYoutube,
  Twitter: FaXTwitter
}

export function SocialLinks() {
  return (
    <nav aria-label="Redes sociais">
      <ul className="flex gap-3">
        {SOCIAL_LINKS.map(link => {
          const Icon = ICONS[link.label]

          return (
            <li key={link.label}>
              <a
                href={link.url}
                title={link.label}
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full text-texts transition-colors duration-200 hover:text-highlight focus-visible:outline focus-visible:outline-2 focus-visible:outline-highlight"
              >
                <Icon className="h-5 w-5" />
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
