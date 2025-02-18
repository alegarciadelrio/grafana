#!/bin/bash
# Script to install node exporter. Just update it with the latest version.
# Run as root

# Download and unpack
curl -LO https://github.com/prometheus/node_exporter/releases/download/v1.8.2/node_exporter-1.8.2.linux-amd64.tar.gz
tar -xvf node_exporter-1.8.2.linux-amd64.tar.gz	
mv node_exporter-1.8.2.linux-amd64/node_exporter /usr/local/bin
rm -r node_exporter-1.8.2.linux-amd64

# Add user
useradd -rs /bin/false node_exporter

# Configure service
cat << 'EOF' > /etc/systemd/system/node_exporter.service
[Unit]
Description=Node Exporter
After=network.target
 
[Service]
User=node_exporter
Group=node_exporter
Type=simple
ExecStart=/usr/local/bin/node_exporter
 
[Install]
WantedBy=multi-user.target
EOF

# Start exporter	
systemctl daemon-reload
systemctl start node_exporter
systemctl enable node_exporter
systemctl status node_exporter
