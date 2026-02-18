const connection = require("../../connection/connection")
const AddCircularModel = (text,select,title) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO circular (text,title,role_type)VALUES (?,?,?)`;
        connection.connection.query(query, [text,title,select],
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
        const query = `select id,text,role_type,title FROM circular where isDelete=1;`
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