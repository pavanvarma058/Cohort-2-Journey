const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect(
  "mongodb+srv://pavanvarma058:Pavanvarma%40058@cluster0.pduqbzm.mongodb.net/userappnew",
);

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

app.post("/signup", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  const existingUser = await User.findOne({ email: username });
  if (existingUser) {
    return res.status(400).json({ msg: "User already exists" });
  }

  const newUser = new User({
    name: name,
    email: username,
    password: password,
  });

  newUser.save();

  return res.json({ msg: "User signed up successfully" });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
