import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class React extends Model {
    static associate(models) {
    }
  }
  React.init(
    {
        ownerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        typeOf: {
            type: DataTypes.STRING(4),
            allowNull: false
        },
        parentId: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
    },
    {
      sequelize,
      modelName: "React",
      paranoid: false,
      timestamps: false,
    }
  );
  return React;
}