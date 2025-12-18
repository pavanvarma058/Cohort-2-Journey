const fs = require("node:fs");

fs.readFile("notes.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log(data);
});

console.log("This will print before the file content is read.");
