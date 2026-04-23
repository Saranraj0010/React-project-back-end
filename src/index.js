const express = require('express')
const app = express()
const cors = require("cors")
const { router } = require('./router/router')
const dbconnection = require('./connection/connection')
// const port= 3000

// const whitelist = ['http://localhost:5173','http://localhost:5174','http://192.168.1.50:5173','http://192.168.1.50:5174', 'http://192.168.1.50:3001',"http://192.168.31.203:5173","https://react-project-front-end.vercel.app/"]
// const corsOptions = {
//     origin: function (origin, callback) {
//         if (whitelist.includes(origin) || !origin) {
//             callback(null, true)
//         } else {
//             callback(new Error('Not allowed by CORS'))
//         }
//     },
//          credentials: true
// }
// app.use(cors(corsOptions));
app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
    res.send("welcome")
});

app.listen(3001, '0.0.0.0', (error) => {
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