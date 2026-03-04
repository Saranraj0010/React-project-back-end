const service = require("./FeesService")
const AddFeesController = async (req, res) => {
    try {
        const data = req.body
        console.log(data)
        const result = await service.AddFeesService(data)
        return res.status(200).json({
            message: "Fees Added",
            data: result
        })
    }
    catch (err) {
        if (err) {
            return res.status(400).json({
                message: "Fees Not Added",
                data: err
            })
        }
        return res.status(500).json({
            message: "Server Error",
            data: err
        })
    }
}
const GetFeesController = async (req,res) => {
    try {
        const result = await service.GetFeesService()
        return res.status(200).json({
            message: "Fees Geted",
            data: result
        })
    }
    catch(err){
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
const UpdateFeesController = async (req, res) => {
    try {
        const data = req.body
        const result = await service.UpdateFeesService(data)
        return res.status(200).json({
            message: "Fees Update",
            data: result
        })
    }
    catch (err) {
        if (err) {
            return res.status(400).json({
                message: "Fees update Failed",
                data: err
            })
        }
        return res.status(500).json({
            message: "server Error",
            data: err
        })
    }
}
const DeleteFeesController = async (req, res) => {
    try {
        const data = req.body
        const result = await service.DeleteFeesService(data)
        return res.status(200).json({
            message: "Fees Deleted",
            data: result
        })
    }
    catch (err) {
        if (err) {
            return res.status(400).json({
                message: "Fees Deleted Failed",
                data: err
            })
        }
        return res.status(500).json({
            message: "Server Error",
            data: err
        })
    }
}
module.exports = { AddFeesController, GetFeesController, UpdateFeesController, DeleteFeesController }