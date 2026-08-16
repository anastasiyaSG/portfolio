import StatusLine from './StatusLine'

const roles = [
  {
    status: 'MONITORING',
    tone: 'pass',
    title: 'Senior QA Engineer (Automation & Quality Strategy)',
    org: 'TBI Bank',
    period: 'Jan 2023 — Present',
    bullets: [
      'Designed and led a cross-organization test automation framework from scratch, shifting the org toward automation-first delivery.',
      'Led a QA maturity assessment across 13 agile teams — the executive report was adopted as a recurring practice and became the trigger for the org\u2019s broader move into AI-assisted automation.',
      'Built defect leakage analysis to trace why bugs reached production, not just count them, feeding fixes back into process and standards.',
      'Introduced performance testing (JMeter, then k6) and non-functional quality gates — identified a memory leak under sustained load ahead of Black Friday, giving dev and DevOps teams time to mitigate before it became an incident.',
      'Tested across banking microservices, mobile banking apps, and CI/CD pipelines.',
      'Mentored peers in automation and the quality mindset.',
    ],
  },
  {
    status: 'VERIFIED',
    tone: 'pass',
    title: 'Quality Assurance Specialist',
    org: 'Barcode Systems, Bulgaria',
    period: 'Dec 2020 — Mar 2022',
    bullets: [
      'Worked directly with stakeholders to elicit requirements — quality work that started before a single test was written.',
      'Authored epics and user stories, reviewing specs for ERP/BA integration — bridging business analysis and QA.',
      'Owned QA–Dev coordination across the full SDLC, not just execution.',
    ],
  },
  {
    status: 'VERIFIED',
    tone: 'pass',
    title: 'Intern QA',
    org: 'Crea.bg',
    period: 'May 2020 — Aug 2020',
    bullets: [
      'Designed test cases and scenarios for software validation.',
      'Built a basic automation framework with Selenium to improve early issue detection.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-16 max-w-6xl mx-auto py-24 border-t border-[var(--color-line)]">
      <StatusLine status="LOG" label="Experience" />
      <h2 className="font-[var(--font-display)] text-3xl md:text-4xl mb-12">Career log</h2>

      <div className="space-y-16">
        {roles.map((r) => (
          <div key={r.title} className="grid md:grid-cols-[220px_1fr] gap-4 md:gap-10">
            <div>
              <div className={`font-[var(--font-mono)] text-xs tracking-widest ${r.tone === 'pass' ? 'text-[var(--color-signal-pass)]' : 'text-[var(--color-signal-alert)]'}`}>
                [{r.status}]
              </div>
              <div className="font-[var(--font-mono)] text-sm text-[var(--color-slate)] mt-2">{r.period}</div>
            </div>
            <div>
              <h3 className="font-[var(--font-display)] text-xl md:text-2xl">{r.title}</h3>
              <div className="text-[var(--color-slate)] mb-4">{r.org}</div>
              <ul className="space-y-2">
                {r.bullets.map((b) => (
                  <li key={b} className="flex gap-3 leading-relaxed">
                    <span className="text-[var(--color-signal-pass)] mt-1 shrink-0">·</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
