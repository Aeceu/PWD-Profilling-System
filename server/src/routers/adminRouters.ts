import express from "express";
import { login, logout, signup } from "../controllers/AdminAuth";

const router = express.Router();

router.post("/admin/login", login);
router.post("/admin/signup", signup);
router.get("/admin/logout", logout);

export default router;
