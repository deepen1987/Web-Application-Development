function showPrime(limit) {
  for (let index = 2; index <= limit; index++)
    if (isPrime(index)) console.log(index);
}

function isPrime(index) {
  for (let num = 2; num < index; num++) if (index % num === 0) return false;
  return true;
}

showPrime(20);
