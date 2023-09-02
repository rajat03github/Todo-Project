import express from "express";
import userRouter from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();

//We can only access GET req from the browser

export const app = express();

//using middleware to access req.body for json data
app.use(express.json()); //! use this before routes
app.use(cookieParser());
//for accessing UserRouters and wer can use prefix for routes
app.use("/api/users", userRouter);
app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("Nice Working");
});
