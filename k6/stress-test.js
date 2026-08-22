import http from 'k6/http'
import { check, sleep } from 'k6'

const TARGET_URL = __ENV.K6_TARGET_URL || 'https://test.k6.io'

export const options = {
  stages: [
    { duration: '30s', target: 20 },  // expected load
    { duration: '30s', target: 50 },  // above expected
    { duration: '30s', target: 100 }, // well above expected — find the ceiling
    { duration: '30s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<1000'],
    http_req_failed: ['rate<0.05'],
  },
}

export default function () {
  const res = http.get(TARGET_URL)
  check(res, { 'status is 200': (r) => r.status === 200 })
  sleep(0.5)
}
