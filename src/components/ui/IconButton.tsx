import { ComponentPropsWithoutRef } from 'react'

type IconButtonProps = ComponentPropsWithoutRef<'button'> & {
  label: string
  active?: boolean
}

// Accessibility fix from the foundation's design-system preview: the old
// MenuBar used <span onClick> for icon actions (theme toggle, hamburger,
// scroll-to-top) — not focusable, no label. This is a real <button>.
export function IconButton({ label, active, className = '', ...props }: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className={`flex h-10 w-10 items-center justify-center rounded-full text-texts transition-colors duration-200 ease-out hover:text-highlight focus-visible:outline focus-visible:outline-2 focus-visible:outline-highlight ${
        active ? 'text-highlight' : ''
      } ${className}`}
      {...props}
    />
  )
}
