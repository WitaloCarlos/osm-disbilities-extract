/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('relation_members', {
    relation_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    member_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    member_type: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    member_role: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sequence_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'relation_members'
  });
};
