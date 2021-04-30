const router = require("express").Router();
var fs = require("fs");

router.route("/").get((req, res) => {

  res.render("index.ejs");

});

router.route("/twitter-help").get((req, res) => {

  res.render("twitter.ejs");

});

router.route("/login").get((req, res) => {

  res.render("login.ejs");

});

router.route("/register").get((req, res) => {

  res.render("register.ejs");

});

module.exports = router;
