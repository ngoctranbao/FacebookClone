import { Model } from "sequelize";
import db from "../models/index.js";

export const getPostService = async () => {
  try {
    var res = await db.Post.findAll({
        attributes: ['content', 'reactNumber', 'updatedAt','userId', 'id'],
        include: [{
          model: db.User, as: "user",
          attributes: ['userName', 'avatar']
        }]
    });
    return res;
  } catch (error) {
    throw new Error(`Get Post Service error: ${error}`);
  }
};

export const createPostService = async (data) => {
    try {
        var newPost = await db.Post.create({
            content: data.content,
            reactNumber: 0,
            userId: data.userId
        })
        return newPost;
    } catch (error) {
        throw new Error(`create a post error ${error}`)
    }
}