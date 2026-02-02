const FormModel=require("./FormModel")

const addFormService = async(data) => {
    // const [year, month, day] = data.dateOfBirth.split("-");
    // const formattedDOB = `${day}-${month}-${year}`;
    // console.log(formattedDOB)
    const result=await FormModel.addFormModel(data.studentId,data.firstName,data.middleName,data.lastName,data.dateOfBirth,data.streetAddress,data.city,data.statee,data.pincode,data.country,data.email,data.phoneNumber)
    
    return result
}
const getFormService = async(data) => {
    const result=await FormModel.getFormModel()
    return result
    
}
const updateFormService = async(data) => {
    
    const result=await FormModel.updateFormModel(data.firstName,data.middleName,data.lastName,data.dateOfBirth,data.streetAddress,data.city,data.statee,data.pincode,data.country,data.email,data.phoneNumber,data.studentId)
    return result
    
}
const deleteFormService = async(data) => {
    const result=await FormModel.deleteFormModel(data.studentId)
    return result
}
module.exports = {addFormService,getFormService,updateFormService,deleteFormService}