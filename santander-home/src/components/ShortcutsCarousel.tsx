import { shortcuts } from '../data/home.ts'
import { Chevron, Icon } from './Icons.tsx'

export function ShortcutsCarousel() {
  return (
    <section className="mx-auto max-w-page px-5 py-14 lg:px-8">
      <h2 className="text-2xl font-semibold text-ink sm:text-3xl">Dá uma olhadinha em tudo que temos</h2>
      <div className="relative mt-8">
        <button aria-label="Anterior" className="absolute -left-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-slate-200 bg-white p-2 text-santander shadow-sm md:block" type="button"><Chevron direction="left" /></button>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {shortcuts.map((shortcut) => (
            <a className="relative flex min-h-36 flex-col justify-between rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-md" href="#" key={shortcut.label}>
              {shortcut.badge && <span className="absolute -top-3 left-4 rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-bold text-emerald-700">{shortcut.badge}</span>}
              <Icon name={shortcut.icon} size={32} />
              <span className="text-sm font-semibold leading-snug">{shortcut.label}</span>
            </a>
          ))}
        </div>
        <button aria-label="Próximo" className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-slate-200 bg-white p-2 text-santander shadow-sm md:block" type="button"><Chevron /></button>
      </div>
    </section>
  )
}
