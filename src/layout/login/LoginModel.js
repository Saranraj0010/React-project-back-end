const connection=require("../../connection/connection")
const AddLoginModel = (UserName) => {
    return new Promise((resolve, reject) => {
        let query = `SELECT * FROM SignUppage WHERE UserName = ?`;
        connection.connection.query(query, [UserName], (err, res) => {
            if (err) reject(err);
            else resolve(res);
        });
    });
};
module.exports={AddLoginModel}