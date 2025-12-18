// Promises in JavaScript provide a way to handle asynchronous operations.
// They represent a value that may be available now, later, or never.
const fs = require("node:fs");

// Creating a Promise to read a file
const readFilePromise = new Promise((resolve, reject) => {
  fs.readFile("notes.txt", "utf-8", (err, data) => {
    if (err) {
      reject("Error reading file: " + err);
    } else {
      resolve(data);
    }
  });
});

// Using the Promise
readFilePromise
  .then((data) => {
    console.log("File content:", data);
  })
  .catch((error) => {
    console.error(error);
  });

console.log("This will print before the file content is read.");
