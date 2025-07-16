const mongoose = require("mongoose");
const { Schema } = mongoose;

const photoSchema = new Schema(
  {
    image: String,
    title: String,
    like: Array,
    comments: Array,
    useId: mongoose.ObjectId,
    userName: String,
  },
  {
    timestamps: true,
  }
);

const Photo = mongoose.model("Photo", photoSchema);

module.exports = Photo;
