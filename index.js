const express = require('express')
const app=express()
// const port= 3000

// console.log("ASDFBASDFASDNFSDf")
app.get("/",(req,res)=>{
    // res.send("hello world")
    res.send("welcome")
});
app.listen(3000,(error)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log(`http://localhost:3000`)
    }
})