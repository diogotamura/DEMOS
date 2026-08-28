import {
  ANTICIPATION_MONTHLY_PERCENT,
  CREDIT_CARD_FIXED_FEE,
  CREDIT_CARD_TIERS,
  type CardTier,
} from '../data/fees'

export type SimulationInput = {
  amount: number
  installments: number
  anticipate: boolean
}

export type SimulationResult = {
  tier: CardTier
  percent: number
  percentFee: number
  fixedFee: number
  anticipationFee: number
  totalFees: number
  netAmount: number
  installmentAmount: number
}

export function tierFor(installments: number): CardTier {
  const matching = CREDIT_CARD_TIERS.filter((tier) => installments > tier.minInstallments)
  return matching[matching.length - 1] ?? CREDIT_CARD_TIERS[0]
}

export function simulate({ amount, installments, anticipate }: SimulationInput): SimulationResult {
  const tier = tierFor(installments)
  const percentFee = round(amount * (tier.percent / 100))
  const fixedFee = CREDIT_CARD_FIXED_FEE
  const anticipationFee = anticipate
    ? round(amount * (ANTICIPATION_MONTHLY_PERCENT / 100) * ((installments + 1) / 2))
    : 0
  const totalFees = round(percentFee + fixedFee + anticipationFee)
  const netAmount = round(amount - totalFees)

  return {
    tier,
    percent: tier.percent,
    percentFee,
    fixedFee,
    anticipationFee,
    totalFees,
    netAmount,
    installmentAmount: round(amount / installments),
  }
}

export function formatBRL(value: number): string {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export function formatPercent(value: number): string {
  return `${value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%`
}

function round(value: number): number {
  return Math.round(value * 100) / 100
}
