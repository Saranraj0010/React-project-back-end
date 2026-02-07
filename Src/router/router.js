const express = require("express")
const app = express()
const router = express.Router()
const controller = require('../practice/Controller')
const formController = require("../layout/studentForm/FormController")
const loginController = require("../layout/login/LoginController")
const sinUpController = require("../layout/signup/SignUpController")
const staffContriller = require("../layout/staff/StaffController")
app.use(express.json())

router.post("/v1/AddUser", controller.AddController)
router.get("/v1/getFormUser", controller.GetController)
router.patch("/v1/UpdateFormUser", controller.UpdateControler)
router.patch("/v1/DeleteFormUser", controller.DeleteController)
router.post("/v1/AddFrom", controller.AddForm)
// studentForm
router.post("/v1/addForm", formController.addFormController)
router.get("/v1/getForm", formController.getFormController)
router.patch("/v1/updateForm", formController.updateFormController)
router.patch("/v1/deleteForm", formController.deleteFormController)
// LoginForm
router.post("/v1/addLogin", loginController.AddLoginController)
// SignUp Form
router.post("/v1/addSignUp", sinUpController.AddSignUpController)
router.get("/v1/getSignUp", sinUpController.GetSignUpController)
router.patch("/v1/updateSignUp", sinUpController.UpdateSignUpController)
router.patch("/v1/deleteSignUp", sinUpController.DeleteSignUpController)
// Staff Form
router.post("/v1/addStaff", staffContriller.AddStaffController)
router.get("/v1/getStaff",staffContriller.GetStaffController)
router.patch("/v1/updateStaff",staffContriller.UpdateStaffController)
router.patch("/v1/deleteStaff",staffContriller.DeleteStaffController)
module.exports = { router }