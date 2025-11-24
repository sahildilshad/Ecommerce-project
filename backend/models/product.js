const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const productSchema = new Schema({
  productName: { type: String, require: true },
  productPrice: { type: Number, require: true },
  productCategory: { type: String, require: true },
  productStatus: { type: String, default:"out of Stock" },
  productImage:String

});

module.exports = model("product", productSchema);
