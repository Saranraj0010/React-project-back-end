const model=require("./CircularModel")
const AddCircularService = async(data,file) => {
    try {
        const result = await model.AddCircularModel(data.text,data.select,data.title,file)
        return result;
    } catch (err) {
        throw err;
    }
}
const GetCircularService = async() => {
    try {
        const result = await model.GetCircularModel();
        return result;
    } catch (err) {
        throw err;
    }
}
const UpdateCircularService = async(data) => {
    try{
        const result = await model.UpdateCircularModel(data.id,data.text,data.role_type,data.title,data.file);
        return result
    }catch(err){
        throw err;
    }
}
const DeleteCircularServicer = async(data) => {
    try{
        const result = await model.DeleteCircularModel(data.id);
        return result
    }catch(err){
        throw err;
    }
}
module.exports={AddCircularService,GetCircularService,UpdateCircularService,DeleteCircularServicer}