// write basic express boilerplate code
// with express.json() middleware
import express from "express";
import cors from "cors";
const app = express();
const port = 3000;
import { createTodo, updateTodo } from "./types.js";
import { todo } from "./db.js";

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.post("/todo", async (req, res) => {
  const result = createTodo.safeParse(req.body);
  if (!result.success) {
    return res.status(411).json({ msg: "You send the wrong inputs" });
  }
  // Here you would typically save the todo to a database
  await todo.create({
    title: result.data.title,
    description: result.data.description,
    completed: false,
  });
  res.json({
    message: "Todo created successfully",
  });
});

app.get("/todos", async (req, res) => {
  const todos = await todo.find();
  res.json(todos);
});

app.put("/completed", async (req, res) => {
  const result = updateTodo.safeParse(req.body);
  if (!result.success) {
    return res.status(411).json({ msg: "You send the wrong inputs" });
  }
  await todo.updateOne(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    },
  );
  res.json({
    msg: "Todo marked as completed",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
