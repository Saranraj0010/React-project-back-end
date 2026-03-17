const connection = require("../../connection/connection")
const AddPaymentModel = (roleNo, name, standard, section, downPayment,currentDownPayment, fees, balance,currentBalance, totalPaid,currentTotalPaid) => {
    return new Promise((resolve, reject) => {
        let query = `INSERT INTO paymentData (roleNo, name, standard, section, downPayment,currentDownPayment, fees, balance,currentBalance,totalPaid,currentTotalPaid)VALUES (?,?,?,?,?,?,?,?,?,?,?)`
        connection.connection.query(query, [roleNo, name, standard, section, downPayment,currentDownPayment, fees, balance,currentBalance, totalPaid,currentTotalPaid],
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
const GetLastAdmissionModel = () => {
    return new Promise((resolve, reject) => {

        const query = `SELECT roleNo FROM paymentData ORDER BY roleNo DESC LIMIT 1`;

        connection.connection.query(query, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });

    });
};
const GetPaymentModel = () => {
    return new Promise((resolve, reject) => {
        let query = `SELECT paymentData.id,studentAdmission.roleNo,studentAdmission.firstName,
            studentAdmission.userName,studentAdmission.lastName,studentAdmission.gender,studentAdmission.dateOfBirth,studentAdmission.aaadharno,studentAdmission.standard,studentAdmission.bloodGroup,studentAdmission.language,studentAdmission.section,studentAdmission.address,studentAdmission.state,studentAdmission.nationality,studentAdmission.pincode,studentAdmission.email,studentAdmission.studentMobileNo,studentAdmission.fatherName,studentAdmission.fatherOccupation,studentAdmission.fatherNumber,studentAdmission.motherName,studentAdmission.motherOccupation,studentAdmission.motherNumber,studentAdmission.password,paymentData.name,paymentData.standard,paymentData.section,paymentData.downPayment,paymentData.fees,paymentData.balance,paymentData.totalPaid,paymentData.currentDownPayment,paymentData.currentBalance,paymentData.currentTotalPaid FROM paymentData INNER JOIN studentAdmission ON paymentData.roleNo=studentAdmission.roleNo;`
        connection.connection.query(query,
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
const UpdatePaymentModel = (roleNo, name, standard, section, downPayment,currentDownPayment, fees, balance,currentBalance, totalPaid,currentTotalPaid) => {
    return new Promise((resolve, reject) => {
        let query = `INSERT INTO paymentData (roleNo, name, standard, section, downPayment,currentDownPayment, fees, balance,currentBalance,totalPaid,currentTotalPaid)VALUES (?,?,?,?,?,?,?,?,?,?,?)`
        connection.connection.query(query, [roleNo, name, standard, section, downPayment,currentDownPayment, fees, balance,currentBalance, totalPaid,currentTotalPaid],
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
const DeletePaymentModel = (id) => {
    return new Promise((resolve, reject) => {
        let query = `update paymentData set isDelete=0 where id=?`
        connection.connection.query(query, [id],
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
module.exports = { AddPaymentModel, GetLastAdmissionModel, GetPaymentModel, UpdatePaymentModel, DeletePaymentModel }