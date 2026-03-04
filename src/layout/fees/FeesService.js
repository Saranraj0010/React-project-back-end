const model = require("./FeesModel")
const AddFeesService = async(data) => {
    const result=await model.AddFeesModel(data.fees,data.standard)
    return result
}
const GetFeesService = async() => {
    const result =await model.GetFeesModel()
    return result
}
const UpdateFeesService = async(data) => {
    const result =await model.UpdateFeesModel(data.fees,data.id)
    return result
}
const DeleteFeesService = async(data) => {
    const result=await model.DeleteFeesModel(data.id)
    return result
}
module.exports = { AddFeesService,GetFeesService,UpdateFeesService,DeleteFeesService }