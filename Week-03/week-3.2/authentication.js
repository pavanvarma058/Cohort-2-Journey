const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";
const port = 3000;

const app = express();

const ALL_USERS = [
  {
    username: "yeswanth@gmail.com",
    password: "123",
    name: "Yeswanth",
  },
  {
    username: "pavan@gmail.com",
    password: "123321",
    name: "Pavan Varma",
  },
  {
    username: "charlie@gmail.com",
    password: "123321",
    name: "Charlie Harper",
  },
];

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
