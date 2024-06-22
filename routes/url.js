const express = require("express");

// Import the controller functions for handling URL-related operations
const {
  handleGenerateNewShortUrl,
  handleRedirectOriginalUrl,
  handleGetAnalytics,
} = require("../controller/url");
const router = express.Router();

router.post("/", handleGenerateNewShortUrl); // Route to generate a new short URL
router.get("/:shortId", handleRedirectOriginalUrl); // Route to redirect to the original URL based on the short ID
router.get("/analytics/:shortId", handleGetAnalytics); // Route to get analytics for a specific short URL

module.exports = router;
