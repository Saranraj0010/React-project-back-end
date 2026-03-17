const connection = require("../../connection/connection")
const AddRoleModel = (role) => {
    return new Promise((resolve, reject) => {
        let query=`insert into roleData (role) value (?);`
        connection.connection.query(query, [role],
            (err, res) => {
                if (err) {
                    console.log(err)
                    reject(err)
                } else {
                    resolve(res)
                }
            }
        )
    })
}
const GetRoleModel = () => {
     return new Promise((resolve, reject) => {
        let query=`select id,role from roleData where isDelete=1`
        connection.connection.query(query,
            (err, res) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(res)
                }
            }
        )
    })
}
const UpdateRoleModel = (role,id) => {
     return new Promise((resolve, reject) => {
        let query=`UPDATE roleData SET role=? WHERE id=?`
        connection.connection.query(query, [role,id],
            (err, res) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(res)
                }
            }
        )
    })
}
const DeleteRoleModel = (id) => {
     return new Promise((resolve, reject) => {
        let query=`UPDATE roleData SET isDelete=0 WHERE id=?`
        connection.connection.query(query, [id],
            (err, res) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(res)
                }
            }
        )
    })
}
module.exports = { AddRoleModel, GetRoleModel, UpdateRoleModel, DeleteRoleModel }