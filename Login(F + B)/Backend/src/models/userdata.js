const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    firstName:{
      type:String,
      required:true
    },
    lastName:{
      type:String
    },
    email: {
      type: String,
      required: true,
      unique:true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid email");
        }
      },
    },

    password: {
      type: String,
      required: true,
      validate(value) {
        if (!validator.isStrongPassword(value)) {
          throw new Error("Password is not strong");
        }
      },
    },
  },
  { timestamps: true } 
);

const User = mongoose.model("User", userSchema);

module.exports = User;