import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Post);
      User.hasMany(models.Notify);
      User.belongsToMany(models.Group, { through: 'GroupMembers', foreignKey: 'userId' });
      User.hasMany(models.Group);
      User.belongsToMany(User, {
        through: 'Relationship',
        foreignKey: 'userId',
        otherKey: 'friendId',
      });
      User.belongsToMany(RoomChat, { through: 'UserRoomChats', foreignKey: 'userId' });
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
        // get() {
        //   return this.getDataValue("password");
        // },
        // set(value) {
        //   this.setDataValue("password", hashUserPassword(value));
        // },
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
        allowNull: false
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