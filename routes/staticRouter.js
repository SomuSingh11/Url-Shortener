const express = require("express");
const router = express.Router();

// Import the necessary modules and middleware
const shortUrl = require("../model/url");
const { jwtAuthMiddleware } = require("../service/auth");
const authorize = require("../Middleware/authorize");

// Import the route handlers from the controller

const {
  handleHomePage,
  handleAdminPage,
  handleSignUpPage,
  handleLoginPage,
} = require("../controller/staticRoute");

// Define route for the home page, accessible to General and Admin users
router.get(
  "/",
  jwtAuthMiddleware, // Middleware to check JWT authentication
  authorize(["General", "Admin"]), // Middleware to authorize based on roles
  handleHomePage // Controller function to handle the request
);

// Define route for the admin page, accessible only to Admin users
router.get(
  "/admin",
  jwtAuthMiddleware, // Middleware to check JWT authentication
  authorize(["Admin"]), // Middleware to authorize based on roles
  handleAdminPage // Controller function to handle the request
);

// Define route for the signup page, accessible to all users
router.get("/signup", handleSignUpPage);

// Define route for the login page, accessible to all users
router.get("/login", handleLoginPage);

module.exports = router;
