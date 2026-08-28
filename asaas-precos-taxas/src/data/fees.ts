export type CardTier = {
  label: string
  minInstallments: number
  maxInstallments: number
  percent: number
  promoPercent: number
}

/** Taxas publicadas de cartão de crédito (padrão / promocional dos 3 primeiros meses). */
export const CREDIT_CARD_TIERS: CardTier[] = [
  { label: 'À vista', minInstallments: 1, maxInstallments: 1, percent: 2.99, promoPercent: 1.99 },
  { label: '2 à 6 parcelas', minInstallments: 2, maxInstallments: 6, percent: 3.49, promoPercent: 2.49 },
  { label: '7 à 12 parcelas', minInstallments: 7, maxInstallments: 12, percent: 3.99, promoPercent: 2.99 },
  { label: '13 à 21 parcelas', minInstallments: 13, maxInstallments: 21, percent: 4.29, promoPercent: 3.29 },
]

/** Tarifa fixa por transação de cartão de crédito, em reais. */
export const CREDIT_CARD_FIXED_FEE = 0.49

/** Taxa de antecipação de cartão de crédito, ao mês. */
export const ANTICIPATION_MONTHLY_PERCENT = 1.25

export type SimpleFee = {
  name: string
  price: string
  detail?: string
}

export const FREE_SERVICES = [
  {
    title: 'Gestão de cobranças',
    price: 'Grátis',
    items: [
      'Emissão de cobranças',
      'Alteração de cobranças',
      'Cancelamento de cobranças',
      'Personalização de fatura',
    ],
  },
  {
    title: 'Cartão Asaas',
    price: 'Grátis para Pessoa jurídica',
    items: ['Para cadastro de pessoa física, consultar taxas'],
  },
  {
    title: 'Conta digital',
    price: 'Grátis',
    items: [
      'Abertura da conta',
      'Manutenção da conta',
      'Extratos financeiros',
      'Relatórios e indicadores',
      'Pague contas',
      'Transferências e pagamentos Pix (válido somente para cadastros de pessoa física)',
    ],
  },
  {
    title: 'Segurança e suporte',
    price: 'Grátis',
    items: ['Importação de dados', 'Sistema antifraude', 'Suporte multicanal 24h'],
  },
]

export const RECEIVING_FEES: SimpleFee[] = [
  { name: 'Pix', price: 'R$ 1,99 R$ 0,99', detail: 'por transação recebida (Válido por 3 meses)' },
  { name: 'Boleto bancário', price: 'R$ 1,99 R$ 0,99', detail: 'por transação recebida (Válido por 3 meses)' },
  { name: 'Cartão de débito', price: 'R$ 0,35 + 1,89%', detail: 'por transação recebida' },
]

export const TAP_FEES: SimpleFee[] = [
  { name: 'Cartão de débito', price: '1,25%', detail: 'por transação recebida' },
  {
    name: 'Antecipação de cartão de crédito',
    price: 'Grátis',
    detail: 'Recebimento em até 2 dias úteis. Sujeito a análise de crédito',
  },
]

export const NOTIFICATION_FEES: SimpleFee[] = [
  { name: 'Notificações por WhatsApp', price: 'R$ 0,55', detail: 'por notificação enviada' },
  { name: 'Notificações por carta (Correios)', price: 'R$ 2,91', detail: 'por boleto enviado' },
  { name: 'Negativação no Serasa', price: 'R$ 9,90', detail: 'por cobrança negativada' },
  {
    name: 'Notificações por e-mail e SMS',
    price: 'R$ 0,99',
    detail: 'pelo pacote de notificações usado a cada transação',
  },
  { name: 'Robô de voz (notificações por ligação automatizada)', price: 'R$ 0,55', detail: 'por ligação' },
  { name: 'Consulta no Serasa', price: 'R$ 16,99', detail: 'por consulta' },
]

export const ANTICIPATION_FEES: SimpleFee[] = [
  {
    name: 'Antecipação de cartão de crédito',
    price: '1,25% ao mês',
    detail: 'Recebimento em até 2 dias úteis. Sujeito a análise de crédito',
  },
  {
    name: 'Antecipação de boleto',
    price: 'A partir de 5,79% ao mês',
    detail: 'Recebimento em até 3 dias úteis. Sujeito a análise de crédito',
  },
]

export const INVOICE_FEES: SimpleFee[] = [
  { name: 'Nota fiscal eletrônica', price: 'R$ 0,49', detail: 'por nota emitida' },
]

export const WITHDRAW_FEES: SimpleFee[] = [
  {
    name: 'Pix (pagamentos e transferências)',
    price: 'Grátis para pessoa física',
    detail:
      'Pessoa jurídica: até 30 transferências grátis por mês e após R$ 2,00 por transação (QR Code dinâmico é gratuito)',
  },
  { name: 'Pague contas', price: 'Grátis', detail: 'Efetue o pagamento de suas contas com o saldo da conta Asaas' },
  { name: 'Ted (transferências)', price: 'R$ 5,00' },
  { name: 'Saques com Cartão Asaas', price: 'R$ 8,60', detail: 'saques nacionais' },
  { name: 'Saques internacionais', price: 'R$ 10,00 + 3,5% de IOF' },
]

export const SECTIONS = [
  { id: 'servicos-gratuitos', label: 'Serviços gratuitos' },
  { id: 'recebimento', label: 'Recebimento' },
  { id: 'asaas-tap', label: 'Asaas Tap' },
  { id: 'notificacoes', label: 'Notificações e negativação' },
  { id: 'antecipacao', label: 'Antecipação' },
  { id: 'nota-fiscal', label: 'Nota fiscal' },
  { id: 'saques', label: 'Saques e saída de dinheiro' },
]

export const DISCLAIMER =
  'As taxas apresentadas são padrão. Para conferir as condições aplicadas ao seu contrato, consulte-as diretamente na sua conta Asaas.'
