import db from "../models/index.js";

export const getRoomChatService = async (id) => {
  const roomChat = await db.RoomChat.findOne({
    where: { id: id },
    include: [
      { model: db.Message, as: "messages" },
    ],
  });
  if (roomChat) {
    return roomChat;
  } else {
    throw new Error("Couldn't find room chat for " + id);
  }
};

export const createRoomChatService = async(data) => {
    try {
      const newRoomChat = await db.RoomChat.create({});
  
      const user1 = await db.User.findByPk(data.userId1);
      const user2 = await db.User.findByPk(data.userId2);
  
      if (!user1 || !user2) {
        throw new Error('One or both users not found');
      }
  
      await newRoomChat.addUsers([user1, user2]);
  
      console.log('Room chat created successfully with the users');
      return newRoomChat;
    } catch (error) {
      console.error('Error creating room chat with users:', error);
    }
  }
  
export const getRoomChatForMeService = async (userId) => {
  try {
    const roomChats = await db.RoomChat.findAll({
      include: [
        {
          model: db.User,
          where: { id: userId },
          through: { attributes: [] },
          required: true, 
          attributes: [],
        },
        {
          model: db.Message,
          as: "messages", 
        },
      ],
      order: [["createdAt", "DESC"]],
      subQuery: false,
    });
    return roomChats;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};