const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  pid: {
    type: String,
    required: true,
    unique: true
  },
  pname: {
    type: String,
    required: true
  },
  price: {
    type: Number
  },
  quantity: {
    type: Number
  }
});

module.exports = mongoose.model("Product", productSchema);