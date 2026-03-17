const service = require("./PaymentService")
const AddPaymentController = async (req, res) => {
    try {
        const data = req.body
        const result = await service.AddPaymentService(data)
        return res.status(200).json({
            message: "Payment Added",
            data: result
        })
    }
    catch (err) {
        if (err) {
            console.log(err)
            return res.status(400).json({
                message: "Payment Not Added",
                data: err
            })
        }
        return res.status(500).json({
            message: "Server Error",
            data: err
        })
    }
}
const GetPaymentController = async (req,res) => {
    try {
        const result = await service.GetPaymentService()
        return res.status(200).json({
            message: "Payment Geted",
            data: result
        })
    }
    catch(err){
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
const UpdatePaymentController = async (req, res) => {
    try {
        const data = req.body
        const result = await service.UpdatePaymentService(data)
        return res.status(200).json({
            message: "Payment Update",
            data: result
        })
    }
    catch (err) {
        if (err) {
            console.log(err)
            return res.status(400).json({
                message: "Payment update Failed",
                data: err
            })
        }
            console.log(err)
        return res.status(500).json({
            message: "server Error",
            data: err
        })
    }
}
const DeletePaymentController = async (req, res) => {
    try {
        const data = req.body
        const result = await service.DeletePaymentService(data)
        return res.status(200).json({
            message: "Payment Deleted",
            data: result
        })
    }
    catch (err) {
        if (err) {
            return res.status(400).json({
                message: "Payment Deleted Failed",
                data: err
            })
        }
        return res.status(500).json({
            message: "Server Error",
            data: err
        })
    }
}
module.exports = { AddPaymentController, GetPaymentController, UpdatePaymentController, DeletePaymentController }