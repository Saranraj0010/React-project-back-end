const connection = require("./practice/connection")
const addFormModel = (studentId, firstName, middleName, lastName,dateOfBirth,streetAddress, city, statee,pincode,country, email, phoneNumber) => {
    new Promise((resolve, reject) => {
        let query = `insert into student(studentId,firstName,middleName,lastName,dateOfBirth,streetAddress,city,statee,pincode,country,email,phoneNumber) values(?,?,?,?,?,?,?,?,?,?,?,?);`
        connection.dbconnection.query(query, [studentId, firstName, middleName, lastName,dateOfBirth,  streetAddress, city, statee,pincode,country, email, phoneNumber],
            (err, res) => {
                if (err) {
                    return reject(err)
                }
                else{
                return resolve(res)
                }
            }
        )

    })
}

const getFormModel = () => {
    return new Promise((resolve, reject) => {
        let query=`select studentId, firstName, middleName, lastName,dateOfBirth,streetAddress, city, statee,pincode,country, email, phoneNumber from student where inDelete=0; `
        connection.dbconnection.query(query,
            (err,res)=>{
                if(err){
                    reject(err)
                }
                else{
                    resolve(res)
                }
            }
        )
    })
}
const updateFormModel = ( firstName, middleName, lastName,dateOfBirth,streetAddress, city, statee,pincode,country, email, phoneNumber,studentId) => {
        new Promise((resolve, reject) => {
            let query=`update student set firstName=?, middleName=?, lastName=?,dateOfBirth=?,streetAddress=?, city=?, statee=?,pincode=?,country=?, email=?, phoneNumber=? where  studentId=?;`
    connection.dbconnection.query(query, [ firstName, middleName, lastName,dateOfBirth,  streetAddress, city, statee,pincode,country, email, phoneNumber,studentId],
            (err, res) => {
                if (err) {
                    return reject(err)
                }
                else{
                return resolve(res)
                }
            }
        )
            
        })

    

}
const deleteFormModel = (studentId) => {
    new Promise((resolve, reject) => {
        let query=`update student set inDelete=1 where studentId=?;`
        connection.dbconnection.query(query,[studentId],
            (err,res)=>{
                if(err){
                    reject(err)
                }
                else{
                    resolve(res)
                }
            }
        )
    })
}
module.exports = { addFormModel, getFormModel, updateFormModel, deleteFormModel }