# 📊 Node Exporter Setup Script

🔭 A script for setting up and configuring Node Exporter for Grafana monitoring infrastructure.

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

This script helps you set up and configure Node Exporter, which is an essential component for collecting hardware and OS metrics from Linux systems for Grafana monitoring. Node Exporter is a Prometheus exporter that collects hardware and OS metrics from *NIX kernels.

## 📜 Script Details

The `node-exporter.sh` script performs the following actions:

1. Downloads and unpacks the Node Exporter binary
2. Moves the binary to the appropriate location
3. Creates a dedicated user for running Node Exporter
4. Configures Node Exporter as a systemd service
5. Starts and enables the Node Exporter service

## 🚀 Usage

1. Edit the `node-exporter.sh` script to change the version value in the "Download and unpack" section to your desired Node Exporter version.
2. Run the script as root:

```bash
sudo ./node-exporter.sh
```

This will install Node Exporter as a service on your Linux system, which will collect system metrics that can be scraped by Prometheus.

After installation, make sure to add the Node Exporter endpoint to your Prometheus configuration to start collecting metrics (typically on port 9100).

## ⚙️ Requirements

- Linux operating system
- Root access
- Bash shell
- Internet connection to download Node Exporter

## 👥 Contributing

Contributions to improve the script are welcome. Please feel free to submit a pull request or open an issue if you have any suggestions or find any bugs.
