const connection = require("../../connection/connection")
const AddAdmissionModel = (roleNo, userName, firstName, lastName, gender, dateOfBirth, aaadharno, standard, bloodGroup, language, section, address, state, nationality, pincode, email, studentMobileNo, fatherName, fatherOccupation, fatherNumber, motherName, motherOccupation, motherNumber, password) => {
    return new Promise((resolve, reject) => {
        let query = `insert into studentAdmission(roleNo,userName,firstName,lastName,gender,dateOfBirth,aaadharno,standard,bloodGroup,language,section,address,state,nationality,pincode,email,studentMobileNo,fatherName,fatherOccupation,fatherNumber,motherName,motherOccupation,motherNumber,password)value(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
        connection.connection.query(query, [roleNo, userName, firstName, lastName, gender, dateOfBirth, aaadharno, standard, bloodGroup, language, section, address, state, nationality, pincode, email, studentMobileNo, fatherName, fatherOccupation, fatherNumber, motherName, motherOccupation, motherNumber, password],
            (err, res) => {
                if (err) {
                    console.log(err)
                    reject(err)
                }
                else {
                    resolve(res)
                }
            }
        )
    })

}
const GetAdmissionModel = () => {
    return new Promise((resolve, reject) => {
        let query = `select id,roleNo,userName,firstName,lastName,gender,dateOfBirth,aaadharno,standard,bloodGroup,language,section,address,state,nationality,pincode,email,studentMobileNo,fatherName,fatherOccupation,fatherNumber,motherName,motherOccupation,motherNumber,password from studentAdmission where isDelete=1;`
        connection.connection.query(query,
            (err, res) => {
                if (err) {
                    console.log(err)
                    reject(err)
                } else {
                    return resolve(res)
                }
            }
        )
    })
}
const GetLastAdmissionModel = () => {
    return new Promise((resolve, reject) => {

        const query = `SELECT roleNo FROM studentAdmission ORDER BY roleNo DESC LIMIT 1`;

        connection.connection.query(query, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });

    });
};
const UpdateAdmissionModel = (roleNo, userName, firstName, lastName, gender, dateOfBirth, aaadharno, standard, bloodGroup, language, section, address, state, nationality, pincode, email, studentMobileNo, fatherName, fatherOccupation, fatherNumber, motherName, motherOccupation, motherNumber, id) => {
    return new Promise((resolve, reject) => {
        let query = `update studentAdmission set userName=?,firstName=?,lastName=?,gender=?,dateOfBirth=?,aaadharno=?,standard=?,bloodGroup=?,language=?,section=?,address=?,state=?,nationality=?,pincode=?,email=?,studentMobileNo=?,fatherName=?,fatherOccupation=?,fatherNumber=?,motherName=?,motherOccupation=?,motherNumber=? where id=?`
        connection.connection.query(query, [userName, firstName, lastName, gender, dateOfBirth, aaadharno, standard, bloodGroup, language, section, address, state, nationality, pincode, email, studentMobileNo, fatherName, fatherOccupation, fatherNumber, motherName, motherOccupation, motherNumber, id],
            (err, res) => {
                if (err) {
                    reject(err)
                }
                else {
                    resolve(res)
                }
            }
        )
    })
}
const DeleteAdmissionModel = (id) => {
    return new Promise((resolve, reject) => {
        let query = `update studentAdmission set isDelete=0 where id=?`
        connection.connection.query(query, [id],
            (err, res) => {
                if (err) {
                    console.log(err)
                    reject(err)
                }
                else {
                    resolve(res)
                }
            }
        )
    })
}
module.exports = { AddAdmissionModel, GetLastAdmissionModel, GetAdmissionModel, UpdateAdmissionModel, DeleteAdmissionModel }