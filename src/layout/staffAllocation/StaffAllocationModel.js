const connection=require("../../connection/connection")
const AddStaffAllocationModel = (staff,standard,section,subject) => {
    return new Promise((resolve, reject) => {
        let query=`insert into allocation(staff,standard,section,subject)value(?,?,?,?)`
        connection.connection.query(query,[staff,standard,section,subject],
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
const GetStaffAllocationModel = () => {
    return new Promise((resolve, reject) => {
        let query=`SELECT id,staff, standard, section, subject FROM allocation WHERE isDelete = 1`
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
const UpdateStaffAllocationModel = (id,staff,standard,section,subject) => {
    return new Promise((resolve, reject) => {
        let query=`Update allocation set staff=?,standerd=?,section=?,subject=? where id=?`
        connection.connection.query(query,[staff,standard,section,subject,id],
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
const DeleteStaffAllocationModel = (id) => {
    return new Promise((resolve, reject) => {
        let query=`Update allocation set isDelete=0 where id=?`
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
module.exports={ AddStaffAllocationModel,GetStaffAllocationModel,UpdateStaffAllocationModel,DeleteStaffAllocationModel}