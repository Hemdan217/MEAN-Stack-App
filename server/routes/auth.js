import express from "express";
import { login } from "../controllers/auth.js";

const router = express.Router();

router.post("/login", login);
// router.post("/login", register);
export default router;
