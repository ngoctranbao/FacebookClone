import {
    createRoomChatService,
    getRoomChatForMeService,
  } from "../services/roomchat.js";
  
  export const handleCreateRoomChat = async (req, res, next) => {
    try {
      const data = req.body;
      const roomChat = await createRoomChatService(data);
      return res
        .status(200)
        .json({ message: "Create room chat", data: roomChat });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: "Create room chat error" });
    }
  };
  
  export const handleGetRoomChatForMe = async (req, res, next) => {
    try {
      const userId = req.user.id;
      const roomChats = await getRoomChatForMeService(userId);
      return res
        .status(200)
        .json({ message: "Get room chat for me successfully", data: roomChats });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: "Get room chat for me error" });
    }
  };