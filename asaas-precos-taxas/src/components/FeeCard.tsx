import type { SimpleFee } from '../data/fees'

type FeeCardProps = {
  fee: SimpleFee
  promoPrice?: boolean
}

function splitPromoPrice(price: string): [string, string] | null {
  const values = price.split(/ (?=R\$)/)
  return values.length === 2 ? [values[0], values[1]] : null
}

export function FeeCard({ fee, promoPrice = false }: FeeCardProps) {
  const prices = promoPrice ? splitPromoPrice(fee.price) : null

  return (
    <article className="flex min-h-40 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="font-display text-lg font-semibold text-brand">{fee.name}</h3>
      {prices ? (
        <p className="mt-5 text-xl font-bold">
          <span className="mr-2 text-muted line-through">{prices[0]}</span>
          <span className="text-brand">{prices[1]}</span>
        </p>
      ) : (
        <p className="mt-5 text-xl font-bold text-brand">{fee.price}</p>
      )}
      {fee.detail && <p className="mt-auto pt-4 text-sm leading-relaxed text-muted">{fee.detail}</p>}
    </article>
  )
}
