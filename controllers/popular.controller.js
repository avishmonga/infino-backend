const express = require("express");
const router = express.Router();
const Popular = require("../models/popular.model");

router.post("/", async (req, res) => {
  try {
    const video = await Popular.create(req.body);
    res.status(201).send(video);
  } catch (error) {
    console.log(error);
    return res.status(400).send("Something Went Wrong");
  }
});

router.get("/", async (req, res) => {
  try {
    const videos = await Popular.find({title:{$regex:new RegExp(req.query.search,"i")}}).lean().exec();
    res.status(200).send(videos);
  } catch (error) {
    return res.status(400).send("Something Went Wrong");
  }
});


module.exports = router;
