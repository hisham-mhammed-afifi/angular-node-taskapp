const Task = require("../models/Task");

const addTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ msg: "added successfully", data: task });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
const allTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ data: tasks });
  } catch (error) {
    res.status(404).json({ msg: "Not found" });
  }
};
const singleTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ msg: "Not found" });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body);
    if (!task) {
      return res.status(404).json({ msg: "Not found" });
    }
    res.status(200).json({ msg: "updated successfully" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndRemove(req.params.id);
    if (!task) {
      return res.status(404).json({ msg: "Not found" });
    }
    res.status(200).json({ msg: "deleted successfully" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = {
  addTask,
  allTasks,
  singleTask,
  updateTask,
  deleteTask,
};
