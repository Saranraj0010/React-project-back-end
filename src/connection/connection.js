const mysql2=require('mysql2')

const connection=mysql2.createConnection({
    host:"127.0.0.1",
    port:"3306",
    user:"react_user",
    password:"StrongPassword123!",
    database:"react_project_db",
})
module.exports={connection}