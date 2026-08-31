const links = ['Meu dia a dia', 'Produtos e Serviços', 'Open Finance', 'Atendimento', 'Segurança', 'Agências', 'Blog']

export function NavBar() {
  return (
    <nav aria-label="Navegação principal" className="bg-santander text-white">
      <div className="mx-auto flex max-w-page items-center gap-7 overflow-x-auto px-5 py-3 text-sm font-medium lg:px-8">
        {links.map((link) => <a className="shrink-0 transition hover:underline" href="#" key={link}>{link}</a>)}
      </div>
    </nav>
  )
}
