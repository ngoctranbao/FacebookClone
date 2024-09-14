import { createPostService, getPostService } from "../services/post.js";

export const handleGetPost = async (req, res) => {
  try {
    const data = await getPostService()
    return res.status(200).json({ data: data, message: "get post success" })
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const handleCreatePost = async (req, res) => {
    try {
        const data = req.body;
        const post = await createPostService(data);
        return res
            .status(200)
            .json({ message: "create post successfully", data: post})
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message })
    }
};