import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class RoomChat extends Model {
    static associate(models) {
      RoomChat.hasMany(models.Message, {as: "messages"});
      RoomChat.belongsToMany(models.User, { through: 'UserRoomChats', foreignKey: 'roomId' });
    }
  }
  RoomChat.init(
    {
        lastMessage: {
            type: DataTypes.INTEGER,
            allowNull: true,
            unique: false,
          },
    },
    {
      sequelize,
      modelName: "RoomChat",
      paranoid: false,
      timestamps: true,
    }
  );
  
  return RoomChat;
};