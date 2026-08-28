const columns = [
  { title: 'Soluções', links: ['Cobranças', 'Conta digital', 'Asaas Tap', 'Nota fiscal'] },
  { title: 'Empresa', links: ['Sobre nós', 'Carreiras', 'Blog', 'Parceiros'] },
  { title: 'Ajuda', links: ['Central de ajuda', 'Fale conosco', 'Status', 'Segurança'] },
  { title: 'Legal', links: ['Termos de uso', 'Política de Privacidade', 'Contratos', 'Taxas'] },
]

export function Footer() {
  return (
    <footer id="footer" className="bg-brand-surface">
      <div className="mx-auto max-w-page px-5 py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_repeat(4,1fr)]">
          <div>
            <p className="font-display text-2xl font-bold tracking-wide text-brand">ASAAS</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">Clone para fins de demonstração. Não afiliado ao Asaas.</p>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="font-display text-sm font-semibold text-ink">{column.title}</h2>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                {column.links.map((link) => <li key={link}><a href="#footer" className="hover:text-brand">{link}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-12 border-t border-brand/10 pt-5 text-xs text-muted">Asaas Serviços Financeiros Ltda. · CNPJ 00.000.000/0001-00</p>
      </div>
    </footer>
  )
}
