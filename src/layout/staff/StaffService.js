const model=require("./StaffModel")
const AddStaffService = async(data) => {
    const result=await model.AddStaffModel(data.userName,data.firstName,data.lastName,data.dateOfBirth,data.password,data.role,data.address,data.state,data.country,data.pincode,data.email,data.phoneNumber)
    console.log(result)
    return result
}
const GetStaffService = async() => {
    const result=await model.GetStaffModel()
    return result
}
const UpdateStaffService = async(data) => {
    const result=await model.UpdateStaffModel(data.userName,data.firstName,data.lastName,data.dateOfBirth,data.password,data.role,data.address,data.state,data.country,data.pincode,data.email,data.phoneNumber)
    return result
}
const DeleteStaffService = async(data) => {
    const result=await model.DeleteStaffModel(data.userName)
    return result
}
module.exports={AddStaffService,GetStaffService,UpdateStaffService,DeleteStaffService}