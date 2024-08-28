import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
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
          type: DataTypes.INTEGER,
          allowNull: false
        },
        groupId: {
          type: DataTypes.INTEGER,
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