const Property = require("../models/Property.model")

module.exports.propertyController = {
    createProperty: async(req,res) => {
        const {desc,rooms,quadrature,floor,address,price,typeSell,typeProperty} = req.body

        const images = req.files && req.files.map(item => item.path)
        try {
            const property = await Property.create({
                img : images,
                desc,
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
    },
    filterProperties: async(req,res) => {
        try {
            const {typeProperty,rooms,minPrice,maxPrice} = req.body
            // const parsedMinPrice = parseFloat(minPrice);
            // const parsedMaxPrice = parseFloat(maxPrice);
            console.log(minPrice, maxPrice);
            const filterConditions = {
                typeProperty,
                rooms,
                price:{$gte: minPrice, $lte: maxPrice }
            }
            const data = await Property.find(filterConditions)
            console.log(data);
            return res.json(data)
        } catch (error) {
            return res.status(401).json(error.message)
        }
    },
    deleteProperties: async(req,res) => {
        try {
            await Property.deleteMany()
            return res.json("Удалено")
        } catch (error) {
            return res.status(401).json(error.message)
        }
    }
    
}

// 1516