const Model=require("./SignUpModel")
const AddSignUpService = async(data) => {
    const result=await Model.AddSignUpModel(data.UserName,data.PhoneNumber,data.Password)
    return result
}
const GetSignUpService = async() => {
    const result=await Model.GetSignUpModel()
    return result
    
}
const UpdateSignUpService = async(data) => {
    const result=await Model.UpdateSignUpModel(data.UserName,data.PhoneNumber,data.Password,data.id)
    return result
}
const DeleteSignUpService = async(data) => {
    const result=await Model.DeleteSignUpModel(data.id)
    return result
}
module.exports ={AddSignUpService,GetSignUpService,UpdateSignUpService,DeleteSignUpService}