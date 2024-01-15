import express from "express";
import { login, logout, signup } from "../controllers/AdminAuth";
import { handleRefreshToken } from "../controllers/AdminRefreshToken";

const router = express.Router();

router.post("/admin/login", login);
router.post("/admin/signup", signup);
router.get("/admin/logout", logout);
router.get("/admin/refresh", handleRefreshToken);

export default router;
