const express = require("express");
const app = express();
const port = 3000;

function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.status(403).json({
      msg: "You are not old enough to access Rides",
    });
  }
}
app.use(isOldEnoughMiddleware);
app.get("/ride1", (req, res) => {
  res.json({
    msg: "You have successfully accessed Ride 1",
  });
});

app.get("/ride2", (req, res) => {
  res.json({
    msg: "You have successfully accessed Ride 2",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on Port ${port}`);
});
