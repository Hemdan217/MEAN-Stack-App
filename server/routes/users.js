import express from "express";
import { verifyToken } from "../middleware/auth.js";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controllers/user.js";

const userRoutes = express.Router();

// Read User , Friends

userRoutes.get("/:id", verifyToken, getUser);
userRoutes.get("/:id/friends", verifyToken, getUserFriends);

// /// Update The User Friends
userRoutes.patch("/:id/:friendId", verifyToken, addRemoveFriend);
export default userRoutes;
