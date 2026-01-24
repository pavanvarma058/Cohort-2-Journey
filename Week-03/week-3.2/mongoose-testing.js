const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://pavanvarma058:Pavanvarma%40058@cluster0.pduqbzm.mongodb.net/userappnew",
);

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

const testUser = new User({
  name: "Pavan Varma",
  email: "pavan@gmail.com",
  password: "123456",
});

testUser.save();
