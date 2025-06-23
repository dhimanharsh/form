const mongoose = require("mongoose");

const connectdb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://harshdhiman484:password%40123@db-star.resb5a4.mongodb.net"
    );
    console.log("MONGO-DB CONNECTED--->");
  } catch (err) {
    console.log("MongoDB Connection Error: ", err);
  }
};
module.exports = connectdb;
