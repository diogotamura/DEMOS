import { selfServiceItems } from '../data/home.ts'
import { Icon } from './Icons.tsx'

export function SelfServiceGrid() {
  return (
    <section className="mx-auto max-w-page px-5 py-14 lg:px-8">
      <h2 className="max-w-2xl text-2xl font-semibold text-ink sm:text-3xl">Facilite seu dia a dia com nosso autoatendimento</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {selfServiceItems.map((item) => (
          <a className="flex items-center gap-5 rounded-xl bg-sky p-6 transition hover:bg-blue-100" href="#" key={item.label}>
            <span className="rounded-full bg-white p-3 text-santander"><Icon name={item.icon} size={27} /></span>
            <span className="font-semibold">{item.label}</span>
          </a>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-slate-200 px-6 py-5">
        <p className="font-medium">Tem alguma dúvida sobre os serviços?</p>
        <a className="font-semibold text-santander underline underline-offset-4" href="#">Acesse nossa Central de Atendimento</a>
      </div>
    </section>
  )
}
