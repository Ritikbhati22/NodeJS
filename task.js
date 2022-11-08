const { readFileSync } = require("fs");
let taskUser = () => JSON.parse(readFileSync('task.json'));
module.exports={taskUser};
