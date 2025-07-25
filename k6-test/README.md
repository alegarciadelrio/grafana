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

The stress test file (`stress.js`) includes:
- Higher virtual users (up to 1000)
- Different request types (GET/POST)
- Various endpoints
- Randomized data generation
- Longer test duration
- More aggressive ramp-up