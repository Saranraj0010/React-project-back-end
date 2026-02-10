const model=require("./AdmissionModel")
const AddAdmissionService = async(data) => {
    const result=await model.AddAdmissionModel(data.userName,data.firstName,data.lastName,data.gender,data.dateOfBirth,data.aaadharno,data.standard,data.bloodGroup,data.language,data.address,data.state,data.nationality,data.pincode,data.email,data.studentMobileNo,data.fatherName,data.fatherOccupation,data.fatherNumber,data.motherName,data.motherOccupation,data.motherNumber)
    return result
}
const GetAdmissionService = async() => {
    const result=await model.GetAdmissionModel()
    return result
}
const UpdateAdmissionService = async(data) => {
    const result=await model.UpdateAdmissionModel(data.userName,data.firstName,data.lastName,data.gender,data.dateOfBirth,data.aaadharno,data.standard,data.bloodGroup,data.language,data.address,data.state,data.nationality,data.pincode,data.email,data.studentMobileNo,data.fatherName,data.fatherOccupation,data.fatherNumber,data.motherName,data.motherOccupation,data.motherNumber,data.id)
    return result
}
const DeleteAdmissionService = async(data) => {
    const result=await model.DeleteAdmissionModel(data.id)
    return result
}
module.exports={AddAdmissionService,GetAdmissionService,UpdateAdmissionService,DeleteAdmissionService}