var express = require('express');
var temperature = require('./../models/temperature');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  console.log("GET /stored");
  
  /* database  */
  temperature.index().then(function(results){
    res.json( {data:results} );
  });

});

module.exports = router;
