const service = require("./SubjectService")
const AddSubjectController = async (req, res) => {
    try {
        const data = req.body
        const result = await service.AddSubjectService(data)
        return res.status(200).json({
            message: "Success",
            data: result
        })
    } catch (err) {
        if (err) {
            console.log(err)
            return res.status(400).json({
                message: "Client Error"
            })
        }
        return res.status(500).json({
            message: "Server Error"
        })
    }
}
const GetSubjectController = async (req, res) => {
    try {
        const result = await service.GetSubjectService()
        return res.status(200).json({
            message: "Geted",
            data: result
        })
    } catch (err) {
        if (err) {
            return res.status(400).json({
                message: "Client Error"
            })
        }
        return res.status(500).json({
            message: "Server Error"
        })
    }
}
const UpdateSubjectController = async (req, res) => {
    try {
        const data = req.body
        const result = await service.UpdateSubjectService(data)
        return res.status(200).json({
            message: "Data Updated",
            data: result
        })
    } catch (err) {
        if (err) {
            console.log(err)
            return res.status(400).json({
                message: "Client Error"
            })
        }
        console.log(err)
        return res.status(500).json({
            message: "Server Error"
        })
    }
}
const DeleteSubjectController = async (req, res) => {
    try {
        const data = req.body
        const result = await service.DeleteSubjectService(data)
        return res.status(200).json({
            message: "Data Deleted",
            data: result
        })
    } catch (err) {
        if (err) {
            return res.status(400).json({
                message: "Client Error"
            })
        }
        return res.status(500).json({
            message: "Server Error"
        })
    }
}
module.exports = { AddSubjectController, GetSubjectController, UpdateSubjectController, DeleteSubjectController }