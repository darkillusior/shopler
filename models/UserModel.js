const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {

  
    email: { type: String, required: true, unique: true },

    password: { type: String, required: true, select: false },

    name: { type: String, required: true },
  
     category:{type:String,default:"User"},

    points:{   type:Number, default:0 },
    userimg:{type: String},
   
    
   Appointment: [{
     date:{type:String},
     hospitalname:{type:String},
     time:{type:String},
     drname:{type:String},
    appointId:{type: Schema.Types.ObjectId, ref:"Appointment"}
     }],
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
