require("dotenv").config(); // loads environment variables from a .env file into process

const express = require("express");
const mongoose = require("mongoose");
const {
  getAllAlbums,
  createAlbum,
  updateAlbums,
  deleteAlbums,
} = require("./controllers/albumControllers");

const app = express();
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB connection error", err));

app.use(express.json()); // middleware

// GET request
app.get("/api/albums", getAllAlbums);
app.post("/api/albums", createAlbum);
app.put("/api/albums/:id", updateAlbums);
app.delete("/api/albums/:id", deleteAlbums);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
