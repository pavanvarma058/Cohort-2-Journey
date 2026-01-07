const express = require("express");
const zod = require("zod");
const app = express();
const port = 3000;

const schema = zod.object({
  email: zod.string(),
  password: zod.string(),
  country: zod.literal("IN").or(zod.literal("US")),
  kidneys: zod.array(zod.number()),
});

app.use(express.json());

app.post("/health-checkup", (req, res) => {
  const user = req.body;
  const response = schema.safeParse(user);
  res.json({
    response,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
