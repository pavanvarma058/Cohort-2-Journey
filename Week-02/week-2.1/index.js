function mySetTimeout(duration) {
  let p = new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
  return p;
}

mySetTimeout(2000).then(() => {
  console.log("Promise resolved after 2 seconds");
});
