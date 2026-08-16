export default function StatusLine({ status = 'PASS', label, tone = 'pass' }) {
  const toneColor = tone === 'pass' ? 'text-[var(--color-signal-pass)]' : 'text-[var(--color-signal-alert)]'
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className={`font-mono text-xs tracking-widest ${toneColor}`}>
        [{status}]
      </span>
      <span className="font-mono text-xs tracking-widest text-[var(--color-slate)] uppercase">
        {label}
      </span>
    </div>
  )
}
