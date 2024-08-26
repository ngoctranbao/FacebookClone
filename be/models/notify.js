const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Notify extends Model {
    static associate(models) {
      Notify.belongsTo(models.User)
    }
  }
  Notify.init(
    {
        post_id: {
            type: DataTypes.INTERGER,
            allowNull: false
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
      sequelize,
      modelName: "Notify",
      paranoid: false,
      timestamps: true,
    }
  );
  return Notify;
};

module.exports = { Notify }