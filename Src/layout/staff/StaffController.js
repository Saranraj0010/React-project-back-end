const service = require("./StaffService")
const AddStaffController = async (req, res) => {
    try {
        const data = req.body
        console.log(data)
        const result = await service.AddStaffService(data)
        return res.status(200).json({
            message: "Staff Added SuccessFuly",
            data: result
        })
    }
    catch (err) {
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
const GetStaffController = async (req, res) => {
    try {
        const result = await service.GetStaffService()
        return res.status(200).json({
            message: "Staff Data get SuccessFuly",
            data: result
        })
    }
    catch (err) {
        if (err) {
            console.log(err)
            return res.status(400).json({
                message: "Client Error",
            })
        }
        return res.status(500).json({
            message: "Server Error"
        })
    }
}
const UpdateStaffController = async (req, res) => {
    try {
        const data = req.body
        const result = await service.UpdateStaffService(data)
        return res.status(200).json({
            message: "Staff Data Updated",
            data: result
        })
    }
    catch (err) {
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
const DeleteStaffController = async (req, res) => {
    try {
        const data = req.body
        const result = await service.DeleteStaffService(data)
        return res.status(200).json({
            message: "Staff Deleted",
            data: result
        })
    }
    catch (err) {
        if (err) {
                    console.log(err)
            return res.status(400).json({
                message: "Client Errror"
            })
        }
        return res.status(500).json({
            message: "Server Error"
        })
    }

}
module.exports = { AddStaffController, GetStaffController, UpdateStaffController, DeleteStaffController }