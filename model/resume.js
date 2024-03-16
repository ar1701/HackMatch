const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./user.js");



const resumeSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    image:{
        link:String,
        filename: String,
    }
});

const Resume = new mongoose.model("Resume", resumeSchema);
module.exports = Resume;