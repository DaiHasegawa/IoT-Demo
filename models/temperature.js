var sensorLib = require('node-dht-sensor');

var temperature  = {
    initialize: function () {
        return sensorLib.initialize(11, 4);
    },
    save: function () {
        var readout = sensorLib.read();
        console.log('Temperature: ' + readout.temperature.toFixed(2) + 'C, ' +
            'humidity: ' + readout.humidity.toFixed(2) + '%');
        setTimeout(function () {
            temperature.save();
        }, 2000);
    }
};

module.exports = temperature;
