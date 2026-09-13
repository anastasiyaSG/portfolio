import { useEffect, useState } from 'react'

const sections = [
  ['about', 'About'],
  ['experience', 'Experience'],
  ['skills', 'Skills'],
  ['projects', 'Projects'],
  ['contact', 'Contact'],
]

export default function Nav() {
  const [activeSection, setActiveSection] = useState('about')
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const sectionElements = sections
      .map(([id]) => document.getElementById(id))
      .filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visibleSection) setActiveSection(visibleSection.target.id)
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.25, 0.5] },
    )

    sectionElements.forEach((section) => observer.observe(section))
    const handleScroll = () => setShowTop(window.scrollY > window.innerHeight * 0.7)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 border-b border-[var(--color-line)] bg-[var(--color-paper)]/90 backdrop-blur" aria-label="Primary navigation">
        <div className="mx-auto flex max-w-6xl items-center gap-6 overflow-x-auto px-6 py-4 md:px-16">
          <a href="#top" className="shrink-0 font-[var(--font-display)] text-sm font-semibold tracking-wide" aria-label="Back to top">
            ASG
          </a>
          <div className="flex min-w-max gap-5 font-[var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-slate)]">
            {sections.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={activeSection === id ? 'location' : undefined}
                className={`transition hover:text-[var(--color-ink)] ${activeSection === id ? 'text-[var(--color-signal-pass)]' : ''}`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>
      {showTop && (
        <a
          href="#top"
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-30 border border-[var(--color-line)] bg-[var(--color-paper)]/90 px-3 py-2 font-[var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-slate)] backdrop-blur hover:border-[var(--color-signal-pass)] hover:text-[var(--color-ink)] transition"
        >
          Top ↑
        </a>
      )}
    </>
  )
}