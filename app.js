const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const User = require("./model/user.js");
const Skill = require("./model/skill.js");
const Profile = require("./model/profile.js");
const session = require("express-session");
const bodyParser = require("body-parser");

app.use(
  session({
    secret: "lkjhgfdsa",
    resave: false,
    saveUninitialized: true,
    cookie: {
      expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    },
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));
app.use("public/images/", express.static("./public/images"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);

const mongoUrl = "mongodb://127.0.0.1:27017/HackMatch";
async function main() {
  await mongoose.connect(mongoUrl);
}

main()
  .then(() => {
    console.log("Connection Succeeded");
  })
  .catch((err) => console.log(err));

  // app.get("/home", (req, res) => {
  //   res.render("home.ejs");
  // });

app.get("/signup", (req, res) => {
  res.render("index.ejs");
});


app.get("/user/home", (req,res)=>{
  res.render("home.ejs");
})

app.post("/signup/home", async (req, res) => {
  let { name, email, phone } = req.body;
  req.session.user = { name, email, phone };
  const newUser = new User({
    name: name,
    email: email,
    phone: phone,
  });
  await newUser.save();
  const newProfile = new Profile({
    name: name,
    email: email,
    phone: phone,
  });
  await newUser.save();
  res.render("home.ejs");
});

app.get("/profile", (req, res) => {
  if (!req.session.user) {
    return res.redirect("/signup");
  }
  const { name, email, phone } = req.session.user;
  res.render("profile.ejs", { name, email, phone });
});



app.patch("/profile", async (req, res) => {
  let { name, gender, bio } = req.body;
  const { email } = req.session.user;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).send("User not found");
  }
  // const data = new basicInfo({
  //   user: user._id,
  //   gender: gender,
  //   bio: bio,
  // })
  // await data.save();
 await Profile.updateOne(
    // Criteria to match the document(s) to update
    { user: 'user._id'},
    // Update fields and values
    { 
      $set: {
        name: name,
        gender: gender,
        bio: bio,
      },
    },
 )

  res.redirect("/profile");
});

app.post("/profile/expj", async (req, res) => {
  try {
    const { skills, links } = req.body;
    const { email } = req.session.user;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send("User not found");
    }
    const profile = new Profile({ user: user._id, skills, links });
    await profile.save();
    res.send("Profile updated successfully");
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).send("Error updating profile");
  }
});

app.get("/profile/education", (req,res)=>{
  res.render("edu.ejs");
})
app.get("/profile/link", (req,res)=>{
  res.render("link.ejs");
})
app.get("/profile/project", (req,res)=>{
  res.render("project.ejs");
})
app.get("/profile/exp", (req,res)=>{
  res.render("exp.ejs");
})


let port = 3000;
app.listen(port, (req, res) => {
  console.log(`Listening to the port: ${port}`);
});
