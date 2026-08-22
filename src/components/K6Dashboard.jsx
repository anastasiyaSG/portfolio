import { useEffect, useState } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from 'recharts'

const TEST_LABELS = {
  load: 'Load',
  stress: 'Stress',
  soak: 'Soak',
}

const LINE_COLORS = {
  load: 'var(--color-signal-pass)',
  stress: 'var(--color-signal-alert)',
  soak: 'var(--color-ink)',
}

function formatDate(iso) {
  const d = new Date(iso)
  return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
}

export default function K6Dashboard() {
  const [history, setHistory] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/k6-history.json`)
      .then((res) => {
        if (!res.ok) throw new Error('failed to load')
        return res.json()
      })
      .then(setHistory)
      .catch(() => setError(true))
  }, [])

  if (error) return null
  if (!history || history.length === 0) {
    return (
      <p className="text-[var(--color-slate)] font-[var(--font-mono)] text-sm">
        No runs recorded yet — the nightly k6 workflow will populate this
        automatically.
      </p>
    )
  }

  const testKeys = Object.keys(history[history.length - 1].tests || {})
  const chartData = history.map((entry) => {
    const row = { date: formatDate(entry.timestamp) }
    for (const key of testKeys) {
      row[`${key}_p95`] = entry.tests[key]?.p95 ?? null
      row[`${key}_error`] = entry.tests[key]?.errorRate ?? null
    }
    return row
  })

  const latest = history[history.length - 1]
  const latestTimestamp = new Date(latest.timestamp).toLocaleString(
    undefined,
    { dateStyle: 'medium', timeStyle: 'short' }
  )

  return (
    <div className="border border-[var(--color-line)] rounded-lg p-6 bg-white/40">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
        <h3 className="font-[var(--font-display)] text-lg">
          Automated k6 performance history
        </h3>
        <span className="font-[var(--font-mono)] text-xs text-[var(--color-slate)]">
          Last run: {latestTimestamp}
        </span>
      </div>

      {/* Threshold status badges for the latest run */}
      <div className="flex flex-wrap gap-3 mb-8">
        {testKeys.map((key) => {
          const passed = latest.tests[key]?.thresholdsPassed
          return (
            <div
              key={key}
              className="flex items-center gap-2 border border-[var(--color-line)] rounded-full px-3 py-1 font-[var(--font-mono)] text-xs"
            >
              <span className="uppercase text-[var(--color-slate)]">
                {TEST_LABELS[key] ?? key}
              </span>
              <span
                className={
                  passed
                    ? 'text-[var(--color-signal-pass)]'
                    : 'text-[var(--color-signal-alert)]'
                }
              >
                {passed ? '✓ gates passed' : '✕ threshold breached'}
              </span>
            </div>
          )
        })}
      </div>

      {/* p95 latency trend */}
      <p className="font-[var(--font-mono)] text-xs tracking-widest uppercase text-[var(--color-slate)] mb-2">
        p95 response time (ms)
      </p>
      <div className="h-56 mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid stroke="var(--color-line)" strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 11, fill: 'var(--color-slate)' }}
            />
            <YAxis tick={{ fontSize: 11, fill: 'var(--color-slate)' }} />
            <Tooltip />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            {testKeys.map((key) => (
              <Line
                key={key}
                type="monotone"
                dataKey={`${key}_p95`}
                name={`${TEST_LABELS[key] ?? key} p95`}
                stroke={LINE_COLORS[key] ?? 'var(--color-ink)'}
                strokeWidth={2}
                dot={false}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* error rate trend */}
      <p className="font-[var(--font-mono)] text-xs tracking-widest uppercase text-[var(--color-slate)] mb-2">
        Error rate (%)
      </p>
      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid stroke="var(--color-line)" strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 11, fill: 'var(--color-slate)' }}
            />
            <YAxis tick={{ fontSize: 11, fill: 'var(--color-slate)' }} />
            <Tooltip />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            {testKeys.map((key) => (
              <Line
                key={key}
                type="monotone"
                dataKey={`${key}_error`}
                name={`${TEST_LABELS[key] ?? key} errors`}
                stroke={LINE_COLORS[key] ?? 'var(--color-ink)'}
                strokeWidth={2}
                dot={false}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>

      <p className="mt-6 text-xs text-[var(--color-slate)] font-[var(--font-mono)]">
        Runs nightly via GitHub Actions — k6 load, stress, and soak tests
        against a live target, with results committed and redeployed
        automatically. No manual step.
      </p>
    </div>
  )
}
