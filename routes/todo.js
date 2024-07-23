const express = require("express");
const { Todo } = require("../models/todo");
const router = express.Router();

router.get("/", async (req, res) => {
  const todos = await Todo.find().populate("user");
  res.status(200).send(todos);
});

router.post("/", async (req, res) => {
  const { title, user, description, completed } = req.body;
  const todo = await Todo.create({ user, title, description, completed });
  res.status(201).send(todo);
});

module.exports = router;
