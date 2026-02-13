const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index");
const jwt = require("jsonwebtoken");
const { JWT_Secret } = require("../config.js");
const { mongo, default: mongoose } = require("mongoose");
// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  await User.create({ username, password });
  res.json({ message: "User created successfully" });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const user = await User.findOne({
    username,
    password,
  });
  if (user) {
    const token = jwt.sign({ username }, JWT_Secret, { expiresIn: "1h" });
    res.json({ message: "User signed in successfully", token });
  } else {
    res.status(411).json({ message: "Invalid username or password" });
  }
});

router.get("/courses", userMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const response = await Course.find({});
  res.json({
    courses: response,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const username = req.username;
  const courseId = req.params.courseId;
  const courseObjectId = new mongoose.Types.ObjectId(courseId);
  await User.updateOne(
    {
      username: username,
    },
    {
      $push: {
        purchasedCourses: courseObjectId,
      },
    },
  );
  res.json({
    message: "Course purchased successfully",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({
    username: req.username,
  });
  const courses = await Course.find({
    _id: { $in: user.purchasedCourses },
  });
  res.json({
    purchasedCourses: courses,
  });
});

module.exports = router;
