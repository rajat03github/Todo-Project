import express from "express";
import User from "../models/users.js";
import {
  createNewUser,
  getAllUsers,
  special,
} from "../controllers/userControllers.js";

const router = express.Router();

router.get("/all", getAllUsers);

router.post("/new", createNewUser);

router.get("/userid/special", special);

// /userid/params.id
// /userid/rajat      /:id can be also /:userId or /:anything because it is getting from params

//! this is a dynamic route and should be kept in the last
router.get("/userid/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    res.json({
      user: user,
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;
