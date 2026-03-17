const express = require('express')
const app = express()
const cors = require("cors")
const { router } = require('./src/router/router')
const dbconnection = require('./src/connection/connection')
// const port= 3000

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

app.listen(3001, (error) => {
    if (error) {
        return console.log("Server ERror")
    }
    dbconnection.connection.connect((err) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log("🚀 Server running on http://localhost:3001");
            console.log("✅ Database Connected");
            console.log("📧 Mail server ready");
        }
    })
})