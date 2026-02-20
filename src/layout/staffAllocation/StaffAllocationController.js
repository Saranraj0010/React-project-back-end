const service = require("./StaffAllocationService")
const AddStaffAllocationController = async (req, res) => {
    try {
        const data = req.body
        const result = await service.AddStaffAllocationService(data)
        return res.status(200).json({
            message: "Staff Allocated",
            data: result
        })
    } catch (err) {
        if (err) {
            return res.status(400).json({
                message: "Client error"
            })
        }
        return res.status(500).json({
            message: "Server Error"
        })
    }
}
const GetStaffAllocationController = async (req, res) => {
    try {
        const result = await service.GetStaffAllocationService()
        return res.status(200).json({
            message: "Staff Get Allocated",
            data:result
        })
    }
    catch (err) {
        if (err) {
            return res.status(400).json({
                message: "Client error"
            })
        }
        return res.status(500).json({
            message: "Server Error"
        })
    }
}
const UpdateStaffAllocationController = async (req, res) => {
    try {
        const data = req.body
        const result = await service.UpdateStaffAllocationService(data)
        return res.status(200).json({
            message: "Staff Allocate Updated",
            data: result
        })
    } catch (err) {
        if (err) {
            return res.status(400).json({
                message: "Client error"
            })
        }
        return res.status(500).json({
            message: "Server Error"
        })
    }
}
const DeleteStaffAllocationController = async (req, res) => {
     try {
        const data = req.body
        const result = await service.DeleteStaffAllocationService(data)
        return res.status(200).json({
            message: "Staff Allocate Deleted",
            data: result
        })
    } catch (err) {
        if (err) {
            return res.status(400).json({
                message: "Client error"
            })
        }
        return res.status(500).json({
            message: "Server Error"
        })
    }
}
module.exports = { AddStaffAllocationController, GetStaffAllocationController, UpdateStaffAllocationController, DeleteStaffAllocationController }