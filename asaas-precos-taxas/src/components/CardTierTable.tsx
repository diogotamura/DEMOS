import { CREDIT_CARD_FIXED_FEE, CREDIT_CARD_TIERS } from '../data/fees'
import { formatPercent } from '../lib/simulator'

type CardTierTableProps = {
  includeFixedFee?: boolean
}

export function CardTierTable({ includeFixedFee = true }: CardTierTableProps) {
  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead className="bg-brand-surface text-muted">
            <tr>
              <th className="px-5 py-4 font-semibold">Parcelamento</th>
              <th className="px-5 py-4 font-semibold">Taxa padrão</th>
              <th className="px-5 py-4 font-semibold">Taxa promocional</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {CREDIT_CARD_TIERS.map((tier) => (
              <tr key={tier.label}>
                <th scope="row" className="px-5 py-4 font-semibold text-ink">{tier.label}</th>
                <td className="px-5 py-4 text-muted line-through">
                  {includeFixedFee && `R$ ${CREDIT_CARD_FIXED_FEE.toFixed(2).replace('.', ',')} + `}
                  {formatPercent(tier.percent)}
                </td>
                <td className="px-5 py-4 font-bold text-brand">
                  {includeFixedFee && `R$ ${CREDIT_CARD_FIXED_FEE.toFixed(2).replace('.', ',')} + `}
                  {formatPercent(tier.promoPercent)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="border-t border-slate-100 px-5 py-4 text-xs leading-relaxed text-muted">
        Sobre o valor total da venda para parcelamentos e por cobranças recebidas para assinaturas. {includeFixedFee && '(Válido por 3 meses)'}
      </p>
    </div>
  )
}
