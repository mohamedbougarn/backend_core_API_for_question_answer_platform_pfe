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
    res.header("Access-Control-Allow-Origin", "*");//
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next();
  });
  app.use(bodyParser.urlencoded({ extended: false }));
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));


  // Function to serve all static files
// inside public directory.
app.use(express.static('public')); 
app.use('/public/images', express.static('public/images'));

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })


  db.Sequelize;

  /*############# test upload image ###############*/ 

const multer = require("multer");
const context = require('./routes/context');
const PATH = 'public/images';
//const PATH = 'upload_img';




const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, PATH);
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`)// + '-' + Date.now() //${Date.now()}_
  } 
});
var upload = multer({
  storage: storage
});
// const fileAdd = require('./controllers/context_convertation.js')
// POST File
app.post('/api/upload', upload.single('image'),(req, res)=> {  ///api/upload
  console.log('api runing succ')
  if (!req.file) {
    console.log("no File is available !");
    return res.send({
      success: false
    });
  } else {
    console.log('File is available !');
    //res.json(req.file)

    console.log(req.file['path']);
    let path = req.file['path'];
    //let contextId = req.params.id_context;
    //file = fileAdd.Context_conversationUpload(contextId,path);


     return res.json(req.file)

    
  }
});



/**########## end test upload ############ */



  require('./routes/Routes.js')(app);


var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
  logger.info('Express server listening on port '+ port);
  //console.log('dirname' ,__dirname)
});








app.get ('/',  function (req, res){
    res.Send("helloooooo !!");
})

module.exports = app;