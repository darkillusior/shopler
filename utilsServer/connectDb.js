const mongoose = require("mongoose");

async function connectDb() {
  try {
    console.log("working man")
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Mongodb connected");
  } catch (error) {
    console.log("gg")
    console.log(error);
    process.exit(1);
  }
}

module.exports = connectDb;
