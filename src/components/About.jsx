import StatusLine from './StatusLine'

export default function About() {
  return (
    <section id="about" className="px-6 md:px-16 max-w-6xl mx-auto py-24 border-t border-[var(--color-line)]">
      <StatusLine status="VERIFIED" label="Philosophy" />
      <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
        <h2 className="font-[var(--font-display)] text-3xl md:text-4xl leading-tight">
          Quality isn't a phase.
          <br />
          It's a discipline.
        </h2>
        <div className="space-y-5 text-lg leading-relaxed text-[var(--color-ink)]/90">
          <p>
            QA is the bridge between business and development. The most valuable
            QA contribution is not only catching defects after development — it is
            identifying ambiguity, missing requirements, business risks, edge
            cases, and potential failures as early as possible in the SDLC.
          </p>
          <p>
            The strongest QA outcome is finding issues during refinement, before
            development even starts. The earlier a risk is identified, the cheaper
            and more valuable the correction. In practice, this means combining
            business understanding, risk-based thinking, technical QA, automation,
            service and API testing, CI/CD, and early defect prevention.
          </p>
          <p>
            Over the past years I have worked across banking systems and 13 agile
            teams to build quality into delivery before it becomes a production
            issue. Approximately 120 non-escaped defects were identified over a
            six-month period before reaching production or customers.
          </p>
        </div>
      </div>
    </section>
  )
}
