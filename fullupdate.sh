#!/bin/bash
BASE_DIR='/var/www/tift'
cd $BASE_DIR
#git pull origin server
npm run build
rm -rf dist/
cp -r build/ dist/
systemctl reload nginx

