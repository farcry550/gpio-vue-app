#!/bin/bash
if ! [ "$(ls -A dist)" ] && [ "$1" = "--no-build" ]
then
	echo "Dist directory is empty!"
	exit 0
fi
if [ "$1" != "--no-build" ]
then
	echo "Starting build"
	npm run build
fi
echo "Copying Files"
sudo rm -r /var/www/gpio.vue/public_html/*
sudo cp -a dist/* /var/www/gpio.vue/public_html/
echo "Restarting Nginx"
sudo systemctl reload nginx
echo "Done"
