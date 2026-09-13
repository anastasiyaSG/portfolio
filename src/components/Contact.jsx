import StatusLine from './StatusLine'
import { useState } from 'react'

const emailAddress = 'anastassiya.georgieva@gmail.com'

const contactLinks = [
  {
    label: 'LINKEDIN',
    value: 'linkedin.com/in/anastasiya-georgieva',
    href: 'https://linkedin.com/in/anastasiya-georgieva',
    icon: LinkedinIcon,
  },
  {
    label: 'GITHUB',
    value: 'github.com/anastasiyaSG',
    href: 'https://github.com/anastasiyaSG',
    icon: GithubIcon,
  },
]

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState('')

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress)
      setCopyStatus('Copied')
      window.setTimeout(() => setCopyStatus(''), 2000)
    } catch {
      setCopyStatus('Copy failed')
    }
  }

  return (
    <section id="contact" className="px-6 md:px-16 max-w-6xl mx-auto py-24 border-t border-[var(--color-line)]">
      <StatusLine status="OPEN" label="Contact" />
      <h2 className="font-[var(--font-display)] text-3xl md:text-4xl mb-8 max-w-2xl">
        Let's talk about quality at scale.
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="border border-[var(--color-line)] rounded-lg p-6 bg-white/40 hover:border-[var(--color-signal-pass)] transition">
          <div className="flex items-start justify-between gap-4">
            <MailIcon />
            <button
              type="button"
              onClick={copyEmail}
              aria-label={copyStatus || 'Copy email address'}
              className="font-[var(--font-mono)] text-xs text-[var(--color-slate)] hover:text-[var(--color-signal-pass)] transition"
            >
              {copyStatus || 'Copy'}
            </button>
          </div>
          <p className="mt-5 font-[var(--font-mono)] text-xs tracking-widest uppercase text-[var(--color-slate)]">EMAIL</p>
          <a href={`mailto:${emailAddress}`} className="mt-2 block break-words font-[var(--font-mono)] text-sm hover:text-[var(--color-signal-pass)] transition">
            {emailAddress}
          </a>
          <span className="sr-only" aria-live="polite">{copyStatus}</span>
        </div>
        {contactLinks.map(({ label, value, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="border border-[var(--color-line)] rounded-lg p-6 bg-white/40 hover:border-[var(--color-signal-pass)] transition"
          >
            <Icon />
            <span className="mt-5 block font-[var(--font-mono)] text-xs tracking-widest uppercase text-[var(--color-slate)]">{label}</span>
            <span className="mt-2 block break-words font-[var(--font-mono)] text-sm">{value}</span>
          </a>
        ))}
      </div>
      <a
        href={`${import.meta.env.BASE_URL}anastasiya-georgieva-resume.pdf`}
        download
        className="mt-8 inline-block font-[var(--font-mono)] text-sm text-[var(--color-signal-pass)] hover:underline"
      >
        Download résumé (PDF) →
      </a>
      <footer className="mt-24 pt-8 border-t border-[var(--color-line)] font-[var(--font-mono)] text-xs text-[var(--color-slate)]">
        Built with React · Vite · Tailwind · Claude · Sofia, Bulgaria
      </footer>
    </section>
  )
}

function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 text-[var(--color-signal-pass)]" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 5.5h18v13H3z" />
      <path d="m3 6 9 7 9-7" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 text-[var(--color-signal-pass)]" fill="currentColor">
      <path d="M5.2 8.2H2.1V21h3.1V8.2ZM3.65 2A1.8 1.8 0 1 0 3.65 5.6 1.8 1.8 0 0 0 3.65 2ZM21.9 13.7c0-3.85-2.05-5.64-4.79-5.64-2.21 0-3.19 1.21-3.74 2.06V8.2h-3.1V21h3.1v-6.34c0-1.67.31-3.29 2.39-3.29 2.05 0 2.08 1.92 2.08 3.4V21h3.1l.01-7.3Z" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 text-[var(--color-signal-pass)]" fill="currentColor">
      <path fillRule="evenodd" d="M12 2.2a9.8 9.8 0 0 0-3.1 19.1c.49.09.67-.21.67-.47v-1.68c-2.73.59-3.3-1.16-3.3-1.16-.45-1.14-1.1-1.44-1.1-1.44-.89-.61.07-.6.07-.6.98.07 1.5 1 1.5 1 .88 1.5 2.31 1.07 2.87.82.09-.64.34-1.07.62-1.32-2.18-.25-4.47-1.09-4.47-4.84 0-1.07.38-1.94 1-2.62-.1-.25-.43-1.24.1-2.58 0 0 .82-.26 2.7 1a9.36 9.36 0 0 1 4.92 0c1.88-1.27 2.7-1 2.7-1 .53 1.34.2 2.33.1 2.58.62.68 1 1.55 1 2.62 0 3.76-2.29 4.59-4.48 4.83.35.3.66.88.66 1.78v2.64c0 .26.18.57.68.47A9.8 9.8 0 0 0 12 2.2Z" clipRule="evenodd" />
    </svg>
  )
}
