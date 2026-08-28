import { Header } from './Header'

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-brand text-white">
      <Header />
      <div className="mx-auto grid max-w-page gap-12 px-5 pb-20 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:pb-28 lg:pt-16">
        <div>
          <p className="mb-8 text-sm font-medium text-white/75">Início <span className="mx-2">|</span> Preços e Taxas</p>
          <h1 className="max-w-2xl font-display text-[32px] font-semibold leading-[1.08] tracking-tight md:text-5xl">
            Economize na gestão do seu negócio: o Asaas tem as menores taxas do mercado
          </h1>
          <div id="hero-form" className="mt-10 max-w-md rounded-2xl bg-white p-6 text-ink shadow-2xl">
            <h2 className="font-display text-2xl font-semibold">Aumente seus lucros já</h2>
            <form className="mt-5" onSubmit={(event) => event.preventDefault()}>
              <label htmlFor="hero-email" className="mb-2 block text-sm font-medium text-muted">Preencha seu e-mail</label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input id="hero-email" type="email" placeholder="seuemail@empresa.com" className="min-w-0 flex-1 rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none ring-brand/20 placeholder:text-slate-400 focus:ring-4" />
                <button type="submit" className="rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark">
                  Criar conta grátis
                </button>
              </div>
            </form>
            <p className="mt-4 text-xs leading-relaxed text-muted">
              Ao clicar você aceita receber nossas comunicações, conforme{' '}
              <a href="#footer" className="underline">Política de Privacidade</a>
            </p>
          </div>
        </div>
        <div className="flex min-h-[300px] items-center justify-center gap-6 lg:min-h-[420px] lg:gap-10">
          <svg className="h-40 w-40 shrink-0 md:h-60 md:w-60" viewBox="0 0 240 240" fill="none" aria-hidden="true">
            <circle cx="120" cy="120" r="94" stroke="white" strokeWidth="14" />
            <path d="M56 190 184 50" stroke="white" strokeWidth="14" strokeLinecap="round" />
          </svg>
          <div>
            <p className="font-display text-5xl font-bold tracking-tight md:text-7xl">ZERO</p>
            <p className="mt-4 font-display text-xl font-medium leading-tight md:text-2xl">
              mensalidade e<br />taxa de emissão
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
