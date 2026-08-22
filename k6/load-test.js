import http from 'k6/http'
import { check, sleep } from 'k6'

// Swap this once you have a real target (your own demo API, staging env, etc.)
const TARGET_URL = __ENV.K6_TARGET_URL || 'https://test.k6.io'

export const options = {
  stages: [
    { duration: '30s', target: 20 }, // ramp up to expected steady traffic
    { duration: '1m', target: 20 },  // hold steady load
    { duration: '30s', target: 0 },  // ramp down
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% of requests under 500ms
    http_req_failed: ['rate<0.01'],   // less than 1% errors
  },
}

export default function () {
  const res = http.get(TARGET_URL)
  check(res, { 'status is 200': (r) => r.status === 200 })
  sleep(1)
}
