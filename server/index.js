const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const AnimeModel = require("./modules/Anime");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://zer0pearl313:Borderlands313@cluster0.yll1s61.mongodb.net/?retryWrites=true&w=majority"
);

app.post("/insert", async (req, res) => {
  const title = req.body.title;
  const opinion = req.body.opinion;
  const image = req.body.image;

  const anime = new AnimeModel({
    title: title,
    opinion: opinion,
    image: image,
  });

  try {
    await anime.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});
app.get("/read", async (req, res) => {
  res.send(await AnimeModel.find({}));
  //console.log(data);
});

app.listen(3001, () => {
  console.log("server running on port 3001...");
});
