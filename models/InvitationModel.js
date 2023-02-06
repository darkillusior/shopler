const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const InvitationSchema = new Schema({
  senderId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  receiverId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  time:{type:String}
});

module.exports = mongoose.model("Invitation", InvitationSchema);
