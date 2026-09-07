import { useEffect } from 'react'

export default function DetailsDialog({ open, onClose, eyebrow, title, children }) {
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
        aria-labelledby="details-dialog-title"
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-[var(--color-paper)] p-6"
      >
        <div className="flex items-start justify-between gap-4 mb-8">
          <div>
            <p className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-slate)]">
              {eyebrow}
            </p>
            <h2 id="details-dialog-title" className="font-[var(--font-display)] text-2xl">
              {title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-2 border border-[var(--color-line)] rounded font-[var(--font-mono)] text-sm hover:border-[var(--color-signal-pass)] transition"
          >
            Close
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
