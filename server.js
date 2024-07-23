const { app } = require("./app"); // common js
const { connectDB } = require("./db");
const port = 3000;

// Start server
app.listen(port, () => {
  connectDB();
  console.log(`Server is running on http://localhost:${port}`);
});
