const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let cardSchema = new Schema(
  {
    name: {
      type: String,
    },
    cardNumber: {
      type: Number,
    },
    limit: {
      type: Number,
    },
    balance: {
      type: Number,
      default: 0,
    },
  },
  {
    collection: "cards",
  }
);

module.exports = mongoose.model("cards", cardSchema);
