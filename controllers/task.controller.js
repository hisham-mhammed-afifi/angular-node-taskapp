const addTask = async (req, res) => {
  res.send("task added");
};
const allTasks = async (req, res) => {
  res.send("all tasks");
};
const singleTask = async (req, res) => {
  res.send("one task");
};
const updateTask = async (req, res) => {
  res.send("task updated");
};
const deleteTask = async (req, res) => {
  res.send("task deleted");
};

module.exports = {
  addTask,
  allTasks,
  singleTask,
  updateTask,
  deleteTask,
};
