const { Schema, model } = require("mongoose");
const crypto = require("crypto");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      max: 32,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true,
    },
    address : {
        type: String,
        required: true,
        trim : true,
    },
    pin : {
        type: Number,
        required: true,
        trim: true
    },
    product: {
        type: String,
        required: true,
    },
    likes :{
        type : Number,
        default: 0
    }
  },
  { timestamps: true }
);


module.exports = model("products", UserSchema);
