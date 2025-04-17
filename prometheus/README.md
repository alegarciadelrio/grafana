# 🔄 Prometheus Setup Script

🔭 A script for setting up and configuring Prometheus for Grafana monitoring infrastructure.

<p>
  <img alt="Bash" src="https://img.shields.io/badge/-Bash-grey?style=flat-square&logo=gnubash&logoColor=white" />
  <img alt="Docker" src="https://img.shields.io/badge/-Docker-46a2f1?style=flat-square&logo=docker&logoColor=white" />
  <img alt="Grafana" src="https://img.shields.io/badge/Grafana-%23F46800?style=flat-square&logo=grafana&logoColor=white" />
</p>

## 📑 Table of Contents

- [Overview](#overview)
- [Script Details](#script-details)
- [Usage](#usage)
- [Requirements](#requirements)
- [Contributing](#contributing)

## 🔍 Overview

This script helps you set up and configure Prometheus, which is an essential component for collecting and storing metrics in Grafana. Prometheus is an open-source systems monitoring and alerting toolkit that collects and stores metrics as time series data.

## 📜 Script Details

The `prometheus.sh` script performs the following actions:

1. Downloads and unpacks the Prometheus binary
2. Creates necessary directories and moves files to appropriate locations
3. Creates a dedicated user for running Prometheus
4. Configures Prometheus as a systemd service
5. Starts and enables the Prometheus service

## 🚀 Usage

1. Edit the `prometheus.sh` script to change the version value in the "Download and unpack" section to your desired Prometheus version.
2. Run the script as root:

```bash
sudo ./prometheus.sh
```

This will install Prometheus as a service on your Linux system.

After installation, remember to add your targets to the Prometheus configuration file at `/etc/prometheus/prometheus.yml`:

```yaml
static_configs:
  - targets: ["localhost:9090","localhost:9216"]

- job_name: 'vms'
  static_configs:
    - targets:
      - servername:9100
      - servername:9100
```

## ⚙️ Requirements

- Linux operating system
- Root access
- Bash shell
- Internet connection to download Prometheus

## 👥 Contributing

Contributions to improve the script are welcome. Please feel free to submit a pull request or open an issue if you have any suggestions or find any bugs.
