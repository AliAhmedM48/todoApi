const express = require("express");
const { User } = require("../models/user");
const router = express.Router();

router.get("/", async (req, res) => {
  const users = await User.find();
  res.status(200).send(users);
});

router.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
  }

  const user = new User({ name, email, password });
  await user.save();
  res.status(201).send(user);
});

module.exports = router;
