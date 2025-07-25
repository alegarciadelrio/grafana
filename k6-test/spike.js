import http from 'k6/http';
import { sleep } from 'k6';
import { check } from 'k6';

// Configuration
export const options = {
  stages: [
    // Initial baseline
    { duration: '1m', target: 100 },
    
    // First spike
    { duration: '10s', target: 500 },
    { duration: '30s', target: 500 },
    { duration: '10s', target: 100 },
    
    // Second larger spike
    { duration: '10s', target: 1000 },
    { duration: '30s', target: 1000 },
    { duration: '10s', target: 100 },
    
    // Third extreme spike
    { duration: '10s', target: 2000 },
    { duration: '30s', target: 2000 },
    { duration: '10s', target: 100 },
    
    // Recovery period
    { duration: '1m', target: 100 }
  ],
  thresholds: {
    http_req_duration: ['p(95)<3000'], // Increased threshold for spikes
    http_req_failed: ['rate<0.05'],    // Higher error rate threshold
    http_reqs: ['count>15000']         // Higher request count
  }
};

// Define different endpoints and request types
const endpoints = [
  { path: '/', method: 'GET' },
  { path: '/api/data', method: 'GET' },
  { path: '/api/endpoint', method: 'POST' }
];

// Test function
export default function () {
  // Randomly select an endpoint
  const endpoint = endpoints[Math.floor(Math.random() * endpoints.length)];
  
  // Generate random data for POST requests
  const data = {
    id: Math.floor(Math.random() * 1000000),
    timestamp: new Date().toISOString(),
    payload: Array(50).fill('x').join('') // 50 bytes payload
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
    'response time is reasonable': (r) => r.timings.duration < 3000,
    'response has content': (r) => r.body.length > 0
  });
  
  // Think time only during baseline periods
  if (options.vus <= 100) {
    sleep(0.5);
  }
}
