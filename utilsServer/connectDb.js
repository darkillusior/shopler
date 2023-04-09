const mongoose = require("mongoose");

async function connectDb() {
  try {
    mongoose.set("strictQuery", false);
    const options = {
      serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds 
      family: 4 // Use IPv4, skip trying IPv6
    };
    mongoose.connect(process.env.MONGO_URI,options);
    console.log("Mongodb connected");
  } catch (error) {
 
    console.log(error);
    process.exit(1);
  }
}

module.exports = connectDb;
