import StatusLine from './StatusLine'

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-16 max-w-6xl mx-auto py-24 border-t border-[var(--color-line)]">
      <StatusLine status="OPEN" label="Contact" />
      <h2 className="font-[var(--font-display)] text-3xl md:text-4xl mb-8 max-w-2xl">
        Let's talk about quality at scale.
      </h2>
      <div className="flex flex-wrap gap-x-10 gap-y-4 font-[var(--font-mono)] text-sm">
        <a href="mailto:anastassiya.georgieva@gmail.com" className="hover:text-[var(--color-signal-pass)] transition">
          anastassiya.georgieva@gmail.com
        </a>
        <a href="https://linkedin.com/in/anastasiya-georgieva" target="_blank" rel="noreferrer" className="hover:text-[var(--color-signal-pass)] transition">
          linkedin.com/in/anastasiya-georgieva
        </a>
        <a href="https://github.com/anastasiyaSG" target="_blank" rel="noreferrer" className="hover:text-[var(--color-signal-pass)] transition">
          github.com/anastasiyaSG
        </a>
      </div>
      <footer className="mt-24 pt-8 border-t border-[var(--color-line)] font-[var(--font-mono)] text-xs text-[var(--color-slate)]">
        Built with Claude · Sofia, Bulgaria
      </footer>
    </section>
  )
}
