const mongoose = require("mongoose");
const shortId = require("shortid");

const shortUrlSchema = new mongoose.Schema(
  {
    redirectUrl: {
      type: String,
      required: true,
    },
    shortId: {
      type: String,
      required: true,
      unique: true,
      default: shortId.generate,
    },
    totalClicks: {
      type: Number,
      required: true,
      default: 0,
    },
    visitHistory: [
      {
        timestamp: { type: String },
      },
    ],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const shortUrl = mongoose.model("ShortUrl", shortUrlSchema);
module.exports = shortUrl;
