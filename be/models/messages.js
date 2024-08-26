const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate(models) {
        Message.belongsTo(models.RoomChat);
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

module.exports = { Message }