const LoginModel=require("./LoginModel")
const AddLoginService = async(data) => {
    const result =await LoginModel.AddLoginModel(data.UserId,data.Password)
    console.log(result,"ser")
    return result
}
module.exports={AddLoginService}