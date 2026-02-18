const express = require("express")
const app = express()
const router = express.Router()
const {upload}=require("../Upload")

const controller = require('../practice/Controller')
const formController = require("../layout/studentForm/FormController")
const loginController = require("../layout/login/LoginController")
const sinUpController = require("../layout/signup/SignUpController")
const staffController = require("../layout/staff/StaffController")
const studentAdmission=require("../layout/studentAdmission/AdmissionController")
const standard=require("../layout/standard/StandardController")
const role=require("../layout/role/RoleController")
const circular=require("../layout/circular/CircularController")
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
router.post("/v1/addStaff", staffController.AddStaffController)
router.get("/v1/getStaff",staffController.GetStaffController)
router.patch("/v1/updateStaff",staffController.UpdateStaffController)
router.patch("/v1/deleteStaff",staffController.DeleteStaffController)
// student Admission
router.post("/v1/addStudent",studentAdmission.AddAdmissionController)
router.get("/v1/getStudent",studentAdmission.GetAdmissionController)
router.patch("/v1/updateStudent",studentAdmission.UpdateAdmissionController)
router.patch("/v1/deleteStudent",studentAdmission.DeleteAdmissionController)
// Standard
router.post("/v1/addStandard",standard.AddStandardController)
router.get("/v1/getStandard",standard.GetStandardController)
router.patch("/v1/updateStandard",standard.UpdateStandardController)
router.patch("/v1/deleteStandard",standard.DeleteStandardController)
// Role
router.post("/v1/addRole",role.AddRoleController)
router.get("/v1/getRole",role.GetRoleController)
router.patch("/v1/updateRole",role.UpdateRoleController)
router.patch("/v1/deleteRole",role.DeleteRoleController)
//Circular

router.post("/v1/addCircular",upload.single("file"),circular.AddCircularController);
router.get("/v1/getCircular",circular.GetCircularController)
router.patch("/v1/updateCircular",circular.UpdateCircularController)
router.patch("/v1/deleteCircular",circular.DeleteCircularController)

module.exports = { router }