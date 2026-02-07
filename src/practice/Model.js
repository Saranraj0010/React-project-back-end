const connection = require("../connection/connection")
const AddForm =(id,Name,age)=>{
    return new Promise((resolve, reject) => {
        let query=`insert into tabledata(id,Name,age) values(?,?,?)`
        connection.connection.query(query,[id,Name,age],
            (err,res)=>{
                if(err){
                    console.log(err ,"error")
                    return reject(err)
                }else{
                    return resolve(res)
                }
            }
        )
    })
}
const AddModel = (id, name, address, email) => {
    return new Promise((resolve, reject) => {
        let query = `insert into data(id,name,address,email) values(?,?,?,?)`

        connection.connection.query(query, [id, name, address, email],
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
        let query = `Select id,name,address,email from data where ondelete=1;`
        connection.connection.query(query, (err, res) => {
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
        connection.connection.query(query, [name, address, email, id],
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
        let query=`update data set ondelete=0 where id =?;`
        connection.connection.query(query, [id],
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

module.exports = { AddModel, getModel, UpdateModel, DeleteModel,AddForm }