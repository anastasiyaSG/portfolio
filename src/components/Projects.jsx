import StatusLine from './StatusLine'
import K6Dashboard from './K6Dashboard'

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-16 max-w-6xl mx-auto py-24 border-t border-[var(--color-line)]">
      <StatusLine status="CASE STUDY" label="Featured" />
      <h2 className="font-[var(--font-display)] text-3xl md:text-4xl mb-12">
        Black Friday: capacity testing that prevented an incident
      </h2>

      <div className="grid md:grid-cols-2 gap-10 mb-20">
        <div>
          <h3 className="font-[var(--font-mono)] text-xs tracking-widest uppercase text-[var(--color-slate)] mb-2">
            The setup
          </h3>
          <p className="leading-relaxed mb-6">
            Ahead of Black Friday, the platform needed proven — not assumed —
            confidence that it could handle peak load. Performance testing
            started with JMeter and later moved to k6, running load
            simulations against expected and above-expected traffic
            patterns.
          </p>

          <h3 className="font-[var(--font-mono)] text-xs tracking-widest uppercase text-[var(--color-slate)] mb-2">
            What testing found
          </h3>
          <p className="leading-relaxed">
            Sustained load surfaced a memory leak — not a crash, not an
            obvious error, but a slow degradation invisible in short manual
            checks and guaranteed to surface hours into real peak traffic.
            Flagged early enough for dev and DevOps to act with real runway,
            not a last-minute scramble.
          </p>
        </div>
        <div>
          <h3 className="font-[var(--font-mono)] text-xs tracking-widest uppercase text-[var(--color-slate)] mb-2">
            The outcome
          </h3>
          <div className="border border-[var(--color-line)] rounded-lg p-6 bg-white/40 font-[var(--font-mono)] text-sm space-y-3">
            <div className="flex justify-between">
              <span className="text-[var(--color-slate)]">Traffic mitigated before</span>
              <span className="text-[var(--color-signal-pass)]">✓ Yes</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--color-slate)]">Peak volume handled</span>
              <span>3,000+ applications/day</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--color-slate)]">Capacity incidents</span>
              <span className="text-[var(--color-signal-pass)]">0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--color-slate)]">Now standard practice</span>
              <span className="text-[var(--color-signal-pass)]">✓ Yes</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-20">
        <K6Dashboard />
      </div>

      <StatusLine status="CASE STUDY" label="Maturity assessment" />
      <h2 className="font-[var(--font-display)] text-3xl md:text-4xl mb-12">
        QA Maturity Assessment &amp; Automation Transformation
      </h2>

      <div className="grid md:grid-cols-2 gap-10 mb-20">
        <div>
          <h3 className="font-[var(--font-mono)] text-xs tracking-widest uppercase text-[var(--color-slate)] mb-2">
            Context
          </h3>
          <p className="leading-relaxed mb-6">
            I initiated and led a QA maturity assessment across 13 teams. The
            initiative was independently identified as a need within the
            organization before the recent AI-driven automation wave made quality
            transformation a mainstream expectation. I identified the
            organizational QA gap before it became an obvious industry trend.
          </p>

          <h3 className="font-[var(--font-mono)] text-xs tracking-widest uppercase text-[var(--color-slate)] mb-2">
            Approach
          </h3>
          <p className="leading-relaxed">
            I designed the assessment myself and structured it into distinct
            evaluation categories covering the QA process across the SDLC. The
            assessment was detailed enough to identify specific process gaps from
            a QA perspective that were not being identified by other roles. Within
            the organization, the assessment was described as “pure gold” because
            of its thoroughness and usefulness. It focused on QA processes, test
            strategy, automation, SDLC integration, quality practices, release
            processes, risk identification, and gaps between development and QA.
          </p>
        </div>
        <div>
          <h3 className="font-[var(--font-mono)] text-xs tracking-widest uppercase text-[var(--color-slate)] mb-2">
            Impact
          </h3>
          <div className="border border-[var(--color-line)] rounded-lg p-6 bg-white/40 font-[var(--font-mono)] text-sm space-y-3 mb-6">
            <div className="text-[var(--color-slate)] uppercase tracking-widest text-[10px]">Key takeaway</div>
            <div className="text-[var(--color-ink)] font-semibold">
              Leadership demonstrated through initiative, not title.
            </div>
          </div>
          <p className="leading-relaxed mb-6">
            At the time of the assessment, the vast majority of teams had no test
            automation in place. Roughly a year later, automation adoption had
            grown to close to half of the teams, representing a significant
            increase in automation adoption influenced directly by the findings and
            recommendations from the assessment.
          </p>

          <h3 className="font-[var(--font-mono)] text-xs tracking-widest uppercase text-[var(--color-slate)] mb-2">
            Leadership / influence
          </h3>
          <p className="leading-relaxed">
            This transformation was driven without holding a formal leadership
            title. It reflected leading without authority: identifying a cross-team
            problem, creating the assessment, communicating the findings, securing
            management buy-in, influencing multiple teams, and driving measurable
            change through initiative and technical influence.
          </p>
        </div>
      </div>

      <p className="leading-relaxed text-[var(--color-ink)]/80 mb-20">
        This initiative reflected a broader pattern in how I approach my work:
        identifying gaps before they are asked of me, and taking ownership of
        improvements even outside my formal scope. It reinforced my focus on
        deepening automation and engineering skills to drive quality through
        technical impact.
      </p>

      <StatusLine status="REPO" label="Personal projects" />
      <div className="grid md:grid-cols-2 gap-6">
        <ProjectCard
          title="Evolved CV Builder"
          desc="An interactive, single-page CV builder with editable, reorderable sections — identity, experience, skills, certifications. Edits persist to localStorage and export straight to PDF via the browser's print dialog. This is the tool that produced the source content for this site."
          tags={['React', 'TypeScript', 'Vite']}
          link="https://github.com/anastasiyaSG/evolved_cv_builder"
        />
        <ProjectCard
          title="car-watcher"
          desc="A scraper that checks for new Kia and Nissan listings in Bulgaria and emails alerts, running on a schedule via GitHub Actions."
          tags={['Python', 'GitHub Actions', 'Automation']}
          link="https://github.com/anastasiyaSG/car-watcher"
        />
      </div>
    </section>
  )
}

function ProjectCard({ title, desc, tags, link }) {
  const Wrapper = link ? 'a' : 'div'
  return (
    <Wrapper
      href={link}
      target={link ? '_blank' : undefined}
      rel={link ? 'noreferrer' : undefined}
      className="block border border-[var(--color-line)] rounded-lg p-6 bg-white/40 hover:border-[var(--color-signal-pass)] transition"
    >
      <h3 className="font-[var(--font-display)] text-lg mb-2">{title}</h3>
      <p className="text-[var(--color-ink)]/80 leading-relaxed mb-4">{desc}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="font-[var(--font-mono)] text-xs text-[var(--color-slate)] border border-[var(--color-line)] rounded-full px-2 py-1">
            {t}
          </span>
        ))}
      </div>
    </Wrapper>
  )
}
