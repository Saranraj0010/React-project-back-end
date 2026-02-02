const FormService = require("./FormService")
const addFormController = async (req, res) => {
    try {
        const data = req.body
        const result = await FormService.addFormService(data)
        return res.status(200).json({
            message: "Student Data Added",
            dates: result
        })
        
    }
    catch (err) {
        
        if (err) {
            console.log(err)
            return res.status(400).json({
                
                message: "Student Data Not Added",
                error: err
            })
        }
        return res.status(500).json({
            message: "Server Error",
            error: err
        })
    }
}
const getFormController = async (req, res) => {
    try {
        const result = await FormService.getFormService()
        return res.status(200).json({
            message: "Student Data Recived",
            data: result
        })
    }
    catch (err) {
        if(err){
            return res.status(400).json({
                message:"Student Data Not Recived",
                error:err
            })
        }
        return res.status(500).json({
            message:"Server Error",
            error:err
        })
    }

}
const updateFormController = async (req, res) => {
    try {
        const data = req.body
        console.log(data,"hello")
        const result = await FormService.updateFormService(data)
        console.log(result,"hello")
        return res.status(200).json({
            message: "Student Data Updateed",
            dates: result,
        })
        
    }
    catch (err) {
        
        if (err) {
            console.log(err)
            return res.status(400).json({
                
                message: "Student Data Not Updateed",
                error: err
            })
        }
        return res.status(500).json({
            message: "Server Error",
            error: err
        })
    }

}
const deleteFormController = async (req, res) => {
    try {
        const data = req.body
        const result = await FormService.deleteFormService(data)
        return res.status(200).json({
            message: "Student Data Deleted",
            dates: result,
        })
        
    }
    catch (err) {
        
        if (err) {
            console.log(err)
            return res.status(400).json({
                message: "Student Data Not Deleted",
                error: err
            })
        }
        return res.status(500).json({
            message: "Server Error",
            error: err
        })
    }
}
module.exports = { addFormController, getFormController, updateFormController, deleteFormController }