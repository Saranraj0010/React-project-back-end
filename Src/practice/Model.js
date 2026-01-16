const connection = require("./connection")

const AddModel = (id, name, address, email) => {
    return new Promise((resolve, reject) => {
        let query = `insert into data(id,name,address,email) values(?,?,?,?)`

        connection.dbconnection.query(query, [id, name, address, email],
            (err, res) => {
                console.log(res, "resolve")
                console.log(err, "error")
                if (err) {
                    return reject(err)
                }
                return resolve(res)
            })
    })
}

const getModel = () => {
    return new Promise((resolve, reject) => {
        let query = `Select name,address,email from data where ondelete=1;`
        connection.dbconnection.query(query, (err, res) => {
            if (err) {
                return reject(console.log("error", err))
            }
            else {
                return resolve(res)
            }
        })
    })

}

const UpdateModel = (id, name, address, email) => {
    return new Promise((resolve, reject) => {
        query = `UPDATE data SET name =?,address =?,email=? WHERE id =?;`
        connection.dbconnection.query(query, [name, address, email, id],
            (err, res) => {
                if (err) {
                    reject(console.log(err))
                }
                else {
                    resolve(res)
                }
            }
        )

    })
}

const DeleteModel = (id) => {
    return new Promise((resolve, reject) => {
        let query=`update data set ondelete=0 where id=?;`
        connection.dbconnection.query(query, [id],
            (err, res) => {
                if (err) {
                    reject(console.log(err))
                }
                else {
                    resolve(res)
                }
            })
    })
}

module.exports = { AddModel, getModel, UpdateModel, DeleteModel }