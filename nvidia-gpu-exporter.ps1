# Script to install nvidia_gpu_exporter on Windows.
# https://grafana.com/grafana/dashboards/14574-nvidia-gpu-metrics/

# Open a PowerShell prompt (as a regular user) and run
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
Invoke-Expression (New-Object System.Net.WebClient).DownloadString('https://get.scoop.sh')

# Open a privileged PowerShell prompt (right click - Run as administrator) and run
scoop install git
scoop install nssm --global
scoop bucket add nvidia_gpu_exporter https://github.com/utkuozdemir/scoop_nvidia_gpu_exporter.git
scoop install nvidia_gpu_exporter/nvidia_gpu_exporter --global
New-NetFirewallRule -DisplayName "Nvidia GPU Exporter" -Direction Inbound -Action Allow -Protocol TCP -LocalPort 9835
nssm install nvidia_gpu_exporter "C:\ProgramData\scoop\apps\nvidia_gpu_exporter\current\nvidia_gpu_exporter.exe"
Start-Service nvidia_gpu_exporter