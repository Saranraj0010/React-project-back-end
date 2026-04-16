const mysql2=require('mysql2')

const connection=mysql2.createConnection({
    host:"sql3.freesqldatabase.com",
    port:"3306",
    user:"sql3823419",
    password:"t3WKGlRLDX!",
    database:"sql3823419",
})
module.exports={connection}