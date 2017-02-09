/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('schema_info', {
    version: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'schema_info'
  });
};
