const express = require("express");
const cors = require("cors");
const imageRoute = require("./routes/imageRoute");

const app = express();
const PORT = 2020;

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/image", imageRoute);

app.listen(PORT, () => {
  console.log(`connected with ${PORT}`);
});
