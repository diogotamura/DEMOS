import { SECTIONS } from '../data/fees'

export function SectionNav() {
  return (
    <nav className="sticky top-[73px] z-20 overflow-x-auto border-b border-slate-200 bg-white shadow-sm" aria-label="Navegação de preços">
      <div className="mx-auto flex min-w-max max-w-page items-center gap-7 px-5 lg:px-8">
        {SECTIONS.map((section, index) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`border-b-2 py-4 text-sm font-semibold whitespace-nowrap transition ${
              index === 0 ? 'border-brand text-brand' : 'border-transparent text-muted hover:border-brand/40 hover:text-brand'
            }`}
          >
            {section.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
