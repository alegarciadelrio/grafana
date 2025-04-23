# 📊 Rsyslog MongoDB Integration

🔭 A script for setting up and configuring rsyslog with MongoDB integration for Grafana monitoring infrastructure.

<p>
  <img alt="Bash" src="https://img.shields.io/badge/-Bash-grey?style=flat-square&logo=gnubash&logoColor=white" />
  <img alt="MongoDB" src="https://img.shields.io/badge/-MongoDB-13aa52?style=flat-square&logo=mongodb&logoColor=white" />
  <img alt="Grafana" src="https://img.shields.io/badge/Grafana-%23F46800?style=flat-square&logo=grafana&logoColor=white" />
</p>

## 📑 Table of Contents

- [Overview](#overview)
- [Script Details](#script-details)
- [Usage](#usage)
- [Requirements](#requirements)
- [Contributing](#contributing)

## 🔍 Overview

This script helps you set up and configure rsyslog with MongoDB integration, allowing you to collect and store system logs in a MongoDB database for monitoring and analysis in Grafana.

## 📜 Script Details

The `rsyslog-mongo.sh` script performs the following actions:

1. Removes any existing rsyslog installation
2. Installs rsyslog and the MongoDB module
3. Configures rsyslog to listen for UDP syslog messages on port 514
4. Sets up filtering based on a configurable string pattern
5. Configures storage of matching messages in a MongoDB collection
6. Configures saving of matching messages to a local log file
7. Restarts the rsyslog service

## 🚀 Usage

1. Edit the `rsyslog-mongo.sh` script to update the configuration variables with your MongoDB connection details:

```bash
# Define variables for MongoDB connection
MONGO_URI="mongodb://user:password@server:27017/database?authSource=userDatabase"
MONGO_COLLECTION="logsCollection"
SERVER_MATCH_STRING="serverMatchString"
LOG_FILE="/var/log/serverName.log"
```

2. Run the script as root:

```bash
sudo ./rsyslog-mongo.sh
```

3. To test if the setup is working correctly, you can send a test message to rsyslog:

```bash
logger -n localhost -P 514 -t test "Test message containing serverMatchString"
```

Replace `serverMatchString` with the value you set in the `SERVER_MATCH_STRING` variable.

## ⚙️ Requirements

- Linux operating system (Debian/Ubuntu)
- Root access
- Bash shell
- Network access to the MongoDB server
- MongoDB server (configured and running)

## 👥 Contributing

Contributions to improve the script are welcome. Please feel free to submit a pull request or open an issue if you have any suggestions or find any bugs.