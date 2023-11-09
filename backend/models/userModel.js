const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    maxLength: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    maxLength: 20,
  },
  password: {
    type: String,
    required: true,
    maxLength: 30,
  },
});

module.exports = mongoose.model("User", UserSchema);
