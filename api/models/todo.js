const { Schema, model } = require("mongoose");
const todoSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  completed: { type: Boolean, default: false },
  user: { type: Schema.Types.ObjectId, ref: "user", required: true },
});

const Todo = model("todo", todoSchema);

module.exports = { Todo };
