const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./user.js");


const skillSchema = new Schema({
  user:{
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  skills: [
    {
      name: String,
      level: Number,
    },
  ],
  links: [
    {
        name: String,
        url: String,
    }
  ],
  
});

const Skill = new mongoose.model("Skill", skillSchema);
module.exports = Skill;