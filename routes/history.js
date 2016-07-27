var express = require('express');
var history = express.Router();

/* GET home page. */
history.get('/', function(req, res, next) {
  res.render('history', { title: 'Express' });
});

module.exports = history;

