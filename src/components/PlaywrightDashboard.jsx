import { useEffect, useState } from 'react'
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import StatusLine from './StatusLine'

const SUMMARY_URL =
  'https://anastasiyasg.github.io/playwright-test-automation-demo/widgets/summary.json'
const TREND_URL =
  'https://anastasiyasg.github.io/playwright-test-automation-demo/history/history-trend.json'
const REPORT_URL = 'https://anastasiyasg.github.io/playwright-test-automation-demo/'
const WORKFLOW_BADGE_URL =
  'https://github.com/anastasiyaSG/playwright-test-automation-demo/actions/workflows/daily-tests.yml/badge.svg'

function getNumber(...values) {
  const value = values.find((candidate) => Number.isFinite(Number(candidate)))
  return value === undefined ? null : Number(value)
}

function normalizeSummary(summary) {
  const statistic = summary?.statistic ?? summary?.statistics
  const time = summary?.time
  if (!statistic || !time) return null

  const counts = {
    passed: getNumber(statistic.passed),
    failed: getNumber(statistic.failed),
    broken: getNumber(statistic.broken),
    skipped: getNumber(statistic.skipped),
  }
  const reportedTotal = getNumber(statistic.total)
  const countedTotal = Object.values(counts)
    .filter((value) => value !== null)
    .reduce((sum, value) => sum + value, 0)
  const total = reportedTotal ?? (countedTotal > 0 ? countedTotal : null)
  const duration = getNumber(time.duration, time.stop && time.start ? time.stop - time.start : null)
  const timestamp = time.stop ?? time.end ?? time.start

  if (total === null || duration === null || !timestamp) return null
  return { counts, total, duration, timestamp }
}

function normalizeTrend(trend) {
  const entries = Array.isArray(trend) ? trend : trend?.data
  if (!Array.isArray(entries)) return null

  const points = entries
    .map((entry) => ({
      date: entry.buildOrder ?? entry.reportName ?? entry.date ?? entry.timestamp,
      passed: getNumber(entry.data?.passed, entry.passed),
    }))
    .filter((entry) => entry.date !== undefined && entry.passed !== null)

  return points.length > 1 ? points : null
}

function formatDuration(milliseconds) {
  const seconds = Math.round(milliseconds / 1000)
  if (seconds < 60) return `${seconds}s`
  return `${Math.floor(seconds / 60)}m ${seconds % 60}s`
}

function formatTimestamp(timestamp) {
  return new Date(timestamp).toLocaleString(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  })
}

function StatBadge({ label, value, tone = 'text-[var(--color-ink)]' }) {
  return (
    <div className="border border-[var(--color-line)] rounded-full px-3 py-1 font-[var(--font-mono)] text-xs">
      <span className="uppercase text-[var(--color-slate)]">{label}</span>{' '}
      <span className={tone}>{value}</span>
    </div>
  )
}

function ReportLink() {
  return (
    <a
      href={REPORT_URL}
      target="_blank"
      rel="noreferrer"
      className="font-[var(--font-mono)] text-sm text-[var(--color-signal-pass)] hover:underline"
    >
      View full Allure report →
    </a>
  )
}

function TestApproach() {
  return (
    <p className="text-xs text-[var(--color-slate)] font-[var(--font-mono)] leading-relaxed">
      Approach: async pytest + Playwright, Page Object Model, shared fixtures,
      screenshots and traces on CI, with nightly GitHub Actions history.
    </p>
  )
}

function FallbackReport() {
  return (
    <div className="space-y-5">
      <img
        src={WORKFLOW_BADGE_URL}
        alt="Playwright smoke test workflow status"
        aria-label="Playwright smoke test workflow status"
        className="h-5"
      />
      <p className="text-[var(--color-slate)] leading-relaxed">
        A nightly GitHub Actions smoke suite checks the portfolio title and hero
        links, contact links, profile photo, and six detail dialogs.
      </p>
      <TestApproach />
      <ReportLink />
    </div>
  )
}

export default function PlaywrightDashboard() {
  const [summary, setSummary] = useState(null)
  const [trend, setTrend] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    let active = true

    fetch(SUMMARY_URL, { cache: 'no-store' })
      .then((res) => {
        if (!res.ok) throw new Error('failed to load summary')
        return res.json()
      })
      .then((data) => {
        const normalized = normalizeSummary(data)
        if (!normalized) throw new Error('unsupported summary shape')
        if (active) setSummary(normalized)
        return fetch(TREND_URL, { cache: 'no-store' })
          .then((res) => (res.ok ? res.json() : null))
          .then((trendData) => {
            if (active && trendData) setTrend(normalizeTrend(trendData))
          })
          .catch(() => undefined)
      })
      .catch(() => {
        if (active) setError(true)
      })

    return () => {
      active = false
    }
  }, [])

  return (
    <div className="border border-[var(--color-line)] rounded-lg p-6 bg-white/40">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
        <div>
          <StatusLine status="VERIFIED" label="Playwright E2E" />
          <h3 className="font-[var(--font-display)] text-lg mt-3">
            Automated Playwright smoke testing
          </h3>
        </div>
        {summary && (
          <span className="font-[var(--font-mono)] text-xs text-[var(--color-slate)]">
            Last run: {formatTimestamp(summary.timestamp)}
          </span>
        )}
      </div>

      {error ? (
        <FallbackReport />
      ) : !summary ? (
        <p className="text-[var(--color-slate)] font-[var(--font-mono)] text-sm">
          Loading latest smoke-test report...
        </p>
      ) : (
        <>
          <div className="flex flex-wrap gap-3 mb-6">
            <StatBadge label="Total" value={summary.total} />
            <StatBadge label="Passed" value={summary.counts.passed ?? 0} tone="text-[var(--color-signal-pass)]" />
            <StatBadge label="Failed" value={summary.counts.failed ?? 0} tone="text-[var(--color-signal-alert)]" />
            <StatBadge label="Broken" value={summary.counts.broken ?? 0} tone="text-[var(--color-signal-alert)]" />
            <StatBadge label="Skipped" value={summary.counts.skipped ?? 0} />
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-6 font-[var(--font-mono)] text-sm">
            <div>
              <span className="block text-xs uppercase tracking-widest text-[var(--color-slate)]">Pass rate</span>
              <span className="text-lg text-[var(--color-signal-pass)]">
                {Math.round(((summary.counts.passed ?? 0) / summary.total) * 100)}%
              </span>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-widest text-[var(--color-slate)]">Run duration</span>
              <span className="text-lg">{formatDuration(summary.duration)}</span>
            </div>
          </div>

          {trend && (
            <div className="h-36 mb-6">
              <p className="font-[var(--font-mono)] text-xs tracking-widest uppercase text-[var(--color-slate)] mb-2">
                Passed tests trend
              </p>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trend}>
                  <XAxis dataKey="date" hide />
                  <YAxis hide domain={['auto', 'auto']} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="passed"
                    stroke="var(--color-signal-pass)"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}

          <p className="text-xs text-[var(--color-slate)] font-[var(--font-mono)] mb-5">
            A smoke suite, not exhaustive: title/H1, hero links, contact links,
            profile photo, and six detail dialogs.
          </p>
          <TestApproach />
          <div className="mt-5">
            <ReportLink />
          </div>
        </>
      )}
    </div>
  )
}