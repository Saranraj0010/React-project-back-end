const service = require("./CircularService")
const uplord = require("../../../src/Upload")

const AddCircularController = async (req, res) => {
    try {
        const data = req.body
        // {
        //     text: req.body.text,
        //     select: req.body.select,
        //     files: req.file ? req.file.filename : null
        // }
        const result = await service.AddCircularService(data)
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
const UpdateCircularController = () => {
}
const DeleteCircularController = () => {
}
module.exports = { AddCircularController, GetCircularController, UpdateCircularController, DeleteCircularController }