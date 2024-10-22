import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Message extends Model {
    static associate(models) {
        Message.belongsTo(models.RoomChat, {foreignKey: 'roomChatId'});
    }
  }
  Message.init(
    {
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        senderId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        roomChatId: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
    },
    {
      sequelize,
      modelName: "Message",
      paranoid: false,
      timestamps: true,
    }
  );
  return Message;
};
