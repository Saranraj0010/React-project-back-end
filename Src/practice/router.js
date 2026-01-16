const express=require("express")
const app=express()
const router=express.Router()
const Controller=require('./Controller')
const FormController=require("../FormController")
// const FormController=require("./FormController")

app.use(express.json())

router.post("/v1/AddUser",Controller.AddController)
router.get("/v1/getFormUser",Controller.GetController )
router.patch("/v1/UpdateFormUser",Controller.UpdateControler)
router.patch("/v1/DeleteFormUser",Controller.DeleteController)

router.post("/v1/addForm",FormController.addFormController)
router.get("/v1/getForm",FormController.getFormController)
router.patch("/v1/updateForm",FormController.updateFormController)
router.patch("/v1/deleteForm",FormController.deleteFormController)

module.exports={router}