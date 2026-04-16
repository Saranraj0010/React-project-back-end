const db = require("../../connection/connection");

const User = {
  findByEmail: (emailId) => {
    return new Promise((resolve, reject) => {
      db.connection.query(
        "SELECT * FROM users WHERE email_id = ?",
        [emailId],
        (err, result) => {
          if (err) reject(err);
          else resolve(result[0]);
        }
      );
    });
  },

  findById: (id) => {
    return new Promise((resolve, reject) => {
      db.connection.query(
        "SELECT * FROM users WHERE id = ?",
        [id],
        (err, result) => {
          if (err) reject(err);
          else resolve(result[0]);
        }
      );
    });
  },

  createUser: (userData) => {
    return new Promise((resolve, reject) => {
      const { firstName, lastName, emailId, password } = userData;

      db.connection.query(
        "INSERT INTO users (first_name, last_name, email_id, password) VALUES (?, ?, ?, ?)",
        [firstName, lastName, emailId, password],
        (err, result) => {
          if (err) reject(err);
          else resolve(result);
        }
      );
    });
  }
};

module.exports = User;