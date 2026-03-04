const connection = require("../../connection/connection")
const AddFeesModel = (fees,standard) => {
    return new Promise((resolve, reject) => {
        let query=`insert into feesData (standard,fees) value (?,?)`
        connection.connection.query(query,[standard,fees],
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
const GetFeesModel = () => {
    return new Promise((resolve, reject) => {
        let query=`select id,fees,standard from feesData where isDelete=1`
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
const UpdateFeesModel = () => {
}
const DeleteFeesModel = () => {
}
module.exports = { AddFeesModel,GetFeesModel,UpdateFeesModel,DeleteFeesModel }