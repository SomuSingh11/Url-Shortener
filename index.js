require("dotenv").config();
const express = require("express");
const path = require("path");
const connectToMongoDb = require("./connection");
const shortUrl = require("./model/url");
const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter");

const app = express();
const PORT = 3000;

////Connect to MOngoDb
connectToMongoDb(process.env.MONGODB_URL).then(() => {
  console.log("Connected to MOngoDb Successfully!");
});

/////Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

///////Confiiguring Ejs
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

//////Routes
app.use("/url", urlRoute);
app.use("/", staticRoute);

////Listening
app.listen(PORT, () => {
  console.log(`Server created Successfully ar PORT : ${PORT}`);
});
