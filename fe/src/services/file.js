import axios from "../config/formdataAxios";

export const uploadFile = (formData) => {
  return axios.post("/api/file/upload", formData);
};