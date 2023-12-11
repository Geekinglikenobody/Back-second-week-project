const mongoose = require("mongoose");

const complainsSchema = mongoose.Schema({
  text: String,
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  number: String,
});

const Complains = mongoose.model("Complains", complainsSchema);

module.exports = Complains;
