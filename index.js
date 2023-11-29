require("dotenv").config()
const cors = require("cors")
const path = require("path")
const mongoose = require("mongoose")
const express = require("express")

const app = express()

app.use(express.json())
app.use(cors())

app.use("/images", express.static(path.resolve(__dirname, "images")))

// routes
app.use(require("./routes/users.route"))
app.use(require("./routes/comments.route"))
//

mongoose.connect("mongodb+srv://mitkorol90:mitkorol90@cluster0.zpgt7p8.mongodb.net/Project-second-week")
.then(() => console.log('ok'))
.catch(() => console.log('error'))

app.listen(3030, () => console.log("Сервер запущен!"))
