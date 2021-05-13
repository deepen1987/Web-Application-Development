// rest operator

// function cart(discount, ...prices) {
//   const total = prices.reduce(
//     (accumalator, currentValue) => accumalator + currentValue
//   );
//   return total * (1 - discount);
// }

// console.log(cart(0.1, 20, 30));

// let a = {
//   title: "a",
//   tags: ["a", "b", "c"],
//   showtag() {
//     this.tags.forEach((element) => {
//       console.log(this.title, element);
//     });
//   },
// };

// a.showtag();

//Variable Sum
// function sum(...items) {
//   if (items.length === 1 && Array.isArray(items[0])) items = [...items[0]];
//   return items.reduce((a, b) => a + b);
// }

// console.log(sum(1, 2, 3, 5));

// area of circle using get
// const circle = {
//   radius: 2,
//   get area() {
//     return Math.PI * this.radius ** 2;
//   },
// };

// circle.radius = 4;
// circle.area = 22;
// console.log(circle.area);

try {
  const numbers = [1, 2, 3, 4, 1];
  const count = countOccurance(null, 1);
  console.log(count);
} catch (e) {
  console.log(e.message);
}

function countOccurance(array, searchElement) {
  if (!Array.isArray(array)) throw new Error("Invalid array");
  let count = 0;
  //   array.forEach((element) => {
  //     if (element === searchElement) count += 1;
  //   });

  count = array.reduce((accumalator, currenValue) => {
    if (currenValue === searchElement) {
      return (accumalator += 1);
    } else return accumalator;
  }, 0);
  return count;
}
