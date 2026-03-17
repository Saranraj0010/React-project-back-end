const modul = require("./StandardModel")
const AddStandardService = async (data) => {
    const result = await modul.AddStandardModel(data.standard)
    return result
}
const GetStandardService = async () => {
    const result = await modul.GetStandardModel()
    return result
}
const UpdateStandardService = async (data) => {
    const result = await modul.UpdateStandardModel(data.id,data.standard,)
    return result
}
const DeleteStandardService = async (data) => {
    const result = await modul.DeleteStandardModel(data.id)
    return result
}
module.exports = { AddStandardService, GetStandardService, UpdateStandardService, DeleteStandardService }