// Create an array from an range
// function arrayFromRange(min, max) {
//   let output = [];
//   for (let i = min; i <= max; i++) {
//     output.push(i);
//   }
//   return output.filter((value) => value != 0);
// }

// const numbers = arrayFromRange(-10, 4);
// console.log(numbers);

// check wheater an number is there in a array
// function includes(array, searchNumber) {
//   for (const iterator of array) if (searchNumber === iterator) return true;
//   return false;
// }

// const numbers = [1, 4, 3, 6, -1];
// console.log(includes(numbers, -1));

// removing elements from one array based on another
// const numbers = [1, 2, 4, 3, 1, 2, 1, 5];
// const output = except(numbers, [1, 2]);

// console.log(output);

// function except(array, excluded) {
//   return array.filter((value) => !excluded.includes(value));
// }

// Move array elements based using move function
// const numbers = [1, 2, 3, 4];

// function move(array, index, offset) {
//   const newIndex = index + offset;
//   if (newIndex + 1 > array.length || newIndex < 0 || index + 1 > array.length) {
//     console.error("Invalid Offset");
//   }

//   const output = [...array];
//   const itemOffset = output.splice(index, 1)[0];
//   output.splice(newIndex, 0, itemOffset);
//   return output;
// }

// const output = move(numbers, 1, 2);
// console.log(output);

// const numbers = [1, 2, 3, 4, 1];

// const count = countOccurance(numbers, 1);
// console.log(count);

// function countOccurance(array, searchElement) {
//   let count = 0;
//   //   array.forEach((element) => {
//   //     if (element === searchElement) count += 1;
//   //   });

//   count = array.reduce((accumalator, currenValue) => {
//     if (currenValue === searchElement) {
//       return (accumalator += 1);
//     } else return accumalator;
//   }, 0);
//   return count;
// }

// const numbers = [1, 2, 3, 4, 1, 8];

// const max = getMax(numbers);
// console.log(max);

// function getMax(array) {
//   if (array.length === 0) return undefined;

//   return array.reduce((accumalator, currentValue) =>
//     accumalator < currentValue ? currentValue : accumalator
//   );
// }

const movies = [
  { title: "a", year: 2018, rating: 4.6 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2020, rating: 4.5 },
];

function moviesSort(array) {
  let a = array
    .filter((value) => value.rating > 4 && value.year == 2018)
    .sort((a, b) => b.rating - a.rating)
    .map((value) => value.title);
  return a;
}

console.log(moviesSort(movies));
