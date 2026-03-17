const model = require("./PaymentModel")
const AddPaymentService = async (data) => {
    const year = new Date().getFullYear();
    const db = await model.GetLastAdmissionModel()
    let id = 1;

    if (db.length > 0) {
        const lastId = db[0].roleNo.split("-")[2];
        id = parseInt(lastId) + 1;
    }
    const roleNo = `ADMISSION-${year}-${String(id).padStart(4, "0")}`;
    const result = await model.AddPaymentModel(roleNo,data.name, data.standard, data.section, data.downPayment,data.currentDownPayment, data.fees, data.balance,data.currentBalance,data.totalPaid,data.currentTotalPaid)
    return result
}
const GetPaymentService = async () => {
    const result = await model.GetPaymentModel()
    return result
}
const UpdatePaymentService = async (data) => {
    const result = await model.UpdatePaymentModel(data.roleNo,data.name, data.standard, data.section, data.downPayment,data.currentDownPayment, data.fees, data.balance,data.currentBalance,data.totalPaid,data.currentTotalPaid)
    return result
}
const DeletePaymentService = async (data) => {
    const result = await model.DeletePaymentModel(data.id)
    return result
}
module.exports = { AddPaymentService, GetPaymentService, UpdatePaymentService, DeletePaymentService }