import express from "express";
import { login, logout, signup } from "../controllers/UserAuth";
import { handleRefreshToken } from "../controllers/UserRefreshToken";

const router = express.Router();

router.post("/user/login", login);
router.post("/user/signup", signup);
router.get("/user/logout", logout);
router.get("/user/refresh", handleRefreshToken);

export default router;
