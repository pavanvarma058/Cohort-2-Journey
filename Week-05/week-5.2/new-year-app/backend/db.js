import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

export const todo = mongoose.model("Todos", todoSchema);
