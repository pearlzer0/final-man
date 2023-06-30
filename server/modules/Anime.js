const mongoose = require("mongoose");

const AnimeSchema = new mongoose.Schema({
  title: String,
  opinion: String,
  image: String,
});

const Anime = mongoose.model("Anime", AnimeSchema);
module.exports = Anime;
