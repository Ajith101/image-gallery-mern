const express = require("express");
const cors = require("cors");
const imageRoute = require("./routes/imageRoute");
const path = require("path");

const app = express();
const PORT = 2020;

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.static("tmp"));

app.use("/image", imageRoute);
app.use("/images", express.static(path.join(__dirname, "public/images")));

app.listen(PORT, () => {
  console.log(`connected with ${PORT}`);
});
