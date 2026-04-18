import express from "express";
import {registerUser,loginUser,getUsers} from "../Controllers/user.controller.js";
import { validate } from "../middleware/validate.middleware.js";
import { registerSchema } from "../Validators/user.validator.js";
import {authMiddleware} from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register",validate(registerSchema), registerUser);
router.post("/login", loginUser);

// 🔒 Protected route
router.get("/users", getUsers);

export default router;