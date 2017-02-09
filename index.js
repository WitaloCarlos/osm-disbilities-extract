// server.js

// BASE SETUP

var express = require('express'); //call express
var models = require('./server/models/');
var routes = require('./server/routes/');

var app = express(); // app use express



var port = process.env.PORT || 9200;

// API ROUTES

var router = express.Router();
app.use('/api', routes(router));

// START THE SERVER

app.listen(port);
console.log('server start on port '+port);



models.sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });
