import { Model } from "sequelize";
import { hashUserPassword } from "../utils/hashPassword.js";
export default (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Post, {foreignKey: 'userId' });
      User.hasMany(models.Notify);
      User.belongsToMany(models.Group, { through: 'GroupMembers', foreignKey: 'userId' });
      User.hasMany(models.Group);
      User.belongsToMany(User, {
        through: 'Relationship',
        as: 'Friends',
        foreignKey: 'userId',
        otherKey: 'friendId',
      });
      User.belongsToMany(models.RoomChat, { through: 'UserRoomChats', foreignKey: 'userId' });
      User.hasMany(models.Comment, {foreignKey: "ownerId"})
    }
  }
  User.init(
    {
      userName: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { isEmail: true },
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      maritalStatus: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      birthday: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      avatar: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      sequelize,
      modelName: "User",
      paranoid: false,
      timestamps: true,
    }
  );
  return User;
};