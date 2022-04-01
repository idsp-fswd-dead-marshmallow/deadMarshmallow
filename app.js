const express = require("express");
const bodyParser = require("body-parser")

const app = express();

const db = require("./datab")

app.use(express.static('public'))

const cookieParser = require('cookie-parser')

const cookieSession = require('cookie-session')
app.use(cookieSession({
  name: 'session',
  keys: ["hellooooooo"],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

app.use(cookieParser())

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }));

let isLogin = false;
let foundUser;

app.get("/", (req, res) => {
  // let user = req.cookies.username ? req.cookies : null;
  let user = req.session.username ? req.session.username : null;
//   console.log(user)      
  res.render("index", { user,isLogin })
})

app.get("/loginPage", (req, res) => {
  res.render("loginPage")
})


app.post("/loginPage", (req, res) => {
  let givenUsername = req.body.username;
  let givenPassword = req.body.password;
  foundUser = db.getUserByUsername(givenUsername);
  console.log(foundUser)
  if (foundUser && foundUser.password === givenPassword) {
    // res.cookie("username", givenUsername);
    req.session.username = givenUsername
    console.log(`login attempt from user ${givenUsername}, SUCCESS`)
    isLogin = true;
    res.redirect("/");
  } else {
    console.log(`login attempt from user ${givenUsername}, failure`)
    res.redirect("/loginPage");
  }

  
})

app.get("/aboutUs", (req, res) => {
  let user = req.session.username ? req.session.username : null;
  res.render("aboutUs",{ user,isLogin })
})


app.get("/shop", (req, res) => {
  let user = req.session.username ? req.session.username : null;
  res.render("shop",{ user,isLogin })
})

// app.post("/logout", (req, res) => {
//   res.clearCookie('username');
//   res.redirect("/");
// })


module.exports = app;