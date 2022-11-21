#!/bin/bash
echo "Copying files"
rm -r /var/www/gpio.vue/api/__gpio__.py /var/www/gpio.vue/api/__pycache__
cp  __gpio__.py /var/www/gpio.vue/api
cp -a __pycache__ /var/www/gpio.vue/api
sudo systemctl restart gpio
sudo systemctl restart nginx
echo "Done"
