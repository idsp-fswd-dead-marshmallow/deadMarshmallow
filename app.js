// libraries
const express = require("express");
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser");



// use express
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static("public")); // access to public folder for all ejs files
app.set('view engine', 'ejs')

// routes
app.get("/", (req, res) => {
    res.render("aboutUs.html");
})


module.exports = app;