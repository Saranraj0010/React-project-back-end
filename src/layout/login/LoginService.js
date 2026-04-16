const LoginModel=require("./LoginModel")
const AddLoginService = async (data) => {
    const result = await LoginModel.AddLoginModel(data.UserName);

    if (result.length === 0) {
        throw new Error("User not found");
    }

    const user = result[0];

    if (user.Password !== data.Password) {
        throw new Error("Invalid password");
    }

    return user;
};
module.exports={AddLoginService}