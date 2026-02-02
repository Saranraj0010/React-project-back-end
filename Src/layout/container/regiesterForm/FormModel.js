const connection = require("../../../connection/connection")

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
            (studentId, firstName, middleName, lastName, dateOfBirth, streetAddress, city, statee, pincode, country, email, phoneNumber)
            VALUES (?,?,?,?,?,?,?,?,?,?,?,?)
        `

        connection.dbconnection.query(
            query,
            [studentId, firstName, middleName, lastName, dateOfBirth, streetAddress, city, statee, pincode, country, email, phoneNumber],
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

const getFormModel = () => {
    return new Promise((resolve, reject) => {
        let query = `
            SELECT studentId, firstName, middleName, lastName, dateOfBirth,
                   streetAddress, city, statee, pincode, country, email, phoneNumber
            FROM student
            WHERE inDelete = 0
        `

        connection.dbconnection.query(query, (err, res) => {
            if (err) {
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

        connection.dbconnection.query(
            query,
            [firstName, middleName, lastName, dateOfBirth, streetAddress, city, statee, pincode, country, email, phoneNumber, studentId],
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

const deleteFormModel = (studentId) => {
    return new Promise((resolve, reject) => {
        let query = `UPDATE student SET inDelete = 1 WHERE studentId = ?`

        connection.dbconnection.query(query, [studentId], (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

module.exports = {addFormModel,getFormModel,updateFormModel,deleteFormModel}
