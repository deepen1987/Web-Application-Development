function factorial(n) {
  let a = 1;
  for (let index = n; index > 0; index--) {
    a *= index;
  }
  return a;
}

console.log(factorial(4));
