const shortUrl = require("../model/url");

// Function to render the login page
async function handleLoginPage(req, res) {
  return res.render("login");
}

// Function to render the sign-up page
async function handleSignUpPage(req, res) {
  return res.render("signUp");
}

// Function to render the home page with user-specific URLs
async function handleHomePage(req, res) {
  // console.log(req.user);
  const allUrls = await shortUrl.find({ createdBy: req.user.id });
  return res.render("home", {
    urls: allUrls,
    name: req.user.username,
  });
}

// Function to render the admin dashboard with all URLs
async function handleAdminPage(req, res) {
  const allUrls = await shortUrl.find({});
  return res.render("adminDash", {
    urls: allUrls,
  });
}

module.exports = {
  handleHomePage,
  handleAdminPage,
  handleSignUpPage,
  handleLoginPage,
};
