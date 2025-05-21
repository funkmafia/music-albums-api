require("dotenv").config(); // loads environment variables from a .env file into process
const express = require("express");
const mongoose = require("mongoose");
const albumRoutes = require(""); // ./routes/albumRoutes
const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URL = process.env.MONGODB_URL;

app.use(express.json()); // middleware
app.use("/api/albums", albumRoutes);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB connection error", err));

// GET request
app.get("/", (request, response) => {
  response.send("Hello MUSIC WORLD!");
});
