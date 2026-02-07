const connection=require("../../connection/connection")
const AddSignUpModel = (UserName,PhoneNumber,Password) => {
    return new Promise((resolve, reject) => {
      let query=`insert into SignUppage(UserName,PhoneNumber,Password)value(?,?,?);`
      connection.connection.query(query,[UserName,PhoneNumber,Password],
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
const GetSignUpModel = () => {
    return new Promise((resolve, reject) => {
        let query=`select UserName,PhoneNumber,Password from SignUppage;`
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
const UpdateSignUpModel = (UserName,PhoneNumber,Password,id) => {
    return new Promise((resolve, reject) => {
        let query=`UPDATE SignUppage SET UserName =?,PhoneNumber =?,Password=? WHERE id=?;`
        connection.connection.query(query,[UserName,PhoneNumber,Password,id],
            (err,res)=>{
                if(err){
                    console.log(err)
                    reject(err)
                }
                else{
                    console.log(res)
                    resolve(res)
                }
            }
        )
    })
}
const DeleteSignUpModel = (id) => {
    return new Promise((resolve, reject) => {
        let query=`update SignUppage set isDelete=0 where id =?;`
        connection.connection.query(query,[id],
            (err,res)=>{
                if(err){
                    console.log(err)
                    reject(err)
                }
                else{
                    console.log(res)
                    resolve(res)
                }
            }
        )
    })
    
}
module.exports={AddSignUpModel,GetSignUpModel,UpdateSignUpModel,DeleteSignUpModel}