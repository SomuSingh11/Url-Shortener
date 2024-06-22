const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "General",
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const user = this;

  //Hash the password only if has been modified or it is new.
  if (!user.isModified("password")) return next();
  console.log("Password  Modified");

  try {
    // hash password generation
    const salt = await bcrypt.genSalt(10);
    console.log("Salt generated:", salt);

    // hash password
    const hashPassword = await bcrypt.hash(user.password, salt);

    // Override the plain password with hashed one
    user.password = hashPassword;

    next();
  } catch (err) {
    return next(err);
  }
});

// Pre-findOneAndUpdate middleware to hash the password when password updated via PUT/PATCH
userSchema.pre("findOneAndUpdate", async function (next) {
  const update = this.getUpdate();

  // Check if the password field is being updated
  if (!update.password) {
    return next();
  }

  try {
    // Generate a salt with a cost factor of 10
    const salt = await bcrypt.genSalt(10);
    // console.log("Salt generated:", salt); -------Debug Code

    // Hash the password using the generated salt
    const hashPassword = await bcrypt.hash(update.password, salt);
    // console.log("Hashed password:", hashPassword); -------Debug Code

    // Override the plain password with the hashed one
    update.password = hashPassword;

    next();
  } catch (err) {
    console.error("Error hashing password:", err);
    return next(err);
  }
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    // Use bcrypt to compare the provided pasword with the hashed password
    const isMatch = await bcrypt.compare(candidatePassword, this.password);

    return isMatch;
  } catch (err) {
    throw err;
  }
};

const User = mongoose.model("user", userSchema);

module.exports = User;
