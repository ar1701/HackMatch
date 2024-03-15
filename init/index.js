const mongoose = require("mongoose");
const User = require("../model/user.js");
const sampleDB = require("../init/sampleDB.js");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/HackMatch");
}

main()
  .then(() => {
    console.log("Connection Succeeded");
  })
  .catch((err) => console.log(err));

const initDB = async () => {
  await User.deleteMany({});
  await User.insertMany(sampleDB.data).then((res) => {
    console.log("Data is Initialized");
    console.log(res);
  });
};
initDB();
