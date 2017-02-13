/* jshint indent: 2 */
var WayNodes = require('./way_nodes'); 

module.exports = function(sequelize, DataTypes) {
  var Node = sequelize.define('nodes', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    version: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tstamp: {
      type: DataTypes.TIME,
      allowNull: false
    },
    changeset_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    tags: {
      type: DataTypes.HSTORE,
      allowNull: true
    },
    geom: {
      type: DataTypes.GEOMETRY,
      allowNull: true
    }
  }, {
    tableName: 'nodes',
    timestamps: false,
    classMethods:{
                associate:function(models){
                  
                    Node.belongsTo(models.users, { foreignKey: 'user_id',  constraints: false} );
                    Node.hasMany(models.way_nodes, { foreignKey: 'node_id', constraints: false});
                }
            }
  });


  return Node;
};
