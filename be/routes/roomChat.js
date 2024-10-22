import { Router } from "express";
import {
  handleCreateRoomChat,
  handleGetRoomChatForMe,
} from "../controllers/roomchat.js";
export const router = Router();

router.post("/", handleCreateRoomChat);

router.get("/me", handleGetRoomChatForMe);