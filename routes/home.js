const router = require("express").Router();
var fs = require("fs");
const bcrypt = require("bcrypt");

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

  res.render("register-1.ejs");

});

// router.route("/register").get((req, res) => {

//   res.render("register.ejs");

// });


router.post('/register-x', async (req, res) => {

  let { fullname, age, email, phone, password, state } = req.body;

  console.log(req.body)
  try {

    if (!fullname || !email || !password || !phone) {
      res.render("/register-1k.ejs")
      return;
    } else {
      sql = "select * from users where email = '" + email + "'";
      db.query(sql, (err, result) => {

        if (result[0]) {
          res.render("/register-1l.ejs")
          return;
        }

        var password_hashed = bcrypt.hashSync(password, 10);


        sql = "insert into users(fullname, age, email ,phone, password, state) values(?,?,?,?,?,?)";
        db.query(sql, [fullname, age, email, phone, password_hashed, state], (err, result) => {
          if (err) {
            res.render("/register-1.ejs")
            return;
          }
          else {
            req.session.email = email;
            res.render("dashboard.ejs");
          }

        });

      });
    }




  } catch (error) {
    console.log(error)
    res.render("/register-1n.ejs");
    return;
  }


});

router.post('/login-x', (req, res) => {



  let { email, password } = req.body;
  console.log(req.body)
  // var sql = "select * from users where email = '" + email + "'";

  var sql = 'SELECT * FROM users WHERE email = ?';
  db.query(sql, [email], (error, result) => {
    console.log(result)
    if (result[0]) {
      if (bcrypt.compareSync(password, result[0].password)) {

        req.session.email = result[0].email;
        res.render("dashboard.ejs")

      } else {
        res.render("loginx.ejs", { status: 1 });
      }
    }
    else
      res.render("loginy.ejs", { status: 2 });

  });

});





module.exports = router;

