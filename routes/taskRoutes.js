import express from "express";
import { newTask } from "../controllers/taskController.js";
import { isAuthenticated } from "../middlewares/Auth.js";

const router = express.Router();

router.post("/new", isAuthenticated, newTask);

export default router;
