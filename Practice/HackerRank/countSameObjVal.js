function getCount(objects) {
  let count = 0;
  objects.forEach((element) => {
    if (element.x === element.y) {
      count += 1;
    }
  });
  return count;
}

function main() {
  const n = +readLine();
  let objects = [];

  for (let i = 0; i < n; i++) {
    const [a, b] = readLine().split(" ");

    objects.push({ x: +a, y: +b });
  }

  console.log(getCount(objects));
}
