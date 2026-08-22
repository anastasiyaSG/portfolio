import http from 'k6/http'
import { check, sleep } from 'k6'

const TARGET_URL = __ENV.K6_TARGET_URL || 'https://test.k6.io'

// Sustained load over a longer window — this is the shape of test that
// catches slow degradation (like the Black Friday memory leak) that a
// short load test would never surface.
export const options = {
  stages: [
    { duration: '1m', target: 15 },
    { duration: '10m', target: 15 }, // hold — extend this in a real run (30m-2h+)
    { duration: '1m', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<800'],
    http_req_failed: ['rate<0.02'],
  },
}

export default function () {
  const res = http.get(TARGET_URL)
  check(res, { 'status is 200': (r) => r.status === 200 })
  sleep(1)
}
