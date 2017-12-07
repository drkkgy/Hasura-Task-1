var express = require('express');
//var mongoose = require('mongoose');
var bodyParser = require('body-parser');
// for image upload options of api
//var multer = require('multer');
//var upload = multer({dest:'uploads/'})// Chanege this according to the loacation of the saving directorey on your pc

// Mongo DB
//mongoose.connect('mongodb://drkkgy:drkkgy1996@ds133465.mlab.com:33465/freshness_analysis');
//mongoose.Promise = global.Promise;

// Database Connection indicator 

//var db = mongoose.connection
//db.on('error',console.error.bind(console,'connection error:'));
//db.once('open',function callback(){
//	console.log('Connected to mongo databse(mLab)');
//});




    

// Express
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// accesing the imgage folder
app.use(express.static('uploads'));

// Routes
app.use('/api',require('./routes/api'));

// starting server 
app.listen(3008);// change the port only if necessary
console.log('API Started on port 3008');//change accordingly 