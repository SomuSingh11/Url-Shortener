const express = require("express");
const shortUrl = require("../model/url");

const router = express.Router();

router.get("/", async (req, res) => {
  const allUrls = await shortUrl.find({});
  console.log(typeof allUrls);
  return res.render("home", {
    urls: allUrls,
  });
});

module.exports = router;
