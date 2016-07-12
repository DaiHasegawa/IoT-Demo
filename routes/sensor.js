var express = require('express');
var router = express.Router();
var sensorLib = require('node-dht-sensor');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var sensor = {
    initialize: function () {
      return sensorLib.initialize(11, 4);
    },
    read: function () {
      var readout = sensorLib.read();
      return {
        temperature: readout.temperature.toFixed(2),
        humidity: readout.humidity.toFixed(2)
      }
    }
  };

  if (sensor.initialize()) {
    res.json(sensor.read());
  } else {
    console.warn('Failed to initialize sensor');
  }
});

module.exports = router;
