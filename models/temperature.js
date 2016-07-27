var mysql = require('mysql');
var sensorLib = require('node-dht-sensor');

var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'pass',
  database : 'sensors',
  timezone : 'jst' 
});

var temperature  = {
  initialize: function () {
    return sensorLib.initialize(11, 4);
  },
  save: function () {
    var readout = sensorLib.read();
    connection.query('INSERT INTO temperatures SET ?', { temperature: readout.temperature.toFixed(2), humidity: readout.humidity.toFixed(2) }, function(error, results, fields){ });
       
    console.log('Temperature: ' + readout.temperature.toFixed(2) + 'C, ' + 'humidity: ' + readout.humidity.toFixed(2) + '%');
    
    setTimeout(function () {
      temperature.save();
    }, 2000);
  }
};

module.exports = temperature;

