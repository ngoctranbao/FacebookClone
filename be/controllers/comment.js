import { createPostCommentService, getPostCommentService } from "../services/comment.js";

export const handleGetPostComment = async (req, res) => {
    try {
        const data = await getPostCommentService(req.query.id)
        return res.status(200).json({ data: data, message: "get comment success" })
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
      }
}

export const handleCreatePostComment = async (req, res) => {
    try {
        const data = req.body;
        const comment = await createPostCommentService(data);
        return res
            .status(200)
            .json({ message: "create message successfully", data: comment})
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message })
    }
};