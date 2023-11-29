const mongoose = require("mongoose")

const propertySchema = mongoose.Schema({
    img: [String],
    rooms: String,
    quadrature: Number,
    floor: String,
    address: String,
    price: Number,
    typeRemont: String,
    typeSell: String, // продажа или аренда 
    typeProperty: String
})

const Property = mongoose.model("Property", propertySchema)

module.exports = Property