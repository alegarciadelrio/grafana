# 📊 Grafana Toolbox

🔭 A collection of scripts for setting up and configuring Grafana monitoring infrastructure components.

<p>
  <img alt="PowerShell" src="https://img.shields.io/badge/PowerShell-black?style=flat-square&logoColor=white" />
  <img alt="Bash" src="https://img.shields.io/badge/-Bash-grey?style=flat-square&logo=gnubash&logoColor=white" />
  <img alt="Docker" src="https://img.shields.io/badge/-Docker-46a2f1?style=flat-square&logo=docker&logoColor=white" />
  <img alt="Grafana" src="https://img.shields.io/badge/Grafana-%23F46800?style=flat-square&logo=grafana&logoColor=white" />
</p>

## 📑 Table of Contents

- [Overview](#overview)
- [Scripts](#scripts)
  - [Prometheus](#prometheus)
  - [Node Exporter](#node-exporter)
  - [Nvidia GPU Exporter](#nvidia-gpu-exporter)
  - [Grafana Ready-to-Go](#grafana-ready-to-go)
- [Usage](#usage)
  - [Setting up Prometheus](#setting-up-prometheus)
  - [Installing Node Exporter](#installing-node-exporter)
  - [Installing Nvidia GPU Exporter](#installing-nvidia-gpu-exporter)
  - [Using Grafana Ready-to-Go](#using-grafana-ready-to-go)
- [Requirements](#requirements)
- [Contributing](#contributing)

## 🔍 Overview

This repository contains a set of scripts to help you set up and configure various components of a Grafana monitoring infrastructure. The scripts are designed to simplify the installation and configuration process of Prometheus, Node Exporter, and Nvidia GPU Exporter, which are essential components for collecting and visualizing metrics in Grafana.

Grafana is an open-source platform for monitoring and observability that allows you to query, visualize, and alert on metrics from various data sources. This toolbox helps you set up the necessary components to collect and store metrics that can be visualized in Grafana dashboards.

## 📜 Scripts

### 🔄 [Prometheus](./prometheus)

Script to install Prometheus as a service on Linux systems. Prometheus is an open-source systems monitoring and alerting toolkit that collects and stores metrics as time series data.

### 📊 [Node Exporter](./node-exporter)

Script to install Node Exporter on Linux hosts. Node Exporter is a Prometheus exporter that collects hardware and OS metrics from *NIX kernels.

### 🎮 [Nvidia GPU Exporter](./nvidia-gpu-exporter)

Script to install Nvidia GPU Exporter on Windows hosts. This exporter collects metrics from Nvidia GPUs for monitoring in Grafana.

### 🐳 [Grafana Ready-to-Go](./grafana-ready-to-go)

A pre-configured Docker Compose setup that deploys a complete monitoring solution with Grafana, Prometheus, and Node Exporter. This provides a quick way to get started with a full monitoring stack without manual installation of individual components.

## 🚀 Usage

### 🔧 Setting up Prometheus

1. Navigate to the prometheus directory:

```bash
cd prometheus
```

2. Edit the `prometheus.sh` script to change the version value in the "Download and unpack" section to your desired Prometheus version.
3. Run the script as root:

```bash
sudo ./prometheus.sh
```

This will install Prometheus as a service on your Linux system.

### 📈 Installing Node Exporter

1. Navigate to the node-exporter directory:

```bash
cd node-exporter
```

2. Edit the `node-exporter.sh` script to change the version value in the "Download and unpack" section to your desired Node Exporter version.
3. Run the script as root:

```bash
sudo ./node-exporter.sh
```

This will install Node Exporter as a service on your Linux system, which will collect system metrics that can be scraped by Prometheus.

### 🖥️ Installing Nvidia GPU Exporter

1. Navigate to the nvidia-gpu-exporter directory:

```bash
cd nvidia-gpu-exporter
```

2. Run the first part of the script as a regular user (without administrator privileges):

```powershell
# Run this part as a regular user
.\nvidia-gpu-exporter.ps1
```

3. Run the second part of the script as an administrator:

```powershell
# Run this part as administrator
# Open PowerShell as administrator and navigate to the script location
.\nvidia-gpu-exporter.ps1
```

This will install the Nvidia GPU Exporter on your Windows system, which will collect GPU metrics that can be scraped by Prometheus.

### 🚀 Using Grafana Ready-to-Go

1. Navigate to the grafana-ready-to-go directory:

```bash
cd grafana-ready-to-go
```

2. (Optional) Update the `prometheus.yml` file with your Grafana Cloud credentials if you want to use remote storage.

3. Start the stack:

```bash
docker compose up -d
```

4. Access the services:
   - Grafana: http://localhost:3000 (default credentials: admin/admin)
   - Prometheus: http://localhost:9090

This will start a complete monitoring stack with Grafana, Prometheus, and Node Exporter running in Docker containers.

## ⚙️ Requirements

- For Linux scripts (`prometheus.sh` and `node-exporter.sh`):
  - Linux operating system
  - Root access
  - Bash shell

- For Windows script (`nvidia-gpu-exporter.ps1`):
  - Windows operating system
  - PowerShell
  - Administrator access (for part of the installation)
  - Nvidia GPU with compatible drivers installed

- For Docker Compose setup (`grafana-ready-to-go`):
  - Docker and Docker Compose installed
  - Basic understanding of monitoring concepts

## 👥 Contributing

Contributions to improve the scripts or add new ones are welcome. Please feel free to submit a pull request or open an issue if you have any suggestions or find any bugs.
