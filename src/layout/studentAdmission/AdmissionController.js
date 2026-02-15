const service = require("./AdmissionService")
const AddAdmissionController = async (req, res) => {
    try {
        const data = req.body
        const result = await service.AddAdmissionService(data)
        return res.status(200).json({
            message: "Student Admission Success",
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
const GetAdmissionController = async (req, res) => {
    try {
        const result = await service.GetAdmissionService()
        return res.status(200).json({
            message: "Student Data Get",
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
const UpdateAdmissionController = async (req, res) => {
    try {
        const data = req.body
        console.log(data,"fornt")
        const result = await service.UpdateAdmissionService(data)
        return res.status(200).json({
            message: "Student Admission Updated",
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
const DeleteAdmissionController = async (req, res) => {
    try {
        const data = req.body
        const result = await service.DeleteAdmissionService(data)
        return res.status(200).json({
            message: "Student Deleted",
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
module.exports = { AddAdmissionController, GetAdmissionController, UpdateAdmissionController, DeleteAdmissionController }