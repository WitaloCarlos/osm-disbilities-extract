/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('way_nodes', {
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
    tableName: 'way_nodes'
  });
};
