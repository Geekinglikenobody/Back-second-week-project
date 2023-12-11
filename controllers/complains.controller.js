const Complains = require("../models/Compalin");

module.exports.complainsController = {
    addComplains: async (req, res) => {
      const { text, userId, number } = req.body;
      try {
        const complains = await Complains.create({
          text,
          userId,
          number,
        });
  
        res.json(complains);
      } catch (e) {
        return res.status(401).json(e.message);
      }
    },
  deleteComplains: async (req, res) => {
    try {
      await Complains.findByIdAndDelete(req.params.id);
      return res.json("Удален");
    } catch (e) {
      return res.status(400).json(e.message);
    }
  },

  getComplains: async (req, res) => {
    try {
      const complains = await Complains.find().populate("userId");
      res.json(complains);
    } catch (e) {
      return res.status(401).json(e.message);
    }
  },
};
