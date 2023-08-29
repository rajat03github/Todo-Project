import express from "express";
import {
  registerUser,
  getAllUsers,
  getUserDetails,
  loginUser,
} from "../controllers/userControllers.js";

const router = express.Router();

router.get("/all", getAllUsers);

router.post("/new", registerUser);
router.post("/login", loginUser);

// /userid/params.id
// /userid/rajat      /:id can be also /:userId or /:anything because it is getting from params
// router.get("/userid/special", special);

//! this is a dynamic route and should be kept in the last

router.route("/userid/:id").get(getUserDetails);

// * chaining can aslo be done like this for common route
/*
router
  .route("/userid/:id")
  .get(getUserDetails)
  .put(updateUser)
  .delete(deleteUser);
*/
export default router;
