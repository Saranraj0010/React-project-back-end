const connection = require("../../connection/connection")
const AddStandardModel = (standard) => {
    return new Promise((resolve, reject) => {
        let query=`insert into standardData (standard) value (?);`
        connection.connection.query(query, [standard],
            (err, res) => {
                if (err) {
                    console.log(err)
                    reject(err)
                } else {
                    console.log(res ,"mo")
                    resolve(res)
                }
            }
        )
    })
}
const GetStandardModel = () => {
     return new Promise((resolve, reject) => {
        let query=`select id,standard from standardData where isDelete=1`
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
const UpdateStandardModel = (id,standard) => {
     return new Promise((resolve, reject) => {
        let query=`UPDATE standardData SET standard=? WHERE id=?`
        connection.connection.query(query, [standard,id],
            (err, res) => {
                if (err) {
                    console.log(err)
                    reject(err)
                } else {
                    console.log(res)
                    resolve(res)
                }
            }
        )
    })
}
const DeleteStandardModel = (id) => {
     return new Promise((resolve, reject) => {
        let query=`UPDATE standardData SET isDelete=0 WHERE id=?`
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
module.exports = { AddStandardModel, GetStandardModel, UpdateStandardModel, DeleteStandardModel }