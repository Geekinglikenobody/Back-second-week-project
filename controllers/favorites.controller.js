const Favorite = require("../models/Favorite.model")
const Property = require('../models/Property.model')

module.exports.favoriteController = {
    getFavorite: async (req,res) => {
        try {
            const favorite = await Favorite.findOne({user: req.user.id}).populate("properties")
            return res.json(favorite)
        } catch (error) {
            return res.status(401).json(error.message)
        }
    },
    addPropertyInFavorite: async (req,res) => {
        const {propertyId} = req.params
        console.log(propertyId);
        try {
            const property = await Property.findById(propertyId)
            const favorite = await Favorite.findOneAndUpdate(
                {user:req.user.id},
                {
                    $addToSet: {properties: propertyId}
                },
                {new: true}
            )
            console.log(favorite, req.user.id);
            return res.json(favorite
                )
        } catch (error) {
            return res.status(401).json(error.message)
        }
    },
    deleteProperty: async (req,res) => {
        const {id} = req.params
        try {
            const favorite = await Favorite.findOneAndUpdate(
                {user:req.user.id},
                {
                    $pull: {properties : id}
                },
                {new: true}
            )
            const newFavorite = await Favorite.findOne({user:req.user.id}).populate("properties")
                console.log(newFavorite);
            return res.json(newFavorite)
        } catch (error) {
            return res.status(401).json(error.message)
        }
    }
}