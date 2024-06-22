const mongoose = require("mongoose");

// Function to connect to MongoDB
async function connectToMongoDb(url) {
  try {
    await mongoose.connect(url);
  } catch (err) {
    console.error("Error connecting to MongoDB:", error);
  }
}

module.exports = connectToMongoDb;
