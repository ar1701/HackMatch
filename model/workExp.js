const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./user.js");


const workExpSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    companyName: String,
    summary: String,
    role: String,
    duration: String,
});

const workExp = mongoose.model("worExp", workExpSchema );
module.exports = workExp;