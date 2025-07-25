# k6 + Simple HTTP Server Container

This repository contains a Docker container that runs a simple HTTP server on port 8080.

## Building the Container

```bash
docker build -t simple-http-server .
```

## Running the Container

```bash
docker run -d -p 8080:8080 simple-http-server
```

## Testing

You can test this server using k6 by running your k6 tests against `http://localhost:8080`. The server will serve any files placed in the container's working directory.


## k6

### Basic Load Test
```bash
k6 run load.js
```

### Stress Test
```bash
k6 run stress.js
```

### Spike Test
```bash
k6 run spike.js
```

The spike test file (`spike.js`) includes:
- Multiple load spikes of increasing intensity
- Baseline period before and after each spike
- Three different spike levels (500, 1000, 2000 VUs)
- Different endpoints and request types
- Relaxed thresholds during spike periods
- Recovery monitoring after spikes