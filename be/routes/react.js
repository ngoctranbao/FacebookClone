import { Router } from "express";
import { handleCreateReact, handleDeleteReact, handleGetReact } from "../controllers/react.js";

export const router= Router();

router.post("/createReact", handleCreateReact)

router.get("/countReact", handleGetReact)

router.delete("/delete",handleDeleteReact )