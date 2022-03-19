var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
const request = require('request');
const http = require('http');
//require('dotenv').load();
require('dotenv').config()

var app = express();
const router = express.Router();
const logger = require('./config/logger')
const db =require('./config/db.config');


const Cors = require("cors");
app.use(Cors());

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  app.use(bodyParser.urlencoded({ extended: false }));
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  db.Sequelize;

  require('./routes/Routes.js')(app);


var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
  logger.info('Express server listening on port ' + port);
});



app.get ('/',  function (req, res){
    res.Send("helloooooo !!");
})

module.exports = app;