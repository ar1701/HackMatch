const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  summary: String,
  proLink: String,
  stack1: String,
  stack2: String,
  stack3: String,
  stack4: String,
  stack5: String,
});

const Project = new mongoose.model("Project", projectSchema);
module.exports = Project;
