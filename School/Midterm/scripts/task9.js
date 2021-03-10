document.addEventListener("DOMContentLoaded", (event) => {
  let a = [23, 45, 76, 1, 98, 102, 23, 45, 30, 99, 7, 18, 6, 1];
  let b = [];
  for (const iterator of a) {
    if (!b.includes(iterator)) {
      b.push(iterator);
    }
  }
  console.log(b);
});
