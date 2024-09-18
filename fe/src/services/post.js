import axios from "../config/axios"

export const createPostService = (data) => {
    return axios.post("/api/post/createPost", data)
}

export const getPostService = () => {
    return axios.get("/api/post/getPost")
}