#!/bin/bash

service apache2 start
tail -f /var/log/apache2/error.log
chmod +x /repofill.sh
./repofill.sh