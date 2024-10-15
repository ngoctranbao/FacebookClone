import axios from "../config/axios"

export const createReact = (data) => {
    return axios.post("/api/react/createReact", data)
}

export const deleteReact = (data) => {
    return axios.delete("/api/react/delete", { data })
}

export const getReact = (data) => {
    return axios.get(`/api/react/countReact?typeOf=${data.typeOf}&parentId=${data.parentId}`)
}