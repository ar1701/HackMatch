const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
  name: String,
  email: String,
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
        // default: "0",
    }
  ],
});

const User = new mongoose.model("User", userSchema);
module.exports = User;