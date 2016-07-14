var express = require('express');
var app = express();

/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index');
});
app.get('/ROT-N.html', function(req, res) {
  res.render('ROT');
});

module.exports = app;
