export type IconName =
  | 'account'
  | 'card'
  | 'select'
  | 'credit-card'
  | 'loan'
  | 'renegotiate'
  | 'security'
  | 'music'
  | 'invoice'
  | 'boleto'
  | 'bill'
  | 'access'
  | 'statement'
  | 'app'

export type Shortcut = {
  label: string
  icon: IconName
  badge?: string
}

export const shortcuts: Shortcut[] = [
  { label: 'Abra sua conta', icon: 'account' },
  { label: 'Conta + Cartão Free', icon: 'card' },
  { label: 'Santander Select', icon: 'select' },
  { label: 'Peça seu cartão', icon: 'credit-card' },
  { label: 'Empréstimo para você', icon: 'loan', badge: 'Crédito ideal' },
  { label: 'Renegocie sua dívida', icon: 'renegotiate' },
]

export type ImportantCard = {
  eyebrow: string
  title: string
  description: string
  action: string
  icon: IconName
}

export const importantCards: ImportantCard[] = [
  {
    eyebrow: 'Central de Segurança',
    title: 'Sua conta está segura?',
    description:
      'Acesse e saiba o quanto sua conta está protegida com as Camadas de Segurança.',
    action: 'Saiba mais',
    icon: 'security',
  },
  {
    eyebrow: 'SMUSIC',
    title: 'Benefícios para quem é fã',
    description: 'Viva o melhor show da sua vida com a pré-venda exclusiva.',
    action: 'Peça seu cartão',
    icon: 'music',
  },
]

export const selfServiceItems: { label: string; icon: IconName }[] = [
  { label: 'Fatura do cartão', icon: 'invoice' },
  { label: '2ª via de boletos', icon: 'boleto' },
  { label: 'Pagar as contas', icon: 'bill' },
  { label: 'Acesso não correntista', icon: 'access' },
  { label: 'Consulta de extrato', icon: 'statement' },
  { label: 'Aplicativo Santander', icon: 'app' },
]

export const footerColumns = [
  {
    title: 'Produtos e Serviços',
    links: ['Conta corrente', 'Cartões', 'Empréstimos', 'Investimentos'],
  },
  {
    title: 'Sobre o Santander',
    links: ['O banco', 'Carreiras', 'Relação com investidores', 'Sustentabilidade'],
  },
  {
    title: 'Fale com a gente',
    links: ['Central de atendimento', 'Encontre uma agência', 'Ouvidoria', 'Acessibilidade'],
  },
  {
    title: 'Redes sociais',
    links: ['Facebook', 'Instagram', 'LinkedIn', 'YouTube'],
  },
]
