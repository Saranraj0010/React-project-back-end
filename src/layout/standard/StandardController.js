const service=require("./StandardService")
const AddStandardController = async(req,res) => {
    try{
        const data=req.body
        console.log(data,"co")
        const result=await service.AddStandardService(data)
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
const GetStandardController = async(req,res) => {
    try{
        const result=await service.GetStandardService()
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
const UpdateStandardController = async(req,res) => {
    try{
        const data=req.body
        console.log(data)
        const result=await service.UpdateStandardService(data)
    console.log(result)
        return res.status(200).json({
            message:"Data Updated",
            data:result
        })
    }catch(err){
        if(err){
    console.log(err)
            return res.status(400).json({
                message:"Client Error"
            })
        }
    console.log(err)
        return res.status(500).json({
            message:"Server Error"
        })
    }
}
const DeleteStandardController = async(req,res) => {
    try{
        const data=req.body
        const result=await service.DeleteStandardService(data)
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
module.exports={AddStandardController,GetStandardController,UpdateStandardController,DeleteStandardController}