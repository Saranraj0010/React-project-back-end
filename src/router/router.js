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
const section=require("../layout/section/SectionController")
const staffAllocation=require("../layout/staffAllocation/StaffAllocationController")
const subject=require("../layout/subject/SubjectController")
const fees = require("../layout/fees/FeesController")
const payment=require("../layout/payment/PaymentController")
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
//Section
router.post("/v1/addSection",section.AddSectionController)
router.get("/v1/getSection",section.GetSectionController)
router.patch("/v1/updateSection",section.UpdateSectionController)
router.patch("/v1/deleteSection",section.DeleteSectionController)
//StaffAllocation
router.post("/v1/addAllocation",staffAllocation.AddStaffAllocationController)
router.get("/v1/getAllocation",staffAllocation.GetStaffAllocationController)
router.patch("/v1/updateAllocation",staffAllocation.UpdateStaffAllocationController)
router.patch("/v1/deleteAllocation",staffAllocation.DeleteStaffAllocationController)
//Subject
router.post("/v1/addSubject",subject.AddSubjectController)
router.get("/v1/getSubject",subject.GetSubjectController)
router.patch("/v1/updateSubject",subject.UpdateSubjectController)
router.patch("/v1/deleteSubject",subject.DeleteSubjectController)
//Fees
router.post("/v1/addFees",fees.AddFeesController)
router.get("/v1/getFees",fees.GetFeesController)
router.patch("/v1/updateFees",fees.UpdateFeesController)
router.patch("/v1/deleteFees",fees.DeleteFeesController)
//Payments
router.post("/v1/addPayment",payment.AddPaymentController)
router.get("/v1/getPayment",payment.GetPaymentController)
router.post("/v1/updatePayment",payment.UpdatePaymentController)

module.exports = { router }