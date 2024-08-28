import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
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
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        private: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        ownerId: {
            type: DataTypes.INTEGER,
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