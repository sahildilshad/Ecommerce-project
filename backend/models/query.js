const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const querySchema = new Schema({
 Name: { type: String, require: true },
  Email: { type: String, require: true },
  Query: { type: String, require: true },
  queryStatus:{type:String,default:"unread"}
  

});

module.exports = model("query", querySchema);
