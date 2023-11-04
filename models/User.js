const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    joinedOn: {
      type: Date,
      default: Date.now(),
    },
    forgetPassword: {
      time: Date,
      otp: String,
    },
    token: { 
      type: String,
    },
  },
  {
    collection: "User",
  }
);

module.exports = mongoose.model("User", userSchema);