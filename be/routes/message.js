import { Router } from "express";
import {
  handleCreateMessage,
  handleGetMessageByRoomId,
} from "../controllers/messages.js";

export const router = Router();

router.post(
  "/",handleCreateMessage
);

router.get("/", handleGetMessageByRoomId);