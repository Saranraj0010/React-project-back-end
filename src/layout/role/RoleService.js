const modul=require("./RoleModel")
const AddRoleService = async(data) => {
    const result=await modul.AddRoleModel(data.role)
    return result
}
const GetRoleService = async() => {
    const result=await modul.GetRoleModel()
    return result
}
const UpdateRoleService = async(data) => {
    const result=await modul.UpdateRoleModel(data.role,data.id)
    return result
}
const DeleteRoleService = async(data) => {
    const result=await modul.DeleteRoleModel(data.id)
    return result
}
module.exports ={AddRoleService,GetRoleService,UpdateRoleService,DeleteRoleService}