const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/health-checkup", (req, res) => {
  const kidneys = req.body.kidneys;
  const kidneyLength = kidneys.length;

  res.send("You have " + kidneyLength + " kidneys");
});

// Global error handling middleware
// This will catch any errors that occur in the routes above
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "An error occurred",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
