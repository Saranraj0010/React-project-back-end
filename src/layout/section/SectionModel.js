const connection = require("../../connection/connection")
const AddSectionModel = (section) => {
    return new Promise((resolve, reject) => {
        let query=`insert into sectionData (section) value (?);`
        connection.connection.query(query, [section],
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
const GetSectionModel = () => {
     return new Promise((resolve, reject) => {
        let query=`select id,section from sectionData where isDelete=1`
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
const UpdateSectionModel = (id,section) => {
     return new Promise((resolve, reject) => {
        let query=`UPDATE sectionData SET section=? WHERE id=?`
        connection.connection.query(query, [section,id],
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
const DeleteSectionModel = (id) => {
     return new Promise((resolve, reject) => {
        let query=`UPDATE sectionData SET isDelete=0 WHERE id=?`
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
module.exports = { AddSectionModel, GetSectionModel, UpdateSectionModel, DeleteSectionModel }