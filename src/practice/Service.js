const model = require("./Model")

const AddService =async (data) =>{
    const result= await model.AddModel(data.id,data.name,data.address,data.email)
    return result
}
const AddForm = async(data)=>{
    const result= await model.AddForm(data.id,data.Name,data.age)
    return result
}

const getService = async() => {
    const result=await model.getModel()
    return result
}

const UpdateService = async(data) => {
    const result=await model.UpdateModel(data.id,data.name,data.address,data.email)
    return result
}

const DeleteService = async(table) => {
    const result=await model.DeleteModel(table.id)
    return result
}

module.exports={AddService,getService,UpdateService,DeleteService,AddForm}