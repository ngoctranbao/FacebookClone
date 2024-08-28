import axios from "../config/axios";

export const loginService = (data) => {
  return axios.post("/api/auth/login", data);
};

export const loginMe = () => {
  return axios.get("/api/auth/me");
};

export const logoutService = () => {
  return axios.get("/api/auth/logout");
};

export const signupService = (data) => {
  return axios.post("/api/auth/signup", data);
};