import db from "../models/index.js";

export const getPostService = async () => {
  try {
    var res = await db.Post.findAll({
        attributes: ['content', 'reactNumber', 'createdAt','userId'],
    });
    return res;
  } catch (error) {
    throw new Error("Get Post Service error");
  }
};

export const createPostService = async (data) => {
    try {
      console.log(data)
        var newPost = await db.Post.create({
            content: data.content,
            reactNumber: 0,
            userId: data.userId
        })
        return newPost;
    } catch (error) {
        throw new Error("create a post error")
    }
}