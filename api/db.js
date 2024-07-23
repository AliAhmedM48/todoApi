const mongoose = require("mongoose");
const dbName = "Ali";

const connectDB = () => {
  // mongodb://localhost:27017/NewDB
  // mongodb://127.0.0.1:27017/NewDB
  mongoose
    .connect(
      // `mongodb+srv://test1:4819Jmf4bbLva5he@newcluster.4rahg9t.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=newCluster`
      `mongodb://127.0.0.1/${dbName}`
    )
    .then(() => {
      console.log("Mongodb connected");
    })
    .catch((err) => console.log("Mongodb connection error: ", err));
};

// connectDB();

module.exports = { connectDB };
// --------------------------------------------------

// const commentSchema = new mongoose.Schema({
//   body: String,
// });

// const Comment = mongoose.model("comment", commentSchema);

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true, trim: true },
//   email: { type: String, default: "EMAIL" },
//   password: String,
//   isEnable: { type: Boolean, default: false },
//   comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "comment" }],
// });

// const User = mongoose.model("user", userSchema);

//#region
// const user1 = new User({
//   name: "Ali",
//   age: "26",
//   email: "ali@gmail",
//   password: "123",
// });

// user1
//   .save()
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
//#endregion

//#region
// Comment.insertMany({ body: "c1" }, { body: "c2" }, { body: "c3" });

// User.insertMany({
//   name: "    Ali 5      ",
//   password: "123",
//   comments: ["669f67bae04c4383806ccdea", "669f67cb436320e485ab869c"],
// })
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
// //#endregion

// User.findById("669f67e3c065f3711e133324")
//   .populate("comments")
//   .then((res) => console.log(res));
