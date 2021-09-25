#!/bin/bash

cd /var/www/dev/landing
npm run build
pm2 --name LandingDev start npm -- start
# pm2 restart LandingDev