import { Router } from "express";
import {
  handleRegisterUser,
  handleLoginUser,
  handleLoginByToken,
  handleLogoutUser,
} from "../controllers/auth.js";
import { authenticateToken } from "../middlewares/authenticate.js";

export const router = Router();

router.post(
  "/signup",
  handleRegisterUser
);

router.post(
  "/login",
  handleLoginUser
);

router.get("/me", 
  authenticateToken,
  handleLoginByToken);

router.get("/logout",
  authenticateToken,
  handleLogoutUser);