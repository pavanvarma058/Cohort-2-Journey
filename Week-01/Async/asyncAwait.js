// Async Await Example

function asyncFn() {
  let p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved after 2 seconds");
    }, 2000);
  });
  return p;
}

async function callPromiseFn() {
  console.log("Calling the async function");
  let res = await asyncFn();
  console.log(res);
  console.log("Async function call completed");
}

callPromiseFn();
