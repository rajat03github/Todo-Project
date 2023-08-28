import express from "express";
import {
  createNewUser,
  deleteUser,
  getAllUsers,
  getUserDetails,
  special,
  updateUser,
} from "../controllers/userControllers.js";

const router = express.Router();

router.get("/all", getAllUsers);

router.post("/new", createNewUser);

// /userid/params.id
// /userid/rajat      /:id can be also /:userId or /:anything because it is getting from params
router.get("/userid/special", special);

//! this is a dynamic route and should be kept in the last

// * chaining can aslo be done like this for common route
router
  .route("/userid/:id")
  .get(getUserDetails)
  .put(updateUser)
  .delete(deleteUser);

// router.get("/userid/:id", getUserDetails);
// router.put("/userid/:id", updateUser);
// router.delete("/userid/:id", deleteUser);

export default router;
