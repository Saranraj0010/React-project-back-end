const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/userModel");
const { validateSignUpData } = require("../validator/validate");

// SIGNUP
const signup = async (req, res) => {
  try {
    validateSignUpData(req);

    const { firstName, lastName, emailId, password } = req.body;

    const existingUser = await User.findByEmail(emailId);
    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    await User.createUser({
      firstName,
      lastName,
      emailId,
      password: passwordHash
    });

    res.status(201).json({ message: "User created successfully!" });

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// LOGIN
const login = async (req, res) => {
  try {

    const { emailId, password } = req.body;

    const user = await User.findByEmail(emailId);

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials!" });
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return res.status(400).json({ message: "Invalid credentials!" });
    }

    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, {
  httpOnly: true,
  secure: false,          // ✅ for local
  sameSite: "lax"         // ✅ IMPORTANT
});

    res.json({
      token,
      firstName: user.first_name,
      id: user.id
    });

  } catch (err) {
    console.log(err)
    res.status(500).json({ message: err.message });
  }
};

// LOGOUT
const logout = (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true
  });

  res.send("Logged out");
};

module.exports = { signup, login, logout };