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

// const uploadFolder = "../public/images";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Specify the directory where you want to store uploaded files
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    // Generate a unique name for the uploaded file
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = file.originalname.split(".").pop();
    cb(null, file.fieldname + "-" + uniqueSuffix + "." + extension);
  },
});

const upload = multer({ storage: storage });

const allImageData = [];

router.get("/", async (req, res) => {
  const allImages = await ImageModel.find();
  // res.status(200).json(allImages);
  try {
    if (allImageData) {
      return res.status(200).json(allImages);
    }
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }
});

router.post("/upload", upload.single("upload_file"), (req, res) => {
  try {
    if (req.file) {
      const newFile = {
        id: uuidv4(),
        fileName: `/images/${req.file.filename}`,
      };
      allImageData.push(newFile);
      return res.json(allImageData);
    }
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }
});

module.exports = router;
