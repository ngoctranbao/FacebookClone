const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      Post.belongsTo(models.User);
      Post.belongsTo(models.Group);
      Post.hasMany(models.Comment);
      Post.hasMany(models.React);
    }
  }
  Post.init(
    {
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fileUrl: {
            type: DataTypes.STRING,
            allowNull: true
        },
        reactNumber: {
          type: DataTypes.INTERGER,
          allowNull: false
        },
        groupId: {
          type: DataTypes.INTERGER,
          allowNull: true
        },
    },
    {
      sequelize,
      modelName: "Post",
      paranoid: false,
      timestamps: true,
    }
  );
  return Post;
};

module.exports = { Post }