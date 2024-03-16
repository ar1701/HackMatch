const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const techStackSchema = new Schema({
  techStack1: String,
  techStack2: String,
  techStack3: String,
  techStack4: String,
  techStack5: String,
});

const techStack = new mongoose.model("techStack", techStackSchema);
module.exports = techStack;
