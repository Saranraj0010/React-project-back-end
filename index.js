const express = require('express')
const app = express()
const cors = require("cors")
const { router } = require('./src/router/router')
const dbconnection = require('./src/connection/connection')
const uplord = require("./src/Upload")

const whitelist = ['http://localhost:5173']
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.includes(origin) || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
    res.send("welcome")
});
console.log("hello")
app.post("v1/upload", uplord.upload.single("image"), (req, res) => {
    try {
        return res.json({
            message: "file uploarded",
            data:req.body
        })}
    catch (err) {
        console.log(err)
    }
})
app.listen(3001, (error) => {
    if (error) {
        return console.log("Server ERror")
    }
    dbconnection.connection.connect((err) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log("CONNECT DB SUCCESS", "http://localhost:3001")

        }
    })
})