const authorize = (roles = []) => {
  //Even if String is passed, this ensure that the roles parameter is always an array.
  if (typeof roles === "string") {
    roles = [roles];
  }

  return (req, res, next) => {
    // Debugging line ---------
    // console.log("Authorize Middleware Called");
    // console.log("Roles:", roles);
    // console.log("User:", req.user);
    // console.log("Role:", req.user.role);
    // Debugging line ----------

    //Check if user id authenticated or not.
    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Check if user's role is in the allowed roles
    if (roles.length && !roles.includes(req.user.role)) {
      return res
        .status(403)
        .json({ error: `Forbidden : Route Protected for ${roles} User` });
    }

    //User is authenticated and authorized
    next();
  };
};

module.exports = authorize;
