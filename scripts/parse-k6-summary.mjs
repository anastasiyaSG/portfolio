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

function extractMetrics(summary) {
  const m = summary.metrics || {}
  const duration = m.http_req_duration?.values || {}
  const failed = m.http_req_failed?.values || {}
  const reqs = m.http_reqs?.values || {}

  const thresholdsPassed = Object.values(m).every(
    (metric) =>
      !metric.thresholds ||
      Object.values(metric.thresholds).every((t) => t.ok !== false)
  )

  return {
    p50: Math.round(duration['med'] ?? duration['p(50)'] ?? 0),
    p90: Math.round(duration['p(90)'] ?? 0),
    p95: Math.round(duration['p(95)'] ?? 0),
    errorRate: Number(((failed.rate ?? 0) * 100).toFixed(2)),
    rps: Number((reqs.rate ?? 0).toFixed(1)),
    thresholdsPassed,
  }
}

const tests = {}
for (const [key, file] of Object.entries(SUMMARY_FILES)) {
  if (fs.existsSync(file)) {
    tests[key] = extractMetrics(JSON.parse(fs.readFileSync(file, 'utf-8')))
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

history.push({ timestamp: new Date().toISOString(), tests })
history = history.slice(-MAX_RUNS)

fs.mkdirSync('public/data', { recursive: true })
fs.writeFileSync(HISTORY_PATH, JSON.stringify(history, null, 2))

console.log(
  `Recorded run with ${Object.keys(tests).length} test result(s). History now has ${history.length} entries.`
)
