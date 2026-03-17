const LoginService=require("./LoginService")
const AddLoginController = async(req,res) => {
    try{
        const data=req.body
        const result=await LoginService.AddLoginService(data)
        return res.status(200).json({
            message:"Login Succesful",
            data:result
        })
    }
    catch(err){
        if(err){
            console.log(err)
            return res.status(400).json({
                message:"Client Error",
            })
        }
        else{
            console.log(err)
            return res.status(500).json({
                message:"Server Error"
            })
        }
    }
}
module.exports={AddLoginController}