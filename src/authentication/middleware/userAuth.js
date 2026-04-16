const jwt = require("jsonwebtoken");
const User = require("../model/userModel");
const dotenv=require("dotenv").config();
const userAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).send("Please login");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).send("User not found");
    }

    req.user = user;
    next();

  } catch (err) {
    res.status(401).send("Invalid or expired token");
  }
};

module.exports = userAuth;