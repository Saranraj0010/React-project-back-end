const connection = require("../../connection/connection")

const addFormModel = (
    studentId,
    firstName,
    middleName,
    lastName,
    dateOfBirth,
    streetAddress,
    city,
    statee,
    pincode,
    country,
    email,
    phoneNumber
) => {
    return new Promise((resolve, reject) => {
        let query = `
            INSERT INTO student
            (firstName, middleName, lastName, dateOfBirth,studentId,  streetAddress, city, statee, pincode, country, email, phoneNumber)
            VALUES (?,?,?,?,?,?,?,?,?,?,?,?)
        `

        connection.connection.query(
            query,
            [   firstName, middleName, lastName, dateOfBirth,studentId,  streetAddress, city, statee, pincode, country, email, phoneNumber],
            (err, res) => {
                if (err) {
                console.log(err,"model")
                    reject(err)
                } else {
                    resolve(res)
                }
            }
        )
    })
}

const getFormModel = () => {
    return new Promise((resolve, reject) => {
        let query = `
            SELECT studentId, firstName, middleName, lastName, dateOfBirth,
                   streetAddress, city, statee, pincode, country, email, phoneNumber
            FROM student
            WHERE isDelete = 1
        `

        connection.connection.query(query, (err, res) => {
            if (err) {
                console.log(err,"model")
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

const updateFormModel = (
    firstName,
    middleName,
    lastName,
    dateOfBirth,
    streetAddress,
    city,
    statee,
    pincode,
    country,
    email,
    phoneNumber,
    studentId
) => {
    return new Promise((resolve, reject) => {
        let query = `
            UPDATE student
            SET firstName=?, middleName=?, lastName=?, dateOfBirth=?,
                streetAddress=?, city=?, statee=?, pincode=?, country=?,
                email=?, phoneNumber=?
            WHERE studentId=?
        `

        connection.connection.query(
            query,
            [firstName, middleName, lastName, dateOfBirth, streetAddress, city, statee, pincode, country, email, phoneNumber, studentId],
            (err, res) => {
                if (err) {
                console.log(err,"model")
                    reject(err)
                } else {
                    resolve(res)
                }
            }
        )
    })
}

const deleteFormModel = (studentId) => {
    return new Promise((resolve, reject) => {
        let query = `UPDATE student SET isDelete = 0 WHERE studentId = ?`

        connection.connection.query(query, [studentId], (err, res) => {
            if (err) {
                console.log(err,"model")
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

module.exports = {addFormModel,getFormModel,updateFormModel,deleteFormModel}
