const express = require("express");
const cors = require("cors");
const imageRoute = require("./routes/imageRoute");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 2040;

// middlewares
app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use("/image", imageRoute);

mongoose
  .connect(process.env.DB_URL, {
    UseUnifiedTopology: true,
    UseNewUrlParser: true,
  })
  .then(
    app.listen(PORT, () => {
      console.log(`connected to mongoDB with ${PORT}`);
    })
  )
  .catch((err) => {
    console.log(err);
  });
