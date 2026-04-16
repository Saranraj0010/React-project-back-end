const validator = require("validator");

// ✅ SIGNUP VALIDATION
const validateSignUpData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;

  // First Name
  if (!firstName || firstName.trim().length < 4) {
    throw new Error("First name must be at least 4 characters");
  }

  // Last Name (optional but if present validate)
  if (lastName && lastName.trim().length < 3) {
    throw new Error("Last name must be at least 3 characters");
  }

  // Email
  if (!emailId || !validator.isEmail(emailId)) {
    throw new Error("Please enter a valid email");
  }

  // Password
  if (!password || !validator.isStrongPassword(password)) {
    throw new Error(
      "Password must be strong (min 8 chars, uppercase, lowercase, number, symbol)"
    );
  }
};

// ✅ LOGIN VALIDATION
const validateLoginData = (req) => {
  const { emailId, password } = req.body;

  if (!emailId || !validator.isEmail(emailId)) {
    throw new Error("Valid email required");
  }

  if (!password) {
    throw new Error("Password is required");
  }
};

module.exports = {validateSignUpData,validateLoginData};