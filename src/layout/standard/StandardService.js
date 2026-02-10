const modul=require("./StandardModel")
const AddStandardService = async(data) => {
    const result=await modul.AddStandardModel(data.standard)
        console.log(result),"ser"
    return result
}
const GetStandardService = async() => {
    const result=await modul.GetStandardModel()
    return result
}
const UpdateStandardService = async() => {
    const result=await modul.UpdateStandardModel(data.standard)
    return result
}
const DeleteStandardService = async() => {
    const result=await modul.DeleteStandardModel(data.id)
    return result
}
module.exports ={AddStandardService,GetStandardService,UpdateStandardService,DeleteStandardService}