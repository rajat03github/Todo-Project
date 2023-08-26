import express from "express";
import connectDB from "./database.js";
import User from "./models/users.js";

//We can only access GET req from the browser

connectDB();
const app = express();

//using middleware to access req.body for json data
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Nice Working");
});

app.get("/users/all", async (req, res) => {
  const users = await User.find({});

  res.json({
    success: true,
    users: users, //an array that is fetched from database
  });
});

app.post("/users/new", async (req, res) => {
  const { email, password, name } = req.body; //for non - static data

  try {
    await User.create({
      name: name,
      email: email,
      password: password,
    });

    res.json({
      success: true,
      message: "Success",
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(4000, () => {
  console.log("Server is WOrking");
});
