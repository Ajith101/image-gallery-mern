const express = require("express");
const { getAllPost, createAnewPOst } = require("../controller/imageController");

const router = express.Router();

router.get("/", getAllPost);
router.post("/new", createAnewPOst);

module.exports = router;
