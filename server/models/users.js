/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'users',
    timestamps: false,
    classMethods:{
                associate:function(models){
                    User.hasMany(models.nodes, { foreignKey: 'user_id', constraints: false} );
                }
            }
  });

  return User;
};
