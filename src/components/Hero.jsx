import { useEffect, useState } from 'react'
import fallbackImage from '../assets/hero.png'

const assertions = [
  'risk identified before production',
  'automation frameworks built for cross-team adoption',
  'CI/CD quality gates strengthened',
  'QA maturity assessed across 13 agile teams',
]

export default function Hero() {
  const [visible, setVisible] = useState(0)
  const [certificateOpen, setCertificateOpen] = useState(false)

  useEffect(() => {
    if (visible >= assertions.length) return
    const t = setTimeout(() => setVisible((v) => v + 1), 550)
    return () => clearTimeout(t)
  }, [visible])

  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-6 md:px-16 max-w-6xl mx-auto">
      <div className="flex flex-col-reverse md:flex-row md:items-start md:justify-between gap-10">
        <div>
          <StatusEyebrow />
          <h1 className="font-[var(--font-display)] font-medium text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-4xl">
            QA Engineer / SDET
          </h1>
          <p className="mt-6 font-[var(--font-body)] text-lg md:text-xl text-[var(--color-slate)] max-w-2xl leading-relaxed">
            Building automation frameworks, strengthening CI/CD quality gates, and
            identifying risk before it becomes a defect.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => setCertificateOpen(true)}
              className="px-4 py-2 border border-[var(--color-line)] bg-white/40 rounded font-[var(--font-mono)] text-sm text-left hover:border-[var(--color-signal-pass)] transition"
            >
              <span className="block text-[var(--color-slate)] text-xs uppercase tracking-widest">Certified</span>
              <span>ISTQB Test Automation Engineer</span>
            </button>
          </div>
        </div>

        <img
          src={`${import.meta.env.BASE_URL}profile.png`}
          onError={(event) => {
            event.currentTarget.src = fallbackImage
          }}
          alt="Anastasiya Georgieva"
          className="w-32 h-32 md:w-44 md:h-44 rounded-full object-cover border border-[var(--color-line)] bg-white/40"
        />
      </div>

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

      <CertificateModal
        open={certificateOpen}
        onClose={() => setCertificateOpen(false)}
      />
    </section>
  )
}

function CertificateModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-ink)]/70 p-4"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="certificate-title"
        className="flex h-[90vh] w-full max-w-5xl flex-col rounded-lg bg-[var(--color-paper)] p-4 md:p-6"
      >
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <p className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-slate)]">
              Certificate
            </p>
            <h2 id="certificate-title" className="font-[var(--font-display)] text-xl md:text-2xl">
              ISTQB Certified Tester, Specialist Level Test Automation Engineer
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close certificate"
            className="px-3 py-2 border border-[var(--color-line)] rounded font-[var(--font-mono)] text-sm hover:border-[var(--color-signal-pass)] transition"
          >
            Close
          </button>
        </div>
        <iframe
          title="ISTQB Test Automation Engineer certificate"
          src={`${import.meta.env.BASE_URL}istqb-test-automation-engineer.pdf`}
          className="min-h-0 flex-1 w-full border border-[var(--color-line)] bg-white"
        />
      </div>
    </div>
  )
}

function StatusEyebrow() {
  return (
    <div className="font-[var(--font-mono)] text-xs tracking-widest text-[var(--color-slate)] mb-6 uppercase">
      QA Engineer / SDET — Sofia, Bulgaria
    </div>
  )
}
