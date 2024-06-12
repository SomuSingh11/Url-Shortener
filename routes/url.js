const express = require("express");

const {
  handleGenerateNewShortUrl,
  handleRedirectOriginalUrl,
  handleGetAnalytics,
} = require("../controller/url");
const router = express.Router();

router.post("/", handleGenerateNewShortUrl);
router.get("/:shortId", handleRedirectOriginalUrl);
router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
