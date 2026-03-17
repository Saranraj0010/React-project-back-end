const Service = require("./SignUpService")
const AddSignUpController = async (req, res) => {
    try {
        const data = req.body
        const result = await Service.AddSignUpService(data)
        return res.status(200).json({
            message: "Account Added",
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
        else {
            console.log(err)
            return res.status(500).json({
                message: "Server Error"
            })
        }
    }
}
const GetSignUpController = async (req, res) => {
    try {
        const result = await Service.GetSignUpService()
        return res.status(200).json({
            message: "Data Geted",
            data: result
        })
    }
    catch (err) {
        if (err) {
            console.log(err)
            return res.status(400).json({
                message: "Data Get Failed"
            })
        }
        else {
            console.log(err)
            return res.status(500).json({
                message: "Server Error"
            })
        }
    }

}
const UpdateSignUpController = async (req, res) => {
    try {
        const data = req.body
        const result = await Service.UpdateSignUpService(data)
        return res.status(200).json({
            message: "User Updated",
            data: result
        })
    }
    catch (err) {
        if (err) {
            console.log(err)
            return res.status(400).json({
                message: "User Updated Failed",
            })
        }
        else {
            confirm.log(err)
            return res.status(500).json({
                message: "Server Error"
            })
        }
    }
}
const DeleteSignUpController = async (req, res) => {
    try {
        const data = req.body
        const result = await Service.DeleteSignUpService(data)
        return res.status(200).json({
            message: "User Deleted",
            data: result
        })
    }
    catch (err) {
        if (err) {
            console.log(err)
            return res.status(400).json({
                message: "User Delete Failed"
            })
        }
        else {
            console.log(err)
            return res.status(500).json({
                message: "Server Error"
            })
        }
    }
}
module.exports = { AddSignUpController, GetSignUpController, UpdateSignUpController, DeleteSignUpController }