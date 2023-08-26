import User from "../models/users.js";

const createNewUser = async (req, res) => {
  const { email, password, name } = req.body; //for non - static data

  try {
    await User.create({
      name: name,
      email: email,
      password: password,
    });

    res.status(201).cookie("temp", "value").json({
      success: true,
      message: "Success",
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllUsers = async (req, res) => {
  const users = await User.find({});

  const { keyword } = req.query; //Query
  console.log(keyword);

  res.json({
    success: true,
    users: users, //an array that is fetched from database
  });
};

const special = async (req, res) => {
  try {
    res.json({
      message: "Just Jocking",
    });
  } catch (error) {
    console.log(error);
  }
};

export { createNewUser, getAllUsers, special };
