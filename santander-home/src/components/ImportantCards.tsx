import { importantCards } from '../data/home.ts'
import { Icon } from './Icons.tsx'

export function ImportantCards() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-page px-5 py-14 lg:px-8">
        <h2 className="text-2xl font-semibold text-ink sm:text-3xl">Importante para você</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {importantCards.map((card) => (
            <article className="flex min-h-60 flex-col justify-between rounded-xl bg-white p-7 shadow-sm" key={card.eyebrow}>
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="font-semibold text-santander">{card.eyebrow}</p>
                  <h3 className="mt-3 text-2xl font-semibold">{card.title}</h3>
                </div>
                <span className="rounded-full bg-red-50 p-3 text-santander"><Icon name={card.icon} size={29} /></span>
              </div>
              <div className="mt-7 flex items-end justify-between gap-5">
                <p className="max-w-md text-sm leading-6 text-muted">{card.description}</p>
                <a className="shrink-0 text-sm font-bold text-santander underline underline-offset-4" href="#">{card.action}</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
