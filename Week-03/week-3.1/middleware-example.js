const express = require("express");
const app = express();
const port = 3000;

function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;

  if (username === "pavan" && password === "pass") {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}

app.get("/health-checkup", userMiddleware, (req, res) => {
  const kidneyId = req.query.kidneyId;
  if (kidneyId == 1 || kidneyId == 2) {
    return res.json({
      message: "Your kidney is fine",
    });
  }
  res.status(400).json({
    message: "Invalid credentials or kidneyId",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
