function sides(literals, ...expressions) {
  let [area, perimeter] = [...expressions];
  let formula1 = (perimeter + Math.sqrt(perimeter ** 2 - 16 * area)) / 4;
  let formula2 = (perimeter - Math.sqrt(perimeter ** 2 - 16 * area)) / 4;

  let [s1, s2] = [formula1, formula2];
  console.log(s1, s2);
  return [s1, s2].sort(function (a, b) {
    return a - b;
  });
}

function main() {
  let s1 = 10;
  let s2 = 15;

  [s1, s2] = [s1, s2].sort();

  const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${
    2 * (s1 + s2)
  }.`;

  console.log(s1 === x ? s1 : -1);
  console.log(s2 === y ? s2 : -1);
}
main();
