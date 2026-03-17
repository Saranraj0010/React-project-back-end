const connection=require("../../connection/connection")
const AddStaffModel = async(userName,firstName,lastName,dateOfBirth,password,role,address,state,country,pincode,email,phoneNumber) => {
    return new Promise((resolve, reject) => {
        let query=`insert into staff(userName,firstName,lastName,dateOfBirth,password,role,address,state,country,pincode,email,phoneNumber)value(?,?,?,?,?,?,?,?,?,?,?,?);`
        connection.connection.query(query,[userName,firstName,lastName,dateOfBirth,password,role,address,state,country,pincode,email,phoneNumber],
            (err,res)=>{
                if(err){
                    console.log(err)
                    reject(err)
                }
                else{
                    resolve(res)
                }
            }
        )
    })
    // return new Promise((resolve, reject) => {
    //     let query = `insert into staff(userName,firstName,lastName,dateOfBirth,role,address,state,country,pincode,email,phoneNumber,password)values(?,?,?,?,?,?,?,?,?,?,?);`
    //     connection.connection.query(query, [userName, firstName, lastName, dateOfBirth, role, address, state, country, pincode, email, phoneNumber, password],
    //         (err, res) => {
    //             if (err) {
    //                 console.log(err)
    //                 reject(err)
    //             }
    //             else {
    //                 resolve(res)
    //             }
    //         }
    //     )
    // })
}
const GetStaffModel = () => {
    return new Promise((resolve, reject) => {
        let query=`SELECT id,userName, firstName, lastName, dateOfBirth,password,role,
                   address,state, pincode, country, email, phoneNumber from staff where isDelete=1`
        connection.connection.query(query,
            (err,res)=>{
                if(err){
                    console.log(err)
                    reject(err)
                }   
                else{
                    resolve(res)
                }
            }
        )
    })
}
const UpdateStaffModel = (userName,firstName,lastName,dateOfBirth,password,role,address,state,country,pincode,email,phoneNumber) => {
    return new Promise((resolve, reject) => {
        let query=`UPDATE staff
            SET firstName=?, lastName=?, dateOfBirth=?, password=?,role=?,
                address=?, state=?, pincode=?, country=?,
                email=?, phoneNumber=?
            WHERE userName=?`
        connection.connection.query(query,[firstName,lastName,dateOfBirth,password,role,address,state,pincode,country,email,phoneNumber,userName],
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
const DeleteStaffModel = (id) => {
    return new Promise((resolve, reject) => {
        let query=`UPDATE staff SET isDelete = 0 WHERE id = ?`
        connection.connection.query(query,[id],
            (err,res)=>{
                if(err){
                    console.log(err)
                    reject(err)
                }
                else{
                    resolve(res)
                }
            }
        )
    })
}
module.exports={AddStaffModel,GetStaffModel,UpdateStaffModel,DeleteStaffModel}