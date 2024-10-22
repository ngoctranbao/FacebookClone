import { Router } from "express";
import {
  getRoomChatController,
  handleCreateRoomChat,
  handleGetRoomChatForMe,
} from "../controllers/roomchat.js";
export const router = Router();

router.get("/info/:id", getRoomChatController);

router.post("/", handleCreateRoomChat);

router.get("/me", handleGetRoomChatForMe);