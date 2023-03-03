require("dotenv").config();
const express = require("express");
const app = express();
require("./connection/connection");
const user = require("./routes/userRoute");
app.use(express.json());

const port = 8000 || process.env.PORT;

app.use(user);

app.get("/", (req, res) => {
  res.send("server is running...");
});

app.listen(port, (req, res) => {
  console.log(`server is running at http://localhost:${port}`);
});
