#!/bin/bash
# Script to install node exporter. Just update it with the latest version.
# Run as root

# Download and unpack
curl -LO https://github.com/prometheus/prometheus/releases/download/v3.2.0-rc.1/prometheus-3.2.0-rc.1.linux-amd64.tar.gz
tar -xvf prometheus-3.2.0-rc.1.linux-amd64.tar.gz
mkdir /etc/prometheus /var/lib/prometheus
mv prometheus-3.2.0-rc.1.linux-amd64/prometheus promtool /usr/local/bin
mv prometheus-3.2.0-rc.1.linux-amd64/prometheus.yml /etc/prometheus
rm -r prometheus-3.2.0-rc.1.linux-amd64

# Add user
useradd -rs /bin/false prometheus
chown -R prometheus:prometheus /etc/prometheus

# Configure service
cat << 'EOF' > /etc/systemd/system/prometheus.service
[Unit]
Description=Prometheus Service
After=network.target

[Service]
Type=simple
ExecStart=/usr/local/bin/prometheus \
    --config.file=/etc/prometheus/prometheus.yml \
    --storage.tsdb.path=/var/lib/prometheus

[Install]
WantedBy=multi-user.target
EOF

# Start exporter	
systemctl daemon-reload
systemctl start prometheus
systemctl enable prometheus
systemctl status prometheus