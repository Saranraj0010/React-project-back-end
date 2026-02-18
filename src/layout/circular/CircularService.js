const model=require("./CircularModel")
const AddCircularService = async(data) => {
    try {
        const result = await model.AddCircularModel(data.text,data.select,data.title)
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
const UpdateCircularService = () => {
}
const DeleteCircularServicer = () => {
}
module.exports={AddCircularService,GetCircularService,UpdateCircularService,DeleteCircularServicer}