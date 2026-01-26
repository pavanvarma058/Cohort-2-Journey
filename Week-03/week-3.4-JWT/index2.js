try {
  let a;
  console.log(a.length);
  console.log("This line will not be executed");
} catch (err) {
  console.log("An error occurred: ", err.message);
  console.log("Inside the catch block");
}

console.log("Execution continues after the try-catch block");
