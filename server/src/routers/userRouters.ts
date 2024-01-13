import express from "express";
import { login, logout, signup } from "../controllers/UserAuth";

const router = express.Router();

router.post("/user/login", login);
router.post("/user/signup", signup);
router.get("/user/logout", logout);

export default router;
