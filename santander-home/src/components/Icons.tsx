import type { IconName } from '../data/home.ts'

type IconProps = {
  name: IconName
  size?: number
  strokeWidth?: number
}

const iconPaths: Record<IconName, string> = {
  account: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0',
  card: 'M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5v-11ZM3 9h18M7 16h4',
  select: 'M12 3 14.8 8.7 21 9.6l-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z',
  'credit-card': 'M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm-2 5h20M6 16h4',
  loan: 'M3 11 12 4l9 7M5 10v10h14V10M9 20v-6h6v6',
  renegotiate: 'M20 7h-5V3m5 4-3-3a8 8 0 1 0 1.2 11.7M4 17h5v4m-5-4 3 3a8 8 0 0 0-1.2-11.7',
  security: 'M12 3 20 6v5c0 5-3.4 8.8-8 10-4.6-1.2-8-5-8-10V6l8-3Zm-3 9 2 2 4-4',
  music: 'M9 18V5l10-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm10-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
  invoice: 'M6 3h12v18l-3-2-3 2-3-2-3 2V3Zm3 5h6m-6 4h6m-6 4h4',
  boleto: 'M5 4v16m3-16v16m3-16v16m5-16v16m3-16v16m2-16v16',
  bill: 'M4 6h16v12H4zM7 10h10M7 14h6',
  access: 'M5 20v-2a7 7 0 0 1 14 0v2M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z',
  statement: 'M4 19V5m0 14h16M8 16v-4m4 4V8m4 8V6',
  app: 'M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm3 17h4',
}

export function Icon({ name, size = 28, strokeWidth = 1.7 }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={iconPaths[name]} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} />
    </svg>
  )
}

export function FlameLogo({ size = 42 }: { size?: number }) {
  return (
    <svg aria-label="Santander" height={size} role="img" viewBox="0 0 44 44" width={size} xmlns="http://www.w3.org/2000/svg">
      <path d="M23.9 2.5c1.9 6.3-1.4 8.8-4.2 12.4-2.4 3-2.9 5.8-.6 8.5 1.2 1.4 2.7 1.9 4.3 1.7-1.2 2.8-3.9 4.6-7.1 4.6-5.3 0-8.6-4.1-7.8-8.8C9.5 13.7 17.1 9.7 23.9 2.5Z" fill="#EC0000" />
      <path d="M27.1 11.4c6.5 2.3 11.4 7.3 11.4 13.8 0 7.2-5.9 12.8-14.4 12.8-6 0-11-2.3-14.1-6.8 3.1 3.4 7 4.8 11.3 4.8 7.4 0 12.6-4.2 12.6-10.5 0-4.9-2.8-9.5-6.8-14.1Z" fill="#EC0000" />
    </svg>
  )
}

export function Chevron({ direction = 'right' }: { direction?: 'left' | 'right' }) {
  return (
    <svg aria-hidden="true" fill="none" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
      <path d={direction === 'right' ? 'm9 5 7 7-7 7' : 'm15 5-7 7 7 7'} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  )
}
