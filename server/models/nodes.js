/* jshint indent: 2 */


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
                }
            }
  });

  Node.findAllKeyValue = function(key, value){
        Nodec
    }

  return Node;
};
