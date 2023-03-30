const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Shop = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
 
  shopimg:{type: String},

  category:{type: String},
  address:{type: String},
  shopname:{type: String},
  rating:[{type:String,default:0}], 

  product:[{

  name:{type:String},

  images:{type:String},

  discription:{type:String},

  likes: [{ user: { type: Schema.Types.ObjectId, ref: "User" } }],
  
  price:{type:String},

  discount:{type:String},

  tags:{type:String},

  size:{type:String},

  stock:{type:String},
  
  

  }],
 demand:[{
  name:{type:String}
 }]
});

module.exports = mongoose.model("Shop",Shop);
