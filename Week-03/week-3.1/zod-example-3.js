const express = require("express");
const { z } = require("zod");
const app = express();
const port = 3000;

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

app.use(express.json());

app.post("/login", (req, res) => {
  const user = req.body;
  const response = schema.safeParse(user);
  if (!response.success) {
    res.json({
      msg: "Your inputs are invalid",
    });
  } else {
    res.json({
      msg: "Login Successful",
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
