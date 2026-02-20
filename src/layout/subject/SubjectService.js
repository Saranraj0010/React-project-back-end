const model=require("./SubjectModel")
const AddSubjectService = async(data) => {
    const result=await model.AddSubjectModel(data.subject)
    return result
}
const GetSubjectService = async() => {
    const result=await model.GetSubjectModel()
    return result
}
const UpdateSubjectService = async(data) => {
    const result=await model.UpdateSubjectModel(data.subject,data.id)
    return result
}
const DeleteSubjectService = async(data) => {
    const result=await model.DeleteSubjectModel(data.id)
    return result
}
module.exports={ AddSubjectService,GetSubjectService,UpdateSubjectService,DeleteSubjectService }