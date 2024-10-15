import { Router } from "express";
import { handdleGetSuggestFriend, handleCreateFriend, handleDeleteFriend, handleGetRelationship, handleUpdateFriend } from "../controllers/friends.js";

export const router = Router();

router.post("/createFriend", handleCreateFriend)

router.patch("/updateFriend", handleUpdateFriend)

router.delete("/delete", handleDeleteFriend)

router.get("/getFriend", handleGetRelationship)

router.get("/getSuggestFriend", handdleGetSuggestFriend)