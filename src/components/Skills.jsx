import StatusLine from './StatusLine'

const groups = [
  {
    title: 'Quality Leadership',
    items: ['QA strategy', 'Quality maturity assessment', 'Zero-bug policy', 'Defect leakage analysis', 'Quality gates', 'Mentoring'],
  },
  {
    title: 'Automation & Testing',
    items: ['Python', 'Playwright', 'Playwright MCP', 'API testing', 'Postman', 'Swagger', 'Selenium', 'k6', 'JMeter'],
  },
  {
    title: 'AI & Delivery',
    items: ['Microsoft Copilot', 'Agentic workflows', 'GitHub Actions / CI/CD', 'PostgreSQL', 'MS SQL Server', 'Agile'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-16 max-w-6xl mx-auto py-24 border-t border-[var(--color-line)]">
      <StatusLine status="INVENTORY" label="Skills" />
      <h2 className="font-[var(--font-display)] text-3xl md:text-4xl mb-12">Toolset</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {groups.map((g) => (
          <div key={g.title}>
            <h3 className="font-[var(--font-mono)] text-sm tracking-widest uppercase text-[var(--color-slate)] mb-4">
              {g.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 border border-[var(--color-line)] rounded-full text-sm bg-white/40"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
