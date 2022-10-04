const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const mongoConn = require("./config/dbConn");

// Connect to MongoDB
mongoConn();

const PORT = process.env.PORT || 3500;

const allowedOrigins = ["0.0.0.0"];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Credentials", true);
  }
  next();
});

app.use(cors({ origin: allowedOrigins, credentials: true }));

app.use("/login", require("./loginRoute"));

mongoose.connection.once("open", () => {
  console.log("MongoDB connection established successfully");

  const PORT = 4000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
});
