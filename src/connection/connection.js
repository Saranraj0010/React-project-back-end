const mysql2=require('mysql2')

const connection=mysql2.createConnection({
    host:"shinkansen.proxy.rlwy.net",
    port:"19179",
    user:"root",
    password:"PTAFqZZBFiOKczhTUKNOzrATujCUCWDI",
    database:"School_Db",
})
module.exports={connection}