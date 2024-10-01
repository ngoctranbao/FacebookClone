import { Router } from "express";
import { router as auth } from "./auth.js";
import { router as post } from "./post.js";
import { router as comment} from "./comment.js";
import { router as file } from "./file.js";
import { authenticateToken } from "../middlewares/authenticate.js";
import { router as friend} from "./friends.js";
import { router as react } from "./react.js";
export const router = Router();

router.get('/homepage', (req, res) => {
    res.send('API is running...');
  });

router.use("/auth", auth);

router.use("/post", authenticateToken, post)

router.use("/comment", authenticateToken, comment)

router.use("/file", file)

router.use("/friends", authenticateToken, friend)

router.use("/react", authenticateToken, react)