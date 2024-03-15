  const express = require("express");
  const app = express();
  const mongoose = require("mongoose");
  const path = require("path");
  const methodOverride = require("method-override");
  const ejsMate = require("ejs-mate");

  
  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "/views"));
  app.use(express.static(path.join(__dirname, "public")));
  app.use(express.urlencoded({ extended: true }));
  app.use(methodOverride("_method"));
  app.engine("ejs", ejsMate);
  
//   const mongoUrl = "mongodb://127.0.0.1:27017/hackMatch";
//   async function main() {
//     await mongoose.connect(mongoUrl);
//   }
  
//   main()
//     .then(() => {
//       console.log("Connection Succeeded");
//     })
//     .catch((err) => console.log(err));

let port = 8080;
app.listen(port, (req,res)=>{
    console.log(`Listening to the port: ${port}`);
})

app.get("/index", (req,res)=>{
    res.render("index.ejs");
})