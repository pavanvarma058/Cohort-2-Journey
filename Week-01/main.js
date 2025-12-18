// callback function example
function sum(num1, num2, fnToCall) {
  let ans = num1 + num2;
  fnToCall(ans);
}

function displayResult(data) {
  console.log("Result of the sum is: " + data);
}

sum(5, 10, displayResult);
