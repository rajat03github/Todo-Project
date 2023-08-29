import express from "express";
import userRouter from "./routes/userRoutes.js";
import dotenv from "dotenv";
dotenv.config();

//We can only access GET req from the browser

export const app = express();

//using middleware to access req.body for json data
app.use(express.json()); //! use this before routes

//for accessing UserRouters and wer can use prefix for routes
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send("Nice Working");
});
