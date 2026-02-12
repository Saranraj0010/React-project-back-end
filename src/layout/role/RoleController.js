const service=require("./RoleService")
const AddRoleController = async(req,res) => {
    try{
        const data=req.body
        console.log(data,"co")
        const result=await service.AddRoleService(data)
        console.log(result,"res co")
        return res.status(200).json({
            message:"Success",  
            data:result
        })
    }catch(err){
        if(err){
          console.log(err)
            return res.status(400).json({
                message:"Client Error"
            })
        }
        return res.status(500).json({
            message:"Server Error"
        })
    }
}
const GetRoleController = async(req,res) => {
    try{
        const result=await service.GetRoleService()
        return res.status(200).json({
            message:"Geted",
            data:result
        })
    }catch(err){
        if(err){
            return res.status(400).json({
                message:"Client Error"
            })
        }
        return res.status(500).json({
            message:"Server Error"
        })
    }
}
const UpdateRoleController = async(req,res) => {
    try{
        const data=req.body
        const result=await service.UpdateRoleService(data)
        return res.status(200).json({
            message:"Data Updated",
            data:result
        })
    }catch(err){
        if(err){
            return res.status(400).json({
                message:"Client Error"
            })
        }
        return res.status(500).json({
            message:"Server Error"
        })
    }
}
const DeleteRoleController = async(req,res) => {
    try{
        const data=req.body
        const result=await service.DeleteRoleService(data)
        return res.status(200).json({
            message:"Data Deleted",
            data:result
        })
    }catch(err){
        if(err){
            return res.status(400).json({
                message:"Client Error"
            })
        }
        return res.status(500).json({
            message:"Server Error"
        })
    }
}
module.exports={AddRoleController,GetRoleController,UpdateRoleController,DeleteRoleController}