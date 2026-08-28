import { ArrowDownIcon } from './Icons'

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/15 bg-transparent text-white">
      <div className="mx-auto flex max-w-page items-center gap-8 px-5 py-5 lg:px-8">
        <a href="#" className="font-display text-xl font-bold tracking-wide" aria-label="Asaas início">
          ASAAS
        </a>
        <nav className="hidden flex-1 items-center gap-6 text-sm font-medium xl:flex" aria-label="Navegação principal">
          <a href="#servicos-gratuitos" className="inline-flex items-center gap-1 hover:text-brand-light">
            Soluções <ArrowDownIcon />
          </a>
          <a href="#recebimento" className="hover:text-brand-light">Preços</a>
          <a href="#sobre-nos" className="inline-flex items-center gap-1 hover:text-brand-light">
            Sobre nós <ArrowDownIcon />
          </a>
          <a href="#desenvolvedores" className="hover:text-brand-light">Desenvolvedores</a>
          <a href="#segunda-via" className="hover:text-brand-light">2ª Via</a>
        </nav>
        <div className="ml-auto flex items-center gap-4 text-sm font-semibold">
          <a href="#footer" className="hidden whitespace-nowrap hover:text-brand-light sm:block">Acessar minha conta</a>
          <a href="#hero-form" className="whitespace-nowrap rounded-full border border-white px-4 py-2.5 transition hover:bg-white hover:text-brand">
            Criar conta grátis
          </a>
        </div>
      </div>
    </header>
  )
}
