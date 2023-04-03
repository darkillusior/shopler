const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Appointment = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  shopimg:{type: String},

  category:{type: String},
  address:{type: String},
  shopname:{type: String},
 
  dr:[{
   Date:{type:String,default:null},
    name:{ type:String},
    fees:{ type:Number},
   specialization:{ type:String},
   about:{type:String},
    img:{ type:String},
    discount:{ type:String},
  
    persons:[{
      time1:{type:String},
    
      time2:{type:String},
     
      aval:{type:Boolean,default:false},
      user:{type: Schema.Types.ObjectId, ref: "User",default:null}
    }]

  }]
});

module.exports = mongoose.model("Appointment",Appointment );
