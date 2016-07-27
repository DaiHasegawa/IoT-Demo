# IoT Demonstration

## Preparation
* Raspberry Pi 3
* node v6.2.2
* npm 3.9.5
* DHT11 sensor
* BCM2835

## Database (MySQL 5.5)
user
```
root:pass
```

db & table name
```
db: sonsors
table: temperatures
```

schema
```
create tables temperatures ( id int auto_increment primary key, temperature float default 0 not null, humidity float default 0 not null, date timestamp default current_timestamp not null ) default charset = utf8;
```

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

## History Visualization
http://raspberrypi.local:3000/history



