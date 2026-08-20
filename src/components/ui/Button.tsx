import { ComponentPropsWithoutRef } from 'react'

type ButtonProps = ComponentPropsWithoutRef<'button'>

export function Button({ className = '', ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={`rounded-md bg-highlight px-6 py-3 font-semibold text-white transition-opacity duration-200 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight ${className}`}
      {...props}
    />
  )
}
