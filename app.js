if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const cloudinary = require("cloudinary").v2;

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const User = require("./model/user.js");

const Profile = require("./model/profile.js");
const Resume = require("./model/resume.js");
const Info = require("./model/info.js");
const techStack = require("./model/techStack.js");

const Project = require("./model/project.js");
const workExp = require("./model/workExp.js");
const session = require("express-session");
const bodyParser = require("body-parser");
const MongoStore = require("connect-mongo");
const LocalStrategy = require("passport-local");
const passport = require("passport");
const flash = require("connect-flash");
const { isLoggedIn } = require("./middleware.js");

const multer = require("multer");
const { storage } = require("./cloudConfig.js");
const upload = multer({ storage });
const dbUrl = process.env.ATLASDB_URL;



const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24*60*60,
});

store.on("error", ()=>{
  console.log("Error in MONGO SESSION STORE: ", error);
})

const sessionOptions = {
store,
secret: process.env.SECRET,
resave: false,
saveUninitialized: true,
cookie: {
  expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
  maxAge: 7 * 24 * 60 * 60 * 1000,
  httpOnly: true,
},
};


app.use(session(sessionOptions));



app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));
app.use("public/images/", express.static("./public/images"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.json());

// const mongoUrl = "mongodb://127.0.0.1:27017/HackMatch";

async function main() {
  await mongoose.connect(dbUrl);
}

main()
  .then(() => {
    console.log("Connection Succeeded");
  })
  .catch((err) => console.log(err));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});
app.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  async (req, res) => {
    let {username} = req.body;
    req.session.user = {username};
    res.redirect("/user/home");
  }
);

app.get("/signup", (req, res) => {
  res.render("index.ejs");
});

app.get("/user/home", async(req, res) => {
  const {username} = req.session.user;
  const user = await User.findOne({username});
  res.render("home.ejs" , {username});
});

app.get("/profile/education", (req, res) => {
  res.render("edu.ejs");
});

app.post("/signup/home", async (req, res) => {
  try {
    let { username, email, phone, password } = req.body;
    req.session.user = { username, email, phone };
    const newUser = new User({ username, email, phone });
   

    await User.register(newUser, password);

    const newProfile = new Profile({
      user: newUser._id,
      gender: "",
      bio: "",
    });
    await newProfile.save();
    res.render("home.ejs");
  } catch (e) {
    req.flash("success", "Already Exist");
    res.redirect("/signup");
  }
});

app.get("/profile", async (req, res) => {
  // if (!req.session.user) {
  //   return res.redirect("/signup");
  // }
  const {username} = req.session.user;
  const user = await User.findOne({username});
  console.log(user);

  res.render("profile.ejs", {name: user.name, email: user.email, phone: user.phone, username: username});
});

app.get("/main", (req, res) => {
  res.render("main.ejs");
});
app.get("/dash", (req, res) => {
  res.render("dashboard.ejs");
});
app.get("/result", (req, res) => {
  res.render("res.ejs");
});

app.patch("/profile", async (req, res) => {
  let { name, gender, email, phone, bio } = req.body;
  const { username } = req.session.user;
  req.session.user = { name, email, phone, bio };
  const user = await User.findOne({ username });
  const profile = await Profile.findOne({ user: user._id });

  // if (!user) {
  //   return res.status(404).send("User not found");
  // }

  await Profile.updateOne({user: user._id}, {
    $set: {
      name: name,
      email:email,
      gender: gender,
      bio: bio,
    },
  });
  // await User.findByIdAndUpdate(user._id, {
  //   $set: {
  //     name: name,
  //   },
  // });

  res.redirect("/profile");
});

app.post("/info", async (req, res) => {
  let {skill1,skill2,skill3,skill4,skill5, link1,link2,link3,link4,link5} = req.body;

  const newInfo = new Info({
    skill: {
      skill1: skill1,
      skill2: skill2,
      skill3: skill3,
      skill4: skill4,
      skill5: skill5,
    },
    link: {
      link1: link1,
      link2: link2,
      link3: link3,
      link4: link4,
      link5: link5,
    }
  })

  await newInfo.save();
  res.redirect("/user/home");
});


app.post("/project", async (req, res) => {
  let {summary, proLink, stack1,stack2,stack3,stack4,stack5} = req.body;

  const newProject = new Project({
    summary: summary,
    proLink: proLink,
    stack1: stack1,
    stack2: stack2,
    stack3: stack3,
    stack4: stack4,
    stack5: stack5,
  })

  await newProject.save();
  res.redirect("/user/home");
});
// app.post("/profile/link", async (req, res) => {
//   try {
//     const { skills, links } = req.body;
//     const { email } = req.session.user;
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).send("User not found");
//     }
//     const profile = new Profile({ user: user._id, skills, links });
//     await profile.save();
//     res.send("Profile updated successfully");
//   } catch (error) {
//     console.error("Error updating profile:", error);
//     res.status(500).send("Error updating profile");
//   }
// });

app.get("/profile/education", (req, res) => {
  res.render("edu.ejs");
});
app.get("/profile/link", (req, res) => {
  res.render("link.ejs");
});
app.get("/profile/project", (req, res) => {
  res.render("project.ejs");
});
app.get("/profile/exp", (req, res) => {
  res.render("exp.ejs");
});

app.post("/profile/exp", upload.single("resume"), async (req, res) => {
  let link = req.file.path;
  let filename = req.file.filename;
  const { username } = req.session.user;
  const user = await User.findOne({ username });
  let resume = new Resume({
    user: user._id,
    image: {
      link: link,
      filename: filename,
    },
  });
  await resume.save();
  res.redirect("/user/home");
});

app.post("/dashboard", async(req,res)=>{
  let {techStack1,techStack2,techStack3,techStack4,techStack5} = req.body;
  const newTechStack = new techStack({
    techStack1: techStack1,
    techStack2: techStack2,
    techStack3: techStack3,
    techStack4: techStack4,
    techStack5: techStack5,
  })

  await newTechStack.save();
  res.redirect("/user/home");

})

app.post("/profile/education", async (req, res) => {
  let { companyName, summary, role, duration } = req.body;
  const { email } = req.session.user;
  const user = await User.findOne({ email });

  let newExp = new workExp({
    user: user._id,
    companyName: companyName,
    summary: summary,
    role: role,
    duration: duration,
  });
  await newExp.save();
  res.redirect("/user/home");
});

app.all("*", (req, res, next) => {
  res.redirect("/main");
});

let port = 8080;
app.listen(port, (req, res) => {
  console.log(`Listening to the port: ${port}`);
});
