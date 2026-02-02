const connection=require("../Src/connection/connection")
const AddLoginModel = (UserId,Password) => {
    new Promise((resolve, reject) => {
        connection.connection.query(query,[UserId,Password],
            (err,res)=>{
                if(err){
                    reject(err)
                }
                else{
                    resolve(res)
                }
            })
    })
}
module.exports={AddLoginModel}