const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

const todoRoutes = require("./routes/todo.js");
const userRoutes = require("./routes/user.js");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/todos", todoRoutes);
app.use("/users", userRoutes);

module.exports = { app };
