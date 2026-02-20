const service=require("./SectionService")
const AddSectionController = async(req,res) => {
    try{
        const data=req.body
        console.log(data,"co")
        const result=await service.AddSectionService(data)
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
const GetSectionController = async(req,res) => {
    try{
        const result=await service.GetSectionService()
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
const UpdateSectionController = async(req,res) => {
    try{
        const data=req.body
        console.log(data)
        const result=await service.UpdateSectionService(data)
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
const DeleteSectionController = async(req,res) => {
    try{
        const data=req.body
        const result=await service.DeleteSectionService(data)
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
module.exports={ AddSectionController,GetSectionController,UpdateSectionController,DeleteSectionController}