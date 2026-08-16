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
            Over 12+ years I've moved from hands-on manual testing to leading
            QA strategy across banking systems and 13 agile teams, building
            automation frameworks from scratch, and mentoring the next
            generation of QA engineers.
          </p>
          <p>
            I believe the best quality engineers aren't remembered for finding
            bugs — they're remembered for the incidents that never happened.
            My job is to find the failure mode before the business ever meets
            it: not chasing flaky failures after release, but understanding
            the product deeply enough to know which risks actually matter.
          </p>
          <p>
            I use AI — Copilot, and increasingly agentic tools — not to
            replace that judgment, but to move faster with it.
          </p>
        </div>
      </div>
    </section>
  )
}
