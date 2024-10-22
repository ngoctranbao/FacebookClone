import axios from "../config/axios"

export const createCommentService = (data) => {
    return axios.post("/api/comment/createPostcomment", data)
}

export const getPostCommentService = (data) => {
    return axios.get(`/api/comment/getPostComment?id=${data}`)
}