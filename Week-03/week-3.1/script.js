const express = require("express");
const app = express();
const port = 3000;

app.get("/health-checkup", (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;

  if (username === "pavan" && password === "pass") {
    if (kidneyId == 1 || kidneyId == 2) {
      return res.json({
        message: "Your kidney is fine",
      });
    }
  }

  res.status(400).json({
    message: "Invalid credentials or kidneyId",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
