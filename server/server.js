const express = require("express");
const cors = require("cors");
const imageRoute = require("./routes/imageRoute");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// middlewares
app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use("*", (req, res) => {
  res.status(404).json({ message: "Something went wrong" });
});

app.use("/image", imageRoute);

mongoose
  .connect(process.env.DB_URL, {
    UseUnifiedTopology: true,
    UseNewUrlParser: true,
  })
  .then(
    app.listen(process.env.PORT, () => {
      console.log(`connected to mongoDB with ${PORT}`);
    })
  )
  .catch((err) => {
    console.log(err);
  });
