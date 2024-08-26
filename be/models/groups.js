const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    static associate(models) {
      Group.hasMany(models.Post);
      Group.belongsToMany(models.User, { through: 'GroupMembers', foreignKey: 'groupId' });
      Group.belongsTo(models.User, {foreignKey: 'ownerId'})
    }
  }
  Group.init(
    {
        groupName: {
            type: DataTypes.INTERGER,
            allowNull: false,
            unique: true
        },
        private: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: TRUE
        },
        ownerId: {
            type: DataTypes.INTERGER,
            allowNull: false
        }
    },
    {
      sequelize,
      modelName: "Group",
      paranoid: false,
      timestamps: true,
    }
  );
  return Group;
};

module.exports = { Group }