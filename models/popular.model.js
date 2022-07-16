const mongoose = require("mongoose");

const PopularScheama = new mongoose.Schema({
  categoryId: { type: String, required: true },
  channelId: { type: String, required: true },
  channelTitle: { type: String, required: false },
  description: { type: String, required: false },
  publishedAt: { type: String, required: true },
  title: { type: String, required: true },
  thumbnails: {
    default: {
      height: { type: Number, required: true },
      url: { type: String, required: true },
      width: { type: Number, required: true },
    },
    high: {
      height: { type: Number, required: true },
      url: { type: String, required: true },
      width: { type: Number, required: true },
    },
    medium: {
      height: { type: Number, required: true },
      url: { type: String, required: true },
      width: { type: Number, required: true },
    },
    standard: {
      height: { type: Number, required: true },
      url: { type: String, required: true },
      width: { type: Number, required: true },
    },
  },
});

module.exports = mongoose.model("popular", PopularScheama);
