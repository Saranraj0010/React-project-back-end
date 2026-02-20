const modul = require("./SectionModel")
const AddSectionService = async (data) => {
    const result = await modul.AddSectionModel(data.section)
    console.log(result), "ser"
    return result
}
const GetSectionService = async () => {
    const result = await modul.GetSectionModel()
    return result
}
const UpdateSectionService = async (data) => {
    const result = await modul.UpdateSectionModel(data.id,data.section,)
    console.log(result)
    return result
}
const DeleteSectionService = async (data) => {
    const result = await modul.DeleteSectionModel(data.id)
    return result
}
module.exports = { AddSectionService, GetSectionService, UpdateSectionService, DeleteSectionService }