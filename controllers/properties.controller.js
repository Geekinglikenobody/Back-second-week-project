const Property = require("../models/Property.model")

module.exports.propertyController = {
    createProperty: async(req,res) => {
        const {img,rooms,quadrature,floor,address,price,typeSell,typeProperty} = req.body
        try {
            const property = await Property.create({
                img,
                rooms,
                quadrature,
                floor,
                address,
                price,
                typeSell,
                typeProperty
            })
            return res.json(property)
        } catch (error) {
            return res.status(401).json(`Уже есть картинка ${error.message}`)
        }
    },
    getProperties: async(req,res) => {
        try {
            const data = await Property.find()
            return res.json(data)
        } catch (error) {
            return res.status(401).json(error.message)
        }
    }
}