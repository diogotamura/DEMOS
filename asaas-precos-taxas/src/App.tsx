import { useState } from 'react'
import {
  ANTICIPATION_FEES,
  FREE_SERVICES,
  INVOICE_FEES,
  NOTIFICATION_FEES,
  RECEIVING_FEES,
  TAP_FEES,
  WITHDRAW_FEES,
} from './data/fees'
import { CardTierTable } from './components/CardTierTable'
import { Disclaimer } from './components/Disclaimer'
import { FeeCard } from './components/FeeCard'
import { Footer } from './components/Footer'
import { CheckIcon } from './components/Icons'
import { Hero } from './components/Hero'
import { SectionNav } from './components/SectionNav'
import { SimulatorModal } from './components/SimulatorModal'

function App() {
  const [simulatorOpen, setSimulatorOpen] = useState(false)

  return (
    <div>
      <Hero />
      <SectionNav />
      <main>
        <section id="servicos-gratuitos" className="mx-auto max-w-page scroll-mt-32 px-5 py-16 lg:px-8 lg:py-24">
          <SectionHeading title="Conheça nossos serviços gratuitos" centered />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {FREE_SERVICES.map((service) => (
              <article key={service.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-display text-xl font-semibold text-brand">{service.title}</h3>
                <p className="mt-3 text-lg font-bold text-ink">{service.price}</p>
                <ul className="mt-5 space-y-3 text-sm text-muted">
                  {service.items.map((item) => <li key={item} className="flex gap-2"><CheckIcon className="mt-0.5 shrink-0 text-brand" />{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <div className="text-center">
            <CTA href="#hero-form">Experimentar o Asaas</CTA>
          </div>
        </section>

        <section id="recebimento" className="scroll-mt-32 bg-brand-surface">
          <div className="mx-auto max-w-page px-5 py-16 lg:px-8 lg:py-24">
            <SectionHeading title="Ofereça diversas formas de pagamento" />
            <p className="mt-6 font-display text-2xl font-semibold text-ink">Aumente suas vendas online com o link de pagamento</p>
            <p className="mt-3 max-w-2xl text-muted">Ofereça várias formas de pagamento com um único link e venda mais sem sair de casa.</p>
            <div className="mt-5 flex flex-wrap gap-2 text-sm font-semibold text-brand">
              {['Pix', 'Boleto', 'Cartão de crédito'].map((item) => <span key={item} className="rounded-full bg-white px-4 py-2">{item}</span>)}
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-3">{RECEIVING_FEES.map((fee, index) => <FeeCard key={fee.name} fee={fee} promoPrice={index < 2} />)}</div>
            <CardTierTable />
            <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl bg-white p-6 sm:flex-row sm:items-center">
              <h3 className="font-display text-xl font-semibold">Dúvidas sobre taxas de cartão?</h3>
              <button type="button" onClick={() => setSimulatorOpen(true)} className="rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark">Simular venda no cartão</button>
            </div>
            <Disclaimer />
          </div>
        </section>

        <section id="asaas-tap" className="scroll-mt-32">
          <div className="mx-auto max-w-page px-5 py-16 lg:px-8 lg:py-24">
            <SectionHeading title="Taxas menores e mais lucro nas suas vendas usando o Asaas Tap" />
            <div className="mt-10 grid gap-5 md:grid-cols-2">{TAP_FEES.map((fee) => <FeeCard key={fee.name} fee={fee} />)}</div>
            <CardTierTable includeFixedFee={false} />
            <Disclaimer />
            <CTA href="#hero-form">Cobre com Asaas Tap</CTA>
          </div>
        </section>

        <section id="notificacoes" className="scroll-mt-32 bg-brand-surface">
          <div className="mx-auto max-w-page px-5 py-16 lg:px-8 lg:py-24">
            <SectionHeading title="Diminua a inadimplência do seu negócio" />
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{NOTIFICATION_FEES.map((fee) => <FeeCard key={fee.name} fee={fee} />)}</div>
            <Disclaimer />
            <CTA href="#hero-form">Reduzir a inadimplência</CTA>
          </div>
        </section>

        <section id="antecipacao" className="scroll-mt-32">
          <div className="mx-auto max-w-page px-5 py-16 lg:px-8 lg:py-24">
            <SectionHeading title="Garanta dinheiro no caixa e fique sempre no verde" />
            <div className="mt-10 grid gap-5 md:grid-cols-2">{ANTICIPATION_FEES.map((fee) => <FeeCard key={fee.name} fee={fee} />)}</div>
            <Disclaimer />
          </div>
        </section>

        <section id="nota-fiscal" className="scroll-mt-32 bg-brand-surface">
          <div className="mx-auto max-w-page px-5 py-16 lg:px-8 lg:py-24">
            <SectionHeading title="Livre-se da papelada e reduza a burocracia" />
            <div className="mt-10 max-w-md"><FeeCard fee={INVOICE_FEES[0]} /></div>
            <Disclaimer />
          </div>
        </section>

        <section id="saques" className="scroll-mt-32">
          <div className="mx-auto max-w-page px-5 py-16 lg:px-8 lg:py-24">
            <SectionHeading title="Tenha liberdade para usar seu dinheiro como quiser" />
            <p className="mt-6 font-display text-2xl font-semibold text-ink">Transferências via Pix e pagamentos grátis todo mês</p>
            <p className="mt-3 max-w-2xl text-muted">Só no Asaas você tem 30 transações grátis todo mês para usar em Pix e pagamentos por QR code estático</p>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{WITHDRAW_FEES.map((fee) => <FeeCard key={fee.name} fee={fee} />)}</div>
            <Disclaimer />
            <CTA href="#hero-form">Criar conta grátis</CTA>
          </div>
        </section>
      </main>
      <Footer />
      <SimulatorModal isOpen={simulatorOpen} onClose={() => setSimulatorOpen(false)} />
    </div>
  )
}

type SectionHeadingProps = {
  title: string
  centered?: boolean
}

function SectionHeading({ title, centered = false }: SectionHeadingProps) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">{title}</h2>
    </div>
  )
}

type CTAProps = {
  href: string
  children: string
}

function CTA({ href, children }: CTAProps) {
  return <a href={href} className="mt-8 inline-flex rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark">{children}</a>
}

export default App
