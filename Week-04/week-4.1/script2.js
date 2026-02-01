const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Cache-Control", "no-store");
  next();
});

app.get("/interest", (req, res) => {
  const principal = parseFloat(req.query.principal);
  const rate = parseFloat(req.query.rate);
  const time = parseFloat(req.query.time);

  if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
    return res.status(400).send("Invalid input");
  }
  const total = principal + (principal * rate * time) / 100;
  const interest = (principal * rate * time) / 100;
  res.status(200).send(`Interest: ${interest}, Total Amount: ${total}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// To run this server, use the command: node script2.js
// Then, you can access the interest endpoint via
// http://localhost:3000/interest?principal=1000&rate=5&time=2
// Replace 1000, 5, and 2 with any values you want to calculate interest for.
