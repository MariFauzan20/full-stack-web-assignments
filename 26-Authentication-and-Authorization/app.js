const express = require("express");
const expressSession = require("express-session");
const cookieParser = require("cookie-parser");
const app = express();
const port = 3000;

const myusername = "user1";
const mypassword = "mypassword";

var session;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.use(
  expressSession({
    secret: "ePoQIABlUbvgxKiBNrhbbjqYGDjoSoBpONOndVjH",
    saveUninitialized: true,
    resave: false,
  })
);
app.use(cookieParser());

app.get("/", (req, res) => {
  session = req.session;
  if (session.userid) {
    res.send("Welcome User <a href='/logout'>click to logout</a>");
  } else res.sendFile("views/index.html", { root: __dirname });
});

app.post("/user", (req, res) => {
  if (req.body.username == myusername && req.body.password == mypassword) {
    session = req.session;
    session.userid = req.body.username;
    console.log(req.session);
    res.send(`Hey there, welcome <a href=\'/logout'>click to logout</a>`);
  } else {
    res.send("Invalid username or password");
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
