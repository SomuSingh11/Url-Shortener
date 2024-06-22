const express = require("express");
const router = express.Router();

// Import the controller functions for handling user-related operations
const { handleUserSignUp, handleUserLogin } = require("../controller/user");

router.post("/signup", handleUserSignUp); // Route to handle user signup
router.post("/login", handleUserLogin); // Route to handle user login

module.exports = router;
