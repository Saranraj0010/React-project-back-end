const LoginService=require("./LoginService")
const AddLoginController = async (req, res) => {
    try {
        const data = req.body;
        console.log(data)
        const result = await LoginService.AddLoginService(data);

        return res.status(200).json({
            message: "Login Successful",
            data: result
        });

    } catch (err) {
        return res.status(401).json({
            message: err.message
        });
    }
};
module.exports={AddLoginController}