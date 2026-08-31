import { useState } from 'react'
import type { FormEvent } from 'react'
import { formatCpf, login } from '../lib/auth.ts'
import { FlameLogo } from './Icons.tsx'

export function Header() {
  const [cpf, setCpf] = useState('')
  const [result, setResult] = useState<ReturnType<typeof login>>()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (cpf.trim() === '') {
      setResult({ ok: false, message: 'Informe seu CPF para continuar.' })
      return
    }
    setResult(login(cpf))
  }

  return (
    <header className="bg-white">
      <div className="mx-auto flex max-w-page flex-wrap items-center gap-x-8 gap-y-5 px-5 py-5 lg:px-8">
        <a className="flex shrink-0 items-center gap-2 text-xl font-bold tracking-tight text-santander" href="#">
          <FlameLogo />
          <span>Santander</span>
        </a>

        <div className="order-3 flex w-full items-center gap-6 border-t border-slate-100 pt-4 text-sm font-medium lg:order-none lg:w-auto lg:border-0 lg:pt-0">
          <a className="border-b-2 border-santander pb-1 text-santander" href="#">Para você</a>
          <a className="text-slate-600 transition hover:text-santander" href="#">Para sua empresa</a>
        </div>

        <div className="ml-auto hidden min-w-52 items-center rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-400 md:flex">
          <span className="mr-2 text-lg leading-none">⌕</span>
          <span>O que você procura ?</span>
        </div>

        <label className="hidden items-center gap-2 text-sm text-slate-700 lg:flex">
          <span className="sr-only">Perfil</span>
          <select className="border-0 bg-transparent font-medium outline-none" defaultValue="Pessoa Física">
            <option>Pessoa Física</option>
            <option>Pessoa Jurídica</option>
          </select>
        </label>

        <form className="order-2 flex w-full max-w-full flex-col gap-1 sm:w-auto sm:min-w-64 lg:order-none" onSubmit={handleSubmit}>
          <div className="flex overflow-hidden rounded border border-slate-300 focus-within:border-santander focus-within:ring-1 focus-within:ring-santander">
            <label className="sr-only" htmlFor="cpf">Insira seu CPF</label>
            <input
              aria-describedby={result && !result.ok ? 'cpf-error' : undefined}
              autoComplete="off"
              className="min-w-0 flex-1 px-3 py-2 text-sm outline-none placeholder:text-slate-500"
              id="cpf"
              inputMode="numeric"
              name="cpf"
              onChange={(event) => {
                setCpf(formatCpf(event.target.value))
                setResult(undefined)
              }}
              placeholder="Insira seu CPF"
              type="text"
              value={cpf}
            />
            <button aria-label="Entrar" className="flex w-11 items-center justify-center bg-santander text-lg font-bold text-white transition hover:bg-santander-dark" type="submit">→</button>
          </div>
          {result && !result.ok && (
            <p className="flex items-start gap-1 text-xs leading-4 text-santander" id="cpf-error" role="alert">
              <span aria-hidden="true" className="mt-px flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border border-santander text-[10px] font-bold">!</span>
              {result.message}
            </p>
          )}
          {result?.ok && (
            <p className="rounded border border-santander bg-santander-pale px-2 py-1 text-xs text-santander" role="status">
              Redirecionando para o Internet Banking...
            </p>
          )}
        </form>
      </div>
    </header>
  )
}
