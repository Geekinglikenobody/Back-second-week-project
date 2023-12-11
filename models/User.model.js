const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    login: String,
    password: String,
    avatar: String,
    admin: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        default: "user"
    },
})

const User = mongoose.model("User", userSchema)

module.exports = User