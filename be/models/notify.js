import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Notify extends Model {
    static associate(models) {
      Notify.belongsTo(models.User, { foreignKey: { name: "userId" },
      })
    }
  }
  Notify.init(
    {
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
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