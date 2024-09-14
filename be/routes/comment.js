import { Router } from "express";
import { handleGetPostComment, handleCreatePostComment } from "../controllers/comment.js";
export const router = Router();

router.get("/getPostComment", handleGetPostComment)

router.post("/createPostcomment", handleCreatePostComment);