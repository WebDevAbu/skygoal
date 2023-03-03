const mongoose = require("mongoose");

const connect = mongoose
  .connect("mongodb://localhost:27017/skygoal")
  .then((res) => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = connect;
