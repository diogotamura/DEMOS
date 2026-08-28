import { useEffect, useState } from 'react'
import { SECTIONS } from '../data/fees'

export function SectionNav() {
  const [activeId, setActiveId] = useState(SECTIONS[0].id)

  useEffect(() => {
    const sections = SECTIONS.map((section) => document.getElementById(section.id)).filter(
      (element): element is HTMLElement => element !== null,
    )

    const updateActive = () => {
      const offset = 160
      const current = sections.filter((section) => section.getBoundingClientRect().top <= offset).pop()
      setActiveId((current ?? sections[0])?.id ?? SECTIONS[0].id)
    }

    updateActive()
    window.addEventListener('scroll', updateActive, { passive: true })
    window.addEventListener('resize', updateActive)
    return () => {
      window.removeEventListener('scroll', updateActive)
      window.removeEventListener('resize', updateActive)
    }
  }, [])

  return (
    <nav className="sticky top-[73px] z-20 overflow-x-auto border-b border-slate-200 bg-white shadow-sm" aria-label="Navegação de preços">
      <div className="mx-auto flex min-w-max max-w-page items-center gap-7 px-5 lg:px-8">
        {SECTIONS.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            aria-current={section.id === activeId ? 'true' : undefined}
            className={`border-b-2 py-4 text-sm font-semibold whitespace-nowrap transition ${
              section.id === activeId
                ? 'border-brand text-brand'
                : 'border-transparent text-muted hover:border-brand/40 hover:text-brand'
            }`}
          >
            {section.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
