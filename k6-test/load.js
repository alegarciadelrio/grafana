import http from 'k6/http';
import { sleep } from 'k6';
import { check } from 'k6';

// Configuration
export const options = {
  stages: [
    { duration: '30s', target: 100 }, // Ramp up to 100 VUs
    { duration: '1m', target: 100 },   // Stay at 100 VUs for 1 minute
    { duration: '30s', target: 0 },    // Ramp down to 0 VUs
  ],
  thresholds: {
    http_req_duration: ['p(95)<2000'], // 95% of requests should be below 2000ms
    http_req_failed: ['rate<0.01'],    // Less than 1% of requests should fail
  },
};

// Test function
export default function () {
  const url = 'http://localhost:8080'; // Replace with your target URL
  
  // Example GET request
  const res = http.get(url);
  
  // Check response status
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time is less than 2s': (r) => r.timings.duration < 2000,
  });
  
  // Add some think time
  sleep(1);
}