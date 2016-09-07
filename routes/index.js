var express = require('express');
var app = express();
var multer = require('multer');

const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'MjIxODI1MDg0MzQ2NzI4NDQ4.CrEaig._MM4BcopK92bQpbr_U2py2e7COw';

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '.jpg'); //Appending .jpg
  }
});

var upload = multer({ storage: storage });
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

app.post('/upload', multer({
    dest: 'public/uploads/'
    
    }).single('upl'), function(req,res){
	console.log(req.body); //form fields
	/* example output:
	{ title: 'abc' }
	 */
	console.log(req.file); //form files
	/* example output:
            { fieldname: 'upl',
              originalname: 'grumpy.png',
              encoding: '7bit',
              mimetype: 'image/png',
              destination: './uploads/',
              filename: '436ec561793aa4dc475a88e84776b1b9',
              path: 'uploads/436ec561793aa4dc475a88e84776b1b9',
              size: 277056 }
	 */
	res.status(204).end();
});

app.get('/img', function(req, res) {
  res.render('img');
});

app.get('/comb', function(req, res) {
  res.render('combinatoria');
});

bot.on('ready', () => {
  console.log('I am ready!');
});

bot.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
});

bot.login(token);

module.exports = app;
