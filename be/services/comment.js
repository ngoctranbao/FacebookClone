import { where } from "sequelize"
import db from "../models/index.js"

export const getPostCommentService = async(data) => {
    try {
        var comments = await db.Comment.findAll({
            where: {
                postId: data
            },
            include: [{
                model: db.User, as: 'user',
                attributes: ['userName', 'avatar']
            }]
        })
        return comments
    } catch (error) {
        console.log(error)
        throw new Error(`get comment of post error ${error}`)
    }
}

export const createPostCommentService = async(data) => {
    try {
        var comment = await db.Comment.create({
            content: data.content,
            ownerId: data.ownerId,
            postId: data.postId
        })
        return comment
    } catch (error) {
        console.log(error)
        throw new Error("create comment of post error")
    }
}

// export const getReplyCommentServvice = async(data)