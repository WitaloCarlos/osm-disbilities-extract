// DATABASE
var Sequelize = require('sequelize');
var fs = require('fs');
var path = require('path');
var basename  = path.basename(module.filename);
var db = {};
var sequelize = new Sequelize('postgres://postgres:maps@127.0.0.1:5432/mapzen_london');

	//Load all the models
fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

//Export the db Object
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
