// Types of functions in JavaScript

// 1. Regular Function
function regularFunction() {
  console.log("This is a regular function.");
}

// 2. Arrow Function
const arrowFunction = () => {
  console.log("This is an arrow function.");
};

// 3. Anonymous Function
const anonymousFunction = function () {
  console.log("This is an anonymous function.");
};

// 4. Named Function Expression
const namedFunctionExpression = function namedFunc() {
  console.log("This is a named function expression.");
};

// 5. Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("This is an immediately invoked function expression (IIFE).");
})();

// Calling the functions to demonstrate their usage
regularFunction();
arrowFunction();
anonymousFunction();
namedFunctionExpression();
