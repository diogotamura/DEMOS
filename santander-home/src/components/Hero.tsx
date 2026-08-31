export function Hero() {
  return (
    <section className="bg-[radial-gradient(circle_at_80%_20%,#d92020_0%,transparent_35%),linear-gradient(115deg,#5d0000,#a40000_58%,#ed0000)] text-white">
      <div className="mx-auto flex min-h-[330px] max-w-page items-center px-5 py-14 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-red-100">Santander para você</p>
          <h1 className="max-w-xl text-3xl font-semibold leading-tight sm:text-5xl">
            Último mês do Desenrola Brasil: aproveite as condições e fique em dia
          </h1>
          <button className="mt-8 rounded-full bg-white px-7 py-3 text-sm font-bold text-santander transition hover:bg-red-50" type="button">VER OFERTA</button>
        </div>
      </div>
      <div className="mx-auto flex max-w-page justify-center gap-2 pb-6">
        <span aria-label="Slide atual" className="h-2.5 w-7 rounded-full bg-white" />
        <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
      </div>
    </section>
  )
}
