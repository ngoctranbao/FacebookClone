import db from "../models/index.js";

export const getPostService = async () => {
  try {
    var res = await db.Post.findAll({
        // attributes: ['content', 'updatedAt','userId', 'id'],
        include: [{
          model: db.User, as: "user",
          attributes: ['userName', 'avatar']
        }],
        order: [
          ['updatedAt', 'DESC']
        ]
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
            userId: data.userId,
            fileUrl: data?.fileUrl
        })
        return newPost;
    } catch (error) {
        throw new Error(`create a post error ${error}`)
    }
}