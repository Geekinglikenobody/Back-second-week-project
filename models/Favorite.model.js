const  mongoose = require("mongoose")

const favoriteSchema = mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    properties: [{
        type:mongoose.SchemaTypes.ObjectId,
        ref: "Property"
    }]
})

const Favorite = mongoose.model('Favorite', favoriteSchema)
module.exports = Favorite