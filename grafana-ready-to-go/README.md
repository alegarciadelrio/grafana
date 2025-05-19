# Grafana Ready-to-Go

A ready-to-use monitoring stack with Grafana, Prometheus, and Node Exporter running in Docker containers.

## Overview

This directory contains a pre-configured Docker Compose setup that deploys a complete monitoring solution with:

- **Grafana**: Visualization and dashboarding platform (port 3000)
- **Prometheus**: Metrics collection and storage (port 9090)
- **Node Exporter**: System metrics collection agent (port 9100)

The setup includes persistent volumes for both Grafana and Prometheus to ensure your data and configurations are preserved between restarts.

## Prerequisites

- Docker and Docker Compose installed on your system
- Basic understanding of monitoring concepts
- (Optional) Grafana Cloud account for remote storage

## Quick Start

1. Clone this repository or download the files
2. Navigate to the `grafana-ready-to-go` directory
3. (Optional) Update the `prometheus.yml` file with your Grafana Cloud credentials if you want to use remote storage
4. Start the stack:

```bash
docker compose down
docker compose up -d
```

5. Access the services:
   - Grafana: http://localhost:3000 (default credentials: admin/admin)
   - Prometheus: http://localhost:9090

## Configuration

### Prometheus Configuration

The `prometheus.yml` file contains the basic configuration for Prometheus:

- Global scrape interval: 1 minute
- Scrape configurations for:
  - Prometheus itself (localhost:9090)
  - Node Exporter (node-exporter:9100)
- Remote write configuration (optional, for Grafana Cloud integration)

To use Grafana Cloud for long-term storage, update the following placeholders in `prometheus.yml`:

```yaml
remote_write:
  - url: '<Your Prometheus remote_write endpoint>'
    basic_auth:
      username: '<Your Grafana Username>'
      password: '<Your Grafana Cloud Access Policy Token>'
```

### Docker Compose Configuration

The `docker-compose.yml` file defines the three services:

1. **node-exporter**: Collects system metrics from the host
2. **prometheus**: Scrapes and stores metrics
3. **grafana**: Visualizes the collected metrics

Persistent volumes are configured for both Prometheus and Grafana to preserve data.

## Usage

### Setting Up Dashboards

After starting the stack, you can:

1. Log in to Grafana at http://localhost:3000
2. Add Prometheus as a data source:
   - URL: http://prometheus:9090
   - Access: Server (default)
3. Import dashboards for Node Exporter (Dashboard ID: 1860)

### Monitoring Additional Services

To monitor additional services:

1. Add new scrape configurations to `prometheus.yml`
2. Restart Prometheus:
   ```bash
   docker compose restart prometheus
   ```

## Troubleshooting

- If services fail to start, check Docker logs:
  ```bash
  docker compose logs
  ```
- Ensure all required ports (3000, 9090, 9100) are available on your system
- Verify that Docker has sufficient resources allocated

## Extending the Stack

This basic stack can be extended with additional exporters for specific services:

- MySQL Exporter for MySQL/MariaDB databases
- Blackbox Exporter for endpoint monitoring
- cAdvisor for container monitoring

Add these services to the `docker-compose.yml` file and update the Prometheus configuration accordingly.

## License

This project is open source and available under the [MIT License](LICENSE).