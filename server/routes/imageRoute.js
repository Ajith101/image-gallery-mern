const express = require("express");
const { getAllPost, createAnewPOst } = require("../controller/imageController");

const router = express.Router();

router.get("/", getAllPost);
router.post("/new", createAnewPOst);
router.get("/test", (req, res) => {
  res.status(200).json("Hiiiiiiiiii testing");
});

module.exports = router;
