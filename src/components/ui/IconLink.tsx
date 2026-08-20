import Link from 'next/link'
import { ComponentPropsWithoutRef } from 'react'

type IconLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  label: string
  active?: boolean
}

// Same visual treatment as IconButton, but for navigation — a <button>
// nested inside an <a> (Link) is invalid HTML, so these are separate
// components rather than one with a polymorphic `as` prop.
export function IconLink({ label, active, className = '', ...props }: IconLinkProps) {
  return (
    <Link
      aria-label={label}
      title={label}
      className={`flex h-10 w-10 items-center justify-center rounded-full text-texts transition-colors duration-200 ease-out hover:text-highlight focus-visible:outline focus-visible:outline-2 focus-visible:outline-highlight ${
        active ? 'text-highlight' : ''
      } ${className}`}
      {...props}
    />
  )
}
