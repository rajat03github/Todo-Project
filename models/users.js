import mongoose from "mongoose";

const Schmea = new mongoose.Schema({
  name: String,
  emai: String,
  password: String,
});

const User = mongoose.model("User", Schmea);

export default User;
