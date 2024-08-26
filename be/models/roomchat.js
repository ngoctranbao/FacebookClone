const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RoomChat extends Model {
    static associate(models) {
      RoomChat.hasMany(models.Message);
      RoomChat.belongsToMany(models.User, { through: 'UserRoomChats', foreignKey: 'roomId' });
    }
  }
  RoomChat.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
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