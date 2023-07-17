const express = require("express");

const dotenv = require("dotenv");
dotenv.config({
  path: "./config/.env",
});

const app = express();
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

// Importing all url routes
const urlroute = require("./routes/shorturl");
app.use(urlroute);

module.exports = app;