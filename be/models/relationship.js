const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
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
    },
    {
      sequelize,
      modelName: "Relationship",
      paranoid: false,
      timestamps: true,
    }
  )
  return Relationship;
}

module.exports = { Relationship }