import express from "express";
import mysql from "mysql";
import dotenv from "dotenv";

import { Task } from "./model/task";

dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(express.json());

//! dataabse connection
export const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  port: PORT,
});

connection.connect((err) => {
  if (!err) {
    console.log("connected to Mysql DB :)");
    app.liste(PORT, () => {
      console.log("listening");
    });
  } else {
    console.log(err.message);
  }
});

//? Routes
//!Create a new task
app.get("/create-task", (req, res) => {
  const {
    title,
    description,
    priority,
    category,
    due_Date,
    completion_Status,
  } = req.body;

  if (
    !title ||
    description ||
    priority ||
    category ||
    due_Date ||
    completion_Status
  ) {
    res.send("Erro empty inputs");
  }
  const task = new Task({
    title: title,
    description: description,
    priority: priority,
    category: category,
    due_Date: due_Date,
    completion_Status: completion_Status,
  });

  await task.save();

  res.send("create");
});

//!Retrieve tasks (with options to filter by category or due date).
app.get("/retrieve-tasks", (req, res) => {
  const { category, due_date } = req.body;
  res.send("retrieve");
});

//!Update existing tasks.
app.patch("/update-task", (req, res) => {
  res.send("update");
});

//!Delete tasks
app.delete("/delete-task"),
  (req, res) => {
    res.send("crdeleteeate");
  };
