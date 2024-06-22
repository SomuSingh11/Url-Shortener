const jwt = require("jsonwebtoken");

// JWT Authentication Middleware
// This middleware checks if the request has a valid JWT token in cookies.
// If valid, it attaches the user information to the request object.
// If not, it returns a 401 Unauthorized response.

const jwtAuthMiddleware = (req, res, next) => {
  // Retrieve the token from cookies
  const token = req.cookies.token;

  // If token is not present, respond with a 401 status and error message
  if (!token) {
    return res.status(401).json({ error: "Invalid Token" });
  }

  try {
    // Verify the JWT Token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the decoded user information to the request object
    req.user = decoded;

    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ error: "Invalid Token" });
  }
};

// Function to generate a JWT Token using userData object
const generateToken = (userData) => {
  // Generate and return the JWT token using the user data and secret key
  return jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: 3600 }); //expires in 1 hour
};

module.exports = { jwtAuthMiddleware, generateToken };
