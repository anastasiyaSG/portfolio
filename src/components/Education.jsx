import StatusLine from './StatusLine'

const education = [
  {
    title: 'QA Automation training',
    institution: 'Software University (SoftUni)',
    period: '2019 – 2020',
    details: [
      'Programming Basics with C#',
      'Fundamentals of Programming with C# (Jan 2020, 6.00/6.00)',
      'QA Automation (May 2020, 5.02/6.00)',
      'Agile Fundamentals with Scrum (Jan 2022, 6.00/6.00)',
    ],
  },
  {
    title: 'MSc, Logistics Engineering',
    institution: 'Technical University of Sofia',
    period: '2013 – 2015',
    details: [
      'Grade: A / Excellent',
      'Thesis: “Passenger and Baggage Flows at an Airport Terminal”',
      'Honor award for excellent academic results.',
    ],
  },
  {
    title: 'BSc, Aviation Engineering',
    institution: 'Technical University of Sofia',
    period: '2008 – 2012',
    details: ['Electrical aviation engineering, radar and navigation systems'],
  },
]

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="px-6 md:px-16 max-w-6xl mx-auto py-24 border-t border-[var(--color-line)]"
    >
      <StatusLine status="RECORD" label="Education" />
      <h2
        id="education-title"
        className="font-[var(--font-display)] text-3xl md:text-4xl mb-10"
      >
        Education
      </h2>

      <ol className="space-y-8">
        {education.map((item) => (
          <li key={item.title} className="grid md:grid-cols-[220px_1fr] gap-3 md:gap-10">
            <div className="font-[var(--font-mono)] text-sm text-[var(--color-slate)]">
              {item.period}
            </div>
            <div>
              <h3 className="font-[var(--font-display)] text-xl md:text-2xl">
                {item.title}
              </h3>
              <p className="text-[var(--color-slate)] mt-1">{item.institution}</p>
              <ul className="mt-3 space-y-1 leading-relaxed text-[var(--color-ink)]/85">
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-10 max-w-3xl leading-relaxed text-[var(--color-ink)]/85">
        Engineering background in safety-critical, process-driven fields, which
        shaped my risk-based approach to quality.
      </p>
    </section>
  )
}
