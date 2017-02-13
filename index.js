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
app.use(function(req, res, next){
  console.log('Cors Policy');
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', 'X-Request-With, content-type');
  res.header('Access-Control-Allow-Methos', 'GET');
  
}
);

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
