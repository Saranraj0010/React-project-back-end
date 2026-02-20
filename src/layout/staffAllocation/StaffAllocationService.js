const model=require("./StaffAllocationModel")
const AddStaffAllocationService = async(data) => {
    const result=await model.AddStaffAllocationModel(data.staff,data.standard,data.section,data.subject)
    return result
}
const GetStaffAllocationService = async() => {
    const result=await model.GetStaffAllocationModel()
    return result
}
const UpdateStaffAllocationService = async(data) => {
    const result=await model.UpdateStaffAllocationModel(data.id,data.staff,data.standard,data,section,data.subject)
    return result
}
const DeleteStaffAllocationService = async(data) => {
    const result=await model.DeleteStaffAllocationModel(data.id)
    return result
}
module.exports={ AddStaffAllocationService,GetStaffAllocationService,UpdateStaffAllocationService,DeleteStaffAllocationService}