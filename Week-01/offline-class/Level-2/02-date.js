// const currentDate = new Date();

// console.log(currentDate.getMonth() + 1);
// console.log(currentDate.getDate());
// console.log(currentDate.getFullYear());

// console.log(
//   currentDate.getHours() +
//     ":" +
//     currentDate.getMinutes() +
//     ":" +
//     currentDate.getSeconds()
// );

setInterval(() => {
  console.clear();
  const now = new Date();
  console.log(now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());
}, 1000);
