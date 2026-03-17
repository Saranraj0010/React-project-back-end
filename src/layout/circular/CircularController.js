const service = require("./CircularService")
const uplord = require("../../../src/Upload")

const AddCircularController = async (req, res) => {
    try {
        const data = req.body
        const file=req.file
        const result = await service.AddCircularService(data,file)
        return res.json({
            message: "Circular added successfully",
            data:result
        })
    }
    catch (err) {
        if (err) {
            console.log(err)
            return res.status(400).json({

                message: "Circular Data Not Added",
                error: err
            })
        }
        console.log(err)
        return res.status(500).json({
            message: "Server Error",
            error: err
        })
    }
}
const GetCircularController = async (req, res) => {
    try {
        const result = await service.GetCircularService()
        return res.json({
            message: "Circular Get successfully",
            data:result
        })
    }
    catch (err) {
        if (err) {
            console.log(err)
            return res.status(400).json({

                message: "Circular Data Not Added",
                error: err
            })
        }
        console.log(err)
        return res.status(500).json({
            message: "Server Error",
            error: err
        })
    }
}
const UpdateCircularController = async(req,res) => {
    try {
        const data=req.body
        const result = await service.UpdateCircularService(data)
        return res.json({
            message: "Circular Updated successfully",
            data:result
        })
    }
    catch (err) {
        if (err) {
            console.log(err)
            return res.status(400).json({

                message: "Circular Data Not Updated",
                error: err
            })
        }
        console.log(err)
        return res.status(500).json({
            message: "Server Error",
            error: err
        })
    }
}
const DeleteCircularController = async(req,res) => {
    try {
        const data=req.body
        const result = await service.DeleteCircularServicer(data)
        return res.json({
            message: "Circular Deleted successfully",
            data:result
        })
    }
    catch (err) {
        if (err) {
            console.log(err)
            return res.status(400).json({

                message: "Circular Data Not Deleted",
                error: err
            })
        }
        console.log(err)
        return res.status(500).json({
            message: "Server Error",
            error: err
        })
    }
}
module.exports = { AddCircularController, GetCircularController, UpdateCircularController, DeleteCircularController }