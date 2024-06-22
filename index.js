// Load environment variables from a .env file into process.env
require("dotenv").config();

// Import required modules
const express = require("express");
const { jwtAuthMiddleware } = require("./service/auth");
const authorize = require("./Middleware/authorize");
const path = require("path");
const connectToMongoDb = require("./connection");
const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter");
const userRoute = require("./routes/user");
const cookieParser = require("cookie-parser");

// Create an instance of the Express application
const app = express();

// Use PORT from environment variables or default to 3000
const PORT = process.env.PORT || 3000;

// Connect to MOngoDB
connectToMongoDb(process.env.MONGODB_URL).then(() => {
  console.log("Connected to MOngoDb Successfully!");
});

// Middleware Configuration
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

// Confiiguring Ejs as the View Engine
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// Define Routes
app.use("/url", jwtAuthMiddleware, authorize(["General", "Admin"]), urlRoute);
app.use("/", staticRoute);
app.use("/user", userRoute);

// Start the Server and Listen on the specified PORT
app.listen(PORT, () => {
  console.log(`Server created Successfully ar PORT : ${PORT}`);
});
