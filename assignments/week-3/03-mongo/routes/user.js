const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User } = require("../db/index.js");
const { Course } = require("../db/index.js");
const { mongo, default: mongoose } = require("mongoose");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const { username, password } = req.body;
  await User.create({
    username: username,
    password: password,
  });
  res.json({
    message: "User created successfully",
  });
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const response = await Course.find({});
  res.json({
    courses: response,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const username = req.headers.username;
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
    username: req.headers.username,
  });
  const courses = await Course.find({
    _id: { $in: user.purchasedCourses },
  });
  res.json({
    purchasedCourses: courses,
  });
});

module.exports = router;
