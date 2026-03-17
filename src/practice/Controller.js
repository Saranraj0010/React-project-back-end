const Service = require("./Service")
const AddForm = async (req, res) => {
    try {
        const data = req.body
        const result = await Service.AddForm(data)
        return res.status(200).json({
            message: "Post Added",
            data: result
        })
    } catch (err) {
        if (err) {
            console.log(err)
            return res.status(400).json({
                message: "Post Failed",
            })
        }
    }
    return res.status(500).json({
        message: "server error"
    })
}
const AddController = async (req, res) => {
    try {

        const data = req.body
        const result = await Service.AddService(data)
        return res.status(200).json({
            message: "Post Added",
            data: result
        })
    }
    catch (err) {
        console.log(err, "ASDJFJDSJF")
        if (err) {
            return res.status(400).json({
                message: "Post Failed"
            })
        }
        // console.log("error",err)
    }

    return res.status(500).json({
        message: "server error"
    })
}

const GetController = async (req, res) => {
    try {

        const data = await Service.getService();
        return res.status(200).json({
            message: "Post Data Recived",
            data: data
        })

    }
    catch (err) {
        if (err) {
            return res.status(400).json({
                message: "Get Failed"
            })
        }
    }
    return res.status(500).json({
        message: "server error"
    })
}

const UpdateControler = async (req, res) => {
    try {
        const data = req.body
        const result = await Service.UpdateService(data)
        return res.status(200).json({
            message: "Data Updated",
            data: result
        })
    }
    catch (err) {
        if (err) {
            return res.status(400).json({
                message: "Updated Data Not Recived"
            })
        }
        return res.status(500).json({
            message: "server error"
        })
    }
} 

const DeleteController = async (req, res) => {
    try {
        const data = req.body
        const result = await Service.DeleteService(data)
        return res.status(200).json({
            message: "Data Deleted",
            data: result
        })
    }
    catch (err) {
        if (err) {
            return res.status(400).json({
                message: "Delete Failed"
            })
        }
    }
    return res.status(500).json({
        message: "Server Error"
    })

}
module.exports = { AddController, GetController, UpdateControler, DeleteController, AddForm }