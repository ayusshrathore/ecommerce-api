require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const cors = require("cors");

const app = express();
const router = require("./routes/route");

app.use("/public", express.static(__dirname + "/public"));
app.use(express.json());
app.use(cors());
app.use(router);

module.exports = app;
