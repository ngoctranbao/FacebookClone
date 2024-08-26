const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class React extends Model {
    static associate(models) {
        React.belongsTo(models.Post, {foreignKey: 'postId', as: 'post'}),
        React.belongsTo(models.Comment, { foreignKey: 'commentId', as: 'comment' });
    }
  }
  React.init(
    {
        ownerId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        typeOf: {
            type: DataTypes.STRING(4),
            allowNull: false
        },
        postId: {
            type: DataTypes.INTERGER,
            allowNull: true
        },
        commentId: {
            type: DataTypes.INTERGER,
            allowNull: true
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
};

module.exports = { React }