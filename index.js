require("dotenv").config()
const cors = require('cors')
const path = require("path")
const mongoose = require("mongoose")
const express = require("express")

const app = express()

const http = require("http").Server(app)

app.use(express.json())
app.use(cors())
app.use("/images", express.static(path.resolve(__dirname, "images")))

const socketIO = require("socket.io")(http, {
    cors : {
        origin: "http://localhost:5173"
    }
})

app.get("/api", (req,res) => {
    res.json( {
        message: "Hello"
    })
})

const users = []

socketIO.on("connection", (socket) => { // я хз как но заработало и он почему каждый раз новый айдишник генит
    console.log(`${socket.id} user connected`); // Достает айди юзера
    socket.on("message", (data) => {
        socketIO.emit("response", data)
        console.log("Message",data);
    })
    socket.on("typing", (data) => socket.broadcast.emit("responseTyping", data))
    socket.on("newUser", (data) => {
        users.push(data)
        socketIO.emit("responseNewUser", users)
    })
    socket.on("disconnect", () => {
        console.log(`${socket.id} disconnect`);
    })
})
// routes
app.use(require("./routes/users.route"))
app.use(require("./routes/comments.route"))
app.use(require("./routes/properties.route"))
//

mongoose.connect("mongodb+srv://mitkorol90:mitkorol90@cluster0.zpgt7p8.mongodb.net/Project-second-week")
.then(() => console.log('ok'))
.catch(() => console.log('error'))

http.listen(3030, () => console.log("Сервер запущен!"))
