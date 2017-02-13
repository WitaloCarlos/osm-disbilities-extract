/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var WayNodes = sequelize.define('way_nodes', {
    way_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    node_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    sequence_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'way_nodes',
    timestamps: false,
     classMethods:{
                associate:function(models){
                  
                    WayNodes.belongsTo(models.ways, { foreignKey: 'way_id'} );
                    WayNodes.belongsTo(models.nodes, { foreignKey: 'node_id'} );
                    
                }
            }
  });
  return WayNodes;
};
