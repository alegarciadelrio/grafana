#!/bin/bash
# Script to install rsyslog
# Useful to store syslog on a file and mongodb
# Run as root

# Define variables for MongoDB connection
MONGO_URI="mongodb://user:password@server:27017/database?authSource=userDatabase"
MONGO_COLLECTION="logsCollection"
SERVER_MATCH_STRING="serverMatchString"
LOG_FILE="/var/log/serverName.log"

apt purge rsyslog
apt remove rsyslog
apt install rsyslog rsyslog-mongodb

cat << EOF > /etc/rsyslog.d/10-forward.conf
# Load the imfile module to read logs from a file and ommongodb to put data into mongo
module(load="imudp")
module(load="ommongodb")

# Set input with an associated rule
input(type="imudp" port="514" ruleset="forward")

# Ruleset for forwarding incoming remote logs
ruleset(name="forward"){
    if \$msg contains '$SERVER_MATCH_STRING' then {
        action(type="ommongodb" uristr="$MONGO_URI" collection="$MONGO_COLLECTION")
        action(type="omfile" file="$LOG_FILE")
    }
}
EOF

systemctl stop rsyslog
systemctl enable rsyslog
systemctl start rsyslog