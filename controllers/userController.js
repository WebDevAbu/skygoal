const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const middleware = require("../middleware/middleware");

exports.register = (req, res) => {
  const data = new User(req.body);
  console.log(data);
  data
    .save()
    .then((response) => {
      return res.status(200).send(response);
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  console.log("email-->", email, password);
  try {
    const data = await User.findOne({ email: email });
    if (data.password != password) {
      return res.status(500).send("invalid email or password");
    }
    const token = jwt.sign({ email: email }, process.env.SECRET_KEY);
    return res.status(200).send({ token, data });
  } catch (err) {
    return res.status(500).send(err);
  }
};

exports.findAll = async (req, res) => {
  console.log("findall");
  try {
    const data = await User.find();
    return res.status(200).send(data);
  } catch (err) {
    return res.status(500).send(err);
  }
};
