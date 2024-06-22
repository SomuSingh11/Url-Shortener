const User = require("../model/user");
const { generateToken } = require("../service/auth");

async function handleUserSignUp(req, res) {
  const { username, email, password } = req.body;

  const response = await User.create({
    name: username,
    email: email,
    password: password,
  });

  console.log(response.id);

  const payLaod = {
    id: response.id,
    username: response.name,
  };
  const token = generateToken(payLaod);
  res.cookie("token", token);
  return res.redirect("/login");
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).send("Invalid Username or Password");
    }

    // Generating token as both id and user are correct
    const payLoad = {
      id: user.id,
      username: user.name,
      role: user.role,
    };

    const token = generateToken(payLoad);

    res.cookie("token", token);
    return res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
module.exports = {
  handleUserSignUp,
  handleUserLogin,
};
