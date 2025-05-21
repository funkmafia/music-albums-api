const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema({
  artist: String,
  albumTitle: String,
  genre: String,
  releaseYear: Number,
  label: String,
  topTrack: String,
  rating: Number,
});

module.exports = mongoose.model("Album", albumSchema);
