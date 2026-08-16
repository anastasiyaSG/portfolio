import { useEffect, useState } from 'react'

const assertions = [
  'root cause isolated before production',
  'capacity verified pre–Black Friday',
  '3,000+ applications/day, zero incidents',
  'QA maturity assessed across 13 agile teams',
]

export default function Hero() {
  const [visible, setVisible] = useState(0)

  useEffect(() => {
    if (visible >= assertions.length) return
    const t = setTimeout(() => setVisible((v) => v + 1), 550)
    return () => clearTimeout(t)
  }, [visible])

  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-6 md:px-16 max-w-6xl mx-auto">
      <StatusEyebrow />
      <h1 className="font-[var(--font-display)] font-medium text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-4xl">
        Quality engineering,
        <br />
        not incident response.
      </h1>
      <p className="mt-6 font-[var(--font-body)] text-lg md:text-xl text-[var(--color-slate)] max-w-2xl leading-relaxed">
        I build the automation, standards, and performance testing that let
        organizations ship with confidence — combining hands-on framework
        engineering with the product judgment to know what quality actually
        means for the customer.
      </p>

      <div className="mt-12 border border-[var(--color-line)] bg-white/40 rounded-lg p-5 max-w-xl font-[var(--font-mono)] text-sm">
        {assertions.map((a, i) => (
          <div
            key={a}
            className={`flex items-start gap-2 py-1 transition-opacity duration-500 ${
              i < visible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span className="text-[var(--color-signal-pass)]">✓</span>
            <span className="text-[var(--color-ink)]">{a}</span>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-[var(--color-ink)] text-[var(--color-paper)] font-[var(--font-mono)] text-sm tracking-wide rounded hover:opacity-85 transition"
        >
          View case studies
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-[var(--color-ink)] font-[var(--font-mono)] text-sm tracking-wide rounded hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] transition"
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}

function StatusEyebrow() {
  return (
    <div className="font-[var(--font-mono)] text-xs tracking-widest text-[var(--color-slate)] mb-6 uppercase">
      Senior QA Automation Engineer / QA Lead — Sofia, Bulgaria
    </div>
  )
}
