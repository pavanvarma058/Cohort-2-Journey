const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Cache-Control", "no-store");
  next();
});

app.get("/sum", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  if (isNaN(a) || isNaN(b)) {
    return res.status(400).send("Invalid input");
  }
  const sum = a + b;
  res.status(200).send(`Sum: ${sum}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// To run this server, use the command: node script.js
// Then, you can access the sum endpoint via http://localhost:3000/sum?a=5&b=10
// Replace 5 and 10 with any numbers you want to sum.
