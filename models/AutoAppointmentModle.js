const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AutoAppointment = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  hospital:{type:String,reqired:true},
  dr:[{
  
    name:{ type:String},
   
    person:[{
      time:{type:String},
      userId:{type: Schema.Types.ObjectId, ref: "User"}
    }]

  }]
 
 
});

module.exports = mongoose.model("AutoAppointment",AutoAppointment );
