const {taskUser} = require('./task');
const express = require("express");
const app = express();
const port = 3000;
app.listen(port, () => console.log("server is running..."));

app.get("/", (req, res) => {
  res.send(taskUser());
});
