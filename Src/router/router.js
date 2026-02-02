const express=require("express")
const app=express()
const router=express.Router()
const Controller=require('../practice/Controller')
const FormController=require("../layout/container/regiesterForm/FormController")
const LoginController=require("../layout/login/LoginController")
const SinUpController=require("../layout/signup/SignUpController")
// const FormController=require("./FormController")

app.use(express.json())

router.post("/v1/AddUser",Controller.AddController)
router.get("/v1/getFormUser",Controller.GetController )
router.patch("/v1/UpdateFormUser",Controller.UpdateControler)
router.patch("/v1/DeleteFormUser",Controller.DeleteController)
router.post("/v1/AddFrom",Controller.AddForm)
                // studentForm
router.post("/v1/addForm",FormController.addFormController)
router.get("/v1/getForm",FormController.getFormController)
router.patch("/v1/updateForm",FormController.updateFormController)
router.patch("/v1/deleteForm",FormController.deleteFormController)
                // LoginForm
router.post("/v1/addLogin",LoginController.AddLoginController)
                // SignUp Form
router.post("/v1/addSignUp",SinUpController.AddSignUpController)
router.get("/v1/getSignUp",SinUpController.GetSignUpController)
router.patch("/v1/updateSignUp",SinUpController.UpdateSignUpController)
router.patch("/v1/deleteSignUp",SinUpController.DeleteSignUpController)
module.exports={router}