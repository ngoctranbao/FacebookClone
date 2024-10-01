import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      Post.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
      Post.belongsTo(models.Group);
      Post.hasMany(models.Comment);
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
        groupId: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
    },
    {
      sequelize,
      modelName: 'Post',
      paranoid: false,
      timestamps: true,
    }
  );
  return Post;
};