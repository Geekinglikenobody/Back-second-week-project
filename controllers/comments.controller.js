const Comments = require("../models/Comment.molel");

module.exports.commentsController = {
  deleteComments: async (req, res) => {
    try {
      const data = await Comments.findByIdAndDelete(req.params.id);
      return res.json(data);
    } catch (e) {
      return res.status(400).json(e.message);
    }
  },

  addComments: async (req, res) => {
    const { text, propertyId } = req.body;
    try {
      const comments = await Comments.create({
        text,
        userId: req.user.id,
        propertyId,
      });

      const newComment = await Comments.findById(comments._id).populate(
        "userId"
      );
      res.json(newComment);
    } catch (e) {
      return res.status(401).json(e.message);
    }
  },
  getComments: async (req, res) => {
    try {
      const comments = await Comments.find({ propertyId: req.params.id}).populate("userId");
      return res.json(comments);
    } catch (e) {
      return res.status(401).json(e.message);
    }
  },
};
