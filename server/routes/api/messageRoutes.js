const express = require("express");
const router = express.Router();
const { sendMessage, allMessages } = require("../../controllers/messageController");

// Route for sending message
router.route("/").post(sendMessage);


// Route to receive all messages
router.route("/all").get(allMessages);

module.exports = router;