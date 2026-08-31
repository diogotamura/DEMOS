import { footerColumns } from '../data/home.ts'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-page px-5 py-12 lg:px-8">
        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-4">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h2 className="text-sm font-bold">{column.title}</h2>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                {column.links.map((link) => <li key={link}><a className="transition hover:text-santander" href="#">{link}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-slate-200 pt-6 text-xs leading-5 text-slate-500">
          <p>© Banco Santander (Brasil) S.A., CNPJ: 90.400.888/0001-42 — Av. Presidente Juscelino Kubitschek 2041/2235 – Vila Olímpia – São Paulo/SP.</p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
            <a className="hover:text-santander" href="#">Política de Privacidade</a>
            <a className="hover:text-santander" href="#">Segurança</a>
            <a className="hover:text-santander" href="#">LGPD</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
