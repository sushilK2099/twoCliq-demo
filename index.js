'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var app = express();
var cors=require('cors')

app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//setup public folder
app.use(express.static('./public'));

var env="dev";
var port="38080";

var routes = require('./app/routes');
routes(app);


//listening on port
app.listen(port, function() {
   console.log('user '+env+' api started on port: ' + port);
});