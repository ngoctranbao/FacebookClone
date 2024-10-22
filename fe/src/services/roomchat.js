import axios from "../config/axios";

export const getRoomChatForMeService = () => {
  return axios.get("/api/roomChat/me");
};

export const createRoomChat = (data) => {
  return axios.post("/api/roomChat/")
}

export const sendMessageToRoomService = (data) => {
  return axios.post("/api/message/", data);
};

export const getMessagesOfRoomChatService = (roomChatId) => {
  return axios.get(`/api/message?roomChatId=${roomChatId}`);
};