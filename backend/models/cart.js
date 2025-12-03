const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const cartSchema = new Schema({
  cartItems:[],
  totalPrice:Number,
  totalQuantity:Number,
});

module.exports = model("cart", cartSchema);
