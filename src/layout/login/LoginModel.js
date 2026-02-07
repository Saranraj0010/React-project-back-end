const connection=require("../../connection/connection")
const AddLoginModel = (UserId,Password) => {
    return new Promise((resolve, reject) => {
        let query=`insert into loginpage (UserId,Password) value (?,?)`
        connection.connection.query(query,[UserId,Password],
            (err,res)=>{
                if(err){
                    reject(err)
                }
                else{
                    resolve(res)
                    console.log(Password)
                }
            })
    })
}
module.exports={AddLoginModel}