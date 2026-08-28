import { useEffect, useRef, useState } from 'react'
import { CloseIcon } from './Icons'
import { formatBRL, formatPercent, simulate } from '../lib/simulator'

type SimulatorModalProps = {
  isOpen: boolean
  onClose: () => void
}

function parseCurrency(value: string): number {
  const digits = value.replace(/\D/g, '')
  return digits ? Number(digits) / 100 : 0
}

function formatCurrencyInput(value: string): string {
  const digits = value.replace(/\D/g, '')
  if (!digits) return ''
  return (Number(digits) / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

export function SimulatorModal({ isOpen, onClose }: SimulatorModalProps) {
  const firstInputRef = useRef<HTMLInputElement>(null)
  const [amountInput, setAmountInput] = useState('1.000,00')
  const [installments, setInstallments] = useState(1)
  const [anticipate, setAnticipate] = useState(false)
  const result = simulate({ amount: parseCurrency(amountInput), installments, anticipate })

  useEffect(() => {
    if (!isOpen) return
    firstInputRef.current?.focus()
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8" role="dialog" aria-modal="true" aria-labelledby="simulator-title">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-brand">Simulador de taxas</p>
            <h2 id="simulator-title" className="mt-1 font-display text-2xl font-semibold">Simule uma venda no cartão</h2>
          </div>
          <button type="button" onClick={onClose} className="rounded-full p-2 text-muted transition hover:bg-brand-surface hover:text-ink" aria-label="Fechar simulador">
            <CloseIcon />
          </button>
        </div>
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="sale-amount" className="mb-2 block text-sm font-semibold">Valor da venda</label>
            <div className="flex items-center rounded-lg border border-slate-300 px-3 focus-within:ring-4 focus-within:ring-brand/15">
              <span className="text-sm text-muted">R$</span>
              <input
                ref={firstInputRef}
                id="sale-amount"
                type="text"
                inputMode="decimal"
                value={amountInput}
                onChange={(event) => setAmountInput(formatCurrencyInput(event.target.value))}
                className="min-w-0 flex-1 border-0 px-2 py-3 text-sm outline-none"
                aria-describedby="sale-amount-help"
              />
            </div>
            <p id="sale-amount-help" className="mt-1 text-xs text-muted">Digite no formato 1.234,56</p>
          </div>
          <div>
            <label htmlFor="installments" className="mb-2 block text-sm font-semibold">Número de parcelas</label>
            <select id="installments" value={installments} onChange={(event) => setInstallments(Number(event.target.value))} className="w-full rounded-lg border border-slate-300 bg-white px-3 py-3 text-sm outline-none focus:ring-4 focus:ring-brand/15">
              {Array.from({ length: 21 }, (_, index) => index + 1).map((value) => (
                <option key={value} value={value}>{value === 1 ? 'À vista' : `${value}x`}</option>
              ))}
            </select>
          </div>
        </div>
        <label className="mt-5 flex items-center gap-3 text-sm text-muted">
          <input type="checkbox" checked={anticipate} onChange={(event) => setAnticipate(event.target.checked)} className="h-4 w-4 accent-brand" />
          Antecipar recebimento
        </label>
        <div className="mt-7 rounded-2xl bg-brand-surface p-5">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-brand/10 pb-4">
            <span className="font-semibold">{result.tier.label}</span>
            <span className="rounded-full bg-white px-3 py-1 text-sm font-bold text-brand">{formatPercent(result.percent)}</span>
          </div>
          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between gap-4"><dt className="text-muted">Taxa percentual</dt><dd>{formatBRL(result.percentFee)}</dd></div>
            <div className="flex justify-between gap-4"><dt className="text-muted">Tarifa fixa</dt><dd>{formatBRL(result.fixedFee)}</dd></div>
            {result.anticipationFee > 0 && <div className="flex justify-between gap-4"><dt className="text-muted">Antecipação</dt><dd>{formatBRL(result.anticipationFee)}</dd></div>}
            <div className="flex justify-between gap-4 border-t border-brand/10 pt-3 font-bold"><dt>Total de taxas</dt><dd>{formatBRL(result.totalFees)}</dd></div>
          </dl>
          <div className="mt-5 border-t border-brand/10 pt-4">
            <p className="text-sm text-muted">Valor líquido</p>
            <p className="font-display text-3xl font-bold text-brand">{formatBRL(result.netAmount)}</p>
            <p className="mt-2 text-sm text-muted">Valor de cada parcela: <span className="font-semibold text-ink">{formatBRL(result.installmentAmount)}</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}
