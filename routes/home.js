const router = require("express").Router();
var fs = require("fs");

router.route("/").get((req, res) => {

  res.render("index.ejs");

});

router.route("/twitter-help").get((req, res) => {

  res.render("twitter.ejs");

});

router.route("login").git((req, res) =>{

  res.render("login.ejs");

});

module.exports = router;
