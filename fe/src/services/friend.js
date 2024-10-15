import axios from "../config/axios";


export const createFriendService = (data) => {
    return axios.post("/api/friends/createFriend", data)
}

export const updateFriendService = (data) => {
    return axios.patch("/api/friends/updateFriend", data)
}

export const deleteFriendService = (data) => {
    return axios.delete("/api/friends/delete", { data })
}

export const getFriendServiceService = (data) => {
    return axios.get("/api/friends/getFriend", data)
}

export const getSuggestFriend = (data) => {
    return axios.get(`/api/friends/getSuggestFriend?id=${data.id}`)
}