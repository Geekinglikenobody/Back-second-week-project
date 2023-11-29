const mongoose = require('mongoose')


const commentsSchema = mongoose.Schema({
    text: String,
    userId: 
    { 
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    propertyId: 
    {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Property"
    }
})

const Comments = mongoose.model('Comments', commentsSchema)

module.exports = Comments