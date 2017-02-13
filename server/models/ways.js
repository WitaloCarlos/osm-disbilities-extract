/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var Way =  sequelize.define('ways', {
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
      allowNull: false
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
    nodes: {
      type: DataTypes.ARRAY(DataTypes.BIGINT),
      allowNull: true
    }
  }, {
    tableName: 'ways',
    timestamps: false,
    classMethods:{
                associate:function(models){
                    Way.hasMany(models.way_nodes, { foreignKey:'way_id', constraints: false});
                }
            }
  });

  return Way;
};
