import { Router } from "express";
import { authenticateToken } from "../middlewares/authenticate.js";
import { handleCreatePost, handleGetPost } from "../controllers/post.js";
export const router = Router();

router.get("/getPost", handleGetPost)

router.post("/createPost", handleCreatePost);