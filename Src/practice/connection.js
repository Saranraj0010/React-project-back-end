const mysql2=require('mysql2')

const dbconnection=mysql2.createConnection({
    host:"127.0.0.1",
    port:"3306",
    user:"root",
    password:"saran5",
    database:"saran",
})
module.exports={dbconnection}