const Model=require("./SignUpModel")
const AddSignUpService = async(data) => {
    const result=await Model.AddSignUpModel(data.UserName,data.PhoneNumber,data.Password)
    console.log(result)
    return result
}
const GetSignUpService = async() => {
    const result=await Model.GetSignUpModel()
    console.log(result,"helo")
    return result
    
}
const UpdateSignUpService = async(data) => {
    const result=await Model.UpdateSignUpModel(data.UserName,data.PhoneNumber,data.Password,data.id)
    console.log(result)
    return result
}
const DeleteSignUpService = async(data) => {
    const result=await Model.DeleteSignUpModel(data.id)
    console.log(result)
    return result
}
module.exports ={AddSignUpService,GetSignUpService,UpdateSignUpService,DeleteSignUpService}