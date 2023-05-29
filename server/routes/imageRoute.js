const express = require("express");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const ImageModel = require("../models/imageList");

const router = express.Router();

// ceate a new image post
router.post("/new", async (req, res) => {
  const fileName = req.body;
  const newPost = new ImageModel({
    ...fileName,
    added_on: new Date().toISOString(),
  });

  try {
    await newPost.save();
    const allPost = await ImageModel.find();
    return res.status(200).json(allPost);
  } catch (error) {
    return res.status(404).json({ message: "Something went wrong" });
  }
});

router.get("/", async (req, res) => {
  try {
    const allIMagesDatas = await ImageModel.find();
    res.status(200).json(allIMagesDatas);
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
  }
});

module.exports = router;
