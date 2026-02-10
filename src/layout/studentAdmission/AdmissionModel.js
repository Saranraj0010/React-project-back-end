const connection=require("../../connection/connection")
const AddAdmissionModel = (userName,firstName,lastName,gender,dateOfBirth,aaadharno,standard,bloodGroup,language,address,state,nationality,pincode,email,studentMobileNo,fatherName,fatherOccupation,fatherNumber,motherName,motherOccupation,motherNumber) => {
    return new Promise((resolve, reject) => {
        let query=`insert into studentAdmission(userName,firstName,lastName,gender,dateOfBirth,aaadharno,standard,bloodGroup,language,address,state,nationality,pincode,email,studentMobileNo,fatherName,fatherOccupation,fatherNumber,motherName,motherOccupation,motherNumber)value(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
        connection.connection.query(query,[userName,firstName,lastName,gender,dateOfBirth,aaadharno,standard,bloodGroup,language,address,state,nationality,pincode,email,studentMobileNo,fatherName,fatherOccupation,fatherNumber,motherName,motherOccupation,motherNumber],
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
const GetAdmissionModel = () => {
    return new Promise((resolve, reject) => {
        let query=`select id,userName,firstName,lastName,gender,dateOfBirth,aaadharno,standard,bloodGroup,language,address,state,nationality,pincode,email,studentMobileNo,fatherName,fatherOccupation,fatherNumber,motherName,motherOccupation,motherNumber from studentAdmission where isDelete=1;`
        connection.connection.query(query,
            (err,res)=>{
                if(err){
                    console.log(err)
                    reject(err)
                }else{
                    console.log(res)
                    return resolve(res)
                }
            }
        )
    })
}
const UpdateAdmissionModel = (userName,firstName,lastName,gender,dateOfBirth,aaadharno,standard,bloodGroup,language,address,state,nationality,pincode,email,studentMobileNo,fatherName,fatherOccupation,fatherNumber,motherName,motherOccupation,motherNumber,id) => {
    return new Promise((resolve, reject) => {
        let query=`update studentAdmission set userName=?,firstName=?,lastName=?,gender=?,dateOfBirth=?,aaadharno=?,standard=?,bloodGroup=?,language=?,address=?,state=?,nationality=?,pincode=?,email=?,studentMobileNo=?,fatherName=?,fatherOccupation=?,fatherNumber=?,motherName=?,motherOccupation=?,motherNumber=? where id=?`
        connection.connection.query(query,[userName,firstName,lastName,gender,dateOfBirth,aaadharno,standard,bloodGroup,language,address,state,nationality,pincode,email,studentMobileNo,fatherName,fatherOccupation,fatherNumber,motherName,motherOccupation,motherNumber,id],
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
const DeleteAdmissionModel = (id) => {
    return new Promise((resolve, reject) => {
        let query=`update studentAdmission set isDelete=0 where id=?`
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
module.exports={AddAdmissionModel,GetAdmissionModel,UpdateAdmissionModel,DeleteAdmissionModel}