# IoT Demonstration

## Preparation
* Raspberry Pi 3
* node v6.2.2
* npm 3.9.5
* DHT11 sensor
* BCM2835

## Installation
```sh
npm install
```

## Starting Server
```sh
//start foreground
sudo npm start
// stop
`Ctrl + c`
//start background
sudo forever start bin/www
//stop
sudo forever list
sudo forever stop `uid (eg. oL-2)`
```

## Realtime Visualization
http://raspberrypi.local:3000/

## TODO: Data Analisys


