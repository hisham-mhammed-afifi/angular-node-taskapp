require("dotenv").config();

const express = require("express");
const connectDB = require("./DB/connect");

const taskRouter = require("./routes/task.routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(taskRouter);

const port = process.env.PORT || 3200;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Listening... `, `http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

start();
