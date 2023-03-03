const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  city: {
    type: String,
    require: true,
  },
  pin: {
    type: Number,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

module.exports = new mongoose.model("all_users", schema);
