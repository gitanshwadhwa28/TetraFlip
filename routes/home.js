const router = require("express").Router();
var fs = require("fs");

router.route("/").get((req, res) => {

  res.render("index.ejs");

});

module.exports = router;
