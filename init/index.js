const mongoose = require("mongoose");
const User = require("../model/user.js")
const Profile = require("../model/profile.js")
const sampleDB = require("../init/sampleDB.js");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/HackMatch");
}

main()
  .then(() => {
    console.log("Connection Succeeded");
  })
  .catch((err) => console.log(err));

// const initDB = async () => {
//   await User.deleteMany({});
// //   await User.insertMany(sampleDB.data).then((res) => {
// //     console.log("Data is Initialized");
// //     console.log(res);
// //   });
// };

async function createUserAndProfile(name, email) {
    // Create a new user
    const user = new User({
      name,
      email
    });
    await user.save();
  
    // Create a new profile for the user
    const profile = new Profile({
      user: user._id, // Reference to the user
      skills: [
        {
          name: "HTML",
          level: 5,
        },
        {
          name: "CSS",
          level: 6,
        },
      ],
      links: [
        {
          name: "linkedin",
          url: "vvbjdvdkk.com"
        },
        {
          name: "github",
          url: "vvbjsdfsdvdkk.com",
        }
      ]
    });
    await profile.save();
  }
  
  // Example usage
  createUserAndProfile('John Doe', 'john@example.com')
    .then(() => console.log('User and profile created'))
    .catch(err => console.error('Error creating user and profile:', err));
  
// initDB();
