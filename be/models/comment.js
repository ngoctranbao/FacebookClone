import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
        Comment.belongsTo(models.Post, { foreignKey: 'postId', as: 'post' });
        Comment.belongsTo(Comment, { foreignKey: 'parentId', as: 'parentComment' });
        Comment.hasMany(Comment, { foreignKey: 'parentId', as: 'replies' });
    }
  }
  Comment.init(
    {
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ownerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        parentId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
              model: 'Comment',
              key: 'id',
            },
          },
        postId: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'Post',
            key: 'id',
          },
        },
    },
    {
      sequelize,
      modelName: "Comment",
      paranoid: false,
      timestamps: true,
    }
  );
  return Comment;
};