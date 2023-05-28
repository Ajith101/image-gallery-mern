const mongoose = require("mongoose");

const ImagesListScheema = mongoose.Schema({
  fileName: String,
  added_on: { type: Date, default: new Date() },
});

const ImageList = mongoose.model("images", ImagesListScheema);

module.exports = ImageList;
