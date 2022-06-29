const express = require("express");
const app = express();

let sectionHistory = [];
let scrollOption = 0;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", function(req, res) {
  sectionHistory = [];
  res.redirect("/about-me");
});

app.get("/about-me", function(req, res) {
  sectionHistory.push(1);

  if (sectionHistory.length === 1) {
    scrollOption = 1;
  } else if (sectionHistory[sectionHistory.length - 1] === sectionHistory[sectionHistory.length - 2]) {
    scrollOption = 2;
  } else {
    scrollOption = 3;
  }

  res.render("about", {scrollOption: scrollOption});
});

app.get("/my-skills", function(req, res) {
  sectionHistory.push(2);

  if (sectionHistory[sectionHistory.length - 1] === sectionHistory[sectionHistory.length - 2]) {
    scrollOption = 2;
  } else {
    scrollOption = 3;
  }

  res.render("skills", {scrollOption: scrollOption});
});

app.get("/contact-me", function(req, res) {
  sectionHistory.push(3);

  if (sectionHistory[sectionHistory.length - 1] === sectionHistory[sectionHistory.length - 2]) {
    scrollOption = 2;
  } else {
    scrollOption = 3;
  }

  res.render("contact", {scrollOption: scrollOption});
});

app.listen(3000 || process.env.PORT);
