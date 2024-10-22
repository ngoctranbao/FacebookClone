import axios from "../config/formdataAxios";

export const uploadImageFile = (data) => {
  
  const formData = new FormData();
  formData.append('image', data);

  return axios.post("/api/file/upload", formData);
};