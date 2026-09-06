// Reads the k6 --summary-export JSON files produced by each test run,
// pulls out the numbers the dashboard cares about, and appends one entry
// to public/data/k6-history.json (capped to the last 30 runs).
import fs from 'fs'

const SUMMARY_FILES = {
  load: 'load-summary.json',
  stress: 'stress-summary.json',
  soak: 'soak-summary.json',
}

const HISTORY_PATH = 'public/data/k6-history.json'
const MAX_RUNS = 30
const HISTORY_START = Date.parse('2026-08-18T00:00:00Z')

function extractMetrics(summary) {
  const m = summary.metrics || {}
  // NOTE: k6's --summary-export format puts stats directly on the metric
  // object (e.g. m.http_req_duration['p(95)']) — there is no `.values`
  // wrapper. That wrapper only exists on the separate in-memory object
  // passed to a custom handleSummary() callback, not in this file.
  const duration = m.http_req_duration?.values || m.http_req_duration || {}
  const failed = m.http_req_failed?.values || m.http_req_failed || {}
  const reqs = m.http_reqs?.values || m.http_reqs || {}

  if (!Number.isFinite(reqs.count) || reqs.count <= 0) return null

  const thresholdsPassed = Object.values(m).every(
    (metric) =>
      !metric.thresholds ||
      Object.values(metric.thresholds).every(
        (t) => t === true || t?.ok !== false
      )
  )

  return {
    p50: Math.round(duration['med'] ?? duration['p(50)']),
    p90: Math.round(duration['p(90)']),
    p95: Math.round(duration['p(95)']),
    errorRate: Number(((failed.rate ?? 0) * 100).toFixed(2)),
    rps: Number(Number(reqs.rate ?? 0).toFixed(1)),
    thresholdsPassed,
  }
}

const tests = {}
for (const [key, file] of Object.entries(SUMMARY_FILES)) {
  if (fs.existsSync(file)) {
    const metrics = extractMetrics(JSON.parse(fs.readFileSync(file, 'utf-8')))
    if (metrics) tests[key] = metrics
    else console.warn(`Summary for "${key}" contains no requests — skipping`)
  } else {
    console.warn(`No summary file found for "${key}" (${file}) — skipping`)
  }
}

let history = []
if (fs.existsSync(HISTORY_PATH)) {
  try {
    history = JSON.parse(fs.readFileSync(HISTORY_PATH, 'utf-8'))
  } catch {
    history = []
  }
}

history = history.filter((entry) => {
  const timestamp = Date.parse(entry.timestamp)
  const hasMeasuredData = Object.values(entry.tests || {}).some((metrics) =>
    Number(metrics?.p95) > 0 || Number(metrics?.rps) > 0
  )
  return Number.isFinite(timestamp) && timestamp >= HISTORY_START && hasMeasuredData
})

if (Object.keys(tests).length > 0) {
  history.push({ timestamp: new Date().toISOString(), tests })
}
history = history.slice(-MAX_RUNS)

fs.mkdirSync('public/data', { recursive: true })
fs.writeFileSync(HISTORY_PATH, JSON.stringify(history, null, 2))

console.log(
  `Recorded run with ${Object.keys(tests).length} test result(s). History now has ${history.length} entries.`
)