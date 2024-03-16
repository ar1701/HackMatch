const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const infoSchema = new Schema({
  skill: {
    skill1: String,
    skill2: String,
    skill3: String,
    skill4: String,
    skill5: String,
  },
  link: {
    link1: String,
    link2: String,
    link3: String,
    link4: String,
    link5: String,
  }
});

const Info = new mongoose.model("Info", infoSchema);
module.exports = Info;
