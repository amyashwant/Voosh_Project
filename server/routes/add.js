const Add = require("../models/Add");
const router = require("express").Router();

router.post("/add-order", async (req, res) => {
  const newAdd = new Add(req.body);
  try {
    const savedPost = await newAdd.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/get-order", async (req, res) => {
  const add = await Add.find();
  res.status(200).json(add);
});


module.exports = router;
