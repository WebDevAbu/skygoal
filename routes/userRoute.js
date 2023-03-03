const express = require("express");
const route = express.Router();
const controller = require("../controllers/userController");
const middleware = require("../middleware/middleware");

route.post("/register", controller.register);
route.post("/login", controller.login);
route.get("/getalluser", middleware, controller.findAll);

module.exports = route;
