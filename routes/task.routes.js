const express = require("express");
const {
  addTask,
  allTasks,
  singleTask,
  updateTask,
  deleteTask,
} = require("../controllers/task.controller");

const router = express.Router();

router.post("/", addTask);
router.get("/", allTasks);
router.get("/:id", singleTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
