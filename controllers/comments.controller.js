const Comments = require("../models/Comments.molel");

module.exports.commentsController = {
  deleteComments: async (req, res) => {
    try {
      await Comments.findByIdAndDelete(req.params.id);
      return res.json("Удален");
    } catch (e) {
      return res.status(400).json(e.message);
    }
  },

  addComments: async (req, res) => {
    const { text, userId, propertyId } = req.body;
    try {
        const comments = await Comments.create({
            text,
            userId,
            propertyId
        })

        const newComment = await Comments.findById(comments._id).populate('userId')
        res.json(newComment)
    } catch (e) {
        return res.status(401).json(e.message)
    }
  },
  getComments: async (req,res) => {
    try {
        const comments = await Comments.find({propertyId}).populate('userId')
        res.json(comments)
    } catch (e) {
        return res.status(401).json(e.message)
    }
  }
};
