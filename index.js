const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || config.get("serverPort");

const start = async () => {
  try {
    mongoose
      .connect(process.env.MONGODB_URI)
      .then(() => {
        console.log("Successful connection to MongoDB!");
      })
      .catch((err) => {
        console.log("Error connecting to MongoDB:", err);
      });
    app.listen(PORT, () => {
      console.log("Server started on port: " + PORT);
    });
  } catch (err) {}
};

start();
