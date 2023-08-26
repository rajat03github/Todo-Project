import express from "express";
import connectDB from "./database.js";
import userRouter from "./routes/userRoutes.js";

//We can only access GET req from the browser

connectDB();
const app = express();

//using middleware to access req.body for json data
app.use(express.json());

//for accessing UserRouters and wer can use prefix for routes
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("Nice Working");
});

app.listen(4000, () => {
  console.log("Server is WOrking");
});
