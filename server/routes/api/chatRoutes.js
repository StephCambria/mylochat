const express = require("express");
const router = express.Router();
const {
  accessChat,
  allChats
} = require("../../controllers/chatController");

// Route for accessing and creating a chat
router.route("/").post(accessChat);

router.route("/").get(allChats);


module.exports = router;
