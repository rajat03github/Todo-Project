import express from "express";
import {
  registerUser,
  getAllUsers,
  loginUser,
  getMyProfile,
} from "../controllers/userControllers.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/all", getAllUsers);

router.post("/new", registerUser);
router.post("/login", loginUser);

//! this is a dynamic route and should be kept in the last

router.get("/me", isAuthenticated, getMyProfile);

// /userid/params.id
// /userid/rajat      /:id can be also /:userId or /:anything because it is getting from params
// router.get("/userid/special", special);

// * chaining can aslo be done like this for common route
/*
// router.route("/me").get(getMyProfile);
router
  .route("/userid/:id")
  .get(getUserDetails)
  .put(updateUser)
  .delete(deleteUser);
*/
export default router;
