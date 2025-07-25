import http from 'k6/http';
import { sleep } from 'k6';
import { check } from 'k6';

// Configuration
export const options = {
  stages: [
    // Ramp up quickly
    { duration: '10s', target: 100 },
    { duration: '30s', target: 500 },
    { duration: '1m', target: 500 },
    // Stress test
    { duration: '3m', target: 1000 },
    // Ramp down
    { duration: '30s', target: 0 }
  ],
  thresholds: {
    http_req_duration: ['p(95)<2000'],
    http_req_failed: ['rate<0.01'],
    http_reqs: ['count>10000'] // Expect at least 10000 requests
  }
};

// Define different endpoints and request types
const endpoints = [
  { path: '/', method: 'GET' },
  { path: '/large-file', method: 'GET' },
  { path: '/slow-response', method: 'GET' },
  { path: '/post-endpoint', method: 'POST' }
];

// Test function
export default function () {
  // Randomly select an endpoint
  const endpoint = endpoints[Math.floor(Math.random() * endpoints.length)];
  
  // Generate random data for POST requests
  const data = {
    id: Math.floor(Math.random() * 1000000),
    timestamp: new Date().toISOString(),
    payload: Array(100).fill('x').join('') // 100 bytes payload
  };
  
  // Make the request
  const params = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  
  const res = http.request(
    endpoint.method,
    `http://localhost:8080${endpoint.path}`,
    endpoint.method === 'POST' ? JSON.stringify(data) : null,
    params
  );
  
  // Check response
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time is reasonable': (r) => r.timings.duration < 2000,
    'response has content': (r) => r.body.length > 0
  });
  
  // Add some think time (random between 0.1s and 1s)
  sleep(Math.random() * 0.9 + 0.1);
}
