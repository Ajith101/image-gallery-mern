const ImageModel = require("../models/imageList");

const getAllPost = async () => {
  try {
    const allIMagesDatas = await ImageModel.find();
    return res.json(allIMagesDatas);
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }
};

const createAnewPOst = async () => {
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
};

module.exports = { getAllPost, createAnewPOst };
