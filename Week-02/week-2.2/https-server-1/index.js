const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/", (req, res) => {
  const receivedData = req.body;
  res.json({
    message: "Data received successfully",
    data: receivedData,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at Port: ${port}`);
});
