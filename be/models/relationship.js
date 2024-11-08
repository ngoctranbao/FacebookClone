import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Relationship extends Model {
    static associate(models) {
    }
  }

  Relationship.init(
    {
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'pending',
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      friendId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Relationship",
      paranoid: false,
      timestamps: true,
    }
  );

  return Relationship;
};
