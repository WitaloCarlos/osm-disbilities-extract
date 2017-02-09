/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ways', {
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
      type: "HSTORE",
      allowNull: true
    },
    nodes: {
      type: "ARRAY",
      allowNull: true
    }
  }, {
    tableName: 'ways'
  });
};
