import User from "../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const getAllUsers = async (req, res) => {};

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    return res.status(404).json({
      success: false,
      message: "User already exists",
    });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  //send cookie here to access registered user directly login

  const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET);

  res
    .status(201)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 15, //15 minutes
    })
    .json({
      success: "true",
      message: "Registered Successfully",
    });
};

const loginUser = async (req, res, next) => {};

const getUserDetails = async (req, res) => {};

export { getAllUsers, registerUser, loginUser, getUserDetails };
