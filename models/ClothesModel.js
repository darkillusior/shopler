const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Clothes = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },

  images:[String],
  rating:[{type:Number,default:0}],
  discription:{type:String},
   
  color:{type:String},
  price:{type:Number},
  discount:{type:Number},
  title:{type:String},
  tags:{type:String},
  size:{type:String},

  stock:{type:Number},
 
});

module.exports = mongoose.model("Clothes",Clothes );
