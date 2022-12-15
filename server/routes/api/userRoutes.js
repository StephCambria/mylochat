const express = require("express");
const router = express.Router();
const {
  registerUser,
  authUser,
  allUsers,
} = require("../../controllers/userController");
const { protect } = require("../../middleware/authMiddleware");

router.route("/").post(registerUser);

router.route("/login").post(authUser);

router.route("/search").get(allUsers);

module.exports = router;
