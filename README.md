# Grafana Toolbox

🔭 A collection of scripts for setting up and configuring Grafana monitoring infrastructure components.

<p>
  <img alt="PowerShell" src="https://img.shields.io/badge/PowerShell-black?style=flat-square&logoColor=white" />
  <img alt="Bash" src="https://img.shields.io/badge/-Bash-grey?style=flat-square&logo=gnubash&logoColor=white" />
  <img alt="Docker" src="https://img.shields.io/badge/-Docker-46a2f1?style=flat-square&logo=docker&logoColor=white" />
  <img alt="Grafana" src="https://img.shields.io/badge/Grafana-%23F46800?style=flat-square&logo=grafana&logoColor=white" />
</p>

## Table of Contents

- [Overview](#overview)
- [Scripts](#scripts)
  - [prometheus.sh](#prometheussh)
  - [node-exporter.sh](#node-exportersh)
  - [nvidia-gpu-exporter.ps1](#nvidia-gpu-exporterps1)
- [Usage](#usage)
  - [Setting up Prometheus](#setting-up-prometheus)
  - [Installing Node Exporter](#installing-node-exporter)
  - [Installing Nvidia GPU Exporter](#installing-nvidia-gpu-exporter)
- [Requirements](#requirements)
- [Contributing](#contributing)

## Overview

This repository contains a set of scripts to help you set up and configure various components of a Grafana monitoring infrastructure. The scripts are designed to simplify the installation and configuration process of Prometheus, Node Exporter, and Nvidia GPU Exporter, which are essential components for collecting and visualizing metrics in Grafana.

Grafana is an open-source platform for monitoring and observability that allows you to query, visualize, and alert on metrics from various data sources. This toolbox helps you set up the necessary components to collect and store metrics that can be visualized in Grafana dashboards.

## Scripts

### prometheus.sh

Script to install Prometheus as a service on Linux systems. Prometheus is an open-source systems monitoring and alerting toolkit that collects and stores metrics as time series data.

### node-exporter.sh

Script to install Node Exporter on Linux hosts. Node Exporter is a Prometheus exporter that collects hardware and OS metrics from *NIX kernels.

### nvidia-gpu-exporter.ps1

Script to install Nvidia GPU Exporter on Windows hosts. This exporter collects metrics from Nvidia GPUs for monitoring in Grafana.

## Usage

### Setting up Prometheus

1. Edit the `prometheus.sh` script to change the version value in the "Download and unpack" section to your desired Prometheus version.
2. Run the script as root:

```bash
sudo ./prometheus.sh
```

This will install Prometheus as a service on your Linux system.

### Installing Node Exporter

1. Edit the `node-exporter.sh` script to change the version value in the "Download and unpack" section to your desired Node Exporter version.
2. Run the script as root:

```bash
sudo ./node-exporter.sh
```

This will install Node Exporter as a service on your Linux system, which will collect system metrics that can be scraped by Prometheus.

### Installing Nvidia GPU Exporter

1. Run the first part of the script as a regular user (without administrator privileges):

```powershell
# Run this part as a regular user
.\nvidia-gpu-exporter.ps1
```

2. Run the second part of the script as an administrator:

```powershell
# Run this part as administrator
# Open PowerShell as administrator and navigate to the script location
.\nvidia-gpu-exporter.ps1
```

This will install the Nvidia GPU Exporter on your Windows system, which will collect GPU metrics that can be scraped by Prometheus.

## Requirements

- For Linux scripts (`prometheus.sh` and `node-exporter.sh`):
  - Linux operating system
  - Root access
  - Bash shell

- For Windows script (`nvidia-gpu-exporter.ps1`):
  - Windows operating system
  - PowerShell
  - Administrator access (for part of the installation)
  - Nvidia GPU with compatible drivers installed

## Contributing

Contributions to improve the scripts or add new ones are welcome. Please feel free to submit a pull request or open an issue if you have any suggestions or find any bugs.
