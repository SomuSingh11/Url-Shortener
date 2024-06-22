const shortUrl = require("../model/url");

////////////////////// Handle Generate New Short URl///////////////////////
async function handleGenerateNewShortUrl(req, res) {
  // console.log("handleGenerateNewShortUrl function loaded");
  const body = req.body;
  // console.log(body);
  // console.log(req.user);

  if (!body.url) return res.status(400).json({ error: "url is required!" });

  try {
    // Create a new short URL document
    const newShorUrl = await shortUrl.create({
      redirectUrl: body.url,
      createdBy: req.user.id,
      username: req.user.username,
    });

    // Extract the shortId from the newly created document
    const shortId = newShorUrl.shortId;

    // Return the response with rendering home.ejs and passing the argumensts "redirect URL" and "shortId"
    return res.render("home", {
      redirectUrl: body.url,
      id: shortId,
      name: "Show Analytics",
    });

    // Handle any errors
  } catch (err) {
    return res.status(500).json({ error: "Internal server error" });
  }
}

////////////Updates Timestamp and TotalClicks and redirects the user to the original URL///////////////
async function handleRedirectOriginalUrl(req, res) {
  console.log("hhandleRedirectOriginalUrl function loaded");
  try {
    const { shortId } = req.params;

    // Constructing the timestamp string
    const timestamp = `${new Date().getDate()}/${
      new Date().getMonth() + 1
    }/${new Date().getFullYear()} : ${new Date().getHours()}:${new Date().getMinutes()}`;

    // Update the document based on the shortId
    const entry = await shortUrl.findOneAndUpdate(
      { shortId },
      {
        $push: {
          visitHistory: {
            timestamp: timestamp,
          },
        },
        $inc: {
          totalClicks: 1,
        },
      },
      { new: true } // To return the updated document
    );
    // Send a response if needed
    res.redirect(entry.redirectUrl);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

//////////// Show Analytics //////////
async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await shortUrl.findOne({ shortId });
  if (!result) {
    return res.status(404).json({ error: "Short URL not found" });
  }
  res.json({
    totalClicks: result.totalClicks,
    visitHistory: result.visitHistory,
  });
}

module.exports = {
  handleGenerateNewShortUrl,
  handleRedirectOriginalUrl,
  handleGetAnalytics,
};
