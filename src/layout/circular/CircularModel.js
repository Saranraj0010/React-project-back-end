const connection = require("../../connection/connection")
const AddCircularModel = (text,select,title,file) => {
    return new Promise((resolve, reject) => {
         const filePath = file ? file.path : null;
        const query = `INSERT INTO circular (role_type,text,title,file)VALUES (?,?,?,?)`;
        connection.connection.query(query, [select,text,title,filePath],
            (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            }
        );
    });
};
const GetCircularModel = () => {
    return new Promise((resolve, reject) => {
        const query = `select id,text,role_type,title,file FROM circular where isDelete=1;`
        connection.connection.query(query,
            (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            }
        );
    });
}
const UpdateCircularModel = () => {
}
const DeleteCircularModel = () => {
}
module.exports = { AddCircularModel, GetCircularModel, UpdateCircularModel, DeleteCircularModel }