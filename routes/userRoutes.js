import express from "express";
import {
  registerUser,
  loginUser,
  getMyProfile,
  logoutUser,
} from "../controllers/userControllers.js";
import isAuthenticated from "../middlewares/Auth.js";

const router = express.Router();

router.post("/new", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);

router.get("/me", isAuthenticated, getMyProfile);

// /userid/params.id
// /userid/rajat      /:id can be also /:userId or /:anything because it is getting from params
//! this is a dynamic route and should be kept in the last
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
