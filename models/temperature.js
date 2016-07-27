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
  create: function () {
    var readout = sensorLib.read();
    connection.query('INSERT INTO temperatures SET ?', { temperature: readout.temperature.toFixed(2), humidity: readout.humidity.toFixed(2) }, function(error, results, fields){ 
      if(!error){
        console.log('Temperature: ' + readout.temperature.toFixed(2) + 'C, ' + 'humidity: ' + readout.humidity.toFixed(2) + '%');
      }
      else{
        console.log('Error: failed to create temperature data into database');
      }
    });
    
    setTimeout(function () {
      temperature.create();
    }, 60000);
  },
  index: function () {

    console.log("#index");
	
    return new Promise(function (resolve, reject) {
      connection.query('select * from temperatures', function(error, results, fields){
        console.log("connecting to database");
        if(!error){
          resolve(results);
        }
        else{
          console.log("Error: faled to index temperature data from database");
          //reject(new Error()); 
        }
      }); 
    });
  }
};

module.exports = temperature;

