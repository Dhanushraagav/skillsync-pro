const express = require("express");
const Task = require("../models/Task");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

/**
 * CREATE TASK (Protected)
 */
router.post("/tasks", authMiddleware, async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: "All fields required" });
    }

    const task = new Task({
      title,
      description,
      postedBy: req.user.userId
    });

    await task.save();

    res.status(201).json({
      message: "Task created successfully",
      taskId: task._id
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * GET ALL TASKS (Public)
 */
router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find().populate("postedBy", "name email");
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
