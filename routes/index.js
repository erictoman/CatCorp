var express = require('express');
var app = express();

/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index');
});
app.get('/ROT-N.html', function(req, res) {
  res.render('ROT');
});
app.get('/Wolfram_Alpha', function(req, res) {
  res.redirect('https://mega.nz/#!owF1wD6Y!4WDRPB7HEByRHjl9n46d45ehpMxf520htkncdgPwngs');
});

module.exports = app;
