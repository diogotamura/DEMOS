type IconProps = {
  className?: string
}

export function CheckIcon({ className = '' }: IconProps) {
  return (
    <svg className={`h-4 w-4 ${className}`} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="m4 10.5 3.75 3.75L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function CloseIcon({ className = '' }: IconProps) {
  return (
    <svg className={`h-5 w-5 ${className}`} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function ArrowDownIcon({ className = '' }: IconProps) {
  return (
    <svg className={`h-4 w-4 ${className}`} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
