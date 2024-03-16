const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  phone: Number,
//   skills: [
//     {
//       name: String,
//       level: Number,
//     },
//   ],
//   links: [
//     {
//         name: String,
//         url: String,
//     }
//   ],
});

const User = new mongoose.model("User", userSchema);
module.exports = User;