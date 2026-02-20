const connection=require("../../connection/connection")
const AddSubjectModel = (subject) => {
    return new Promise((resolve, reject) => {
        let query=`insert into subjectData (subject) value (?);`
        connection.connection.query(query,[subject],
            (err,res)=>{
                if(err){
                    reject(err)
                }
                else{
                    resolve(res)
                }
            }
        )
    })
}
const GetSubjectModel = () => {
    return new Promise((resolve, reject) => {
        let query=`select id,subject from subjectData where isDelete=1;`
        connection.connection.query(query,
            (err,res)=>{
                if(err){
                    reject(err)
                }
                else{
                    resolve(res)
                }
            }
        )
    })
}
const UpdateSubjectModel = (subject,id) => {
    return new Promise((resolve, reject) => {
        let query=`UPDATE subjectData SET subject=? WHERE id=?;`
        connection.connection.query(query,[subject,id],
            (err,res)=>{
                if(err){
                    reject(err)
                }
                else{
                    resolve(res)
                }
            }
        )
    })
}
const DeleteSubjectModel = (id) => {
    return new Promise((resolve, reject) => {
        let query=`UPDATE subjectData SET isDelete=0 WHERE id=?`
        connection.connection.query(query,[id],
            (err,res)=>{
                if(err){
                    reject(err)
                }
                else{
                    resolve(res)
                }
            }
        )
    })
}
module.exports={ AddSubjectModel,GetSubjectModel,UpdateSubjectModel,DeleteSubjectModel }