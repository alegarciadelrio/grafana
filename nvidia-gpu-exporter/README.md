# 🎮 Nvidia GPU Exporter Setup Script

🔭 A script for setting up and configuring Nvidia GPU Exporter for Grafana monitoring infrastructure.

<p>
  <img alt="PowerShell" src="https://img.shields.io/badge/PowerShell-black?style=flat-square&logoColor=white" />
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

This script helps you set up and configure Nvidia GPU Exporter, which is an essential component for collecting metrics from Nvidia GPUs for Grafana monitoring. This exporter collects metrics from Nvidia GPUs that can be visualized in Grafana dashboards.

## 📜 Script Details

The `nvidia-gpu-exporter.ps1` script performs the following actions:

1. Installs Scoop package manager (if not already installed)
2. Uses Scoop to install Git and NSSM (Non-Sucking Service Manager)
3. Adds the nvidia_gpu_exporter bucket to Scoop
4. Installs the Nvidia GPU Exporter
5. Creates a Windows Firewall rule to allow inbound traffic on port 9835
6. Configures the exporter as a Windows service using NSSM
7. Starts the service

## 🚀 Usage

The script needs to be run in two parts:

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

After installation, make sure to add the Nvidia GPU Exporter endpoint to your Prometheus configuration to start collecting metrics (typically on port 9835).

## ⚙️ Requirements

- Windows operating system
- PowerShell
- Administrator access (for part of the installation)
- Nvidia GPU with compatible drivers installed
- Internet connection to download required components

## 👥 Contributing

Contributions to improve the script are welcome. Please feel free to submit a pull request or open an issue if you have any suggestions or find any bugs.
