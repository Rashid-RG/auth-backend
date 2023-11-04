const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MongoDb_Url);
    console.log("connected to mongodb");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;